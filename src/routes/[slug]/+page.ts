import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { getSlugFromPath, type LipuData, type MdsvexFile } from '$lib/util';

export const load = (async ({ params }) => {
	const modules = import.meta.glob('/src/lipu/*.svx');

	for (const [path, resolver] of Object.entries(modules)) {
		const slug = getSlugFromPath(path);

		if (slug === params.slug) {
			const post = (await resolver()) as MdsvexFile;

			return {
				component: post.default,
				metadata: {
					slug,
					...post.metadata
				} as LipuData
			};
		}
	}

	throw error(404, 'Page not found');
}) satisfies PageLoad;
