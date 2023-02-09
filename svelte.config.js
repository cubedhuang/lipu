import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const mdsvexPreprocess = mdsvex({
	layout: {
		_: './src/lib/components/Meta.svelte'
	},
	rehypePlugins: [await import('rehype-slug')],
	remarkPlugins: [
		await import('remark-containers'),
		await import('remark-gfm')
	]
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
