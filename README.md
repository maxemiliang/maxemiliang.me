# gronblom.dev

Personal portfolio site, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Stack

- **Astro 7**: static site generation, `astro:assets` for responsive AVIF/WebP images
- **Tailwind CSS 4** via `@tailwindcss/vite`, plus `@tailwindcss/typography`
- **Fontsource**: self-hosted Rubik and Space Mono fonts
- **Devicon**: tech icons, inlined as SVG components
- **Jampack**: post-build optimisation of `dist/`

## Project structure

```
/
├── public/          # Static files copied as-is (favicons, robots.txt, …)
├── src/
│   ├── assets/      # Images processed by astro:assets
│   ├── components/  # Astro components
│   ├── layouts/     # Page layout and <head>
│   ├── pages/       # Routes (index.astro)
│   └── styles/      # global.css (Tailwind entry point and theme)
└── astro.config.mjs
```

## Commands

Requires Node.js 22.12 or newer (see `.node-version`).

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build to `./dist/` and optimise with Jampack |
| `npm run preview` | Preview the production build locally         |
| `npm run check`   | Type-check `.astro` and TypeScript files     |
| `npm run format`  | Format the codebase with Prettier            |
