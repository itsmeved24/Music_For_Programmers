import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/archive-proxy': {
				target: 'https://archive.org',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/archive-proxy/, ''),
				followRedirects: true,
				configure: (proxy, _options) => {
					proxy.on('error', (err, _req, _res) => {
						console.log('proxy error', err);
					});
					proxy.on('proxyReq', (proxyReq, req, _res) => {
						console.log('Sending Request to the Target:', req.method, req.url);
					});
					proxy.on('proxyRes', (proxyRes, req, _res) => {
						console.log('Received Response from the Target:', proxyRes.statusCode, req.url);

						if (proxyRes.statusCode && proxyRes.statusCode >= 300 && proxyRes.statusCode < 400) {
							const location = proxyRes.headers['location'] as string | undefined;
							if (location) {
								try {
									const url = new URL(location);
									if (url.hostname.endsWith('archive.org')) {

										proxyRes.headers['location'] = `/archive-proxy${url.pathname}`;
										console.log('Rewriting redirect Location to:', proxyRes.headers['location']);
									}
								} catch {}
							}
						}
					});
				},
			}
		}
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server**/*.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
