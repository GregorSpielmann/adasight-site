---
title: "How Amplitude Generates Device Type and Device Family User Property Values"
description: "Amplitude is a powerful analytics tool that helps businesses understand their users better. One of its key features is the ability to capture and analyze variou"
author: "Adasight Team"
publishDate: 2024-06-01
tags: ["Amplitude", "user properties", "device tracking", "analytics", "data collection"]
category: "Analytics"
readTime: "8 min read"
---

Discover how Amplitude generates Device Type and Device Family user properties.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6717b3958f6fed5e0c184e49_unnamed%20(5).png)

## Introduction

Amplitude is a powerful analytics tool that helps businesses understand their users better. One of its key features is the ability to capture and analyze various user properties, such as *Device Type* and *Device Family*. These properties are essential for gaining insights into user behavior across different devices.

To make the most of Amplitude's capabilities, it's important to understand how it generates these values. This knowledge will enable businesses to tailor their strategies based on specific device characteristics, ultimately improving the user experience.

In this article, we will explore how Amplitude generates Device Type and Device Family values. We'll discuss why these properties are significant and how they can inform data-driven decision-making.

## Understanding User Properties in Amplitude

### Defining User Properties

In Amplitude, **user properties** are attributes associated with individual users that help businesses understand user behavior and segment their audience effectively. These properties can include details such as device type, location, and operating system. By leveraging these attributes, businesses can create more personalized experiences and conduct deeper analyses of user interactions.

### Automatic Tracking with Client-Side SDKs

Amplitude simplifies the process of capturing user properties through its various **client-side SDKs**, including those for Browser, iOS, and Android. These SDKs automatically track relevant user information without requiring manual intervention.

- **Browser SDK:** Captures device properties when users interact with web applications.
- **iOS SDK:** Gathers data from users on Apple devices, including model and OS version.
- **Android SDK:** Collects information from users on Android devices, including brand and manufacturer details.

By automatically collecting this data, Amplitude ensures that businesses have immediate access to accurate and up-to-date user attributes, which is crucial for real-time analytics and decision-making.

This automated mechanism eliminates the need for additional implementation efforts, allowing companies to focus on analyzing data rather than gathering it.

## Exploring Different Types of User Properties

User properties in Amplitude fall into two main categories: **default properties** and **custom properties**.

### Default Properties

Default properties are automatically tracked by Amplitude's SDKs. These include:

- **Platform**: Identifies the operating system, such as iOS, Android, or Web.
- **Device Type**: Specifies the type of device, such as a phone or tablet.

These properties require no manual setup and provide immediate insights into user demographics and behaviors.

### Custom Properties

Custom properties allow businesses to define attributes relevant to their specific use cases. Examples include:

- **Subscription Status**: Tracks whether a user has an active subscription.
- **User Role**: Identifies different user roles like admin or guest.

By leveraging both default and custom properties, businesses can fine-tune their analytics for more precise targeting and segmentation.

## The Importance of Device Type and Device Family in Amplitude Analytics

**Device Type** and **Device Family** are important user property values that Amplitude's SDKs capture when tracking events. These properties give us insights into the specific features of the devices our audience uses.

### Understanding Device Type and Device Family

- **Device Type**: This refers to the broad category of a device, such as *smartphone*, *tablet*, or *desktop*. Knowing the device type helps us understand the general shape and capabilities of the devices being used.
- **Device Family**: This goes a step further by specifying the exact make and model of the device, like *iPhone* or *Samsung Galaxy*. This information is based on raw data about the device, including its brand, manufacturer, and model.

### How Businesses Benefit from Device Insights

The ability to segment audiences based on these properties allows businesses to tailor their strategies effectively:

1. **Behavioral Insights**: By analyzing how different segments interact with your product across various devices, you can identify patterns and optimize user experiences.
2. **Targeted Marketing**: Understanding which Device Types and Families are prevalent among your users helps in designing targeted marketing campaigns.
3. **Product Development**: Insights from Device Type and Family data guide product development efforts, ensuring compatibility and performance across key devices.

Amplitude generates these user property values from raw device information captured by its SDKs. This process ensures that each event is enriched with precise device characteristics, enhancing the accuracy of your analytics.

## How Amplitude Determines Device Type and Device Family Values from Raw Data

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66e0550220a52f3380aa570e_433ccd31-6883-4a28-82f4-1d114cbc0396.png)

Amplitude's event tracking process involves analyzing raw device information to extract meaningful values such as 'iPhone' or 'Android Phone' for each event received. The system captures details like: device model, manufacturer, and brand. These details are then mapped to a predefined set of device types and families, allowing for consistent segmentation and analysis. The mapping process is regularly updated to accommodate new devices in the market.

