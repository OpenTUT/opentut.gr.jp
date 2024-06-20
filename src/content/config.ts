import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      marp: z.boolean().default(false),
    }),
});

export const collections = { projects, posts };
