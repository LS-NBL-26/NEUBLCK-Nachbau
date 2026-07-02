// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Live-URL der Seite – für Sitemap, RSS und kanonische Links.
  // Bei CloudCannon ggf. auf die Produktions-Domain anpassen.
  site: 'https://www.neublck.de',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
