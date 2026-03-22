import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date().optional(),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Gregor Spielmann'),
    category: z.string().default('Analytics'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    hero_emoji: z.string().default('📊'),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    category: z.string().default('Analytics'),
    relatedTerms: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string().optional(),
    company: z.string().optional(),
    client: z.string().optional(),
    industry: z.string().default('Technology'),
    tag: z.string().default('Analytics'),
    result: z.string().optional(),
    description: z.string(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).default([]),
    testimonialQuote: z.string().optional(),
    testimonialAuthor: z.string().optional(),
    testimonialRole: z.string().optional(),
    logo: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['guide', 'template', 'checklist', 'report', 'playbook', 'webinar', 'prompt', 'custom-gpt']),
    downloadUrl: z.string().optional(),
    image: z.string().optional(),
    category: z.string().default('Growth'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, glossary, 'case-studies': caseStudies, resources };
