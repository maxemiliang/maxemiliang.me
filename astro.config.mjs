import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import astroImagePlugin from "astro-imagetools/plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  vite: {
    plugins: [astroImagePlugin],
  },
  site: "https://gronblom.dev",
});
