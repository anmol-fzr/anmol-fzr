import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://anmol-fzr.web.app",
  integrations: [sitemap(), tailwind(),  icon()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  }
});
