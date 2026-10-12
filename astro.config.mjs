// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gronblom.dev",
  // Lossless HTML whitespace handling (Astro 7 defaults to JSX rules, which
  // drop the spaces between inline text and links).
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
