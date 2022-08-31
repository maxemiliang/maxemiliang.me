import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import { astroImageTools }  from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), astroImageTools],
  site: "https://gronblom.dev",
});
