import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import AstroPWA from "@vite-pwa/astro";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://withanmol.com",
  integrations: [
    sitemap(),
    tailwind({}),
    icon({
      include: {
        "simple-icons": ["hono", "nodedotjs", "go"],
      },
    }),
    AstroPWA(),
  ],
  devToolbar: {
    enabled: false,
  },
  experimental: {
    contentCollectionCache: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  adapter: cloudflare({
    imageService: "cloudflare",
    platformProxy: {
      enabled: true
    }
  }),
});
