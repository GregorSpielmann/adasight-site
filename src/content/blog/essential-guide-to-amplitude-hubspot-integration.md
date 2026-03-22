---
title: "How to do Amplitude HubSpot Integration"
description: "Master the Amplitude and HubSpot integration with our essential guide. Enhance your marketing and analytics strategy for optimal results."
author: "Adasight Team"
publishDate: 2025-07-03
tags: ["analytics"]
category: "Integration"
readTime: "10 min read"
---

Today we are going to talk about integrating Amplitude with HubSpot, a major CRM platform and a powerful marketing automation software solution. Both having rather comprehensive and multifunctional customer data solutions, HubSpot and Amplitude integrated together allow businesses to unlock a whole spread of automated marketing and data analysis capabilities to improve general understanding of their users, acquire valuable market insights, and resolve hidden growth-hindering issues.

But first, a few words about HubSpot and the most advantageous capabilities of integrating these two systems together.

## About HubSpot

Launched in 2008, HubSpot is a CRM platform that incorporates a selection of tools for sales and marketing automation, social media marketing, landing page creation and content management, web analytics, SEO, customer support, etc.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb28cc553cc1c5c7514489_fAPWO7x30_wRhvdCWvh6VJeJKCDROlYay_RkakDbl4e4A-7gyMkNLgzuxyODFvggdE99PJLqUfEuXGNiuJGCw8FuJ-HO7QH2tfpMXvZnaWit0PJd5V37TvC2tMeGT2H3aVqkbPiFFrUkYl4PqsRU-2M.jpeg)

HubSpot is recognized as one of the most influential CRM market software players. Even though its market share is not so impressive overall—around 5% according to [this source](https://www.google.com/url?q=https://6sense.com/tech/crm-platforms/hubspot-crm-market-share&sa=D&source=editors&ust=1707816496700678&usg=AOvVaw2OXfnsgOKRDl-rpuzOJxza),—in this abundantly competitive environment, this still grants HubSpot a place among the CRM software leaders popular for SMEs primarily. With the Salesforce CRM platform being an undisputed CRM market leader (Salesforce’s market share is around 25%), HubSpot is [being used](https://www.google.com/url?q=https://enlyft.com/tech/products/hubspot-crm&sa=D&source=editors&ust=1707816496701019&usg=AOvVaw0LH3J-y5PwvjprIUiKRsZH) by close to 10,000 companies worldwide. According to [this source](https://www.google.com/url?q=https://www.emailtooltester.com/en/blog/hubspot-market-share/&sa=D&source=editors&ust=1707816496701204&usg=AOvVaw3OVgvoT-dHjcUL9f075aUY), HubSpot’s share of the marketing automation market is more than 37%, and it keeps growing (in 2022, it was around 31%). Companies such as Fujitsu and Cisco Systems are among the enterprise users of HubSpot CRM.

## Features and benefits of HubSpot-Amplitude integration

The main purpose of integrating Amplitude with HubSpot is to utilize behavioral analytics and customer data processing capabilities of both platforms and synchronize datasets to generate insights and track marketing and sales operations performances in one place.

Here are the most crucial features of Amplitude-HubSpot integration:

- **Synchronization of Amplitude Cohorts with HubSpot Lists.**

Synchronizing Amplitude Cohorts with HubSpot allows you to manage all customer contacts and the relevant data saved as Amplitude Cohorts within HubSpot, using HubSpot Lists to create and send marketing emails to customers, filter customer contacts based on response and other behavioral characteristics, and create analytical reports to study the performance of your email campaigns.

- **Streaming of Amplitude Events to HubSpot.**

Integrating Amplitude with HubSpot enables businesses to stream their Amplitude Events to HubSpot, using the capabilities of HubSpot’s platform to visualize and centralize customer behavior information obtained with Altitude’s user data collection capabilities.

- **Importing HubSpot email campaign events to Amplitude.**

Finally, synchronization with Amplitude makes it possible for business owners to utilize this platform’s signature customer behavior analysis features on HubSpot’s data, specifically the email campaign response events, importing them to and processing with Amplitude.

## Guide 1. Synchronizing Amplitude Cohorts with HubSpot

The Amplitude platform supports a separate integration (default availability depends on your type of user subscription) of the so-called cohorts with HubSpot, synchronizing cohorts with HubSpot Lists with customer contacts to use them for centralized management of contacts, cross-platform email campaigns and other purposes enabled by this integration.

- What are Amplitude Cohorts?

Just to make sure we are all on the same page in regards to the cohorts, in Amplitude, cohorts are separate groups of users divided by a certain criteria such as behavior patterns, profile traits, available data, etc.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb28ccc934664e8ca84ca2_hS4lncWcwTzuOdzK2sKqMSOU15f-qRfHrllSDmDAbGpxoH292bIodUDCo1QnRfJ9Qkrwj1GSYJeuKyr7VDZ8WghTSlSE4hZAhBGJPb46eST55hmeW9WlrgMp1RF-li3Crt690zccxanfZSBgpOUGrww.png)

