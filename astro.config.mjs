import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  site: "https://anmol-fzr.web.app",
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    AstroPWA(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
