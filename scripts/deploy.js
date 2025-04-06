// Simple script for local deployment to GitHub Pages
const { execSync } = require('child_process')
const path = require('path')

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
}

// Helper to print colorful status messages
const log = {
	info: (msg) =>
		console.log(`${colors.bright}${colors.cyan}> ${msg}${colors.reset}`),
	success: (msg) =>
		console.log(`${colors.bright}${colors.green}✓ ${msg}${colors.reset}`),
	warning: (msg) =>
		console.log(`${colors.bright}${colors.yellow}⚠ ${msg}${colors.reset}`),
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

		// Create/update gh-pages branch with out directory contents
		execSync(`npx gh-pages -d out -b ${BRANCH_NAME} -m "${COMMIT_MESSAGE}"`, {
			stdio: 'inherit',
			cwd: root,
		})

		log.success('Deployment completed successfully!')
		log.info('Your site should be available shortly at your GitHub Pages URL')
	} catch (error) {
		console.error('Error during deployment:', error)
		process.exit(1)
	}
}

// Execute the deployment
deploy()
