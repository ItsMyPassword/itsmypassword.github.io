# ItsMyPassword — website

> The landing page for [ItsMyPassword](https://github.com/ItsMyPassword/extension), a deterministic password manager Chrome extension.

A single dark, near-silent page. A pulsing keycap, a silver-to-graphite headline, and a stream of crypto-random passwords that appear and dissolve without ever being stored — a literal visualisation of the product's promise.

## How it works

- `index.html` — the markup
- `src/styles.css` — design tokens, keycap geometry, headline gradient, masking, animations
- `src/main.js` — three small modules: dot-grid canvas, password vapour stream, keycap interactions
- `public/logo.svg` — the brand mark, used as the favicon

No framework. Vite handles dev server, bundling and minification.

## Run locally

```sh
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`.

## Production build

```sh
npm run build      # outputs to dist/
npm run preview    # serves the production build locally
```

## Deployment

The site is deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Every push to `main` rebuilds and publishes.

## Licence

MIT — see [`LICENSE`](./LICENSE).
