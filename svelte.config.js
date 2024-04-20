import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import hljs from 'highlight.js/lib/core';
import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import containers from 'remark-containers';
import gfm from 'remark-gfm';

import { highlightPona } from './src/lib/highlight-pona.js';

hljs.registerLanguage('pona', highlightPona);

const mdsvexPreprocess = mdsvex({
	highlight: {
		highlighter: (code, lang) => {
			return `<pre class="hljs"><code class="language-${lang}">${hljs.highlightAuto(code, [lang]).value}</code></pre>`;
		}
	},
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
