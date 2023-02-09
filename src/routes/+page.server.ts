import { getSlugFromPath, type LipuData, type MdsvexFile } from '../lib/util';
import type { PageServerLoad } from './$types';

// Simplified implementation from:
// https://github.com/mvasigh/sveltekit-mdsvex-blog

export const load = (async () => {
	const modules = import.meta.glob(`/src/lipu/*.svx`);

	const lipu = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const post = await resolver();

			return {
				slug: getSlugFromPath(path),
				...(post as MdsvexFile).metadata
			} as LipuData;
		})
	);

	return {
		lipu: lipu.sort(
			(a, b) =>
				new Date(a.date ?? 0).getTime() -
				new Date(b.date ?? 0).getTime()
		)
	};
}) satisfies PageServerLoad;
