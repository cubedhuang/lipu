import { getSlugFromPath, type LipuData, type MdsvexFile } from '$lib/util';
import type { PageServerLoad } from './$types';

// Simplified implementation from:
// https://github.com/mvasigh/sveltekit-mdsvex-blog

export const load = (async () => {
	const modules = import.meta.glob(`/src/lipu/*.svx`);

	const lipu = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const post = (await resolver()) as MdsvexFile;

			return {
				slug: getSlugFromPath(path),
				...post.metadata
			} as LipuData;
		})
	).then(lipu => lipu.filter(post => !post.hidden));

	return {
		lipu: lipu.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		)
	};
}) satisfies PageServerLoad;
