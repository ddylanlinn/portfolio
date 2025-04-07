'use client'

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
			<div className="max-w-7xl mx-auto px-4 sm:px-28 lg:px-42 py-2 md:py-3">
				<div className="text-center text-[var(--text-secondary)]">
					<p>
						&copy; {currentYear} {footer.rights}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
