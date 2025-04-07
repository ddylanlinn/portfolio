'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const Hero = () => {
	const { messages } = useLanguage()

	const hero = messages.hero || {
		greeting: "Hi, I'm",
		title: 'Frontend Developer & UI/UX Designer',
		description:
			'I create beautiful, responsive websites and applications with a focus on user experience and clean code.',
		cta: {
			contact: 'Contact Me',
			projects: 'View Projects',
		},
		scrollDown: 'Scroll Down',
	}

	return (
		<section
			id="home"
			className="min-h-[90vh] flex items-center relative overflow-hidden"
		>
			<div className="section-container">
				<div className="grid md:grid-cols-2 gap-6 items-center">
					{/* Left Column - Text Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="order-2 md:order-1"
					>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
							{hero.greeting}{' '}
							<span className="text-[var(--primary)]">Dylan Lin</span>
						</h1>
						<h2 className="text-lg sm:text-xl text-[var(--text-secondary)] mb-4">
							{hero.title}
						</h2>
						<p className="text-base mb-6 max-w-lg">{hero.description}</p>

						<div className="flex flex-wrap gap-3">
							<a href="#contact" className="button-primary cursor-pointer">
								{hero.cta.contact}
							</a>
							<a href="#projects" className="button-outline cursor-pointer">
								{hero.cta.projects}
							</a>
						</div>

						<div className="mt-6 flex gap-3">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
								aria-label="GitHub"
							>
								<FaGithub size={22} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={22} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
								aria-label="Twitter"
							>
								<FaTwitter size={22} />
							</a>
						</div>
					</motion.div>

					{/* Right Column - Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="order-1 md:order-2 flex justify-center"
					>
						<div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[var(--primary)]">
							<Image
								src="/images/profile.jpg"
								alt="Dylan CH Lin"
								fill
								style={{ objectFit: 'cover' }}
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Down Indicator */}
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 1,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center"
			>
				<a
					href="#about"
					className="flex flex-col items-center text-sm text-[var(--text-secondary)] cursor-pointer"
				>
					<span className="mb-1">{hero.scrollDown}</span>
					<FiArrowDown size={18} />
				</a>
			</motion.div>
		</section>
	)
}

export default Hero
