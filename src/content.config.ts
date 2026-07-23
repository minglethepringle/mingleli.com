import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Drop a new `.md` file into src/content/blog/ and it shows up automatically.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
