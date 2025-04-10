/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
	output: 'export',
	distDir: 'out',
	basePath: basePath,
	assetPrefix: basePath,
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
}

module.exports = nextConfig
