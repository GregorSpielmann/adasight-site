---
title: "How to Integrate Amplitude with React Native: SDK Troubleshooting"
description: "A step-by-step guide to integrating Amplitude with React Native, tracking key user events, and troubleshooting common SDK issues."
author: "Adasight Team"
publishDate: 2024-01-01
tags: ["analytics"]
category: "Implementation"
readTime: "12 min read"
---

At some point in the development of your app (hopefully as early as possible), analytics will help you understand how users engage with your product. Data provides valuable insight to drive product development and help you make informed decisions.

Amplitude is a powerful analytics platform that helps measure and optimize your application by tracking user interactions. It shows what features your customers use, where they might get stuck, and what keeps them coming back.

In this article, we’ll guide you through integrating Amplitude with a React Native application. React Native allows you to build mobile apps using JavaScript and React; with Amplitude, you can add analytics to track real-time user behavior, set up targeted A/B testing, and much more.

By the end of this article, you’ll learn:

- How to install and configure Amplitude in your React Native project
- Methods for tracking key user events and actions within your app
- Tips for leveraging the data collected by Amplitude to improve user experience

Let’s get started!

## What is Amplitude?

Amplitude is a product analytics platform that allows organizations to track user interaction with their digital products, analyze data, and glean actionable insights to drive growth.

Some of its core features include:

- **Event tracking: **Amplitude records user actions in an application, defining them as “events.” This can include anything from logging in to making a purchase or sharing content.
- **Real-time analytics: **The platform updates in real-time, allowing product teams to see immediate user interaction patterns and make timely decisions.
- **User segmentation:** Users can be categorized based on behavior, demographics, or other custom attributes. This helps deliver targeted content or features.
- **Retention analysis:** Amplitude evaluates how often and why users return to an app, helping to pinpoint features that drive retention (and those that may require improvement).
- **Funnel analysis:** By analyzing where users drop off during a process or conversion path, teams can identify and rectify barriers to user completion or conversion.

It also helps with cohort analysis, revenue tracking, and A/B testing, making Amplitude a comprehensive platform for all your data analytics needs.

‍

## Why is Using Amplitude with React Native important?

By integrating Amplitude into your React Native apps, you capitalize on some significant advantages.

### User behavior analytics:

It allows you to understand how users interact with your React Native app across various touchpoints and platforms. This insight is crucial for making data-driven decisions to improve your app's user experience and performance React Native SDK.

### Cross-platform tracking:

The React Native SDK enables you to track user events consistently across both iOS and Android platforms from a single codebase. This ensures you get a unified view of your app's performance and user behavior React Native SDK.

### Event tracking:

By implementing Amplitude in your React Native app, you can easily track specific events that are important to your business goals. This could include button clicks, page views, user sign-ups, or any custom events relevant to your app SDK Quickstart.

### User identification:

The SDK allows you to identify users and set user properties. This is crucial for understanding individual user journeys and segmenting your user base for more targeted analysis SDK Quickstart.

### Integration with other tools:

Amplitude can be integrated with various other tools in your tech stack, allowing for a more comprehensive view of your app's performance and user behavior Ampli for the React Native SDK.

### Data-driven decision making:

The insights gained from Amplitude can help you make informed decisions about feature development, user experience improvements, and overall app strategy.

### Feature Flagging and A/B Testing:

