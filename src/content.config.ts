import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog-Beiträge – Markdown/MDX in src/content/blog
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Als String, damit CloudCannon ein Datums-Feld anbietet.
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('NEUBLCK'),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Team-Mitglieder – ein Markdown/MDX-File pro Person
const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      // Reihenfolge auf der Team-Seite
      order: z.number().default(0),
      photo: image().optional(),
      email: z.string().optional(),
      linkedin: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Freie Seiten (z. B. Impressum, Datenschutz, Über uns)
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, team, pages };
