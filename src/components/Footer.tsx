'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const { messages } = useLanguage()

	const footer = messages.footer || {
		tagline: 'Creating beautiful digital experiences',
		quickLinks: 'Quick Links',
		connect: 'Connect',
		rights: 'All rights reserved.',
	}

	return (
		<footer className="bg-[var(--bg-footer)]">
			<div className="section-container py-0">

				<div className="text-center text-[var(--text-secondary)]">
					<p>
						&copy; {currentYear} Dylan {footer.rights}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