### Amplitude Cohorts to HubSpot integration setup

Given you have the access to the HubSpot integration within the Amplitude platform, setting it up should be fairly easy. Follow the steps outlined below to have it done:

- Go to Amplitude Data;
- Select Catalog, then go to Destinations tab;
- Select HubSpot in the Cohorts section;
- Log into your HubSpot account with OAuth authentication;
- Select Amplitude account with cohorts that you want to use for HubSpot integration;
- On the Amplitude Dashboard page, select identifiers to use for cohorts synchronization (Contact ID or email).
- Save the new settings.

While selecting the identifiers, note that choosing email leads to Amplitude creating a new email address contact in HubSpot if the user doesn't exist in HubSpot. In order to be able to choose Contact ID, it has to exist in HubSpot in long data type format.

### Sending Amplitude Cohorts to HubSpot

Once the integration is in place, sending cohorts from Amplitude to HubSpot is quite simple:

- Select required cohort in Amplitude;
- Click on Sync;
- Select HubSpot;
- Select required HubSpot account;
- Set synchronization cadence;
- Save.

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb28ccc7c2f8c40408e0da_SVSTvEQK-pWs13o7MJygku0eUnHkl6M5Y0X1z-18I3YTkGm3PUPHsygbIeHbsmSENA1sHITszHxdzK7l04-ny9OdE6g885VwzPaKNyTar53SvEEjhsOj05HbR_pPz_1Faodijfz4AEQkaK9oT5J8FIA.png)

## Guide 2. Streaming Amplitude Events to HubSpot

Creating an integration to stream Amplitude Events to HubSpot is a little more complicated compared to synchronizing the cohorts, and requires a number of settings to be in place.

Here are the steps to creating events streaming to HubSpot in Amplitude:

- Go to Amplitude Data, select Catalog, then select the Destinations tab;
- Go to Event Streaming section, select HubSpot;
- Create a name for this synchronization, then click Create Sync;
- Log into HubSpot;
- Enter HubSpot Event Name in the relevant field;
- Click on Select & Filter Events option to select the type of events you want to sync;
- Click on Map Properties to Destination to select the identifier used for this type of Amplitude-HubSpot integration;
- Click on Select Additional Properties to select event properties to use as part of the HubSpot integration;
- Save.

### Notes and settings required for a functional Amplitude Events to HubSpot integration

- Amplitude Events appear in HubSpot as Custom Behavioral Events.
- In order to be able to send Custom Behavioral Events in HubSpot, a HubSpot Enterprise Marketing Hub account is required.
- HubSpot integration should be active in all Amplitude projects events from which you’d like to use for HubSpot sync.
- HubSpot recommends using the events that are most important to your use case when setting up such integration.
- When choosing the event properties in the integration settings, note that by default the events are only filtered by type.

## Guide 3. Importing HubSpot email campaign events to Amplitude

