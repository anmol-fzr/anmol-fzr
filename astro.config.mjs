import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://anmol-fzr.web.app",
  integrations: [sitemap(), tailwind(), astroImageTools],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
