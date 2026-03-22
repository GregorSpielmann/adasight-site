---
title: "Mastering Custom Channel Grouping in Amplitude: Examples + Video Tutorial"
description: "Learn how to use Custom Channel Grouping in Amplitude to tailor your marketing analysis. Explore strategies for defining channels and set groupings strategicall"
author: "Adasight Team"
publishDate: 2024-01-01
tags: ["analytics"]
category: "Analytics"
readTime: "12 min read"
---

Channel Classifier in Amplitude offers a powerful way for marketers to tailor their analysis of marketing channels and campaigns by allowing Custom Channel Grouping. This feature enables you to create custom acquisition channels by grouping property values.

By defining these channels based on UTM parameters, referrer data, and other criteria, you gain a detailed look at how different marketing sources contribute to user engagement, ROI and conversion. It also helps you to connect the dots and create campaigns that resonate at every stage of the funnel. Effective channel categorization is crucial for marketers aiming to optimize their strategies.

Properly grouped channels give you a clear view of your marketing efforts, helping you understand user behavior across touchpoints. A structured categorization will help you identify which channels are driving the most valuable traffic and how these contribute to your objectives.

In this guide, we will explore the details of *Custom Channel Grouping* in Amplitude. You will learn how to:

- Define and create custom channels using UTM parameters and referrer data.
- Use Amplitude's Classifier tool for efficient campaign tracking.
- Create Custom Channel Groups for Organic and Paid Channels (Meta, TikTok and Instagram)
- Follow best practices for accurate and reliable data segmentation.
- Applications of custom channel grouping to detailed analysis.

Mastering these techniques enables you to fully leverage Amplitude's channel classifier, empowering you to enhance your marketing efforts through accurate and insightful channel analysis.

## Understanding Custom Channel Grouping in Amplitude

‍

### Role of the Channel Classifier Tool

The **Channel Classifier** tool is integral to segmenting channels within Amplitude. By leveraging this feature, users can organize traffic sources into meaningful categories, facilitating precise analysis and reporting.

The classifier allows the creation of custom rules that define how incoming data should be grouped, making it possible to view blended perspectives of paid and organic traffic. This on-the-fly computation ensures historical data remains intact while allowing for dynamic retroactive updates.

### Limitations

When implementing custom channel grouping in Amplitude, it’s essential to consider the availability of the feature based on your subscription plan.

Users on Starter and Plus plans can create one classifier, which may limit their ability to segment data across multiple dimensions.In contrast, Growth and Enterprise plans offer the flexibility to create unlimited classifiers, allowing for more granular analysis and tailored grouping strategies to meet diverse business needs.

![Amplitude Channel Classifier screenshot](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac933c172be3a6f855a_AD_4nXeJ89LGIrgnZTuSIk92rNJbB_SXcTMLAqLZBxiP1-AeSx5TCmuw_uYAYySbPVV5fmcDFtsiln-yT9dXHURbYBKJDd9vImuIQ6-KTLNevftAn7--Fxi-UOKAVplZZ96blpHIyi3wPQ.png)

## Effective Strategies for Custom Channel Grouping Implementation

**Standardize Criteria for Groupings
**Develop a clear set of rules for defining custom channel groupings, such as using UTM parameters (source, medium, campaign) or referrer data. Ensure all team members understand and adhere to these guidelines.

**Create a Comprehensive Reference Document
**Maintain an accessible reference guide or spreadsheet detailing your custom grouping rules. Update this document regularly to accommodate new marketing channels, evolving strategies, or adjustments in naming conventions.

**Differentiation Between Traffic Sources
**Clearly distinguish between different types of traffic, such as paid advertisements, organic visits, and referral sources. Use precise identifiers to categorize traffic effectively, enabling accurate analysis and performance measurement.

**Testing Before Implementation
**Before applying custom groupings, thoroughly test the configurations to ensure that they correctly classify traffic. Validate the grouping rules using sample data to avoid misclassification and ensure data accuracy.

