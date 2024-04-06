import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import containers from 'remark-containers';
import gfm from 'remark-gfm';

const mdsvexPreprocess = mdsvex({
	layout: {
		_: './src/lib/components/Meta.svelte'
	},
	rehypePlugins: [slug],
	remarkPlugins: [gfm, containers]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvexPreprocess],

	kit: {
		adapter: adapter()
	}
};

export default config;
