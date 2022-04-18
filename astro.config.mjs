import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    process.env.NODE_ENV === "production" && turbolinks(),
  ],
  site: "https://gronblom.dev",
});
