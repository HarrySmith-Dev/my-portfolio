# Harry Smith – Portfolio Site

Personal portfolio powered by React, TypeScript, Vite, React Router and vanilla-extract.

## Getting Started

```bash
yarn install
yarn start
```

The dev server runs at http://localhost:5173/ by default.

## Available Scripts

- `yarn start` – launch Vite dev server
- `yarn build` – type-check then build production assets
- `yarn preview` – preview the production build locally
- `yarn lint` – run ESLint across the repo

## Environment Variables

The contact form sends email via EmailJS. Create a `.env` file at the repo root with:

```
VITE_API_KEY=your_emailjs_public_key
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
```

## Styling

Component styles live in `.css.ts` files generated with vanilla-extract. Global tokens and breakpoints can be found in `src/styles`.

