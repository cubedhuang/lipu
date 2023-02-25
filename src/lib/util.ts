export function formatDate(value: string) {
	const date = new Date(value);
	const year = date.getUTCFullYear();
	const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
	const day = `${date.getUTCDate()}`.padStart(2, '0');

	return `${year}/${month}/${day}`;
}

export const getSlugFromPath = (path: string) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export interface MdsvexFile {
	default: import('svelte/internal').SvelteComponent;
	metadata: Record<string, string>;
}

export interface LipuData {
	slug: string;
	title: string;
	date: string;
	description: string;
	draft?: boolean;
}
