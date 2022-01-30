import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// paths: {
		// 	base: '/42'
		// }
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
		importAssets(),
	],
};

export default config;
