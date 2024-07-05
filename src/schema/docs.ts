import { z } from "astro:content";

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  pubDate: z.coerce.date(),
  heroImage: z.string(),
});

export { docsSchema }
