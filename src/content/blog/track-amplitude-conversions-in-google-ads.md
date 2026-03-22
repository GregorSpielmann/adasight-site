---
title: "Amplitude Google Ads Integration Guide to Track Conversions (2025)"
description: "Master the Amplitude Google Ads integration, track conversions, and filter campaign data in Amplitude with actionable examples."
author: "Adasight Team"
publishDate: 2024-11-16
tags: ["analytics"]
category: "Integration"
readTime: "10 min read"
---

Amplitude and Google Ads integration will help you understand the interaction of users with your app or site after they click your ads. You can track clicks, conversions and user journeys to maximize the return on your investment and know how effective your online marketing campaigns are. This is the action that users are looking to take, such as purchases or signups.

Amplitude's product analytics is one of the most powerful platforms for advertising, while Google Ads offers a robust advertising platform. Together, the two offer a powerful solution for tracking conversions and optimizing advertising campaigns.

This guide was designed for Amplitude customers who wish to take advantage of the Google Ads tracking conversions. We will walk you step-by-step through the integration to ensure you can track Amplitude conversions seamlessly within Google Ads.

‍

## Key Use Cases for Amplitude Google Ads Integration

### Event Tracking to Google Ads:

This use case involves streaming user events, such as clicks or conversions, directly to Google Ads. The integration provides real-time tracking of these interactions, allowing advertisers to refine their strategies and optimize ad placements for improved outcomes.

### Importing Google Ads Data into Amplitude:

This use case takes advantage of Amplitude’s integration with Google Ads to bring in data on ad spend, clicks, and impressions. By streamlining the access to Google Ads metrics within Amplitude’s analytics platform, businesses can track campaign performance, optimize their ad spend, and make data-driven decisions to maximize ROI.

### Cohort Syncing to Google Ads:

By sending behavioral cohorts from Amplitude to Google Ads, advertisers can create more tailored campaigns. This integration allows for direct synchronization of cohorts to the Google Ad network, enabling more precise targeting and campaign optimization based on real-time performance data.

### Better Understanding of the Conversion Journey:

To better understand the conversion journey of users, analyze Amplitude's data on user behavior along with conversion data from Google Ads. This will give you a holistic view of how they behave. Discover which user segments are more likely to convert based on demographics, actions taken within your app or website, and the way they interact with your marketing campaign. Your marketing campaigns can be tailored to the most promising user groups.

## 4 Considerations Before Integrating Amplitude with Google Ads

It's important to have certain things in place before we begin the integration process.

- **Existing Amplitude Account**:

You must have an Amplitude user account with administrative rights, this allows you to configure settings and manage integrations.

- **Existing Google Ads Account**:

A Google Ads account with access to campaign management is needed to manage and create conversions in your ad campaign.

- **Understanding the basics of Google Click IDs (gclid or initial_gclid) and Conversion Tracking:**

This will help you navigate Google Ads settings. In Google Ads, the **Google Click ID (GCLID)** is a unique tag added to the URL when someone clicks on an ad. It plays a key role in pinpointing the campaign and capturing important details linked to that click.

Amplitude captures the initial Google Click Identifier (gclid) as a user property called initial_gclid. This is part of Amplitude's first-touch attribution tracking.

According to the Marketing Analytics SDK documentation, Amplitude sets the following user property one time: initial_gclid

This property captures the initial gclid value when a user first interacts with your product through a Google Ads click. The gclid is a unique identifier that Google uses to track ad clicks and attribute conversions.

- **UTM Tracking**

While not strictly necessary with the Google Ads integration, UTM parameters can still provide additional context and flexibility in your tracking. Amplitude's JavaScript SDK can automatically capture UTM parameters if configured correctly. As mentioned in the [Amplitude community](https://community.amplitude.com/data-instrumentation-57/facebook-google-ads-integration-will-it-dynamically-update-2363), "If the data is transmitted through parameters like UTM captured in the URL (such as utm_id or utm_campaign), then it is possible.

Remember, this guide assumes you possess a basic understanding of both Amplitude and Google Ads functionalities. If you're new to either platform, we recommend exploring their respective resources for a deeper understanding.

Dynamic manual tagging is also a recommended method that combines the benefits of both manual and auto-tagging in digital advertising, particularly within platforms like Google Ads. This approach allows advertisers to append UTM (Urchin Tracking Module) parameters to their URLs dynamically, ensuring consistent and accurate tracking across various analytics tools.

This is the dynamic manual tagging commonly used for Google Ads Campaigns:

{lpurl}?campaignid={campaignid}&adgroupid={adgroupid}&term={keyword}

If this is incorrect, you will identify fields with missing data within Amplitude:

![Traffic by campaign and how to filter by medium using Amplitude](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/673949bb04cea24f6075225f_AD_4nXdcVV3pTogWSYMjiFntkU33mFwg0JYqLDpktPeN5otRBYrkkekWpiISmdbXQFrW_BBuPJopAC6Kvw19tlr4fdMHpvaupImZ8m2lAlefNVe7jUT-Pumu5yU8ssKxeATZvUZFvnFLYQ.png)

