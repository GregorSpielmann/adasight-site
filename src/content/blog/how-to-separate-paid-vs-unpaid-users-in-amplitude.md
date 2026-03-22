---
title: "How to Separate Paid vs Unpaid Users in Amplitude?"
description: "Differentiating between paid and unpaid users is more than a segmentation task—it’s about finding deeper insights to understand user behavior and eventually dri"
author: "Gregor Spielmann"
publishDate: 2025-07-03
tags: ["analytics"]
category: "Analytics"
readTime: "10 min read"
---

Differentiating between paid and unpaid users is more than a segmentation task—it’s about finding deeper insights to understand user behavior and eventually drive growth.

Exploring these key user groups empowers Product Marketers and Product Managers to fine-tune marketing strategies, enhance product features, and develop data-driven hypotheses to boost conversions.

In this article, we'll explore best practices for segmenting paid versus unpaid users in Amplitude. Here's what you can expect:

- Learn how to set up user properties like "is_paid" and create meaningful user segments for precise analysis.
- Discover tips from Amplitude community experts to ensure your instrumentation is both accurate and insightful.
- Access to a video tutorial where our co-founder explains how to separate  Paid and Unpaid users in Amplitude.
- A list of common use cases to analyze Paid and Unpaid Users.

## Instrumentation Required to Segment Paid and Unpaid Users in Amplitude

To segment paid users vs unpaid users in Amplitude, the best practice is to select a user property that identifies your paid user base.

Here's how you can approach this:

- Set up a user property: Create a boolean user property, for example "is_paid", and set it to true for paid users and false for unpaid users. Alternatively, you can set this property only for paid users.
- Create user segments: Once you have this property set up, you can create segments for paid and unpaid users:some text
Paid users: Where "is_paid" = true
- Unpaid users: Where "is_paid" = false (or where the property value is "none" if you only set it for paid users)

- Use these segments in your analyses: You can now use these segments in various Amplitude charts and analyses to compare behavior between paid and unpaid users.

This approach comes highly recommended by an Amplitude community expert, as highlighted in the [Measuring Non-Paying MAU discussion.](https://community.amplitude.com/data-instrumentation-57/measuring-non-paying-mau-1403)

Additionally, this segmentation becomes even more powerful when combined with other properties or events to create more detailed analyses. For instance, you can track conversion rates to understand how many users are moving from free to paid plans and identify the key moments or triggers driving those upgrades.

You could also look into user behavior, comparing what free users do versus what paid users prioritize, or even study how behavior shifts before and after someone becomes a paying customer.

### What to Do If You Have Different Billing Frequencies

If you have multiple billing frequencies, you can track them in Amplitude by creating specific events or properties for each subscription type.

Here's an example of how you can approach this, though the specific implementation may vary depending on your product's characteristics:

- Event Properties: You can create an event property, for example, "subscription_type".
- User Properties: Create user properties that specify subscription details, such as "monthly," "annual," or any other type you offer. This allows for more granular segmentation of your users, depending on your specific needs.

Example:

- Event Property: subscription_enterprise
- User Properties: "monthly", "annual", "trial"

### Don’t Forget to Document your Instrumentation

Maintaining meticulous documentation of subscription system changes is not just a best practice—it's a crucial operational necessity.

Imagine trying to debug a revenue discrepancy from six months ago without knowing about a payment status definition change that happened during that period. A robust change documentation system serves as both a historical record and a troubleshooting guide.

Each modification, whether it's a new payment provider integration or a subscription rule update, should be logged with its rationale, technical details, and potential impacts on reporting.

## Separating Paid Users vs. Unpaid Users in Amplitude

The steps to get this preview and the filtering options available in Amplitude depend on your instrumentation.

Here, we used the Amplitude demo to illustrate a chart example. We selected the event "View Portfolio" and analyzed the paid and unpaid users who used this feature.

In this case, the user property for instrumentation was "Plan Type," with the property values "Premium," "Free," and "Trial" implemented:

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a74741bf3e69f1d49_AD_4nXdAmYaOveVLjlpYSWVJmHO1ohvjdYFLd5fKBNqbtyi6Ip9-funjr-nPpqS5ywmetLXBi7YXsWyOSprdnp7QMdh3gfsVLSbnjygGkE7rOYdEdpDVv0TLeVnxe092cH1K00yre1MxWfn7rnG8OVPpUutR7BG_.jpeg)

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a206b4f811db9d962_AD_4nXcpgCciPqsidshuJb2lLHRrkIuvvC9CPCKFa31vBQyqsdozQTriUGiCGMccxjL5mpIOrlNW4klyPCxtRCjRNv2gPAyH9N1gn2K2itV0-uqqEWQ2DYM8NaBZOUHZmzWbI9wgOmxbXlrTv8nS0HHgIknqik6E.png)

You can also review this video to see a different approach to get paid and unpaid users:

## Why Differentiating Between Paid and Unpaid Users Matters

Understanding the distinction between paid and unpaid users opens the door to deeper insights into user behavior, conversion trends, and engagement patterns across different groups.

Whether you're tracking conversion funnels, analyzing retention, or conducting A/B tests, the paid vs. unpaid user segmentation serves as a fundamental tool for data-driven decision-making in product management and marketing. These are some of the most common use cases for product analysis:

### Event-Based Segmentation:

