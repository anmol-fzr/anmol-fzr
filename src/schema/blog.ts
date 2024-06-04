import { z, reference } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string(),
  keywords: z.string(),
  pubDate: z.coerce.date(),
  isPublished: z.boolean(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string(),
  related: z.array(reference('blog')).optional()
});

export { blogSchema }
