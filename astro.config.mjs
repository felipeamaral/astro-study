// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-tulumba-fdf1de.netlify.app/",
  integrations: [preact()]
});