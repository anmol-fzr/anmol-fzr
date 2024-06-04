import { z } from "astro:content";

const experienceSchema = z.object({
  content: z.array(
    z.object({
      name: z.string(),
      data: z.array(
        z.object({
          title: z.string(),
          from: z.string().optional(),
          at: z.string().optional(),
          desc: z.string().optional(),
          to: z.string().optional(),
          href: z.string().url().optional(),
        }))
    })
  )
})

export { experienceSchema }