![Showing UTM_medium filter without data inside Amplitude Analytics](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/673949bbd2d3bd0a4617ab09_AD_4nXeq55wF9VADeb6stRNMptIQV_x_QiAAoZdh6OAKgJXGatc880LZUA3uNXMPURfyyjRII9_hOh1-FwJN_H_jMrjMge18mGZ8wkmiCPWvkJgoUygXwg91ETBoQVo1LnAB3ADx-D8viA.png)

## Steps to Integrate Amplitude and Google Ads

### A. Set up conversions in Google Ads

#### Access Your Google Ads Account:

- Log in to your Google Ads account.
- Ensure you have the necessary permissions to manage campaigns and conversions.

#### Set Up Conversion Goals in Google Ads

- Navigate to the Goals’ tab on the left side, then stay in the “summary tab”

**Create a New Conversion Action**:

- Click the **+** button to initiate the creation of a new conversion action.

![Google Ads screenshot about how to create a new conversion action](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/673949bb70c197f9a590bac7_AD_4nXczX5KnQuncrwZTQa58iDNHFPemz4PMTbojlb-PUnAZKvVqkgknwipm5EKXme-ZdtjR77pmpOa1khdQxolQbO9lYC-yu2d5mfDtA370Ck7AnRRXZPPXiVfWvxcZfsMCyPRL6J0z_Q.png)

- Choose the appropriate conversion source based on your objectives:some text
**Website**: For tracking actions on your website, such as purchases or form submissions.
- **App**: For tracking app installs or in-app actions.
- **Phone Calls**: For tracking calls from ads or website clicks.
- **Import**: For tracking conversions from other systems.

#### Configure Conversion Settings:

- **Name**: Enter a descriptive name for the conversion action (e.g., "Newsletter Sign-Up" or "Product Purchase").
- **Value**: Decide how to assign a value to each conversion:some text
**Use the same value for each conversion**: Enter a fixed amount.
- **Use different values for each conversion**: Assign dynamic values based on the transaction.
- **Don't use a value for this conversion action**: If the conversion doesn't have a monetary value.

- **Count**: Choose how to count conversions:some text
**Every**: For sales, where each conversion is valuable.
- **One**: For leads, where only one conversion per ad click is valuable.

- **Conversion Window**: Set the time frame to track conversions after an ad interaction.
- **Attribution Model**: Select how credit is assigned for conversions (e.g., Last Click, First Click, Linear).

#### Set Up the Conversion Tracking Tag:

- After configuring the conversion action, you'll be prompted to set up the tracking tag.
- Choose **Google Tag** as the method for implementation.
- You'll receive a **Global Site Tag** (gtag.js) and an **Event Snippet**.

Copy the generated conversion tracking tag snippet carefully or use Google Tag Manager. You'll need to implement this code within your website or app code, ensuring it fires on the desired user action, signifying a conversion (e.g. when a purchase is completed or a form is submitted).

#### Implement the Global Site Tag:

- Place the **Global Site Tag** on every page of your website, ideally within the <head> section of the HTML.
- This tag enables Google Ads to track user interactions across your site.

#### Implement the Event Snippet:

- Place the **Event Snippet** on the specific page where the conversion occurs (e.g., a "Thank You" page after a purchase).
- This snippet records the actual conversion event.

#### Verify the Tag Implementation:

- Use the **Tag Assistant** Chrome extension or the **Google Tag Assistant** feature in Google Ads to verify that the tags are firing correctly.
- Ensure that the conversion action is being tracked as intended.

‍

‍

### B. Enable Google Ads event streaming in Amplitude

- **Log in** to your Amplitude Account
- **Select the Amplitude Data tab on the left side of the panel, **go to Catalog and select the Destinations tab

![Amplitude Analytics Integration Catalog highlighting Google Ads Options](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/673949bb38958256e21c90da_AD_4nXc66cRSfTTwE4xMqmPwNmve8zi7zutrWrDWao9LmT4DIf5tYGy4szsT69ufoDeQfbN8e0xFQpFh99A5whZ9kbHQjNnSzxMXS50gDMwCkLM_WQ_zTFtsr2HMbEXvTtVjpLcV0YJU_g.png)

- **Select the Google Ads Integration you require:** Click the Google Ads integration you need.

![Amplitude Analytics option to add data destination](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/673949bb53821f6427872f01_AD_4nXe3w_k7vcIOfyoMRbcFXtrog8CihFLZ1K1-EnpCqZ27Pftl5Al8TPBc8iTGKgW3wnjObU7pPUKz8HjrKYVmgCEeIqUBn3ESlLkunifcU-SY4EPX55XzluzHg-OnfdoBzsS6Lu-I2w.png)

- **Click on Add Destination**

- **Configure the Settings:**

