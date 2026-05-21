import { defineConfig } from "vite";

/**
 * The site is deployed at https://itsmypassword.github.io/website/ — GitHub
 * Pages serves the repository under the `/website/` subpath, so all asset
 * URLs must be prefixed with that. In dev we leave the base at `/` so the
 * Vite dev server works without surprises.
 */
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/website/" : "/",
  build: {
    outDir: "dist",
    sourcemap: true,
    target: "es2022",
  },
}));
