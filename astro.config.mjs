// @ts-check
import { defineConfig } from 'astro/config';
import solid from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: "https://hippmatthew.github.io",
  base: "midsomer-bingo",
  integrations:  [solid()]
});