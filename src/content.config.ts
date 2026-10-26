import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    // 'brain' marks the posts carried over unchanged from the 2025 blog.
    from: z.enum(['brain']).optional(),
  }),
});

export const collections = { writing };
