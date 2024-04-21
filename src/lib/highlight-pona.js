/**
 * @type {import("highlight.js").LanguageFn}
 */
export function highlightPona(hljs) {
	return {
		keywords: {
			keyword: 'lukin pana kama ni tawa ona wan weka sike kipisi',
			type: 'nasin toki nanpa ken',
			literal: 'lon',
			separator: 'la li e pi o anu en tan'
		},
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.QUOTE_STRING_MODE,
			hljs.BINARY_NUMBER_MODE,
			hljs.C_NUMBER_MODE,
			{
				scope: 'number',
				// 'ale mute luka tu wan ala' only after 'nanpa'
				begin: /\b(?<=nanpa)(\s+(ale|mute|luka|tu|wan|ala))+\b/,
				relevance: 0
			},
			{
				scope: 'title',
				begin: /\b[A-Z][a-zA-Z0-9_\-'\.]*/,
				relevance: 0
			}
		]
	};
}
