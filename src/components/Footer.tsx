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

	const navigation = messages.navigation || {
		home: 'Home',
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
		contact: 'Contact',
	}

	const links = [
		{ name: navigation.home, href: '#home' },
		{ name: navigation.about, href: '#about' },
		{ name: navigation.experience, href: '#experience' },
		{ name: navigation.projects, href: '#projects' },
		{ name: navigation.contact, href: '#contact' },
	]

	const socialLinks = [
		{
			icon: <FaGithub size={20} />,
			href: 'https://github.com',
			label: 'GitHub',
		},
		{
			icon: <FaLinkedin size={20} />,
			href: 'https://linkedin.com',
			label: 'LinkedIn',
		},
		{
			icon: <FaTwitter size={20} />,
			href: 'https://twitter.com',
			label: 'Twitter',
		},
	]

	return (
		<footer className="bg-[var(--bg-footer)] py-6">
			<div className="section-container py-0">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Logo and Tagline */}
					<div>
						<h2 className="text-xl font-bold text-[var(--primary)]">Dylan</h2>
						<p className="mt-1 text-[var(--text-secondary)]">
							{footer.tagline}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
							{footer.quickLinks}
						</h3>
						<ul className="space-y-1">
							{links.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
							{footer.connect}
						</h3>
						<div className="flex gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 bg-[var(--bg-tag)] rounded-full text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
									aria-label={social.label}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="border-t border-[var(--border-color)] mt-6 pt-6 text-center text-[var(--text-secondary)]">
					<p>
						&copy; {currentYear} Dylan. {footer.rights}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
