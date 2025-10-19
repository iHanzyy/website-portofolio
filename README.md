## Portfolio Website

This project recreates the navigation treatment from Jonah Setiawan’s portfolio mockup. The goal is to translate the 1:1 visual language—rocket logotype, dark indigo gradient, and minimalist link row—into a production-ready Next.js layout.

## Features

- Gradient navigation bar modeled on the Figma reference (rocket brand, three-link menu, accent divider).
- Accessibility-ready markup with semantic `header`/`nav`, keyboard focus states, and descriptive alt text.
- Tailwind CSS utility styling for quick iteration on future sections (hero, projects, experience).
- Custom font stack (Aeonik for body, Unigeo accent weights ready for headings) served from `/public`.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/postcss`

## Getting Started

Install dependencies and launch the development server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview the navigation.

## Design Reference

- Brand asset: `public/brand.svg`
- Gradient: `linear-gradient(108deg, #0c1f34 0%, #253b5d 100%)`
- Link typography: title case labels, 0.02em letter-spacing, white text on a high-contrast backdrop.

## Project Structure

- `src/app/layout.js` – shared layout, fonts, and metadata.
- `src/app/page.js` – assembles the navigation and placeholder sections.
- `src/components/Navbar.jsx` – reusable navigation component.
- `src/app/globals.css` – global Tailwind entry point and CSS variables.

## Scripts

- `npm run dev` – start the dev server.
- `npm run build` – build with Turbopack.
- `npm run start` – serve the production build.
- `npm run lint` – run ESLint.

## Next Steps

- Flesh out hero, projects, and experience sections to complete the landing page.
- Add responsive breakpoints for tablets and mobile screens.
- Introduce scroll-to-section functionality for the navigation links.
