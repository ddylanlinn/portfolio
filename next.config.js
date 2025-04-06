/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'out',
	basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
}

module.exports = nextConfig
