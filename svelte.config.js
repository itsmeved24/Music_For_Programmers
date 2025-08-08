import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {

	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() }
};

export default config;
