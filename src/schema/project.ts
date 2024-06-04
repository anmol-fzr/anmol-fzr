import { z } from "astro:content";

const projectSchema = z.object({
  image: z.string(),
  alt: z.string(),
  desc: z.string(),
  href: z.string(),
})

export { projectSchema }
