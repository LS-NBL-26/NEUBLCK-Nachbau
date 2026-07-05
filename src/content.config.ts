import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Schema für EINEN Hero-Video-Baustein:
const herovideoSection = z.object({
  type: z.literal("herovideo"),
  video: z.string(),
  heading_line: z.string(),
  words: z.array(z.string()).default([]),
});

// Schema für EINEN Introtext-Baustein:
const introtextSection = z.object({
  type: z.literal("introtext"),
  text: z.string(),
  buttons: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        style: z.enum(["primary", "secondary"]),
      }),
    )
    .default([]),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sections: z
      .array(z.discriminatedUnion("type", [introtextSection, herovideoSection]))
      .default([]),
  }),
});

export const collections = { pages };