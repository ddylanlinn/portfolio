// Simple script for local deployment to GitHub Pages
const { execSync } = require('child_process')
const path = require('path')
const ghpages = require('gh-pages')

// Settings
const GITHUB_REPO = 'origin' // your remote repo name, typically 'origin'
const BRANCH_NAME = 'gh-pages'
const COMMIT_MESSAGE = 'Deploy to GitHub Pages'

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	cyan: '\x1b[36m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
}

// Helper to print colorful status messages
const log = {
	info: (msg) =>
		console.log(`${colors.bright}${colors.cyan}> ${msg}${colors.reset}`),
	success: (msg) =>
		console.log(`${colors.bright}${colors.green}✓ ${msg}${colors.reset}`),
	warning: (msg) =>
		console.log(`${colors.bright}${colors.yellow}⚠ ${msg}${colors.reset}`),
	error: (msg) =>
		console.log(`${colors.bright}${colors.red}✗ ${msg}${colors.reset}`),
}

// Main function
async function deploy() {
	const root = path.resolve(__dirname, '..')

	try {
		// Step 1: Build the application
		log.info('Building the application...')
		execSync('npm run build', { stdio: 'inherit', cwd: root })
		log.success('Build completed successfully')

		// Step 2: Push the out directory to gh-pages branch
		log.info('Deploying to GitHub Pages...')

		// Using the gh-pages module directly for more control
		await new Promise((resolve, reject) => {
			ghpages.publish(
				path.join(root, 'out'),
				{
					branch: BRANCH_NAME,
					message: COMMIT_MESSAGE,
					dotfiles: true, // Ensure .nojekyll and other dotfiles are included
				},
				(err) => {
					if (err) {
						reject(err)
					} else {
						resolve()
					}
				}
			)
		})

		log.success('Deployment completed successfully!')
		log.info('Your site should be available shortly at your GitHub Pages URL')
	} catch (error) {
		log.error(`Error during deployment: ${error.message}`)
		console.error(error)
		process.exit(1)
	}
}

// Execute the deployment
deploy()
