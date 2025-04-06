'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
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
							Hello, I'm{' '}
							<span className="text-[var(--primary)]">Your Name</span>
						</h1>
						<h2 className="text-lg sm:text-xl text-[var(--text-secondary)] mb-4">
							Web Developer & Designer
						</h2>
						<p className="text-base mb-6 max-w-lg">
							I create beautiful, responsive websites with a focus on user
							experience. Let's collaborate to bring your ideas to life.
						</p>

						<div className="flex flex-wrap gap-3">
							<a href="#contact" className="button-primary">
								Get In Touch
							</a>
							<a href="#projects" className="button-outline">
								View Projects
							</a>
						</div>

						<div className="mt-6 flex gap-3">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
								aria-label="GitHub"
							>
								<FaGithub size={22} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={22} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
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
								alt="Your Name"
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
					className="flex flex-col items-center text-sm text-[var(--text-secondary)]"
				>
					<span className="mb-1">Scroll Down</span>
					<FiArrowDown size={18} />
				</a>
			</motion.div>
		</section>
	)
}

export default Hero