Companies that want to implement feature flagging and A/B testing in their React Native apps should invest in this Amplitude integration, as it offers these capabilities through the [Experiment React Native SDK.](https://amplitude.com/docs/sdks/experiment-sdks/experiment-react-native)

### Real-Time Analytics:

If you need to send events in real-time as users interact with your app, the SDK provides this functionality out of the box, allowing for immediate data collection and analysis in React Native.

‍

## How To Use Amplitude With React Native

Integrating Amplitude into your React Native application is relatively straightforward and can unlock valuable insights. Here are the steps to follow:

### Setting Up Your React Native Project

Before integrating Amplitude into your mobile app, you need a React Native project. If you are beginning a new project, first set up the development environment. Install:

- Node.js
- React Native command-line interface (CLI)
- A JDK
- Android Studio (for Android development) or Xcode (for iOS)

Then open a terminal and run this command:

![React code to setup your React Native Project](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609783714c634641525_rDTcr1uKXMMUxITF-KRASUX-0Qrnwknq2smFO8qhTOOwLpVAQ2oM5qasxzZvREjc-EXJKQLVZUBQu8TUl2vonRKfU-NcyVYVZSffgOsHd19Sps0D2d3jkdESlB_RXei810lVP_4s8uDthDcUP5E7umw.png)

[Source for embed](https://www.thiscodeworks.com/initialize-react-native-project/65c3b94ded5ab20014d25339)

Replace the ‘ProjectName’ with the desired name of your app. If you are going to integrate Amplitude into an existing project, make sure to:

- Run the latest React Native version
- Resolve any outstanding dependencies
- Clean the build folders

Once your React Native project is in good shape, you’re ready to add Amplitude.

## Installing Amplitude SDK

Integrating Amplitude into your React Native project requires adding the Amplitude SDK, which lets your app communicate with Amplitude’s services. Here’s how:

### Using npm

If you prefer to use npm (Node Package Manager), you can install the Amplitude SDK with the following command:

![Installing Amplitude SDK code](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609e5ec816eca785623_WQ3c7Upo0i950drbsfZenC5RAXizCziJztipS0JLFmofCQ7JztEQnT8zD2mNBwbvrKnDPvWCYHfcvajvhhpIeLzOXPKH4T4i8RHpziwTXkC1J2VGeI1FDw8EXWdiELaW6hwrhqvdf9nPECoe--i0cz4.png)

[Source for embed](https://www.thiscodeworks.com/install-amplitude-sdk/65c3bdbced5ab20014d25ff3)

You will also need to install the async storage for the SDK to work properly. That can be done with this command:

![React Native code: async storage](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609322a2590a48e35e6_gpOl9YRD-jCvJPgO6RaFFPC8yHZ8ONmeoxiyh653x7h7Unj2IXjb-RmZrGP33jUfyo2pUpE6M_mqWfucsoinSu60f9hyptVqHEncHE9K_ZYkxDkVqVLhFxgEDjfZnLh1eJq1e-32bJuhJxDCyihh9sw.png)

[Source for embed](https://www.thiscodeworks.com/install-amplitude-async-storage/65c3be4aed5ab20014d2614c)

For iOS development, you’ll also need to install the native modules:

![iOS development for native modules](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609fbea89d14daaefd5_QmfpXaqGE52T9YAgZYa5p1VNzt9QOs6UA46h7ZcHSNkToJAxtt11GOpzrPsFFezsoITt-JoBtqs-8D8fA5KE09SIvZzvPPAG-s9IUt4YutTFDFMPQ-WUgXaLSXkhBmVqbZodZFHFdj_L4VbkstKdq08.png)

[Source for embed](https://www.thiscodeworks.com/install-native-modules-for-ios/65c3becfed5ab20014d2625c)

### Using yarn or expo

Alternatively, if you’re using yarn or expo as your package manager, you can install the SDK with these commands:

![React Native code for Amplitude](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb260942fbf3241265dd52_NYpFbDRv1hbQvrXOWoBEEERRPQN3b705E5ebIkacOkHU4lWC7T3G6tw6cOLfGqJOWUu4EKwTeMcp0IXh-8gapJM_URM7O1bOVrY9akuh-Q6JmfnFS9N7l20V3D3RRhURJ90tHpD4qa_M7fNF5OQb6M4.png)

[Source for embed](https://www.thiscodeworks.com/install-amplitude-with-yarn/65c3bf18ed5ab20014d262fc)

![Expo install code for Amplitude with React Native](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609df0aa1ab2f756870_1KPEtcoHLkRR4Tcpc8Vw2AbW16Vmrlt_qgW0Zv5FDijjPBpcw7AIxlj7RZvNZxNzDrjGbERALns-zT2r_C90Z9JEWh08xjVYN5tTB0kEA1T3LxGegPbaYlTrYscQJ2wC6HrXYWkrcb5upsWxGQkVmUM.png)

[Source for embed](https://www.thiscodeworks.com/install-amplitude-sdk-with-expo/65c3bf56ed5ab20014d2636c)

These commands will add the Amplitude SDK to your project’s ‘node_modules’ directory and update the ‘package.json’ file to include the dependency.

## Initializing Amplitude with React Native

Once the Amplitude SDK is installed in your React Native project, the next step is to initialize it with your unique Amplitude API key. This key connects events tracked from your app to the correct Amplitude project.

### Locating Your Amplitude API Key

You can find your API key in the Amplitude dashboard.

- Log into your Amplitude account.
- Navigate to the settings page by clicking the gear icon in the top-right corner.
- Click ‘Organization Settings’ then ‘Projects’ and select the project you want to integrate.
- Open the ‘General’ tab with the API key marked.

Only admins and managers will see the API key, so ensure you have the right permissions.

### Adding the Initializing Code

You'll typically want to initialize Amplitude as soon as your app starts up. You can also pass a user ID and config object during this call. Here are three examples:

![Code to initialize Amplitude in React Native](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609017d2cf69c5946b2_EaBXSwfhtIY9R1qPQ_nyT8PvdaR1r7wN_JphKJHShRwPzjuRu_DareSbKJ_k_YRiw8OnC_kjl5ssvPJpw0RJf4rSwVwZHjynDvggeZk5qXXfB97sr9mNEK_rLLVBaDlPNZ7ypWZeX_aLLlfMgqx26es.png)

[Source for embed](https://www.thiscodeworks.com/initialize-amplitude-sdk-api-key-only/65c3c308ed5ab20014d26ec4)

![Code to initialize Amplitude in React Native](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609d983a59726ba1a1c_Euy5PRpmAnibWDEuidY_FunMdFBAZv7aP8xtIMyOlFQvn1TlpvN2G9sV7fugcTB0uygO4wSaQNTRy7ABZ_o3md3pqsT4SyPJgvaFQEWUAjwOzHeqaRjT1lbIVyH_GsHu4DDWPoODco8T501bwgP05GM.png)

[Source for embed](https://www.thiscodeworks.com/initialize-amplitude-sdk-api-key-and-user-id/65c3c353ed5ab20014d26fdc)

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609212cee6986852b7d_dLKt3h7sJUS--luwU4Ilu881_WBiagv941JrFbxYK7g_Ou-ba-kc55zTMGYRI4UpxX_E1mcgNGrGoZbAKky4auLS2s2xcTiyk6gQCacdl01I3CFnrlGWD6PdjlmvZ0FAA8Q1lDzbeXrOcIx6qc0nPnY.png)

[Source for embed](https://www.thiscodeworks.com/initialize-amplitude-sdk-api-key-user-id-and-config/65c3c3a1ed5ab20014d270eb)

Remember to replace “API_KEY” with the actual key you obtained from the Amplitude dashboard. Keep it secure and avoid committing it directly to your version control system.

## Event Tracking in Amplitude with React Native

With Amplitude initialized in your React Native application, you can now begin to track events. Events are the core of Amplitude’s analytics and represent any action a user might perform.

This could be anything from opening the app, clicking a button, completing a level, or making a purchase.

To track an event, you’ll use the instance of Amplitude you set up and code like this:

![Code to Tracking Amplitude events in React Native](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb2609c7c2f8c404076d16_k7Iln63Io8QkKugKawuIxqNv3rfMLwUgxJwX32WQmHso9T4vnmJPb2iMThHIIrUV51IS3-AD9Eszmupl0dFs6tIl9jX3QlxPbEcO7947-QRBpOyKf1Qo7Ukdw_-wFHHWE7rIuJ8PLRuewUQRXFE0VFo.png)

[Source for embed](https://www.thiscodeworks.com/tracking-an-event-in-amplitude/65c3c530ed5ab20014d27792)

Make sure that the string you use to identify the event (‘Button Clicked’ in this case) is descriptive enough to make sense when analyzing the data later. Keeping consistent naming conventions is crucial for interpreting your event data accurately.

### Tracking User Properties Using React Native

Sometimes, events themselves don’t tell the whole story and need additional context to be useful. Amplitude allows you to add extra data points, known as user properties, to give more detail into the circumstances under which an event was triggered.

The ‘Identify’ object is used to control user properties, and the SDK supports the operations:

- set
- set0nce
- unset
- add
- append
- prepend
- preInsert
- postInsert
- remove

An example of tracking user properties might look something like this:

![Code to Track User Properties using React Native for Amplitude](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb26092f4c6f34c8711593_L4FDSeEzzFR2qCeTROOiPYyMxujtRjM4GUq47q4Upq6qhwmu9yxM77M6QmaSiny9ni3NRfjrQrWjqv4ykku5kviryTSVcKbN9yFIupqP846q5QotJ-gaVhwXx6ZyClL2RdEEyPJyw5v4h0xJVXGV4b4.png)

[Source for embed](https://www.thiscodeworks.com/tracking-user-properties-with-amplitude/65c3cae8ed5ab20014d28479)

You can chain multiple operations into a single object, which is then passed to the Amplitude client.

## Analyzing Data in Amplitude

Tracking data isn’t very useful without thorough analysis. The Amplitude dashboard can be set up to display your most-used metrics or dig into granular details about your user base.

On the dashboard, you can create charts for:

- User and event segments
- Conversion funnels
- Retention metrics
- User journeys

Or a more comprehensive data table that compares and breaks down multiple metrics. Create user personas, view the stickiness of new features, or get a high-level revenue breakdown for long-term planning.

There are also templates available for several different use cases:

- **Funnel analysis: **Used to understand drop-off points
- **Feature adoption: **Measuring the impact of a feature on various metrics.
- **Product KPIs:** Overall health of your product.
- **Session engagement:** A detailed look at how users interact with your app.
- **Marketing analytics:** Reports on bounce rates, conversion paths, and web traffic.
- **User activity: **View active and unique user rates to see product and feature adoption.

Regularly reviewing and acting upon the data is key to maintaining a user-centric approach and fostering a successful app lifecycle.

## Troubleshooting Common Issues with Amplitude and React Native

While Amplitude is designed to be as straightforward as possible to integrate with React Native, developers may occasionally encounter issues. Here's how to troubleshoot some of the most common problems you might face during the setup and use of Amplitude in your React Native project.

### SDK Does Not Install Properly

Run npm install @amplitude/analytics-react-native again to ensure all files were installed correctly. Check your internet connection, as disruptions can sometimes cause package installation to fail.

### Native Dependencies Don’t Link Automatically

For React Native versions prior to 0.60, manually link the Amplitude SDK by running this command line:

![Code to link native dependencies from React Native to Amplitude](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb26099129ed3d0ddbecfb_09J03dsaXBvTVcfPdZYVtv0g_G8jf-CUUUYDQJQo0iBaPNN7wmySn3txKXykVpu7bnwwlM9F__3ZcRbIYkSo_2hJai-rVenS0ibxQMuuQ9xWsPZk09B16Z8NbvJrw2blGgapo6C3KVStJsC3h5NSW-0.png)

[Source for embed](https://www.thiscodeworks.com/manual-link-amplitude-sdk-dependencies/65c3d132ed5ab20014d28c9b)

Make sure to rebuild your project after manually linking dependencies.

### Missing API Key Error

Ensure you have correctly placed your Amplitude API Key in the initialization code. Verify there are no typos in your API Key and that it is current by refreshing your Amplitude dashboard.

### Amplitude Instance Not Recognized

Check if the Amplitude SDK import statement is correct and if the package name matches the one in your ‘node_modules’ folder. Ensure you’ve created the Amplitude instance and called the .init() method at the top level of your app.

### User Properties Not Associating Properly

Ensure you are using the correct ‘Identify’ instance methods (set, add, etc) to define user properties. Double-check that the user properties are being sent before or together with corresponding events.

### Slowdowns or Crashes after SDK Integration

Profile your app’s performance to identify any bottlenecks. React Native’s own profiling tools or Chrome’s DevTools can be helpful. Look for any loops or excessive event tracking causing performance degradation.

## Final Thoughts

Amplitude can empower your React Native apps with robust analytics capabilities, providing deep insights into user behavior and app performance. Follow the steps above to integrate the two and lay the groundwork for a data-driven approach to user engagement and product growth.

Remember, the power of Amplitude isn’t just in measuring what users do but in helping you understand why they do it.

‍
