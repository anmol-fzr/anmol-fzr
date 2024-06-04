import { defineCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { blogSchema, experienceSchema, projectSchema } from "../schema";

const experience = defineCollection({
  type: "data",
  schema: experienceSchema,
})

const project = defineCollection({
  type: "data",
  schema: projectSchema
});

const blog = defineCollection({
  type: "content",
  schema: blogSchema
});

const collections = { blog, experience, project };

type Blog = CollectionEntry<"blog">
type BlogData = Blog["data"]

export { collections }
export type { Blog, BlogData }
