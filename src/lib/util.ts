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
