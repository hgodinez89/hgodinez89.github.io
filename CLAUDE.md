# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (http://localhost:4321)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run format     # Format code with Prettier
npm run deploy     # Build and deploy to GitHub Pages (gh-pages, master branch)
```

Output directory is `dist/` (not `public/` — that's Gatsby legacy).

## Architecture

**Astro 5 static site** — React 19 (islands only), Tailwind CSS v4.

### Pages & i18n

Astro's built-in i18n routing:
- `src/pages/index.astro` → `/` (English, default)
- `src/pages/es/index.astro` → `/es` (Spanish)
- `src/pages/404.astro` → 404 page

No `prefixDefaultLocale`, matching old Gatsby behavior. The `lang` prop (`'en'` | `'es'`) is passed explicitly from each page down to all components.

**Translation utility** — `src/i18n/utils.ts` exports `useTranslations(lang)` which returns a typed `t(key)` function. Used in both Astro components (server-side) and React islands (client-side). Type `Lang` and `TranslationKey` are exported from `src/i18n/ui.ts`.

### React Islands (client-side only)

Only interactive components use React. Static components are pure `.astro`:

| Component | Directive | Reason |
|---|---|---|
| `CardAbout.tsx` | `client:visible` | Day/night image toggle state |
| `Skills.tsx` | `client:only="react"` | britecharts requires DOM/window |
| `CardPortfolio.tsx` | `client:visible` | GitHub API fetch + sessionStorage |
| `ContactForm.tsx` | `client:idle` | EmailJS form state |
| `Social.tsx` | `client:visible` | Phrase rotator setInterval |

### Styling — Tailwind CSS v4

Tailwind v4 is configured via Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.js` or `postcss.config.js`.

- Entry point: `src/styles/global.css` — uses `@import "tailwindcss"` (replaces the three v1 directives)
- Custom CSS (toggle switch, slideshow, SVG fills, honeypot, etc.) lives below the import in `global.css`
- `body { background-color: var(--color-gray-100); }` — use CSS variables instead of `@apply` for base styles
- The removed class: `focus:shadow-outline` is replaced with `focus:outline-none focus:ring-2 focus:ring-blue-400`

### Charts (britecharts + D3)

`Skills.tsx` is `client:only="react"` — never SSR'd. The chain is:

```
Skills.tsx
  → withResponsiveness.jsx (HOC that tracks container width)
    → charts/bar.jsx (React class component)
      → charts/barChart.js (britecharts API wrapper)
        → britecharts/dist/umd/charts/bar.min.js
```

Key: in britecharts v2.18+, the import paths changed:
- Old: `britecharts/dist/umd/bar.min`
- New: `britecharts/dist/umd/charts/bar.min.js`

`barChart.js` also imports `d3-selection` for DOM selection.

### Data

All static — no CMS:
- `src/data/locales/en.json` / `es.json` — UI string translations (65 keys each)
- `src/data/locales/phrases_en.json` / `phrases_es.json` — rotating quotes (arrays)
- `src/data/skills/programming.js` — returns chart data arrays per category
- `src/data/portfolio/colors.json` — Tailwind color class pairs for project cards

### EmailJS Configuration

Secrets go in `.env.local` (gitignored). In Astro, client-visible env vars require `PUBLIC_` prefix:

```
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_USER_ID=...
```

`ContactForm.tsx` uses `import.meta.env.PUBLIC_EMAILJS_*`. Fallback values from the old `secrets.js` file are hardcoded as defaults for convenience but should be replaced.

### Static assets

Images are in `public/imgs/` (served as-is, no optimization). Referenced as `/imgs/xxx.jpg` everywhere (no import needed).

### Deployment

`npm run deploy` runs `astro build && gh-pages -d dist -b master`. Live site: https://hanzelgodinez.dev.

### Key gotchas

- `Skills.tsx` uses `client:only="react"` because britecharts uses `window` at module eval time
- `withResponsiveness.jsx` (and all helper/chart files with JSX) use `.jsx` extension — Vite requires this in ES module context
- `programming.js` functions accept a `lang` parameter but currently ignore it (all languages return same data)
- The `public/` directory holds static assets (images, manifest, robots, CNAME). Astro's `dist/` is the build output (gitignored)
