import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Sammlung "pages": alle .md-Dateien in src/content/pages
const pages = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),   // "?" = darf fehlen
        hero: z.object({
            text: z.string(),          // enthält jetzt HTML (Rich-Text)
            buttons: z.array(
                z.object({
                    label: z.string(),
                    href: z.string(),
                    style: z.enum(['primary', 'secondary']),
                })
            ),
        }),
    }),
});

export const collections = { pages };