- **Platform:** iOS, Android, etc.
- **OS Name and Version:** Specific operating system details
- **Device Brand:** Apple, Samsung, etc.
- **Device Manufacturer and Model**

From these raw data points, Amplitude's systems map the device model and manufacturer to predefined categories of *Device Type* and *Device Family*. This mapping ensures that every event is associated with accurate device characteristics.

**Maintaining data integrity** over time is critical. Amplitude employs mechanisms to update user property values based on changes in users' devices or OS versions. These updates ensure the consistency and reliability of analytics data. For instance, if a user switches from an older Android phone to a new one, Amplitude will recognize this change and update the *Device Type* and *Device Family* accordingly.

To handle data persistence, user properties are sent with every event, maintaining historical data integrity. Updates to these values apply to future events until a new update is made. This systematic approach allows businesses to track user behavior accurately across different devices over time, providing valuable insights for segmentation and analysis.

## Common Challenges in Generating Accurate Device Type and Device Family Values with Amplitude

Several challenges can arise during the value generation process for Device Type and Device Family in Amplitude:

### 1. Null Values

One common issue is the occurrence of null values. When there is insufficient data to determine either property, Amplitude cannot assign a meaningful value, resulting in null entries. This often happens if crucial device information like model or manufacturer is missing from the captured data.

### 2. New Android Devices

Newer Android devices present another challenge. Due to changing manufacturer practices and restrictions on retrieving certain device details, Amplitude may not have up-to-date mappings for these devices. This lack of information impacts the accuracy and completeness of Device Type and Device Family values.

Understanding these issues is essential for maintaining data integrity and ensuring accurate audience segmentation based on device characteristics.

## Best Practices for Ensuring Robustness in Device Type and Device Family Generation Using Amplitude

Implementing effective strategies can help businesses minimize occurrences of missing or inaccurate property values when using Amplitude for event tracking. Here are some practical approaches:

### 1. Ensure Comprehensive Event Tracking

Verify that all relevant events include necessary device information. This practice enhances the accuracy of device type and family identification.

### 2. Regularly Update SDKs

Keep the Amplitude SDKs up to date to benefit from the latest improvements and fixes related to device information parsing.

### 3. Maintain Up-to-Date Mappings

Regularly update mappings between raw device strings received from clients' requests (e.g., via Identify API calls) and their corresponding types/families. Reference industry standards such as Google Play Store listings to ensure accuracy.

### 4. Validate Data Consistency

Implement data validation checks to ensure that device-related properties are consistently updated together. This reduces the risk of null values arising from incomplete updates.

### 5. Leverage Server-Side Updates

Use server-side data and the Identify API to explicitly set user properties, ensuring more reliable and controlled updates.

By following these best practices, businesses can enhance the robustness of device type and family generation, leading to more accurate analytics and insights.

## Conclusion

Understanding how Amplitude generates Device Type and Device Family user property values is just the beginning. Actively utilize this knowledge to refine your analytics strategies. Strive to build comprehensive datasets through consistent application-level instrumentation and ongoing monitoring.

Start experimenting with Amplitude's capabilities now. Unlock deeper insights into user behavior across different devices.

**Reference:** Amplitude. (2021, February 17). [Amplitude] Device Type and Device Family fields | Community. https://community.amplitude.com/data-instrumentation-57/amplitude-device-type-and-device-family-fields-129

## FAQs (Frequently Asked Questions)

**What are user properties in Amplitude?**

User properties in Amplitude are attributes associated with users that help businesses understand their audience better. They can be categorized into default properties, which are automatically tracked by Amplitude, and custom properties, which allow businesses to define attributes relevant to their specific needs.

**Why are Device Type and Device Family important in Amplitude analytics?**

Device Type and Device Family are crucial user property values as they enable businesses to segment audiences based on the devices their users are utilizing. This segmentation provides insights into user behavior and preferences, helping businesses tailor their strategies effectively.

**How does Amplitude determine Device Type and Device Family values?**

Amplitude determines Device Type and Device Family values by analyzing raw data collected during event tracking. The process involves examining device information from events to categorize devices accurately.

**What common challenges can occur when generating Device Type and Device Family values?**

Common challenges include the occurrence of null values when device information is missing, and difficulties arising from new Android devices due to changes in naming conventions or specifications that may not be recognized immediately.

**What best practices can ensure robustness in generating Device Type and Device Family values using Amplitude?**

Best practices include ensuring comprehensive event tracking that captures necessary device information, regularly updating SDKs to benefit from the latest features, maintaining up-to-date mappings between raw device strings and known types, validating data consistency through checks, and leveraging server-side updates via the Identify API for explicit settings.
