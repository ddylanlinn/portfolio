/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // Enables static HTML export
	distDir: 'out', // Output directory for the static build

	// Configure for GitHub Pages (replace 'portfolio' with your repo name if different)
	basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',

	images: {
		unoptimized: true, // Required for static export
	},

	// Disable server-side features for static export
	trailingSlash: true,

	// Add any additional configurations as needed
}

module.exports = nextConfig
