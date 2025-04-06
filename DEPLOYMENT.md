# Deployment Guide

This document provides instructions for deploying your portfolio website using GitHub Pages with automatic deployment via GitHub Actions.

## Setup Requirements

1. **GitHub Repository**: You need a repository on GitHub to deploy to GitHub Pages.
2. **GitLab Repository**: Your main development repository on GitLab.
3. **GitHub Personal Access Token**: To sync between GitLab and GitHub.

## GitHub Pages Configuration

### One-time Setup

1. In your GitHub repository, go to **Settings > Pages**
2. Under **Source**, select **GitHub Actions**
3. Add the following repository secrets in **Settings > Secrets and variables > Actions**:
   - `GITLAB_REPO_URL`: Your GitLab repository URL (use HTTPS with a token or SSH URL)

## Deployment Options

### Option 1: Manual Deployment from Your Local Machine

1. Install the gh-pages package:

   ```
   npm install --save-dev gh-pages
   ```

2. Deploy using npm script:

   ```
   npm run deploy:github
   ```

   This will build your project and deploy it to the gh-pages branch.

### Option 2: GitHub Actions Automatic Deployment

The GitHub Actions workflow will automatically deploy your site when:

- You push to the main branch of your GitHub repository
- You manually trigger the workflow from the Actions tab

To manually trigger:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Choose the branch and click **Run workflow**

### Option 3: GitLab to GitHub Sync with Deployment

If you primarily work in GitLab but want to deploy via GitHub Pages:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **GitLab Sync** workflow
3. Click **Run workflow**
4. Enter the GitLab branch you want to sync (default is main)
5. Click **Run workflow**

This will:

- Sync changes from your GitLab repository to GitHub
- Automatically trigger the deployment workflow

## Troubleshooting

### Common Issues

1. **Build Errors**: Check the Actions logs for specific error messages
2. **Missing Assets**: Ensure your next.config.js is correctly configured with proper basePath and assetPrefix
3. **Sync Issues**: Verify your GITLAB_REPO_URL secret is correct

## Additional Configuration

To customize the deployment, you can modify:

1. **next.config.js**: To change settings like basePath (make sure this matches your repo name if not using a custom domain)
2. **.github/workflows/deploy.yml**: To change the build process or add environment variables
3. **scripts/deploy.js**: To customize the local deployment process

## Using a Custom Domain

1. Add your custom domain in GitHub Pages settings
2. Create a CNAME file in the public directory with your custom domain
3. Update next.config.js to remove the basePath and assetPrefix if using a custom domain
