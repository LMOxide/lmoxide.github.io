import { defineCollection } from "astro:content"
import { file } from "astro/loaders"
import { z } from "astro/zod"

export const CATEGORIES = {
  game: "Gameplay",
  server: "Server",
  webui: "Web UI",
  patcher: "Patcher",
  tooling: "Tooling",
} as const

const features = defineCollection({
  loader: file("src/data/features.yaml"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]]),
      description: z.string(),
      image: image(),
      alt: z.string(),
      wide: z.boolean().default(false),
      link: z.object({ label: z.string(), href: z.string() }).optional(),
    }),
})

export const collections = { features }
