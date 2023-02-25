import { error } from '@sveltejs/kit';
import { getSlugFromPath, type MdsvexFile } from '../../lib/util';
import type { PageLoad } from './$types';

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
					...(post as MdsvexFile).metadata
				}
			};
		}
	}

	throw error(404, 'Page not found');
}) as PageLoad;
