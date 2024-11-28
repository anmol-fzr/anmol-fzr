import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  site: "https://withanmol.com",
  integrations: [
    sitemap(),
    tailwind({}),
    icon({
      include: {
        "simple-icons": ["hono", "nodedotjs"],
      },
    }),
    AstroPWA(),
  ],
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    contentCollectionCache: true,
  },
});
