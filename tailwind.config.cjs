const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				pona: ['"pona"', 'Inter', ...defaultTheme.fontFamily.sans],
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),

		plugin(({ addVariant }) => {
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('group-hocus', ['.group:hover &', '.group:focus &']);
		})
	]
};
