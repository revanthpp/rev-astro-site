// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.revanthpp.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/preview/') && !page.includes('/newsletter/'),
		}),
	],
});
