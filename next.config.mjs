// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['en', 'bn'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['images.unsplash.com'],
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;

