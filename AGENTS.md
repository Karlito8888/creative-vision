# AGENTS.md — creative-vision

Static showcase site for Creative Vision (Dubai exhibition and interior company). Portfolio
piece, live at `https://creative-vision.charmaweb.com`. Same mould as `watchtower`.

## What is NOT here

| What | Where |
|---|---|
| General working rules, docs ladder, git, explicit agreement | `~/.omp/agent/RULES.md` |
| Workstation, code graphs, workflows | `~/.omp/agent/AGENTS.md` |
| Durable project facts, deploy identities, debts | `~/.omp/agent/bank/creative-vision.md` |

## Stack

Astro 7 static output, Bun, TypeScript, no framework. Fonts through Astro's fonts API.
Browser-native interactivity only: `popover` menu, `<dialog>` lightbox, scroll-driven
reveals, `@view-transition`, `light-dark()`. Two scripts in total (`Lightbox.astro`,
`contact.astro`). Every animation is off under `prefers-reduced-motion`.

## Layout

- `src/data.ts`: the single content source (site identity, nav, services, portfolio
  categories, client logos). Gallery folders under `src/assets/images/gallery/<folder>/` are
  globbed and sorted by the numeric prefix of the file name.
- `src/layouts/Base.astro`: head, header, footer, `global.css`.
- `src/components/`: `Header`, `Footer`, `PageHead`, `Gallery` (grid plus `getImage` 1600 px
  source for the lightbox), `Lightbox`, `Clients` (CSS marquee, duplicated list is
  `aria-hidden`).
- `src/pages/`: `index`, `services`, `portfolio`, `about`, `contact`, `404`.

## Gate and deploy

`bun run check` (`astro check` then `astro build`) is the CI gate. A push to `main` deploys
the Worker through `cloudflare/wrangler-action`: a push is a production write. A `| head`
on the build output kills the image pipeline mid-way (SIGPIPE) and leaves `dist` incomplete;
let the build finish.
