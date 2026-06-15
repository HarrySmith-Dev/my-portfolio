# Harry Smith Portfolio

This is my personal portfolio site.

It is designed to be fast, clean, and easy to maintain while showcasing my projects and giving people a quick way to get in touch.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- vanilla-extract
- EmailJS

## Quick Start

```bash
yarn install
cp .env.example .env
yarn develop
```

## Scripts

- `yarn start` - run the Vite dev server
- `yarn develop` - alias for dev server
- `yarn build` - run TypeScript checks and build production assets
- `yarn preview` - preview the production build locally
- `yarn lint` - run ESLint and Prettier checks
- `yarn format` - apply Prettier formatting
- `yarn format:check` - validate Prettier formatting

## Environment Variables

Create a root `.env` file and add:

```env
VITE_API_KEY=your_emailjs_public_key
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
```

The contact form uses these values to send messages through EmailJS.

## Styling System

Styles are built with vanilla-extract using tokenized design values for colors, spacing, typography, and shadows.

- Component styles: `src/components/**/*.css.ts`
- Shared design tokens: `src/styles/shared.ts`
- Global styles and breakpoints: `src/styles/global.css.ts`

## Notes

This project is intentionally lightweight and focused on clarity over complexity.
