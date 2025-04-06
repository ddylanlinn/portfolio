const { execSync } = require('child_process')
const path = require('path')
const ghpages = require('gh-pages')

const GITHUB_REPO = 'origin'
const BRANCH_NAME = 'gh-pages'
const COMMIT_MESSAGE = 'Deploy to GitHub Pages'

const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	cyan: '\x1b[36m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
}

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

async function deploy() {
	const root = path.resolve(__dirname, '..')

	try {
		log.info('Building the application...')
		execSync('npm run build', { stdio: 'inherit', cwd: root })
		log.success('Build completed successfully')

		log.info('Deploying to GitHub Pages...')
		await new Promise((resolve, reject) => {
			ghpages.publish(
				path.join(root, 'out'),
				{
					branch: BRANCH_NAME,
					message: COMMIT_MESSAGE,
					dotfiles: true,
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

deploy()