- Payment Events: Track specific events like "Purchase Completed," "Subscription Started," or "Upgrade to Premium" to identify paid users based on their actions.
- Event Properties: Include properties such as "amount," "currency," or "subscription_type" with these events to capture more detailed payment information

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a0822629eee5b07f1_AD_4nXdL9XJY2gfXEnrG8R4oFDHHwLXq3osnqOum2MCgBZvwdE4UhutH3t4zB386jykDVNXmU4AHk-16LbYjRxRT0R5heZ44IhuokWl65dqQXQBALaDzgNSVWzgMA7Nc0CO9I4wJFBFynA.png)

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22b71b3793585440087_AD_4nXdYdjCEIH-uNe9muRuxnxY5Cqa0UNmxDy1bFqglcI-Hixu86wPtAiX3hGTcP7s6E5qRM5qIQmYsOwFG03TiBFIowZXrxRmVAcOnKg7y2NFuU0_9irFN_fn53cOMPGZHZLmGMu48dg.png)

### Revenue Analytics:

- Amplitude's Revenue Feature: Utilize Amplitude's built-in revenue analysis tools to track and segment users based on revenue-generating activities.
- LTV Analysis: Calculate the lifetime value (LTV) of users to identify high-value segments and tailor experiences accordingly.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a6acb071ac54ba2ff_AD_4nXd80ANrgaHJTT3u9XDP3QH_PWuPLr0xD-pIHLZOGmSWMuHJ30SRNFIPdllMyGHpBAM9Mrw9yQXlaWoQsfGssDkmX0HiKxnazgRbOqsplh1qzG6TvwzJWVCE6LwFtetstNiRanEx2g.png)

### Cohorts and Behavioral Segmentation:

- Dynamic Cohorts: Create cohorts that automatically update based on user behavior, such as users who have made a purchase in the last 30 days.
- Churn Prediction: Identify patterns that lead to churn among paid users to implement preventive measures.

### Funnels and Conversion Rates:

- Conversion Funnels: Build funnels to track the conversion journey from unpaid to paid users, identifying drop-off points.
- A/B Testing: Experiment with different onboarding flows or pricing models to see which versions improve conversion rates.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22b7aee0b4b9563c932_AD_4nXeukam5pgH_CLdT-zrwmNqSwNQyGhgbbt7ITPx_QYJou3dM5Cy4DFSUxBOI4mQl7N71Ws32gElYfYtPK5cF1sN6N_tvV-wKcX5jSbem98Uv-0kdVCDKWfV-6iuk0da46LVHuikDTw.png)

### Retention Analysis:

- Cohort Retention: Compare retention rates between paid and unpaid users to understand engagement levels.
- Usage Frequency: Analyze how often paid vs. unpaid users engage with key features.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a40b0247d279c7d4c_AD_4nXenB0BqojunXq_WPvdwDQpWdW7XOF9l5206frowyzPfwFFxc16pmkvQk6WCYeekYFOtDiFx58uhsfECWsMMh-M3OhK2r-3fhWF1j1kCXecngqTlafVhfQwja7HzT2l514r0N2so6g.png)

### Medium and Source Optimization:

- Allocate Budget Wisely: Use insights on which channels bring in paid users to focus your marketing spend.
- Channel-Specific Strategies: Develop tailored campaigns for high-performing sources to maximize conversions.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a858ca58bdf67cf8e_AD_4nXfC1FweGSswr7JRWDA4sR2ABHj8p2g4c74qPeoHTjqylRfrI3yg3JRZpyfId4ipQBGg7u3wKTBSvFYGHGKLprrF48L0hD8N_j3bw6oU29txhlPIoJ1MiNniOr8a7cbpbsedGKLU.png)

### Personalized Campaigns:

- Targeted Messaging and Upsells: Craft compelling messages that resonate with users based on their status—paid or unpaid.
- Retargeting Efforts: Use data to retarget unpaid users from high-converting channels with appropriate incentives.

### Product Roadmap Prioritization:

- Feature Development: Focus on features that drive conversion and evaluate behaviors from unpaid to paid users to optimize your product.
- Retention Strategies: Develop features that increase stickiness for both user groups. For unpaid users, this could mean periodic access to paid features, while for paid users, it might involve exclusive content or priority support.

### Enhancing User Experience:

- Create Tailored User Experiences: Use your data to customize user flows based on the acquisition channel. Evaluate how to boost engagement and conversions for both paid and unpaid users.
- Optimize User Flows: Reduce drop-offs by understanding the behavior patterns of paid and unpaid users.

‍

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6793c22a3968bf60d012f872_AD_4nXdVugpomCSNfcPHvkIqoy-RWuFgtv5EA8Li1NhnFnQP6aOxnV36WZf9P9Snoy0GpinAPokJ7bKl01JrIltj9YdBJfc49V1R3lr3kJfMj136PVECf7lFdHyFjm6HCWUhpOC0QERzbw.png)

## Key Takeaway

Segmenting paid and unpaid users in Amplitude can give you plenty of insights to adjust your growth strategy. If you’re a Product Marketer, this data shows which acquisition channels and messaging click best with your top-tier users. That means you can create campaigns that feel personal, boost engagement, and drive more conversions.

For Product Managers, it’s all about understanding how different user groups interact with your product. With that clarity, you can focus on improving the experience for paying users while tackling the pain points that might be holding unpaid users back.

By diving deep into the mediums and sources that influence user actions, both roles can uncover insights that might otherwise remain hidden. This collaborative, data-informed approach enables your teams to not only meet but anticipate the needs of your users, leading to smarter decisions and better outcomes.
