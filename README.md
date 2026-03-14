# Happy Public Secondary School Website

Modern, responsive website for Happy Public Secondary School (Sangariya). Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- React Router for routing
- Vitest + Testing Library for unit tests
- Playwright for end-to-end tests

## Getting started
1. Install Node.js 18+.
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Build for production: `npm run build`
5. Preview the production build: `npm run preview`

## Testing
- Unit tests: `npm test`
- Watch mode: `npm run test:watch`
- End-to-end (headless): `npx playwright test`
- Show UI for E2E: `npx playwright test --ui`

## Project scripts
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview built assets
- `npm run lint` — run ESLint
- `npm test` — run Vitest suite

## Deployment
Build the app (`npm run build`) and deploy the contents of `dist/` to your static hosting provider (e.g., Netlify, Vercel, Cloudflare Pages, S3 + CloudFront).
