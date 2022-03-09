const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst: cFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin: crPlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin: ePlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pCache = new cFirst({
	cacheName: 'page-cache',
  	plugins: [
    	new crPlugin({
      		statuses: [0, 200], }),
    	new ePlugin({
      		maxAgeSeconds: 30 * 24 * 60 * 60}),
  ],
});

warmStrategyCache({
	strategy: pCache,
	urls: ['/index.html', '/'],
});

registerRoute(({ request }) => request.mode === 'navigate', pCache);

// Implement asset caching
registerRoute(
	({ request }) => request.destination === 'image',
	new cFirst({
		cacheName: 'assets',
		plugins: [
			new crPlugin({
				statuses: [0, 200] }),
			new ePlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60}),
		],
	})
);