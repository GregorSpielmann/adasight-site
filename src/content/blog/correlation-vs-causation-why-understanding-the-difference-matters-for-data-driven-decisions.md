---
title: "Correlation vs. Causation: Understanding the Key Differences + Practical Examples"
description: "Discover the critical differences between causation and correlation in data analysis, using practical examples for product analytics."
author: "Adasight Team"
publishDate: 2024-01-01
tags: ["analytics"]
category: "Data Strategy"
readTime: "15 min read"
---

Grasping the distinction between **correlation** and **causation** is crucial in data analysis.  Mistaking correlation for causation can result in misguided strategies, inefficient resource allocation, and missed opportunities to drive meaningful outcomes.

Let’s say you run an online food delivery app. You notice that every time your app sees a spike in pizza orders, it also sees an increase in soft drink orders. At first glance, you might think **pizza orders cause soft drink orders**—so you decide to invest heavily in promoting pizzas, hoping to boost both pizza and drink sales.

However, after digging deeper, you discover that the real reason for this trend is **sports events**. During major sports games, people tend to order pizza and soft drinks together. The spike isn’t caused by pizza itself; it’s the event that drives both behaviors.

If you’d acted on the false assumption of causation (pizza → soft drinks), you might have wasted resources on pizza promotions, missing the opportunity to focus on sports-specific marketing campaigns that target both pizza and drinks.

![Correlation vs Causation visual example using the relationship between soft drinks and pizza sales during sport events](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065a857e71c35fb8d35_AD_4nXfGAeW3UMrnFBHlVEIF4PJ3ugigF8bK19uUeXiBMHS1TTLCXP_x4aAMux-gWkyw_BuiPnYmDxIkUz3iPWSJtQaKgoyYMJRpTKKnrTN1KEn9oskMPHFasXq_EZWdr98T4k68Kx0JiQ.png)

Accurately identifying causation in relationships between variables is crucial for shaping effective business strategies and making informed decisions.

