import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import AstroPWA from "@vite-pwa/astro";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://withanmol.com",
  integrations: [
    //sitemap(),
    icon({
      include: {
        "simple-icons": ["hono", "nodedotjs", "go"],
      },
    }),
    //AstroPWA(),
  ],
  devToolbar: {
    enabled: false,
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
  vite: {
    plugins: [tailwindcss()]
  }
});
