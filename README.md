# Harry Smith Portfolio

**Live site: [harrysmithdev.vercel.app](https://harrysmithdev.vercel.app)**

![Harry Smith, Software Engineer. React, TypeScript, AWS.](public/og-image.png)

My personal portfolio site. It introduces me, showcases my projects and gives people a quick way to get in touch.

## Features

- **About:** a short introduction with links to my GitHub and LinkedIn.
- **Projects:** a card for each project with a screenshot, description, tech stack and links. The whole card links to the live site.
- **Contact form:** sends messages straight to my inbox through EmailJS, with inline validation and a confirmation dialog.

## Engineering highlights

- **Accessible by default.** WCAG AA colour contrast, a skip link, a proper heading and landmark structure, visible focus rings, form errors linked to their fields, and a native `<dialog>` for form feedback so focus is handled by the browser.
- **Fast to load.** The Contact page and its form libraries are lazy-loaded, the Jost font is self-hosted and preloaded, images are compressed WebP with fixed dimensions to avoid layout shift, and built assets are cached for a year.
- **Production setup.** Security headers and a strict Content Security Policy on Vercel, link preview and canonical tags on every page, a sitemap, a 404 page that search engines don't index, an error boundary, and cookieless analytics with Vercel Web Analytics and Speed Insights.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org), built with [Vite](https://vite.dev)
- [React Router](https://reactrouter.com) for pages
- [vanilla-extract](https://vanilla-extract.style) for type-safe CSS
- [React Hook Form](https://react-hook-form.com) and [EmailJS](https://www.emailjs.com) for the contact form
- Hosted on [Vercel](https://vercel.com)

## Running it locally

You'll need Node.js 24 (see `.nvmrc`) and Yarn.

```bash
yarn install
yarn develop
```

The contact form needs EmailJS keys. Create a `.env` file in the project root:

```env
VITE_API_KEY=your_emailjs_public_key
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
```

The values are in the EmailJS dashboard. Restart the dev server after changing them.

## Commands

| Command             | What it does                                |
| ------------------- | ------------------------------------------- |
| `yarn develop`      | Start the dev server                        |
| `yarn build`        | Type-check and build for production         |
| `yarn preview`      | Serve the production build locally          |
| `yarn lint`         | Run ESLint and check formatting             |
| `yarn format`       | Format all files with Prettier              |
| `yarn format:check` | Check formatting without changing any files |

## Project structure

```
src/
├── assets/       Images and icons
├── components/   Reusable UI components, one folder each with its styles
├── constants/    Shared fixed values, such as the site URL
├── hooks/        Custom React hooks
├── pages/        One folder per page
├── styles/       Global styles, shared styles and design tokens
├── types/        Shared TypeScript types
└── utils/        Small helper functions with no React dependencies
```

## Conventions

- **Imports:** use the `@/` alias for anything outside the current folder (`@/styles/shared`) and relative paths for files in the same folder (`./ProjectCard.css`).
- **Styles:** each component has a `.css.ts` file next to it. Use the design tokens in `src/styles/shared.ts` rather than hard-coding values. Spacing is on a 4px grid (`spacing[5]` is 20px).
- **Shared styles:** `src/styles/shared.css.ts` has the building blocks every page uses: `pageContainer`, `card` and `cardBody`, the text styles `pageHeading`, `cardTitle`, `leadText` and `bodyText`, plus `textLink` and `buttonPrimary`. New pages should be built from these so they match the rest of the site.
- **Projects:** add a project by adding an entry to `src/pages/projects/projectsData.ts`. Card images go in `src/assets/projects` as 1200×630 WebP files, the same size as a link preview image, so a project's OG image can be used directly.
- **Site URL:** the production URL is `SITE_URL` in `src/constants/site.ts`. If the domain changes, also update `index.html`, `public/robots.txt` and `public/sitemap.xml`. Add new routes to the sitemap.
- **Content Security Policy:** set in `vercel.json`. If you add a service the browser talks to directly, add its domain there or it will be blocked.

## Licence

© 2026 Harry Smith. All rights reserved. This is a personal project, and the code is public so others can see how it was built. Please don't reuse it without asking.
