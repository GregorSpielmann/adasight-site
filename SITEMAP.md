# Adasight.com — Sitemap

**Last updated:** 2026-03-24
**Source of truth:** This file + [Notion Sitemap page](https://www.notion.so/329cfd6d815181228fb9fa28ef082cb9)
**Confirmed by:** Taha (design PDF, 2026-03-24)

---

## Navigation Structure

| Position | Nav Item | Type |
|----------|----------|------|
| 1 | Services | Mega-menu (4 columns) |
| 2 | Partners | Dropdown |
| 3 | Resources | Dropdown |
| 4 | About Us | Dropdown |
| 5 | Success Stories | Link → `/success-stories` |
| 6 | Blog | Link → `/blog` |
| — | Let's Talk | CTA Button → Cal.com |

### Services — Mega Menu

**AI & AI Agents**
- Amplitude AI Readiness → `/services/amplitude-ai-readiness` ✅
- Amplitude Implementation Enterprise → `/services/amplitude-implementation-enterprise` ⚠️ placeholder

**Workshops**
- Amplitude Fundamentals Bootcamp → `/services/amplitude-fundamentals-bootcamp` ⚠️ placeholder

**Experimentation**
- Experimentation Readiness Audit → `/services/experimentation-readiness-audit` ⚠️ placeholder
- Experimentation Foundation Programme → `/services/experimentation-foundation-programme` ⚠️ placeholder
- Experimentation Flagship Programme → `/services/experimentation-flagship-programme` ⚠️ placeholder
- CRO Program → `/services/cro-program` ⚠️ placeholder
- Conversion Hypothesis Workshop → `/services/conversion-hypothesis-workshop` ⚠️ placeholder

**Data & Analytics**
- Amplitude Data Audit → `/services/amplitude-data-audit` ⚠️ placeholder
- PostHog Audit → `/services/posthog-audit` ⚠️ placeholder
- Data Stack Audit → `/services/data-stack-audit` ⚠️ placeholder
- Analytics Retainer Light → `/services/analytics-retainer-light` ⚠️ placeholder

### Partners — Dropdown
- PostHog → `/partners/posthog` ✅
- Mixpanel → `/partners/mixpanel` ❌ not yet built
- Amplitude → `/partners/amplitude` ✅
- Statsig → `/partners/statsig` ✅
- Segment → `/partners/segment` ❌ not yet built

### Resources — Dropdown
- Playbooks, Tutorials & AI Plays → `/resources`
- Glossary → `/glossary`
- Downloadable resource docs → `/resources`

### About Us — Dropdown
- Our Expertise → `/expertise`
- Who We Are → `/about-us/who-we-are` ❌ not yet built
- Careers → `/careers`

---

## Full URL Inventory

```
adasight.com
│
├── /                                                    ✅
│
├── /services                                            ✅
│   ├── /services/amplitude-ai-readiness                 ✅ full content + FAQ
│   ├── /services/amplitude-implementation-enterprise    ⚠️ placeholder
│   ├── /services/amplitude-fundamentals-bootcamp        ⚠️ placeholder
│   ├── /services/experimentation-readiness-audit        ⚠️ placeholder
│   ├── /services/experimentation-foundation-programme   ⚠️ placeholder
│   ├── /services/experimentation-flagship-programme     ⚠️ placeholder
│   ├── /services/cro-program                            ⚠️ placeholder
│   ├── /services/conversion-hypothesis-workshop         ⚠️ placeholder
│   ├── /services/amplitude-data-audit                   ⚠️ placeholder
│   ├── /services/posthog-audit                          ⚠️ placeholder
│   ├── /services/data-stack-audit                       ⚠️ placeholder
│   └── /services/analytics-retainer-light               ⚠️ placeholder
│
├── /partners                                            ✅
│   ├── /partners/amplitude                              ✅
│   ├── /partners/posthog                                ✅
│   ├── /partners/statsig                                ✅
│   ├── /partners/mixpanel                               ❌ must build
│   └── /partners/segment                                ❌ must build
│
├── /resources                                           ✅
│   └── /resources/[slug]                                ✅ (16 items)
│
├── /glossary                                            ✅
│   └── /glossary/[term]                                 ✅ (112 terms)
│
├── /about-us                                            ✅
│   └── /about-us/who-we-are                             ❌ must build
│
├── /expertise                                           ✅ (linked under About Us > Our Expertise)
│   ├── /expertise/analytics-consulting                  ✅
│   ├── /expertise/experimentation                       ✅
│   └── /expertise/ai-agents-for-analytics               ✅
│
├── /success-stories                                     ✅
│   └── /success-stories/[slug]                          ✅ (20 case studies)
│
├── /blog                                                ✅
│   └── /blog/[slug]                                     ✅ (81+ posts)
│
├── /careers                                             ✅
├── /contact-us                                          ✅
├── /privacy-policy                                      ✅
├── /terms-of-service                                    ✅
└── /imprint                                             ✅
```

---

## Footer
- Main page links
- Expertise
- Tech partners
- Socials
- Contact
- Newsletter signup

---

## Pages Still To Build

| Page | Priority | Notes |
|------|----------|-------|
| `/partners/mixpanel` | High | Confirmed in nav |
| `/partners/segment` | High | Confirmed in nav |
| `/about-us/who-we-are` | Medium | New sub-page under About Us dropdown |
| 11 service page content | High | Currently placeholders — source: Notion Packages DB |

---

## Redirects Required (vercel.json — not yet built)

| From (old Webflow URL) | To (Astro) | Status |
|------------------------|-----------|--------|
| `/case-studies/*` | `/success-stories/*` | ❌ pending |
| `/partner/*` | `/partners/*` | ❌ pending |
| `/amplitude-audit-checklist` | `/resources/amplitude-audit-checklist` | ❌ pending |
| `/google-analytics-audit` | `/resources/google-analytics-audit` | ❌ pending |
| `/experiment-design-template` | `/resources/experiment-design-template` | ❌ pending |
| `/utm-template` | `/resources/utm-generation-sheet` | ❌ pending |
| `/growth-model-template-subscription` | `/resources/growth-model-template-subscription` | ❌ pending |
| `/growth-model-template-b2b` | `/resources/growth-model-template-b2b` | ❌ pending |
| `/experimentation-amplitude-playbook` | `/resources/amplitude-experimentation-playbook` | ❌ pending |
| `/playbook-growthbook` | `/resources/growthbook-starting-guide` | ❌ pending |
| `/the-amplitude-guides-surveys-playbook` | `/resources/amplitude-guides-surveys-playbook` | ❌ pending |
| `/integrated-product-marketing-analytics` | `/services` | ❌ pending |
| `/growth-experimentation-services` | `/services/experimentation-readiness-audit` | ❌ pending |
| `/legal` | `/privacy-policy` | ❌ pending |
| `/careers/*` | `/careers` | ❌ pending |