**Regular Review and Optimization
**Continuously review your custom channel groupings to adapt to changing marketing strategies or shifts in channel performance. Proactive updates help maintain the relevance and accuracy of your analytics over time.

**Use Attribution Models for Group Analysis
**Review which attribution models best align with the channel groupings you've defined. For instance:

- **First-Touch Attribution**: Ideal for understanding initial user acquisition channels.
- **Last-Touch Attribution**: Useful for identifying the final touchpoint before conversion.
- **Multi-Touch or Custom Models**: Provide a comprehensive view of the customer journey, especially when multiple channels contribute to conversions.

**Leverage Tools to Streamline UTMs**

[UTM.io](http://utm.io) is a comprehensive platform that allows you to create, manage, and automate UTM parameters efficiently. It ensures consistency by enabling you to define and enforce naming conventions across your team. The tool also offers features like templates and custom parameters to streamline the UTM creation process.

Accurate differentiation of traffic sources is essential in Amplitude’s custom channel groupings. By implementing these strategies, you can gain deeper insights into how various marketing efforts impact engagement, retention, and conversions.

‍

![Traffic by Channel in Amplitude Analytics with Default Channels](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac95de2d0ced882f0af_AD_4nXdbANGWRGDiVHvBx6TtWZ7aJBJcIJg9nVeM1_wTpjAlUCivv4m8RpAm1l1kEmhSEX8LOsMg_0KXbGLdqgRh27jjlrJLhG2imh3-gYdUSBzrgRrRtRokSt2atoQq6AaMYm57FnChGA.png)

## The Process of Setting Up Custom Channel Grouping

We’ll walk you through the step-by-step process of setting up custom channel grouping, starting with the key preparations needed to ensure success:

**Preparation:**

- **Identify Key UTM Parameters**: Start by determining which UTM parameters (e.g., utm_source, utm_medium, utm_campaign) are most relevant to your campaigns. These parameters will serve as the foundation for your channel classifiers.
- **Define Referrer Data Sources**: Consider the referrer data that can provide additional context to your channel classification. This might include direct traffic, social media platforms, or specific referral websites.
- **Set Custom Channel Grouping According to Your Goals:** Revisiting business goals can help ensure that your channel grouping aligns with broader organizational objectives and improves the relevance of your analysis. By preparing key parameters and referrer data sources, you can create custom channel groups that effectively reflect your strategic priorities.

**Steps to Create Custom Channel Groupings**

### 1. Access the Data Properties Section

Begin by navigating to the *Data Properties* section within Amplitude. This is where you will manage and configure your custom channel groupings.

![Data Properties Section Screenshot in Amplitude](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac9cbfff5b3a2e082c9_AD_4nXfUPzeSAgcfmTUHvhDB9RZPtkCMt7rAah33Etu81pYvJ0Ehqgg7rDFb1dlyWi754QAMLMJ7kDTmEK2SZjN-UXXVRxaP3ugBBKbtVFd3xbBbkOQf4qG-6IAfNB3zdLrUhhmqvk-GsA.png)

### 2. Add a New Channel Classifier

Click on the *Channels* tab, and select the option to “Create Channel” classifier. This is where you will define your custom channels.

![Channel button in Amplitude Properties and the Create Channel Button](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac9f5bd7b340d86e00f_AD_4nXfaHKb_S30_0grvxsCh6iH8CFnDOEkx6gEwpaan9OospNXnKCpVqgxCP5jqzrjDJ-ChrQD7KNHPU0RXCCuJac-ZFMvbHHAFUulEBc87m4mNUvnSbeIjZKBxKo4LPI4Vl9pJlvoeQw.png)

### 3. Define Channel Criteria

Utilize UTM parameters, referrer data, or other criteria to specify what constitutes each channel. This step is crucial for accurate segmentation and tracking.

### 4. Name and Describe Your Channels

Assign clear, descriptive names and descriptions to your channels for easy identification and organization.

![Amplitude Screenshot of conditions for Custom Channel Grouping: Paid Meta, Paid Google, Paid Bing, Paid Search, Paid Social, Organic Search and Organic Social](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac9b594931921764b59_AD_4nXcVjgIyaKIGdCzTtz8qztynJsB40O9jynyjl4pMRqVvCN-kN50gr80gQSuJv9XHIzcpj3HieB9SCIBOT0QutfIZZQ-PW48qoHBKNz4AUtIIbgp2yrqdB75Nq7zFjxqzyKWOZcvwXA.png)

‍

### 5. Review and Save

After setting up your classifiers, review them for accuracy and click save. The channels are computed on-the-fly, allowing for retroactive updates without altering raw data.

Now you’re ready to analyze your marketing data!

## Implementing Custom Channel Grouping with Amplitude’s SDK

For advanced Amplitude users looking for an alternative approach to Custom Channel Grouping, implementing it through Amplitude's SDK is a viable option.

You can use the setGroup method to assign users to specific groups. In this example, a user is assigned to the **marketing department** as a single group. Additionally, the user is tagged with multiple interests, allowing you to track and analyze behavior across several dimensions:

![Code to Implementing Custom Channel Grouping with Amplitude’s SDK](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac9c59a2b815b01e98a_AD_4nXfgKPBNm7mPrh9lkz9Qvg5PATMfH_DbZK5VhRmJuYiVb0Lj2Lud5EHbFhvp2ahabIBW-EOfWNdLYLPQZjVts8QPmyLDvDO631qx-4SRfH89aJoJIfICG2JuGlWkdWibNTvnBQyMsg.png)

[Amplitude Docs: Flutter SDK](https://amplitude.com/docs/sdks/analytics/flutter/flutter-sdk-4-0#user-groups)

## Custom Channel Grouping of Paid Social and Organic Social Tutorial

In this tutorial, Olivia Natasha, a Growth Consultant at Adasight, delivers an in-depth guide to creating custom channel groupings in Amplitude. With step-by-step instructions, she simplifies the process, helping marketers organize and analyze their traffic sources more effectively.

Olivia explains with practical examples how to set up groupings for **Organic Social** and **Paid Social** channels across platforms like Meta, Instagram, and TikTok.

## User Roles and Subscription Plans for Custom Channel Grouping Setup

To implement custom channel groupings in Amplitude effectively, understanding user roles and subscription plans is essential.

### Required User Roles

‍

**Admin/Manager Roles**: These roles are crucial as they have the necessary permissions to access and modify the Data Properties section where channel setups occur.

Admins can create, edit, and delete channel classifiers.

Managers typically have permissions aligned closely with admins but may require additional approvals for certain changes.

![Screenshot of Roles in Amplitude Analytics](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67508ac9ebd3f03c27612030_AD_4nXfCu9yehrAt8_-PFdycTrvGc-_e4kd1QDAMf6XdPvN-yueExoEXirx_Bkdg86lP18y8HWuzt6klitnJ_7FyKq9CBm7TWQXHHqPK_uBQ7mR4qSyHTOZMaBNwK-0WgvY9Pbuq2zq5.png)

## Exploring Additional Groupings to Unlock Deeper Insights Beyond Basic Channels Segmentation

### Campaign Objectives as a Grouping Dimension

Incorporating campaign objectives as an additional grouping dimension can significantly enhance the depth of your analysis and strategy formulation. By aligning channel groupings with specific campaign goals, you can better evaluate which marketing efforts align with broader business objectives.

**For Example:**

**‍
Objective**: Group channels based on specific campaign goals (e.g., newsletter sign-ups or course enrollments).

**How to Create Custom Channel Groups:**

- Identify events tied to campaign objectives (e.g., Newsletter Sign-Up, Course Enrolled).
- Use the property utm_medium, utm_source, or Campaign Name to classify channels contributing to these goals.

**Group Example:**

- **Newsletter Sign-Up Group**: Includes channels with utm_campaign matching "Newsletter_Q4_2024".
- **Trial Sign-Up Group**: Channels with utm_campaign like "Trial_Launch_January".

**Implementation in Amplitude:**

- Go to **Custom Events & Properties** in Amplitude.
- Create a new custom channel group using event properties (utm_medium, utm_campaign).
- Apply filters like:some text
utm_medium = email
- utm_campaign contains "sign-up".

This allows for:

- Targeted evaluation of each channel's effectiveness in meeting specific objectives.
- Strategic insights into how different channels support various stages of the customer journey.
- Improved resource allocation by identifying high-performing channels for specific goals.

‍

### Content Types Impact on Targeted Messaging Efforts

Analyzing content types, such as blog posts or videos, within your channel groupings provides valuable insights into how different formats resonate with your audience. Understanding this impact is crucial for tailoring messaging strategies to suit each content type effectively.

**Content Types Impact on Audience Engagement**

Grouping channels based on content types allows you to uncover how specific formats—like blog posts, templates, or case studies—drive user engagement and influence conversions.

**For Example:**

**Objective:
**You want to assess how templates, compared to blogs and case studies, contribute to sign-ups for a design tool.

‍

**Steps to Create Custom Channel Groups:**

- **Define Key Events:** Track actions such as "Template Downloaded," "Blog Viewed," or "Case Study Accessed."
- **Leverage Event Properties:** Use properties like utm_content or content_format to classify content types.

‍

- **Group Examples:**some text
**Blog Group:** Organic search and newsletter campaigns promoting blog posts (utm_content = blog).
- **Template Group:** Paid ads and social media posts offering downloadable templates (utm_content = template).
- **Case Study Group:** Email campaigns linking to case studies (utm_campaign = case_study_campaign).

**Implementation in Amplitude:**

- **Tracking Events:**Record interactions such as Template Downloaded or Content Viewed, and connect them to sign-up events like Account Created.

‍

- **Applying Filters:**some text
Blog Group: content_format = blog
- Template Group: utm_medium = social AND utm_content = template
- Case Study Group: utm_campaign = case_study_campaign

**This allows for:**

- Determine whether templates, blogs, or case studies generate the highest sign-up rates, and prioritize creating more of those formats.
- Identify which channels—like social media or paid ads—are most effective for promoting templates versus blogs or case studies.
- Tailor your messaging and content strategy to amplify successful formats.
- Focusing on relevant metrics by group and comparing them, for example: **engagement rates**, **conversion rates**, **time spent**, **traffic source performance**, and **retention rates**.

‍

### Funnel Stages as a Grouping Dimension

By segmenting channels according to the stages of the customer journey—awareness, consideration, and decision—marketers can tailor their strategies effectively at each touchpoint.

**For Example:
Objective**: Group channels based on their role in the customer journey.

**How to Create Custom Channel Groups:**

- Map events to funnel stages (e.g., Page Viewed = Awareness, Sign Up = Consideration, Purchase = Decision).
- Group channels based on these events and their contribution to each stage.

**Group Example:**

- **Awareness Channels**: Includes channels like social media platforms that drive traffic (utm_medium = social).
- **Decision Channels**: Includes channels with high conversion rates (utm_medium = search).

**Implementation in Amplitude:**

- Use **Funnel Analysis** to identify event progression.
- Assign channels to custom funnel stage groups based on performance.
- Apply filters such as:some text
utm_medium = display AND Funnel Stage = Awareness.

This allows for:

- Targeted messaging aligned with users’ current journey stages.
- Improved engagement by addressing users' specific needs at each stage.
- Enhanced conversion rates by optimizing high-performing channels for decision-making stages.

### Geo-Locations as a Grouping Dimension

Segmenting data based on geographical locations enables businesses to deliver localized messages that resonate with specific regional audiences.

**For Example:
Objective**: Group channels based on geographical regions.

**How to Create Custom Channel Groups:**

- Use location-based properties such as Region, Country, or City.
- Group channels that contribute to performance in specific regions.

‍

**Group Example:**

- EU: Country IN [Germany, France, Italy, Spain, Netherlands, etc.]

‍

**Implementation in Amplitude:**

**Track Location Properties:**

- Ensure events include location-based properties such as Country

**Define and Apply Filters:**

- Europe Channels: utm_source = search AND Country IN [Germany, France, Italy, Spain, Netherlands, etc.]

This allows for:

- More effective localized campaigns tailored to regional preferences.
- Identification of high-performing areas and optimization of underperforming regions.
- Improved audience engagement through cultural relevance.

‍

### Creative Format as a Grouping Dimension

Evaluating creative performance across various channels aids brands in aligning their visual assets with platform characteristics.

**For Example:
Objective**: Group channels based on creative formats (e.g., videos, images).

**How to Create Custom Channel Groups:**

- Use a property such as Creative Format to classify visual asset types.

**Group Example:**

- **Video Creative Channels**: Includes channels delivering video ads (Creative Format = video).
- **Image Creative Channels**: Includes channels delivering static ads (Creative Format = image).

**Implementation in Amplitude:**

- Track creative-related properties like Creative Format.
- Group channels based on creative type performance.
- Apply filters like:some text
utm_medium = paid_social AND Creative Format = carousel.

This allows for:

- Enhanced audience engagement by tailoring creative formats to platform preferences.
- More effective allocation of creative resources.
- Strengthened brand presence across diverse channels.

‍

### Product/Service Categories as a Grouping Dimension

By categorizing channels based on distinct product or service offerings, marketers can review campaigns that directly address specific audience needs.

**Objective: **Group multiple campaigns associated with different products sold in deals to analyze their collective impact.

**How to Create Custom Channel Groups:**

**Define Conversion Metrics:
**Use metrics like "Product Purchased" or "Add to Cart" to track product performance.

- **Group Examples:**some text
**Sneakers Channels:** Channels driving conversions for sneakers (utm_campaign contains "sneakers_promo").
- **Smartwatches Channels:** Channels linked to smartwatch purchases (utm_campaign contains "smartwatch_deal").
- **Office Desks Channels:** Channels associated with office desk sales (utm_campaign contains "desk_sale").

### Implementation in Amplitude

**Track Events Related to Conversions:
**Ensure purchase events (e.g., Product Purchased) are tied to product-specific properties like Product Category or Product Name.

**Group Channels Based on Product Conversions:**

- Sneakers Channels: Product Category = sneakers AND utm_campaign contains "sneakers_promo"
- Smartwatches Channels: Product Category = smartwatches AND utm_campaign contains "smartwatch_deal"
- Office Desks Channels: Product Category = desks AND utm_campaign contains "desk_sale"

**Apply Filters:
**Use Product Category or specific campaign identifiers (utm_campaign) to analyze channel performance for each product.

This allows for:

- Evaluate how the impact of an effort involves multiple campaigns.

## Conclusion

**Custom Channel Grouping in Amplitude** is a valuable feature for marketers. It allows them to gain perspective about their marketing efforts and significantly improve their strategies. This feature offers the flexibility to customize analysis, enabling detailed tracking and insights into how different marketing sources impact user engagement and conversion.

**Summary of Benefits:**

**Enhanced Analysis:** Custom channel groupings provide a deeper understanding of traffic sources by combining paid and organic views for a comprehensive evaluation.

**Improved Attribution Modeling:** By analyzing user interactions across multiple touchpoints, marketers can refine their attribution models and obtain more precise assessments of their campaigns.

**Dynamic Updates:** The ability to retroactively update historical data ensures that analysis remains relevant without compromising the integrity of raw data.

The use of such functionalities in analytics tools plays a complementary role in achieving business objectives and ensuring ongoing success.
