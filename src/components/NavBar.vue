<template>
  <header class="cont flex items-center gap-2 text-slate-800 mb-8">
    <a href="/">
      <h1 class="text-3xl font-semibold text-[#0f172a]">Maxemilian Grönblom</h1>
    </a>
    <nav class="ml-auto">
      <ul
        class="flex gap-2 sm:gap-4 flex-col text-lg sm:text-base sm:flex-row text-[#334155]"
      >
        <li v-for="item in navigationItems">
          <a
            :href="item.target"
            :class="{ active: location?.href?.includes(item.target) }"
            data-no-swup
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import navItems from "../nav.json";
import { defineComponent } from "vue";
import { useBrowserLocation } from "@vueuse/core";

export default defineComponent({
  name: "NavBar",
  setup() {
    const location = useBrowserLocation();
    return {
      location,
    };
  },

  data() {
    return {
      navigationItems: navItems,
    };
  },
});
</script>

<style scoped>
a.active {
  @apply font-bold underline underline-offset-4;
}
</style>
