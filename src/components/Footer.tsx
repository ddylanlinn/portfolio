import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const links = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
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
		<footer className="bg-gray-100 dark:bg-gray-900 py-10">
			<div className="section-container">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Logo and Tagline */}
					<div>
						<h2 className="text-xl font-bold text-[var(--primary)]">
							Your Name
						</h2>
						<p className="mt-2 text-[var(--text-light)]">
							Creating beautiful digital experiences
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{links.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Connect</h3>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 bg-white dark:bg-gray-800 rounded-full text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
									aria-label={social.label}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-[var(--text-light)]">
					<p>&copy; {currentYear} Your Name. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
