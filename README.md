# Creative Vision

Static showcase site for Creative Vision International Trading LLC, an exhibition stand,
kiosk, interior fit-out, signage, awards and corporate gift company based in Dubai and
serving Riyadh and the GCC. Portfolio piece, live at
`https://creative-vision.charmaweb.com`.

Fourth iteration of the project: the three earlier MERN versions (`Ate-Leslie`,
`Ate-leslie-project`, `The-Last-Ate-Leslie-project`) carried a Node/MongoDB backend for
accounts, an admin dashboard and a contact API. This version keeps the public pages only and
ships as plain HTML, CSS and 50 optimised photos.

## Stack

- Astro 7, static output, Bun, TypeScript. No UI framework, no CSS framework.
- Inter and Playfair Display self-hosted through Astro's fonts API (Fontsource provider).
- Images: `astro:assets` generates responsive WebP at build time from `src/assets/images`.
- Interactivity is native: `popover` for the mobile menu, `<dialog>` for the photo lightbox,
  CSS scroll-driven animations for reveals, `@view-transition` for cross-page fades,
  `light-dark()` for the colour scheme. Two small scripts: the lightbox and the contact form,
  which composes a `mailto:` link.

## Content

Everything editable lives in `src/data.ts`: contact details, navigation, services, the five
portfolio categories (each maps to a folder under `src/assets/images/gallery/`), client
logos. Drop a `.webp` into a gallery folder named `<n>-<folder>.webp` and it appears, sorted
by `n`. The PDF catalogue is `public/pdf/catalogs/CreativeVisionInt.pdf`.

## Commands

```bash
bun install
bun run dev       # http://localhost:4360
bun run check     # astro check + astro build, the CI gate
bun run preview
```

## Deploy

Cloudflare Worker with static assets (`wrangler.jsonc`), deployed by
`.github/workflows/deploy.yml` on every push to `main`. The workflow needs the repository
secret `CLOUDFLARE_API_TOKEN` and the variable `CLOUDFLARE_ACCOUNT_ID`.