Given both your Amplitude subscription plan and HubSpot account support this integration, sending HubSpot email campaign events to Amplitude is fairly easy to set up.

### HubSpot email events to Amplitude integration setup

- Go to Amplitude Data, select Catalog, then select Sources tab;
- Select Other Sources section and click on HubSpot;
- Click Connect to HubSpot and log into your HubSpot account;
- Select types of HubSpot email events that you want to send to Amplitude and click Next;
- Click on Finish.

These event types that can be generated by [HubSpot's Email API](https://www.google.com/url?q=https://legacydocs.hubspot.com/docs/methods/email/email_events_overview&sa=D&source=editors&ust=1707816496709808&usg=AOvVaw2KsWTBUrOzD6Ak-P8o4Zs3) during the lifecycle of an email message:

![](https://cdn.prod.website-files.com/6539206f401d118f32c193e5/65cb28cca14ac77de51b127e_1RB6cM55km_LAqmMmaLQyyKjM6x7sq7_qt18gkFIj50HusNNRMiQqY1vZ3G9l0Gvp71KJqWSzLYgfAY0DR5nudrYes0fsPvbO5ZN68fl6Atp4v6pj-Tlm4Mp9o4CyYvIaQZAiBEjFM9h1ZDv07N7cfA.jpeg)

### Requirements for a functional HubSpot events to Amplitude integration

- HubSpot events to Amplitude integration requires email address to be used as identifier and Server as the connection type;
- This integration doesn’t allow you to send to Amplitude custom events created in HubSpot, the ten events imported to Amplitude are generated by HubSpot's Email API.
- Also note that this integration has no support for sending HubSpot events to Amplitude's EU data center.
- Amplitude is able to track the following user properties associated with shared HubSpot email events: city, region, country, device operating system, and operating system’s version.
- The data imported from HubSpot to Amplitude can be found in the Ingestion Jobs tab (go to Sources and select HubSpot to see it).

## Final words

As you can see, in theory, integrating main Amplitude data modules with HubSpot and vice versa is fairly simple. That being said, there are a number of issues users can encounter when trying to set such an integration up. Here are some of the most common Amplitude-HubSpot integration problems:

- HubSpot Lists created but not populated;

- HubSpot Lists created but missing users;

- 403:Forbidden error message appears on one of the screens during the integration process for various reasons;

- Integrations created but no hourly data synchronization takes place.

These and other issues can be caused by a variety of reasons. Adasight’s [team of Amplitude certified Data Analytics experts](https://www.google.com/url?q=https://www.adasight.com/partners/amplitude&sa=D&source=editors&ust=1707816496712276&usg=AOvVaw0yAvAG2GQFSjNXlFqWiq8U) will make sure your Hubspot-Amplitude integrations are fully functional and error-free, providing the support you need across all the stages of this process, from integration setup to utilizing most effective data analysis and insights generation strategies.

[Book a free call](https://www.google.com/url?q=https://www.adasight.com/contact-us&sa=D&source=editors&ust=1707816496712661&usg=AOvVaw3kGdF_dZzKVkso5XVhpKme) with our expert now to discuss your Amplitude integration requirements, identify potential challenges, and find ways to maximize the value of this platform for the benefit of your business.

‍

## FAQs

‍

### How does this integration handle data privacy and consent management, especially under GDPR?

Integrations like Amplitude and HubSpot must incorporate data privacy and consent management features that comply with GDPR, typically through mechanisms for obtaining user consent, anonymizing data, and allowing users to access or delete their information.

### What are the specific challenges or limitations when integrating custom events beyond the basic setup?

Integrating custom events can present challenges like mapping unique event properties to HubSpot's schema, handling data volume and complexity, and ensuring data accuracy and consistency across platforms.

### Can this integration support real-time data updates, and if so, what are the limitations?

Real-time data updates are possible, but limitations might include network latency, API rate limits, and the processing capacity of each system, which could affect data synchronization speed.

‍

‍
