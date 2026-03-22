---
title: "10 Amplitude Configuration Mistakes"
description: "Avoid common pitfalls in Amplitude configuration with our guide on the top 10 mistakes. Ensure accurate analytics for better decision-making."
author: "Adasight Team"
publishDate: 2023-07-19
tags: ["analytics"]
category: "Implementation"
readTime: "10 min read"
---

After running hundreds of Amplitude audits and implementation fixes, I have noticed some common errors in implementation and configuration. They cause blockers and issues right away, or even worse, you notice the impact weeks or months after collecting data.

To help you avoid these pitfalls, I have summarized the 10 most common Amplitude setup mistakes. In this blog post, I will explain what they are, and how to fix/avoid them.

## 1. Starting without a goal

As with any initiative, the clearer you are about what you are trying to accomplish, the less risk you are taking on of moving in a wrong direction.

This doesn’t mean that you have to have the whole desired state mapped out with events, charts, and research questions. But a great starting point is to be very clear of what problem you are trying to tackle and business objective you want to impact.

Once this is clear, you can roll back and define use cases, research questions, KPIs, critical events and data sources. And then, finally, you can think about the how: Which data do you need and how do you get it into Amplitude. Not the other way around.

## 2. Track events without a tracking plan

It’s tempting to get first events in as fast as possible, get some quick wins and play around with the data. But the fun is usually short-lived. If you are not mindful of what you want to track, and systematically map your events out, you risk the following:

- Gaps: Unclarity if critical journeys are mapped and possibly whole areas of the product are not covered
- Confusion for yourself and others: Events will be clear at the beginning, but how about in 3 months from now? Will future members know what the events mean and why they are there?
- Noise: A tracking plan allows you to be mindful about which events you really need for your use cases and questions. Without that, you will have a hard time to prioritize, and end up with a lot more events than needed.

## 3. Production and Live environment Project

If you only have one project in Amplitude, you risk having messy, internal data in your actual reports and analysis.

Within an Amplitude organization, you can (and should) create multiple Amplitude projects. You might have multiple independent products, which can be covered with multiple projects. But what anybody should have is two projects: One for development / testing and one for your live product.

The development project allows you and your development team to test our new tracking, similar as you do it in your regular development process.

The live environment is for your actual users, and where you run reports.

## 4. Exclude internal users

Similar to your development and test data, you don’t want internal users creating distractions in your live data project.

Especially if your product is early stage, with a small user base, even a few internal users can make a big, unwanted, impact.

”Nice! A few people already adopted our latest feature! Seems they really like it.”

”We have first highly engaged power users! Let’s learn more about them!”

You don’t want to have these exciting moments followed by the sobering realization that these users are your team, maybe even yourself.

Even worse: You don’t want to realize this after presenting your findings to your executive team or investors.

How to fix it: Define which identifier you are planning to use. You can block users matching these identifiers and block data from being sent in. Alternatively you can filter the data out for the project, or on chart level.

## 5. Events are not firing (and nobody notices)

With any new tracking implementation, events may still not fire as they were intended to.

I recommend to test within Amplitude, if the events are actually coming in as you, or the person defining the event, had in mind. Common things to look for:

- If the feature, or button, is available on multiple sections of the product, are they firing on all of those?
- Common sense check: Does the overall volume of these events generally make sense, and align what you could expect?
- Does the event come in also from different devices?

This list is not comprehensive, but gives a few starting points. You can test the data by finding yourself as user in “User Look-up” and enable “Realtime” data. From there you can follow which events are coming in, and how.

## 6. Events firing duplicate

I’ve seen cases where engagement KPIs were through the roof, and everybody was excited.

It was less exciting as some weeks later the team found out, that several events were coming in as duplicates, and consequently 2x the engagement for these actions.

Similar to the process described in *4. Events are not firing*, it’s best to also verify for duplicate events.

## 7. Not setting User IDs

If you have user IDs, e.g. in your CRM, I would recommend sending them in. Amplitude does set an Amplitude ID as identifier. Setting a user ID does come with a bunch of benefits in ensuring clean data over time.