- Enable the integration
- Upload a Google Cloud Service Account
- Enter the Google Cloud Service Account User Email
- Provide the Google Ads Customer ID
- Enter the Google Ads Conversion Action ID
- Enable "Send Events" and select which events to send
- Map the gclid Amplitude property to the GCLID property in Google Ads

#### Select Amplitude Events to Track as Conversions:

- In the **Configure Conversions** section, you'll see a list of events tracked by Amplitude.
- Choose the specific event that represents the desired user action, such as "Purchase Completed" or "Order Confirmed."

#### Map the Event to a Google Ads Conversion Action:

- After selecting the relevant Amplitude event, associate it with the corresponding Google Ads conversion action you created earlier.
- This mapping ensures that when the chosen Amplitude event occurs, it triggers the specified Google Ads conversion action.

‍

- **Once configured, click the "Test Connection" **button to confirm successful communication between both platforms.

Please consult the Amplitude documentation if you have any problems during this step. It contains detailed instructions and troubleshooting advice.

## ‍

## Troubleshooting Amplitude and Google Ads Integration

Encountering minor issues during the integration process is completely normal. Here are some common troubleshooting tips:

- Double-check your Google Ads customer ID and conversion tracking tag implementation. Ensure you entered the correct ID in Amplitude and properly implemented the generated tag within your website or app.
- Verify Google Click ID (gclid/initial_gclid) setup in your website or app. Proper setup is crucial for linking user clicks in Google Ads to corresponding user actions in Amplitude.
- Consult the support resources provided by both Amplitude and Google Ads. Both platforms offer extensive documentation and support channels to assist you with any challenges you may encounter.

‍

![Amplitude Analytics destination settings for Google Ads ](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67394b7a73b190ea1eb2fd9c_67394b1f53821f642787cf0a_Captura%2520de%2520pantalla%25202024-11-16%2520204614.png)

*Source*

‍

## Review your Google Ads Data in Amplitude

After successfully integrating Amplitude Ads with Google Ads and mapping your desired events, you can now leverage this powerful combination in order to gain deeper insight into your marketing efforts.

Integrating Google Ads with Amplitude empowers you to gain comprehensive insights into your advertising campaigns and their impact on user behavior. To effectively analyze and optimize your Google Ads efforts using Amplitude, consider the following strategies:

### Examples for Maximizing Google Ads Data Analysis in Amplitude

**Optimize Conversions with Amplitude’s Event Tracking**

Set up conversion events in Amplitude to track key user actions that align with your goals. Use this data to identify drop-offs in the user journey, pinpoint conversion bottlenecks, and optimize your campaigns for higher conversions.

**Combine Paid and Organic Traffic for Holistic Insights
**Integrate data from both paid and organic channels to get a comprehensive view of performance. This approach allows you to uncover trends and areas for optimization.

**Segment Metrics by Channel for Deeper Insights
**Break down core metrics by individual channels to understand each channel's specific contribution to your marketing goals, helping you make more targeted adjustments.

**Evaluate Campaigns Within Channels to Pinpoint Successes
**Assess the performance of specific campaigns within each channel. This lets you identify winning strategies and highlight areas that need improvement for better campaign outcomes.

**Leverage Attribution Models for Clearer Funnel Insights
**Use attribution models to understand how different touchpoints contribute to conversions. This gives you a more precise view of your marketing funnel, enabling better decision-making.

**Leverage Cohorts for In-Depth Behavioral Analysis
**Create user cohorts from those interacting with your Google Ads campaigns. This allows you to track and analyze their behavior, helping to refine targeting and optimize engagement.

**Refine Tracking with UTM Parameters for Precision
**Utilize UTM parameters like utm_campaign, utm_source, and utm_medium to filter users based on their interaction with specific Google Ads campaigns. This level of precision ensures that you can trace and analyze campaign performance down to the finest details.

## Conclusion

Integrating Amplitude successfully with Google Ads allows you to gain valuable insights into the user's behavior and campaign performance. Follow the steps outlined here to connect these platforms seamlessly.

You can map your important events and gain a thorough understanding of how your users interact with your offering. Keep in mind that continuous exploration and optimization are key to maximizing the return from your marketing efforts. Amplitude Ads combined with Google Ads will help you refine your campaigns to drive user engagement and achieve outstanding results.

## FAQs:

### How to attribute conversions from Google Ads in Amplitude accurately?

To accurately attribute conversions from Google Ads to Amplitude, ensure that conversion tracking IDs from Google Ads are correctly integrated and mapped with corresponding events in Amplitude, using UTM parameters for detailed tracking.

### Can this integration track the effectiveness of specific ad campaigns or keywords within Google Ads?

Yes, the integration can track the effectiveness of specific ad campaigns or keywords by analyzing conversion events in Amplitude, attributed to the unique identifiers from Google Ads campaigns or keywords.

### What are the best practices for setting up conversion tracking to ensure data accuracy and privacy compliance?

Best practices include ensuring clear naming conventions for events and UTM parameters, regularly testing and validating data flow, and adhering to privacy laws by anonymizing user data and securing user consent for tracking.
