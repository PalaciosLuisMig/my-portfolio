import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "Tags must be unique >>> EasyBug",
    })
    .optional(),
  url: z.string().optional()
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  important: z.boolean(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "Tags must be unique >>> EasyBug",
    })
    .optional(),
  skills: z
    .array(z.object({ logo: z.string(), name: z.string() }))
    .refine(
      (skills) => {
        const uniqueSkills = new Set();
        for (const skill of skills) {
          const { logo, name } = skill;
          const key = `${logo}-${name}`;
          if (uniqueSkills.has(key)) {
            return false; //There is a repeated object
          }
          uniqueSkills.add(key);
        }
        return true; // There is not a repeated object
      },
      {
        message: "Skills must be unique based on logo and name >>> EasyBug",
      }
    )
    .optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
