import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Sammlung "pages": alle .md-Dateien in src/content/pages
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),   // "?" = darf fehlen
    hero: z.object({
      text: z.string(),
      highlight: z.string(),              // Der Textausschnitt, der markiert wird
      buttons: z.array(                    // Eine Liste von Buttons ...
        z.object({
          label: z.string(),
          href: z.string(),
          style: z.enum(['primary', 'secondary']),  // nur diese zwei erlaubt
        })
      ),
    }),
  }),
});

export const collections = { pages };