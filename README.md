# Energy Policy Research

A static React + TypeScript website for energy policy research content. Built with Vite.

## High-Level Architecture

- **Stack:** React 19, TypeScript, Vite 7. Single-page static site; no router, no backend.
- **Data flow:** Content is defined in `App.tsx` (e.g. `RESEARCH_AREAS`, `RESOURCES`). Global styles and design tokens live in `index.css`; component layout/visuals in `App.css`.
- **Build:** `npm run build` produces static assets in `dist/` suitable for any static host (GitHub Pages, Netlify, S3 + CloudFront, etc.).

## Project Structure

| Path | Purpose |
|------|---------|
| `index.html` | Entry HTML; mounts `#root`, loads `src/main.tsx`. |
| `src/main.tsx` | React root; renders `<App />` with `index.css` applied. |
| `src/App.tsx` | Single-page layout: header, hero, research areas, resources list, about, footer. |
| `src/App.css` | Component-level styles (header, hero, cards, resources, footer). |
| `src/index.css` | Global reset, CSS variables (colors, fonts, spacing), base typography. |

No separate “system” or config assets; all content and structure are in the app component and styles.

## Running the Site

```bash
npm install
npm run dev    # dev server with HMR
npm run build  # production build to dist/
npm run preview  # serve dist/ locally
```

## Current State & Known Issues

**Implemented:**
- Sticky header with in-page nav (Research, Resources, About).
- Hero section with tagline and short description.
- Research areas grid (four placeholder cards).
- Publications/Resources list (placeholder items; links are `#`).
- About section and footer.
- Dark theme with Fraunces + Source Sans 3, teal accent, responsive layout.

**Immediate next steps:**
- Replace placeholder research and resource entries with real content.
- Point resource links to actual URLs or PDFs.
- Optionally add a custom favicon and meta description for SEO.