When you set your user ID, make sure it’s nothing that the user can change themselves (e.g. email address). You can read more about User IDs in the Amplitude article [here](https://amplitude.com/glossary/terms/user-id).

## 8. Not sending session IDs

Sending in session IDs into Amplitude allows you to run more nuanced analysis around user behavior in the context of sessions. E.g. Holding session IDs constant in a funnel to only include users who have completed the funnel within the same session.

Dependent on the way you are sending data into Amplitude, you may have to configure this actively. The HTTP API for example does not set sessions IDs.

One way of checking if you are sending in session IDs, is to navigate to the event property (either in chart or in User Look up, for example), and check the value. If it is set to -1, you are not sending in a session ID for this particular event. If you have multiple data sources, check for different events and their session ID respective for each data source.

## 9. Sending in PII

This is one is an European favorite, but also increasingly relevant in other regions of the world, as data privacy regulations are tightening:

Be very mindful of which data you need to support your use cases. In the rarest cases you need PII in Amplitude. If you approach your setup thoughtfully (see 1. and 2. in this article), you will find that PII is either not adding value towards your use cases, or there are is an equally beneficial workaround without using PII.

Do you really need the IP address to drill down to the zip code, or is it fine to randomize the last 4 digits and report on city level?

Do you need the email address on user level, or would a pseudonymized (e.g. ID from your CRM) be just fine as well?

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6596d8613c17024d52f374d8_64c94232981a55e20b1180ff_IP%2520Address.png)

‍

## 10. Forgetting and not maintaining the tracking plan

I’ve seen teams put tremendous thought and effort in a close to perfect Amplitude setup, only to forget about maintaining it down the line.

Similar to a garden, it starts with a clear, thoughtful layout, but it only remains a nice, and productive garden if it is maintained this way or weeds and disorder will take over. To run with our metaphor a bit further, let’s look at some questions you will encounter, and should define an answer **before** the later come up:

- Who is allowed to bring new plants (events) and what process is there to decide on them?
- Who sets new plants (events)?
- Do old plants need to be removed or updated? Who does that, and in what frequency?
- Does the objective of the garden change over time (use cases)? If there should later also be an apple tree (marketing use cases), how is it incorporated into the layout (tracking plan and overall setup)?

The more pro-active you can be about this, the better. I have found once the moment of the question comes up, it is usually already to late, as others have taken the initiative in their own hand with good intention. Needing to stop enthusiasm in their tracks and redirect, hardly translates to a great start.

Amplitude offers an increasingly wide range of data governance and maintenance options within the UI, such as the new data assistant:

‍

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/6596d861f8e652c372bb8b13_64c9423e3135f5abf7919007_Screenshot%25202023-07-19%2520at%252008.01.25.png)

## Bonus: Use event properties

I often see event properties completely neglected or at least underused. Yet, they are one of your most powerful instruments you have to reduce event volume, while not sacrificing analytics depth. Reducing unnecessary event volume will not just increase the clarity for Amplitude users, but will make maintaining a high data quality over time so much easier and time efficient - trust me.

Always ask yourself, if an event needs to be a dedicated event, or if adding an event property serves the purpose just as well.

I’ve worked with teams starting with >100 events, and in close alignment reduce them down to <50 with the help of event properties, and the team was happy with the increased visibility and still being able to serve their research questions.

## Conclusion

While this list is not comprehensive, checking these boxes reduce the risk of your initiative with Amplitude straying off in the wrong direction.

Generally, I recommend never to lose sight of the initial goal and reason you planned to leverage Amplitude in the first place. It’s easy to get lost in the nitty gritty, once you are in the implementation process and the stakeholder circle expands.

After getting the setup right, be thoughtful of the path forward, and making it transparent and inclusive for other teams. It’s tempting to be protective of your (precious) Amplitude setup, but if the rules of engagement are clear: The more the merrier.At the end of the day, you want Amplitude to be adopted by a wide range of teams as self-serve platform as it serves your original stakeholders as well. I have found various teams can cross-pollinate their research questions and ideas. Eventually 1 + 1 will start to equal 3, and that’s where the (growth) magic happens.

I hope you find these inputs valuable. If you have any feedback or questions, feel free to reach out.**‍**

## FAQs‍

### ‍What are the common pitfalls to avoid when integrating Amplitude Analytics with Webflow for the first time?

To avoid common pitfalls when integrating Amplitude Analytics with Webflow, ensure correct SDK installation, accurately set up event tracking to reflect meaningful user actions, and avoid duplicating event names.

#### How can businesses ensure data accuracy and reliability after integrating Amplitude with Webflow?

Businesses can ensure data accuracy and reliability by regularly auditing event tracking configurations, validating data against known user interactions, and using Amplitude's verification features to check data flow.

#### Are there any advanced Amplitude features that can be leveraged specifically within Webflow to gain deeper insights into user behavior?

Leveraging advanced features in Amplitude, such as user segmentation, real-time analytics, and cohort analysis, can offer deeper insights into user behavior within Webflow, helping to tailor content and improve user experience.
