# NEUBLCK-Nachbau

Test von CloudCannon mit Astro – Nachbau der Startseite von [neublck.de](https://www.neublck.de).

## Lokal entwickeln

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Produktions-Build nach ./dist
npm run preview  # Build lokal ansehen
```

## Projektstruktur

```
src/
  components/        Header, Footer …
  content/
    blog/            Blogbeiträge (Markdown/MDX)
    team/            Teammitglieder (Markdown/MDX)
    pages/           Freie Seiten, z. B. Impressum (Markdown/MDX)
  content.config.ts  Schemas der Content Collections
  layouts/           BaseLayout
  pages/             Astro-Routen
  styles/            global.css (Tailwind v4)
public/              Statische Dateien (siteicon.png, uploads/)
```

## CloudCannon

- Die Collections `blog`, `team` und `pages` sind in `cloudcannon.config.yml`
  konfiguriert und im CMS unter „Inhalte" bearbeitbar.
- Uploads landen in `public/uploads`.

**Build-Einstellungen in CloudCannon (Site → Settings → Build):**

- Framework: **Astro**
- Build command: `npm run build`
- Output path: `dist`
- Node-Version: 20 oder höher

## Stack

- [Astro](https://astro.build) 5 (Static Output)
- [Tailwind CSS](https://tailwindcss.com) v4
- MDX, Sitemap
