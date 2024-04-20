/**
 * @type {import("highlight.js").LanguageFn}
 */
export function highlightPona(hljs) {
	console.log('highlight-pona.js');
	return {
		keywords: {
			keyword: 'lukin pana kama ni',
			type: 'nasin toki nanpa ken',
			literal: ['lon', 'lon ala'],
			separator: 'la li e pi o anu en'
			// number: 'ale mute luka tu wan ala'
		},
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			hljs.BINARY_NUMBER_MODE,
			hljs.C_NUMBER_MODE,
			{
				scope: 'number',
				// 'ale mute luka tu wan ala' only after 'nanpa'
				begin: /\b(?<=nanpa)(\s+(ale|mute|luka|tu|wan|ala))+/,
				relevance: 0
			},
			{
				scope: 'title',
				begin: /\b[A-Z]\w*/,
				relevance: 0
			}
		]
	};
}
