import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const archive = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      pdf: z.string().optional(),
    }),
});

const introductions = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = { projects, archive, introductions };
