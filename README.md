# Autonestix Website

Production-ready React + Vite website for Autonestix, an AI business automation agency.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Update business details

Edit `src/config/business.js` and replace placeholder values including `N8N_WEBHOOK_URL` and `CANONICAL_URL` before launch.

## GitHub deployment instructions

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Choose **GitHub Actions** as the build source.
4. Add a Vite deployment workflow, or connect the repo to Netlify/Vercel and use:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Replace the canonical URL in `index.html`, `public/robots.txt`, `public/sitemap.xml`, and `src/config/business.js` with your live domain.
