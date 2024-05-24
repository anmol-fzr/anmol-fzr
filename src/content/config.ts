import { defineCollection, z, reference } from "astro:content";
import type { CollectionEntry } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.string(),
  pubDate: z.coerce.date(),
  isPublished: z.boolean(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  related: z.array(reference('blog')).optional()
});

type Blog = CollectionEntry<"blog">
type BlogData = Blog["data"]

const blog = defineCollection({
  type: "content",
  schema: blogSchema
});


const collections = { blog };

export { collections }
export type { Blog, BlogData }
