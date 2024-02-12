import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://martl7.github.io/Port-Folio-Astro",
  base: "/Port-Folio-Astro/"
});