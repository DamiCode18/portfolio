# Damilare Adebayo — Portfolio

Single-page portfolio built with Next.js 12, TypeScript and Tailwind CSS.
Live at [damicode.netlify.app](https://damicode.netlify.app).

## Running locally

Next 12's image tooling breaks on Node 18+, so use Node 16 (`.nvmrc` pins it):

```bash
nvm use
npm install
npm run dev
```

Create a `.env` with:

```
NEXT_PUBLIC_EMAIL_API=   # endpoint the contact form posts to
NEXT_PUBLIC_CV=          # URL of the résumé PDF
```

## Structure

- `pages/index.tsx` — composes the sections in `components/sections/`
  (`Hero`, `Work`, `About`, `Contact`)
- `utils/projects.ts` — project data; images live in `public/*.webp`
- `components/ThemeToggle.tsx` + `utils/useTheme.ts` — light/dark mode,
  persisted in `localStorage`, applied before first paint by `pages/_document.js`
- `styles/globals.css` — theme tokens (CSS variables), fonts, reveal/motion helpers

## Deploying

Netlify. `netlify.toml` pins `NODE_VERSION`; set the two env vars above in the
Netlify UI. Old routes (`/projects`, `/about`, `/contact`) redirect to their
sections on the home page (see `next.config.js`).
