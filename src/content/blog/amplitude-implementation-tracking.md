---
title: "Top Questions About Amplitude Implementation and Tracking"
description: "Learn the answers to common questions about Amplitude implementation and Amplitude tracking."
author: "Adasight Team"
publishDate: 2024-01-01
tags: ["analytics"]
category: "Implementation"
readTime: "10 min read"
---

We recently held an [engaging online Q&A session](https://amplitude.wistia.com/medias/fne967ks2s) with Gregor Spielmann, a Data Consultant and Co-Founder of Adasight and Senior Customer Success Architect Anuj Sharma from Amplitude. The session addressed many common concerns regarding Amplitude implementation and tracking and was brimming with actionable tips and solutions drawn from real experiences and real experts.

In this blog post, we’re eager to pass along some of the standout insights from our discussion. We’ll cover frequently asked questions from the session, equipping you with the knowledge to avoid typical errors and fine-tune your Amplitude configuration for improved outcomes.

## Dive Into the Essentials: Key Topics from the Amplitude Q&A

During our recent Q&A session, we covered a wide range of topics crucial for mastering Amplitude. Here’s a quick overview of the key areas we discussed:

### Best Practices and Integration

The conversation began with insights into optimal strategies for effective Amplitude implementation. A well-structured Amplitude tracking plan and event classification are foundational elements in this process.

The dialogue also touched on enhancing functionality by linking Amplitude with various platforms, such as customer relationship management systems and marketing tools through direct integrations like HubSpot v2.

### Data Handling and Updates

A significant point of discussion centered around updating Amplitude event properties while preserving historical data integrity.

By applying techniques like Identify API functions or aliasing APIs within Amplitude, you can merge previous user profiles without disrupting past records—ensuring seamless continuity in data evolution.

### Data Management and Modification

A main point of focus was how to adjust Amplitude event properties without sacrificing historical data integrity. By leveraging Amplitude's identify and aliasing APIs, you can merge past and current user profiles.

This process ensures your data remains accurate and reliable. It was also pointed out that when incorporating data from sources like Amplitude Segment integration, maintaining clean inputs through schema settings is essential for consistency.

### User Engagement and Conversion Tracking

There was considerable discussion around whether default page view events suffice or whether custom events are necessary for in-depth Amplitude tracking.

The session provided insights on monitoring user engagement through event segmentation and assessing frequent usage with frequency analysis.

## Unveiling Insights: Your Questions Answered

In our latest Q&A, we tackled the big questions you have about getting the most out of Amplitude.

We've gathered together your burning queries and paired them with clear, informed answers so you can improve your experience with Amplitude's features:

### Q1. What are the best practices for Amplitude implementation?

Effective Amplitude implementation starts with defining your priority use case, like setting product strategy or optimizing conversion.

![Set the direction](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66b71a493f0f7671ef44fa63_66a194aefbb4217d8a5a92b7_Adasight_Define_Priority_Use_Case.jpeg)

Break down the process into manageable chunks, focusing on key events and properties.

![Break down the work into manageable chunks](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66a1911c886cfc652a084d07_AD_4nXeELrCDevNovcGcOZ6p1yWF36pj7BZwtm03sM-ORl3TUUXWmWR-A9kcg9WOoKrlUJWh-dw35SHE_M_gz9tnSOyrw-GJKR9bYvgxv8vJ_JDZ8Fv27ZJZ3nsz4Ufjo9NnXJ9H_CwrBJXbJbl9IgNBHVmTe50n.png)

Use implementation loops to control data and prevent team overwhelm.

![Plan and define the activities after initial implementation](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66a1912f4be21618a260fd75_AD_4nXcS8EYltNolq71RQYyU0rCDJ2_EC9KPEDaGZbbdks4FLVuIcYmeivwLktByNyivzK0FaQmYjkpOAma8aUcMx23AxqCbD7IbTHHhCCdK3COOMTWKY2ily_h86rGMHLurZI-h4VpXbW93UDDQNiJk6v9903Y.png)

Post-implementation, plan activities like data review and ongoing maintenance to ensure continued accuracy and relevance.

### Q2. How do you audit existing Amplitude setups?

To ensure your Amplitude analytics setup is running smoothly, use our [comprehensive Amplitude audit checklist](https://amplitude.wistia.com/medias/fne967ks2s). This checklist covers everything from organization configuration and data sources to tracking plans and data quality.

![A preview of the audit checklist](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66a1914be4ca19bfbbf5ce61_AD_4nXe-jRkDfnFBi5EEa41TRaadGql5tGsJWfJ1KaxOoNwuvf49wZ_FwJZ8CozIkgGeKVZmzACgrRGLvIlWlq-iljYIhOVPveZYOqKYvAZwihT07upSfkdoxelOkfZY9ZRwhqDKZ5bcZxw6iwVJi8GftgilI4hy.png)

Regular audits help identify areas for improvement and ensure data accuracy. Start by validating your event and user properties, reviewing data governance practices, and checking for consistency in event naming.

This thorough approach will help maintain the integrity of your analytics setup.

### Q3. How do I integrate Amplitude with other tools?

Integrating Amplitude with tools like CRM and marketing automation systems enhances your data flow and analytics capabilities.

Start by identifying the key events and properties you need to track and ensure they align with your business goals. Use Amplitude's native integrations and APIs to stream custom events and user properties.

For instance, integrating with HubSpot can help trigger follow-up emails based on user actions tracked in Amplitude.

To get detailed information on how to use Amplitude and integrate it into your current platforms, refer to these documentation sites:

- [Amplitude Source Catalog](https://docs.google.com/spreadsheets/d/1Kr4Th0U1Tstt3urGSvb79cG8pYShJgQgtzQOCgu-euE/edit?gid=0#gid=0)
- [Amplitude Destination Catalog](https://amplitude.com/docs/data/source-catalog)

### Q4. How do I modify existing event properties without losing historical data?

You can use Transformations in Amplitude Data to modify your Amplitude event properties without losing historical data.

This feature allows you to retroactively update your data at query time, ensuring that changes are reflected across all historical records. Additionally, using the identify and alias APIs helps link old and new user profiles seamlessly, preserving data integrity and accuracy.

For detailed guidance, refer to the[Amplitude Transformations Documentation](https://amplitude.com/docs/data/transformations).

### Q5. What are the best practices for integrating data from Segment into Amplitude?

When integrating data from Segment into Amplitude, there are several Amplitude best practices to keep in mind. First, avoid using the old Segment integration; instead, opt for the "Amplitude Actions" destination for more reliable data streaming.

Common Segment mistakes include not seeing parity between the two platforms. This often occurs because definitions for metrics like "user" or "new user" can differ.

Define your own metrics and use those instead of relying on defaults to avoid confusion. Additionally, small discrepancies (tiny deltas) are usually acceptable, but significant differences indicate an issue that needs addressing.

### Q6. What has been your experience working with HubSpot or any CRM-Amplitude integration?

![A preview of the Hubspot integration ](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb28ccc934664e8ca84ca2_hS4lncWcwTzuOdzK2sKqMSOU15f-qRfHrllSDmDAbGpxoH292bIodUDCo1QnRfJ9Qkrwj1GSYJeuKyr7VDZ8WghTSlSE4hZAhBGJPb46eST55hmeW9WlrgMp1RF-li3Crt690zccxanfZSBgpOUGrww.png)

Integrating HubSpot or any CRM with Amplitude can significantly enhance your Amplitude marketing analytics and customer insights. From our experience, setting up the HubSpot v2 integration allows you to stream custom events and user properties seamlessly.

This integration can help trigger automated follow-up actions, such as sending targeted emails based on user behavior tracked in Amplitude.

For a more detailed guide on how to achieve this integration, check out our[Essential Guide to Amplitude-HubSpot Integration](https://amplitude.com/docs/data/transformations).

### Q7. Can I change all user IDs in Amplitude across two projects and merge them into one?

Changing an Amplitude user ID across two different projects and then merging them into one in Amplitude is challenging and should be avoided if possible. If it is unavoidable, you can use the aliasing API to link old and new user profiles.

This process requires meticulous mapping of old and new Amplitude user IDs and careful handling of user properties to avoid data duplication and inconsistencies.

For detailed instructions, refer to the[User Mapping Documentation](https://www.adasight.com/blog/essential-guide-to-amplitude-hubspot-integration).

### Q8. How can I verify what data is showing up incorrectly in Amplitude?

To verify and gather data to identify what might be showing up incorrectly in Amplitude, use the User Lookup feature.

This tool allows you to validate event and user properties by checking individual user data in real-time. Regularly auditing your data and comparing it with expected results can help identify discrepancies early.

For more detailed instructions, refer to the[User Data Lookup Documentation](https://amplitude.com/docs/analytics/user-data-lookup).

### Q9. Should I use default Page Viewed events or custom events in Amplitude?

Deciding between default Page Viewed events and custom events depends on your specific needs. Default events provide a broad overview but can clutter your data, making your Pathfinder Chart look like "page viewed, page viewed" and so on.

Custom events, on the other hand, offer more granular insights tailored to specific user actions, helping you track meaningful paths and interactions.

Imagine what you want to see in your Pathfinder Chart. Will it make sense based on your current setup, or will it appear cluttered with generic page views? Choose accordingly to get the most valuable insights.

### Q 10. How can I see how many times in a week a user has visited or used the app?

To track how many times a user has visited or used the app within a week, use Amplitude's [event segmentation](https://amplitude.com/docs/analytics/charts/event-segmentation/event-segmentation-build) and [frequency analysis](https://amplitude.com/docs/analytics/charts/user-sessions/user-sessions-track-engagement-frequency) features. Start by defining the key event that signifies a visit, such as "app open."

![A guide on how to see unique visits](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/66a19197ab3f394d8af1e5d9_AD_4nXeM_JfQsvs1KUDIWT0g1T_tEZtJDaO3IyHtK7n444uCqtNhWP9fS72_Y3EFad40TKQHTiufSplCJeRu8HSuqqsteW5sFKxujHf6qLrlvxyEDygqB2xKKJICP8Sc6txsAaxDGAoCEFZfgg4TWI5yMVrIxNaw.png)

‍

Use event segmentation to filter this event within a specific time frame, like one week. Then, apply frequency analysis to [determine the average visits](https://amplitude.com/docs/analytics/charts/event-segmentation/event-segmentation-choose-measurement) per user.

You can also use Amplitude cohort analysis to break down this data further and understand user engagement patterns over time.

### Q11. What metadata is needed for accurate funnel analysis in Amplitude?

For accurate Amplitude funnel analysis, it’s essential to track the same 'item' consistently across all funnel stages. Use a unique ID for each relevant event, such as "expense created," "expense approved," and "expense archived."

This unique ID ensures Amplitude can follow the item through the entire journey. Additionally, leverage the event timestamps to maintain the sequence and timing of events.

This approach allows you to measure the duration between stages and gain detailed insights into user behavior and funnel performance.

## Bringing It All Together: Making the Most of Amplitude

Getting Amplitude right is key to understanding your data, and that's essential for making smart business choices. When you have Amplitude set up well, it takes your marketing efforts and data analysis to a new level. You can trust the information you're working with as you plan out your next moves.

We at Adasight are here to guide companies through this process smoothly. Our know-how makes sure that setting up [Amplitude in your operations](https://www.adasight.com/partner/amplitude) is hassle-free, giving you accuracy in the analytics department.

If you want clear insights from your data, [reach out to us at Adasight](https://www.adasight.com/contact-us), and let's see how we can help bring clarity and precision into play for your business through effective use of Amplitude.

Setting up Amplitude correctly is crucial for making the most of your data. When it's implemented right, you can trust that your marketing analytics and business decisions are informed by reliable data.
