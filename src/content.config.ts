import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Gregor Spielmann'),
    category: z.string().default('Analytics'),
    hero_emoji: z.string().default('📊'),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    result: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'case-studies': caseStudies };
