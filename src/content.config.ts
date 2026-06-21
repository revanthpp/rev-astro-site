import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	loader: glob({ base: './content/writing', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		readingTime: z.string(),
		featured: z.boolean().default(false),
		latest: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string().default('Systems Design'),
		problem: z.string(),
		architecture: z.string(),
		tradeoffs: z.array(z.string()),
		technologies: z.array(z.string()),
		status: z.string(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		githubUrl: z.string().url().optional(),
		writeupUrl: z.string().optional(),
	}),
});

const notes = defineCollection({
	loader: glob({ base: './content/notes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		thought: z.string().optional(),
		date: z.coerce.date(),
		category: z.string().default('Field Notes'),
		topic: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		featured: z.boolean().default(false),
	}),
});

export const collections = { writing, projects, notes };