This article aims to provide clarity on the concepts of ["Correlation vs. Causation"](https://statisticsbyjim.com/basics/correlation-vs-causation/). You'll learn about:

- The definitions and roles of correlation and causation, and their significance in interpreting data.
- Appropriate techniques to measure both correlation and causation.
- Real-world scenarios that highlight the differences between correlation and causation.
- Explaining how to leverage Amplitude's tools to analyze correlation within your data.
- Highlighting frequent errors in interpreting data relationships and providing advice on how to avoid them.

## Importance of Distinguishing Between Correlation and Causation

Misinterpreting correlation as causation can lead to misguided strategies, wasted resources, and missed opportunities. For instance, a marketing team might wrongly attribute a sales boost to a campaign, overlooking external factors like seasonality, which prevents replicating success.

Identifying true causation ensures efforts target the factors driving meaningful outcomes, optimizing results and avoiding misleading insights.

## Differences Between Correlation vs Causation

This difference often separates insightful analysis from misleading conclusions. It plays an important role in product analytics, helping businesses navigate the complexities of data-driven decision-making.

#### Nature of Relationship:

**Correlation**: Indicates that two variables have a relationship or association, but it doesn’t mean that one directly affects the other. For instance, they may trend together without one causing the other.

**Causation**: Implies a direct cause-and-effect relationship, where one variable directly influences or determines the outcome of the other.

#### How They’re Established:

**Correlation**: Typically identified through **observational studies** or general **data analysis**, often using statistical techniques like correlation coefficients to measure the degree of association.

**Causation**: Requires **controlled experiments** or advanced statistical methods, such as **randomized controlled trials (RCTs)**, to isolate and confirm the direct influence of one variable on another.

#### Example Scenarios

**Correlation Example**:

*Coffee Consumption and Winter Weather*: Coffee sales often rise during winter months. However, this correlation does not necessarily mean that colder weather causes people to drink more coffee. Instead, it may reflect a preference for warm beverages during colder seasons without a direct causal link.

**Causation Example**:

*Smoking and Lung Cancer*: Decades of extensive research have proven that smoking directly causes lung cancer. This is a causal relationship because smokers are significantly more likely to develop this disease compared to non-smokers, based on rigorous studies and controlled experiments.

![Differences: Correlation vs Causation](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065a99692b59c06f38b_AD_4nXeCPYXZ2B1mrBgcQEvZ1a07IiDP8gdjbBOQzHEI0IIxe_I8BC2ockK6tGosjWYyqK6GC8u2JdMJVBNbbMp43gSkWlA3UnRkZLfZey7eqtD90_Mnnz2l2fkmZd6_44lNEgtLoxfm7g.png)

## Correlation Definition

**Correlation** refers to a statistical relationship between two variables, indicating how one variable may change as the other does. This relationship can help you identify patterns and trends within your data, but it does not imply that one variable causes changes in another.

### Types of Correlation

In data analysis, you encounter different types of correlations, each providing unique insights into the relationship between variables:

**Positive Correlation**: Positive correlation occurs when two metrics move in the same direction; as one metric increases, the other also increases.

Example: For instance, as the number of product walkthrough completions increases, user activation rates may also rise. This simultaneous increase in both metrics indicates a positive correlation, suggesting that higher engagement with product walkthroughs is associated with increased user activation.

**Negative Correlation**: Negative correlation indicates that as one metric increases, another decreases.

Example: If the number of friction points in the onboarding flow increases, the user retention rate might decline. This inverse relationship suggests that more friction during onboarding is associated with lower retention rates.

**No Correlation**: No correlation means there is no clear relationship between two metrics; changes in one do not predict changes in the other.

Example: There may be no correlation between the number of app notifications sent and the number of purchases made if those notifications are not relevant to user behavior. In this case, fluctuations in notifications do not influence purchasing decisions.

### Measuring Correlation

To quantify these relationships, you use various methods and coefficients. One of the most widely used is the **Pearson Correlation Coefficient**.

#### Pearson Correlation Coefficient

The Pearson correlation coefficient is a measure that evaluates the strength and direction of a linear relationship between two continuous variables. It's often denoted by *r* and ranges from -1 to 1:

**+1** implies a perfect positive linear relationship.

**-1** indicates a perfect negative linear relationship.

**0** suggests no linear relationship.

This coefficient is crucial because it provides a clear metric for assessing how closely related two variables are within your dataset. In practical terms, if you're analyzing sales data and find an *r* value close to +1 between advertising spend and sales revenue, this would suggest a strong positive correlation.

![Pearson's Correlation Coefficient Formula](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6750906692503f14c2cc641f_AD_4nXc_BUBbtewVwnYY0rCr5oSmzLjt21RDC8nOd62XuMuGsCwEA3DooPYJuftEJP-DzC5Kxeu9HAhjzQgLkyWsCOzQyTke0YwRRoEAX7upU-PWT2clArxvaOvZ_2Cm4ykILIOS9Pwh.png)

**When to Use It?**

Best suited for continuous data that is linearly distributed. Use this when you expect a straight-line relationship between the variables. This means that changes in one variable should correspond to proportional changes in the other.

Always visualize the data with a scatterplot to confirm that a straight-line relationship exists. If the scatterplot shows a clear linear trend, then Pearson’s correlation can be applied.

![Visualization of Linear Relationship vs Non-Linear Relationship](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065960c8e9ee57d27ce_AD_4nXeF76KmvCigWr6pTvjvz9YxdIXAufbxmIF5q0Ge12_rNulgxu2Sq3fP410Adx9TDUvBMbGasbMXCDMRBDzIdfmIlvyS5iKZkbtY8H0PO_HuQ1PqrUp_LczD4RgTvOwcQLQyBATzyA.png)

#### Spearman's Rank Correlation Coefficient:

Spearman's Rank Correlation Coefficient (commonly referred to as Spearman’s rho) is a statistical measure used to evaluate the strength and direction of the association between two ranked variables.

Unlike Pearson’s correlation, which assumes a linear relationship between variables, Spearman’s is non-parametric, meaning it doesn’t require the data to meet assumptions like normal distribution or linearity.

![Spearman's Rank Correlation Formula](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6750906596675c0f52cd3b5c_AD_4nXcqGXRl-67WRknRkT9TUh59jtYerPUwfu0uZekaFEvGHZn7YvSQbcen-cw0YvamzaKsTMRYiUaBOI2aH-dZRBKvVncMi3rrLzBmnyGQM3LE2GjLWgt87MGayICleYhxDULOg1hg.png)

**When to Use It?**

Best for analyzing monotonic relationships (variables move together consistently in one direction but not necessarily at a constant rate), especially in **larger datasets** or when the goal is a quick and general understanding of the relationship between two variables.

#### Kendall's Tau

Another non-parametric measure used to assess the ordinal association between two measured quantities. It is particularly valuable when dealing with small sample sizes or ties within data sets.

![Kendall's Tau Formula ](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090651f8034a51f92769a_AD_4nXdmtexrZzcEMOLc9IwVjl4Mqit1xbBuUQxh3aL94Tg-0rW8nYPYOh53_f4SGiZz7mOG1UI4touVxBP_FYUdH8mZekKTdIXPNQuFyrPY5W2KRoQbOea8rtQJV9jzGJrX6pTwdpMWrQ.png)

**When to Use It?**

Use **Kendall's Tau** when working with ordinal data—data that can be ranked but lacks uniform intervals between values. This method is particularly well-suited for skewed distributions or datasets with outliers, as it is robust against their influence. Additionally, Kendall's Tau is especially useful when dealing with small sample sizes, providing reliable insights into the strength and direction of associations.

### Example of Correlation

Consider a business context where understanding correlations can guide strategic decisions:

A retail company might analyze customer purchase data to identify correlations between product categories. A positive correlation between winter clothing and accessories would indicate that customers who buy winter clothing are more likely to buy related accessories as well.

Grasping the nature of correlation aids you in unveiling significant relationships within your data without jumping to causation conclusions. By recognizing whether correlations are positive, negative, or nonexistent, you gain valuable insights that inform decisions across sectors.

### Correlation in Product Analytics

Correlation in product analytics plays a crucial role in identifying key drivers of success by pinpointing behaviors or actions strongly associated with desired outcomes such as retention, conversion, or engagement.

It helps optimize features by revealing which elements of a product are most linked to increased user satisfaction or monetization. Additionally, it enables better user segmentation by grouping users based on correlated behaviors, allowing for more targeted marketing and product development strategies.

Correlation analysis supports prioritizing hypotheses for testing by highlighting relationships that warrant further exploration through causal experiments like A/B testing.

### Correlation in Business

By identifying relationships between variables, businesses can prioritize strategies that deliver the greatest impact, ensuring decisions are grounded in data. Enabling effective resource allocation, such as focusing on factors with a strong correlation to customer satisfaction to improve overall experience.

Additionally, it aids in forecasting trends, like predicting sales based on economic indicators, allowing companies to stay ahead in competitive markets.

Correlational analysis serves as a foundational tool for business problem-solving, offering a critical first step in uncovering meaningful patterns and relationships within data.

## Causation Definition

While correlation can suggest some level of association between variables, causation takes it a step further by establishing a direct cause-and-effect relationship. It implies that a change in one variable directly results in a change in another.

To establish causation, it is essential to demonstrate that the relationship isn't due to any confounding variables or coincidences. Unlike correlation, which can be calculated using various statistical measures, causation often requires more rigorous experimental or observational studies to prove.

### Evaluating Causation

To evaluate causation effectively, controlled experiments are typically necessary. These experiments often involve manipulating one variable (the independent variable) and observing the effect on another variable (the dependent variable). This approach helps in isolating the direct impact of one factor over another.

Suppose your team notices a correlation between the number of push notifications sent and an increase in daily active users (DAUs) for your product. While this might suggest that push notifications drive higher engagement, correlation alone doesn’t confirm causation.

Before running controlled experiments, it's essential to formulate clear hypotheses. A well-defined hypothesis provides direction for the experiment and ensures the analysis focuses on answering specific questions.

To evaluate causation effectively, you would run a controlled experiment, such as an A/B test. In this case:

- **Independent Variable (manipulated):** Frequency of push notifications (e.g., once daily vs. three times daily).
- **Dependent Variable (observed):** Change in daily active users (DAUs).

You could randomly split your users into two groups:

- Group A receives one push notification daily.
- Group B receives three push notifications daily.

By comparing the DAU metrics between these groups while keeping other factors constant, you can determine if the increased frequency of push notifications directly causes higher engagement or if the observed correlation was influenced by another factor, such as a seasonal spike in user activity.

![A/B Test Example of Impact of Notification Frecuency on DAUs](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6750906692503f14c2cc642a_AD_4nXd7es2xT34KRxb7Gq8eQog_bqN2gxcxnv_wArHqwmNJiPVOzbvksDXyX7N4ymDOQXDjaCahEpa1rxkxkI6vv-TOy4Czy8saxUa_q8mwvPPUKRgBq4gSR2aS-Pmhl06b9mZJRfZNaw.png)

### Causation Analysis Methods

#### Randomized Controlled Trials (RCTs)

RCTs involve randomly assigning users to groups to compare outcomes between a treatment group (experiencing a new feature or intervention) and a control group (retaining the current version).
**Why It Matters**: Randomization minimizes the impact of confounding variables like user demographics, behavior patterns, or external trends. It ensures that observed changes are due to the tested variable.
**Example**: If a product team introduces a new onboarding flow, they can use RCTs to test its impact. Users are divided into two groups: one exposed to the new flow and the other to the existing one. By comparing user activation rates, the team can determine whether the new flow improves activation.

#### Longitudinal Studies

These studies observe the same set of users over an extended period, providing insights into how product changes influence behavior and metrics over time.
**Key Advantage**: Unlike snapshot-based methods, longitudinal studies can reveal trends and whether effects (e.g., improved engagement or retention) persist or fade.
**Example**: After releasing a gamification feature, a company tracks retention rates for users who joined before and after the feature was introduced. This helps assess the feature's long-term impact on user activity.
**Use Case**: Understanding the sustainability of increased activity from new features, such as a loyalty program or interactive tutorials.

#### Controlled Experiments

These experiments isolate and test specific variables in a controlled setting (e.g., beta groups or sandboxes), allowing precise measurement of their effects.
**Strength**: By controlling the environment, teams can confidently attribute observed changes to the tested variable rather than external influences.
**Example**: Before rolling out a new subscription pricing model, a company tests it on a small, representative user subset. If subscription rates improve significantly, the model can be scaled to the broader audience.

#### Statistical Controls

Statistical methods (e.g., regression analysis, propensity score matching) are used to adjust for confounding variables in non-experimental data. These methods approximate causation in scenarios where experiments are impractical.
**Why It’s Useful**: Some situations, like analyzing past data or understanding the impact of unplanned product changes, don’t allow for A/B testing. Statistical controls help isolate the variable of interest.
**Example**: A product team studies how push notifications affect retention. By controlling for variables like user activity, geographic location, or device type, they isolate the true impact of the notifications on user behavior.

#### Causal Discovery Algorithms

Algorithms like the PC Algorithm or LiNGAM analyze data to uncover causal structures and identify confounding variables.
**Example**: A company uses causal discovery to identify how user demographics (e.g., age, location) and app usage patterns influence the likelihood of subscribing to a premium plan. This insight informs targeted marketing and feature prioritization.

#### Residual Analysis

After building a model to predict an outcome, residual analysis examines the differences between predicted and observed values. Patterns in residuals can reveal overlooked variables.
**Example**: A company observes that satisfaction scores are systematically higher for users in a specific region, even after controlling for known factors like app usage and support interactions. This suggests there are unidentified regional influences on satisfaction.

#### Statistical Associations

Identifies variables correlated with both independent (cause) and dependent (effect) variables using statistical techniques such as correlation analysis, chi-square tests, t-tests, or ANOVA.
**Example**: A team investigating churn discovers that users’ time since sign-up correlates with both feature adoption and churn rates. This insight helps them tailor re-engagement strategies for newer and older users.
**Techniques**:

- **Correlation Analysis**: Reveals relationships between variables (e.g., feature usage and retention).
- **Chi-Square Tests**: Determines associations between categorical variables (e.g., user segment and feature preference).
- **T-Tests/ANOVA**: Compares means across groups (e.g., comparing satisfaction scores across regions).

### Causation in Product Analytics

Product analytics relies heavily on establishing clear causal relationships to drive meaningful improvements. When analyzing user behavior and product performance, grasping causation helps you:

**Feature Impact Assessment**: Determine if specific feature releases directly influence user engagement

**User Journey Analysis**: Identify which product changes genuinely cause increased conversion rates

**Performance Metrics**: Track how system optimizations directly affect load times and user satisfaction

To establish causation in product analytics, you'll need to implement:

**Controlled Experiments**

- A/B testing different user interfaces

- Feature rollouts to segmented user groups

- Staged deployments with control groups

‍

**Time-Series Analysis**

- Before-and-after performance comparisons
- User behavior tracking across product iterations
- Sequential pattern monitoring

‍

**Key Consideration**: When analyzing product metrics, focus on isolating variables to establish true causation rather than mere correlation. For example, a spike in user engagement might coincide with a new feature launch but could actually be caused by seasonal trends.

Product teams must employ *rigorous methodologies* to validate causal relationships, including:

- Statistical significance testing
- Multi-variate analysis
- Cohort comparisons
- User feedback validation

### Causation in Business

In business decision-making, accurately identifying **causation** is essential. For example, a company might observe increased sales following a new advertising campaign. To determine if the campaign directly caused the sales boost, conducting controlled experiments or A/B tests is essential. These methods help establish whether the advertising strategy (cause) directly influences sales (effect), distinguishing it from coincidental trends or external factors.

Recognizing true cause-and-effect relationships enables businesses to implement strategies backed by solid evidence, ensuring actions are both effective and efficient.

## Essential Tools for Early-Stage Startups to Analyze Correlation and Causation

Startups often face challenges in navigating the complexities of data analysis, particularly when distinguishing correlation from causation. Specialized tools and consulting services can play a crucial role in bridging this gap. Analytics platforms like **Amplitude**, **Mixpanel**, and **Google Analytics** help startups track user behavior and uncover correlations that provide valuable insights into user interaction patterns. These tools act as a foundation for understanding how users engage with a product and identifying trends that may inform strategic decisions.

However, correlations alone do not tell the full story. Establishing **causation** is essential for startups to understand the true impact of their actions.

Experimentation platforms such as **Optimizely**, **LaunchDarkly**, and **Statsig** allow startups to run controlled tests, like A/B testing, to uncover which strategies, features, or changes directly contribute to growth.

For early-stage startups without dedicated data expertise, hiring consultants or leveraging pre-built analytics frameworks can be a game-changer. Beyond analytics, crafting a comprehensive business plan serves as a roadmap, clearly defining your vision, goals, and the steps to achieve them.

### Using Amplitude Analytics for Correlation Analysis

[Amplitude's Compass chart](https://amplitude.com/guides/product-analytics) is a powerful tool designed to help you understand how specific user actions correlate with retention. By analyzing the relationship between user events and retention rates, you can identify behaviors that significantly impact user engagement and product growth.

A widely cited example of using correlation in startups is focusing on key user behaviors that drive retention. For instance, if adding friends within the first week shows a strong correlation with second-week retention, this behavior becomes a priority for optimization. Analytics tools can display how different frequencies of the event (e.g., adding one friend versus multiple friends) correlate with retention rates, helping teams identify thresholds for impactful user engagement.

To interpret these values, Amplitude classifies correlations as:

- **Highly Predictive**: correlation ≥ 0.4
- **Moderately Predictive**: 0.3 ≤ correlation < 0.4
- **Slightly Predictive**: 0.2 ≤ correlation < 0.3
- **Not Predictive**: correlation < 0.2

### Compass Feature

The Compass feature in Amplitude empowers teams to uncover key behaviors that drive user retention by analyzing correlations between specific events or properties, aiding in pinpointing behaviors that forecast user retention.

### Reading the Compass Chart:

When you open a Compass chart, it displays a heat map highlighting the correlation between various user events and retention. This visualization allows you to quickly identify which actions are most associated with users returning to your product. You can sort the data by different time frames to observe how correlations change over time.

![Compass Chart screenshot from Amplitude Analytics](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065593510e177b8aa47_AD_4nXfjsGGfta8qAoCox_zH-CHUsw4WMz2rvkRA6urytqhveb7gI19MxqzvuLyth4F-M1DJIA-HCRPQdp1PbUnhAl7i2aVXO-oYCmSDl3gLPS-5xdwo5O4t5ZYwe9n8D64K50SWCbi_.png)

**Funnel Analysis:** In conversion driver analysis, correlation evaluates the association between user actions and their progression or dropout within a funnel, helping identify factors influencing conversion rates.

Amplitude's **Conversion Drivers** feature is a robust tool designed to help you identify user behaviors that influence conversions or drop-offs within your product. By using this feature, you can uncover correlations between specific events and properties.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065f57d27dc42e95867_AD_4nXf5LxS1Z_M0Ty3YYLItNEchd8AXkwP2vjYy3dPObg5-1bUAqENXUp6M0DTOuVdRJ3alNgDmKpk3BPEY68goCqQ8ilYcuWeDFyPrg_kG6oejmedXQh2VwTC64gSkb5rJoLv1akiqvA.png)

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065e4b43ea330b0d3d0_AD_4nXdMRzbJQm8KERvoQpDrI2VcV2jfCFeXlGpUj4orMup5MBOBc949pN-tb3bD_fqaZaTlyc8-urF8ORFl3MAONV4ubCi-HqEloEy-x7gIKw3rz_gKfi5vty_vK6miLVNRYtg3YQz7qA.png)

**Statistical Significance: **With Compass, you can enable or disable the 95% confidence interval for correlation. Simply click the blue numerical text on the right side of the table to reveal the interval displayed in the left-side bar chart.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090656703ca21e6282b97_AD_4nXeCUeDAjJDPmDvL6UghhL0a1n-xciHa1GW1-7FRg2GhRMWHdzMqXiS8DKeJNd3s3ApfwDr9l99OF7a-5NEUhst39YMiWxUuY0mYGDh67JvIqgmjXcf-J5yfOI8vn5pW9BTmYg1c5Q.png)

‍

## Applications of Correlation and Causation in Product Analytics

### Causal Machine Learning applied by Netflix

[Netflix](https://www.youtube.com/watch?v=UjQMEjkrUGo) observed a correlation between sending more notifications and a decrease in viewing time. However, further investigation revealed that this didn’t mean notifications directly caused lower engagement. The real explanation lay in a **hidden confounder**—the time of day. Users were naturally more likely to check messages and watch Netflix after work, creating a misleading connection between notifications and reduced viewing time.

The company addressed the challenge of distinguishing correlation from causation by implementing a solution rooted in **causal machine learning techniques**. To uncover the true relationship between notifications and user behavior, they introduced **randomization** into their system.

![ Director of Machine Learning at Netflix Explaining Causal Machine Learning Applied](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/67509065e0dfbd3414ba4169_AD_4nXfGSEXy2BbjBw38eNS0lspyO4bdFDkH4g_JNAAyrOKOD5WoncywcKkt2P3OhTkcfkiG4aqwCh6clTaOycDHbZnpFUrQKqQqpv-5Zg79iTkvllXMZV1fh7WxU2XhX3S5PYFyWVAHRw.png)

#### The Solution: Randomization

Netflix broke misleading correlations by deliberately varying the number and timing of notifications sent to users. This randomness helped disentangle the effect of notifications from external factors like the time of day, allowing them to measure the direct impact on user engagement.

#### It Involved a Two-Stage Learning Journey

**Stage 1:** Netflix analyzed how the randomization (e.g., frequency of messages) influenced the actions taken (e.g., notifications sent to users).

### Initial Measurement: Ordinary Regression

The top chart shows the results of a simple analysis (ordinary regression). This analysis wrongly suggests that emails and push notifications **reduce streaming** because the bars for these messages are below zero. Only in-app notifications are shown to have a positive effect.

However, this conclusion is misleading because the simple analysis doesn’t account for **hidden factors** (like time of day) that can affect both messaging and streaming.

![Causal Learning for Messaging Chart results from Netflix](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090665d849830427e0174_AD_4nXdZli5nYpWXT8_RSK3Jrpv0CYMWBvTaWLp_NYzH_oPz8fR6nCdY-Ry50DvxW64jWr5LQY4PCLTm221HSRFa6EPaxQVCoEURF5XNj_2a_KYF7JHw0i5RnDQG3ETdU9mlhGkC-kJ__g.png)

### Bottom Chart: 2SLS Regression

The bottom chart shows the results of a more advanced analysis called **2SLS Regression** (Two-Stage Least Squares), which uses randomization to find the true cause-and-effect relationship.

![Causal Learning for Messaging in Netflix](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090656160e9733c1e5eb0_AD_4nXdm9er-CYC9KgofSRwFVIv3-Qi0L2KXGoGJqkHFNrXpwCf-4MuDHYSfW3H9JWHCpGUWNR98y42t1Il5vOKdKaY78ToZxOn-n45XwixEJXX-jJ0N5P-4DO536XkuQyP2YXdxL9SooA.png)

Here’s what it shows:

- Emails, push notifications, and in-app notifications all **increase streaming**, as all bars are above zero.
- Push notifications have the biggest positive impact.
- The method removes misleading correlations caused by hidden factors.

**Stage 2:** Using this information, they predicted the true impact of those actions (e.g., how messaging affected viewing time).

This structured approach revealed the **actual causal effects** of notifications, avoiding the inaccuracies of correlation-based models.

#### The Outcome

By focusing on causation, Netflix achieved:

- **Smarter interventions:** Improved decisions about when and how to engage users with messaging.
- **Deeper insights:** A clearer understanding of how notifications influence user behavior, leading to a more engaging and personalized experience.

### Worthy.com Optimized Contact Decisions with Causal Inference

[Worthy.com](https://arxiv.org/pdf/2207.01722), an online marketplace for pre-owned jewelry, faced a challenge: optimizing the contact decisions made by Account Executives (AEs) to increase the rate at which potential sellers delivered their items for auction. The inefficiency of their current strategy led to wasted resources and missed opportunities to engage sellers effectively.

#### Defining the Scope of Intervention

To refine their strategy, researchers focused specifically on **the first contact attempt made by AEs each day**, as this initial interaction heavily influenced subsequent communications. They excluded cases where:

- The seller initiated the first communication.
- Pre-scheduled calls were already in place.

This narrowed scope allowed the researchers to evaluate and optimize a key part of the AE workflow.

![Case Study Screenshot: Worthy.com Optimized Contact Decisions with Causal Inference](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090651434c2cbab4e82e0_AD_4nXeH8iqBpPzch5IAxjZ1nrdXsoex0M7gxGOTKDaAiEFgSfmAKp8Qwq_t9PFZM1XHo--w13DUUtjB09mvIe6w3RqERaWu0A66BropqqDxjHIVM823nAIQgIJnY-1MxilZEBwxtLV0MA.png)

#### Data Collection and Analysis

The team analyzed **three years of historical data** to uncover patterns in AE interactions. They examined the relationship between AE-initiated communication ("contact") and item delivery within three months of registration. Importantly:

- **Contact:** Defined as any AE-initiated outreach on a given day.
- **No Contact:** No AE communication with the lead on that day.

#### Choosing the Intervention Day

The impact of contacting a seller varied depending on the day after registration. After analyzing multiple days, the researchers determined that optimizing contact on the **first day after registration ("day 1")** had the highest potential value for improving item delivery rates.

#### Causal Inference Approach

To identify which leads would benefit most from AE outreach, researchers used **causal inference techniques** to estimate the **Conditional Average Treatment Effect (CATE)**. This measures how much a seller’s likelihood of delivering an item increases when contacted by an AE versus not being contacted.

The team trained an ensemble of uplift random forests—a machine learning technique designed to model and predict the causal impact of an intervention—using historical data to estimate the Conditional Average Treatment Effect (CATE) for each lead.

#### Policy Development

Based on the CATE estimates, the team developed a **targeted contact policy**:

- **Contact leads with positive CATE values.** These were the sellers most likely to deliver their items if contacted.
- This approach prioritized quality over quantity, ensuring AEs focused their efforts where they would have the most impact.

#### Off-Policy Evaluation (OPE)

Before implementing the new policy, researchers applied Off-Policy Evaluation (OPE), a method that estimates a policy's performance using data gathered under a different policy. By leveraging historical data, they assessed the potential impact of the new approach. The results indicated that the new policy would significantly outperform the existing strategy, providing confidence in its effectiveness.

#### A/B Testing: Validating the Results

To confirm the OPE findings, the team conducted a **randomized controlled trial (A/B test)** over three months:

- **Treatment Group:** AEs followed the new policy recommendations.
- **Control Group:** AEs continued using the existing approach.

The results were clear:

- The treatment group saw a **22% increase in the item delivery rate**, validating the effectiveness of the new policy.

#### Key Findings and Insights

- **Causal Inference Adds Value:** The study demonstrated that understanding causation, rather than just correlation, leads to better business decisions.
- **Targeted Outreach Works:** Contacting more leads indiscriminately is not always better. Focused efforts on the right leads yield better outcomes.
- **Timing Matters:** The first day after registration proved to be the most critical for effective contact.
- **Human-AI Collaboration:** The integration of human decision-making with AI-driven recommendations created a highly effective workflow.

![Worthy.com screenshot of Results of Causal Inference](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/675090652c9d46bb6b62c934_AD_4nXe2sIMo9SSWZKwHms43ZnNVhnQ98coqDCmerznlUo-SjnCypj0kRGdIt6D0QlbkrpFYuptcXoPWuWsNs0CNxqVFZbCaIwEamVwhin4_-Bt6Pabcloe_kS_kiYwmiNLeZsG65jTl6g.png)

#### Limitations

While the results were promising, the study acknowledged some limitations:

- It used **item delivery as a proxy for sales and profit**, not direct profitability.
- Hidden confounding factors might still exist.
- Policies need periodic updates to adapt to changing customer behavior and business environments.

Uncovering causal relationships often demands rigorous and extensive experimentation, as demonstrated in these two case studies. [Jeff Bezos](https://youtube.com/shorts/72jWeAepP5Q?si=fxncwP6rC0eTH6uA)  aptly highlighted this when he stated, “In technology, outcomes often have long tails, where the payoffs are highly asymmetric. This is exactly why embracing extensive experimentation is so crucial.”

Riley Harbour, Head of Business Development at Grammarly, also emphasizes the importance of experimentation stating:

"Constant iteration and learning are always top of mind for us—it's all about experimentation. While product-qualified leads are often viewed as a science, as you move further upmarket, it becomes a blend of art and science."

Rigorous testing is essential to distinguish between simple correlations and true causation, especially in scenarios where decisions could lead to disproportionately high-impact outcomes.

## Correlation vs. Causation: When It Goes Wrong and How to Fix It

### Common Pitfalls in Understanding Correlation

#### 1. Overgeneralizing Results

The significance of a correlation coefficient depends on the context and the field of study. A correlation value that is considered strong in one discipline might be seen as weak in another. For instance, social sciences often accept lower correlation values as meaningful, whereas fields like physics demand much higher values for significance.

**Example:** A correlation of 0.30 might hold importance in psychology but be dismissed as insignificant in engineering.
**Tip:** Always evaluate correlation strength within the specific standards and expectations of the field or application.

#### 2. Ignoring Outliers

Outliers—extreme or unusual data points—can have a significant impact on correlation results. These data points may artificially inflate or deflate the correlation coefficient, leading to misleading interpretations about the strength or direction of a relationship.

**Example:** A single unusually high or low value in a dataset could make a weak correlation appear strong or vice versa.
**Tip:** Always identify and assess the influence of outliers when interpreting correlation results.

#### 3. Using the Wrong Statistical Methods

Applying statistical methods that do not suit the data or its relationship can lead to incorrect conclusions. Correlation coefficients and methods like linear regression are designed for specific types of data and relationships, such as linear patterns. Using these methods on non-linear data can result in errors.

**Example:** Analyzing data with a clear curved relationship using linear regression will fail to capture the true pattern.
**Tip:** Understand the assumptions and limitations of statistical tools before using them.

#### 4. Neglecting Context and Domain Expertise

Data analysis without considering historical, social, or situational contexts often leads to irrelevant or incomplete conclusions. Trends or patterns in the data may be influenced by factors not immediately visible without domain knowledge.

**Example:** A correlation between reduced sales and a marketing strategy change might actually be influenced by external economic conditions.
**Tip:** Collaborate with domain experts to gain deeper insights and ensure contextually accurate interpretations.

#### 5. Underestimating Sample Size Effects

The reliability of correlation analysis depends heavily on the sample size. Small samples tend to produce random or spurious correlations, while larger samples provide more stable and generalizable results.

**Example:** A correlation observed in a sample of 15 participants may not hold true in a larger, more representative dataset.
**Tip:** Use adequately large sample sizes to support robust and meaningful analysis.

#### 6. Overlooking Nonlinear Relationships

Correlation coefficients are designed to measure linear relationships and might not reveal meaningful nonlinear patterns. Two variables may have a significant relationship that is not captured by a linear analysis.

**Example:** A U-shaped relationship between stress and productivity might yield a correlation coefficient close to zero, even though a strong relationship exists.
**Tip:** Explore alternative statistical measures or visualizations to identify nonlinear relationships.

### Common Pitfalls in Understanding Causation

#### 1. Mistaking Correlation for Causation

One of the most common errors is assuming that a correlation between two variables means one directly causes the other. However, correlation only indicates that the variables change together, not that one is the reason for the change in the other.

**Example:** A rise in ice cream sales and an increase in drowning incidents may appear related, but both are actually driven by warmer weather.
**Tip:** Always recognize that correlation alone does not prove causation.

#### 2. Hidden Variables

Unseen factors, also known as confounding variables, can influence both variables under consideration, creating the illusion of a direct connection. These hidden variables often lead to false conclusions if not properly identified.

**Example:** Students in smaller class sizes might show better academic performance, but the real reason could be better funding or resources in schools with smaller classes.
**Tip:** Identify potential confounding factors and use methods like multiple regression or causal inference to account for them.

#### 3. Overlooking Temporal Sequence

For a cause-and-effect relationship to exist, the cause must occur before the effect. Failing to establish this order can result in incorrect conclusions about how variables influence each other.

**Example:** A sports team hires a new coach, and performance improves, but the change could be due to new players or an easier schedule rather than the coach’s impact.
**Tip:** Verify that the proposed cause precedes the effect chronologically.

#### 4. Falling for Spurious Correlations

Two variables can appear to be related purely by coincidence or due to an external factor influencing both. Such false relationships, called spurious correlations, can lead to misguided conclusions.

**Example:** A correlation between shoe size and reading ability might exist because older children tend to have larger shoes and better reading skills, not because of any direct relationship.
**Tip:** Investigate external influences and ensure the relationship is genuine.

#### 5. Misjudging Reverse Causality

Reverse causality occurs when the true effect is mistaken for the cause. This error can significantly distort the understanding of the relationship between variables.

**Example:** Increased coffee consumption might be seen as boosting productivity, but it could be that productive individuals are more likely to drink coffee.
**Tip:** Carefully analyze the direction of influence to avoid misinterpretation.

#### 6. Neglecting Confounding Variables

Confounding variables can make it seem like there is a direct link between two factors when, in reality, an external factor affects both. Without accounting for these variables, conclusions may be inaccurate.

**Example:** Fitness app users might lose weight, but their success could stem from pre-existing motivation to exercise rather than the app itself.
**Tip:** Use controlled studies or advanced statistical techniques to account for confounding variables.

#### 7. Using Small or Unrepresentative Samples

Drawing causal conclusions from small or biased samples often leads to results that are not applicable to a broader audience. Small samples are particularly susceptible to random variation.

**Example:** A study conducted on a few volunteers may not reflect trends in the general population.
**Tip:** Ensure samples are sufficiently large and diverse to produce reliable results.

#### 8. Data Errors and Noise

Mistakes in data collection or classification, or inconsistencies in the data itself, can obscure true patterns or create false ones. This "noise" can exaggerate or mask the actual effects.

**Example:** Misrecording sales data might create the illusion of a trend that doesn’t exist.
**Tip:** Prioritize accurate data measurement and cleaning to minimize errors.

#### 9. Overreliance on Statistical Methods

Statistical models can reveal patterns but are often insufficient for confirming causation without additional reasoning or context. Theoretical understanding is essential to interpret results meaningfully.

**Example:** A statistical model might show a link between advertising spend and sales, but other factors like seasonality may also play a role.
**Tip:** Combine statistical tools with theoretical frameworks, like Rubin Causal Model, Directed Acyclic Graphs (DAGs, Structural Causal Model (SCM), Causal Bayesian Networks or Regression Discontinuity Design (RDD) to validate conclusions.

#### 10. Cognitive Bias

Human bias often leads to oversimplified or premature cause-and-effect conclusions. People are inclined to favor stories that fit preconceived notions, even when evidence is incomplete.

**Example:** A retailer notices a sales spike after adding checkout signs and assumes the signs caused it, ignoring a concurrent store-wide promotion.
**Tip:** Challenge assumptions, seek alternative explanations, and design experiments to test hypotheses thoroughly.

## Conclusion

Getting to causation isn’t just about spotting patterns—it’s about proving them, and that’s where the real challenge lies. Causation isn’t something you stumble upon; it’s something you uncover through time, rigorous experimentation, and a commitment to digging deeper.

The story behind the data is rarely straightforward. Hidden variables, timing issues, and cognitive biases often obscure the truth, making it harder to discern what’s truly driving outcomes.

Analyzing causation requires both domain expertise to interpret contextual nuances and iterative testing to validate hypotheses. It’s a time-intensive process, but it’s essential for ensuring decisions are grounded in robust evidence, not assumptions or coincidences. Understanding the distinction between correlation and causation is critical to making data-driven choices that are both accurate and impactful.

Analysts should prioritize proper statistical methods in their work. Techniques like randomized controlled trials or longitudinal studies enhance the reliability of your findings. This approach not only strengthens the validity of your conclusions but also builds trust in your analytical capabilities.

**Key Takeaways:**

- **Informed Decision-Making:** By distinguishing causal relationships from mere correlations, businesses can avoid common pitfalls such as spurious relationships that might lead to misguided strategies.
- **Enhanced Risk Management:** Accurate interpretation of data ensures better risk management practices, protecting your company’s reputation and resources.
- **Strategic Insights:** Delving into causal analysis provides deeper insights into the dynamics influencing business outcomes, fostering innovation and growth.
