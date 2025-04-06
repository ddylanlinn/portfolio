'use client'

import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa'

const About = () => {
	const skills = [
		'HTML5',
		'CSS3',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Tailwind CSS',
		'Node.js',
		'Git',
		'Figma',
		'Responsive Design',
		'UI/UX',
	]

	const services = [
		{
			title: 'Web Development',
			description:
				'Building fast, responsive, and modern websites using the latest technologies.',
			icon: <FaCode size={32} className="text-[var(--primary)]" />,
		},
		{
			title: 'Web Design',
			description:
				'Creating beautiful and intuitive user interfaces with a focus on usability.',
			icon: <FaPaintBrush size={32} className="text-[var(--primary)]" />,
		},
		{
			title: 'Mobile Responsive',
			description:
				'Ensuring websites look and function perfectly on all devices and screen sizes.',
			icon: <FaMobileAlt size={32} className="text-[var(--primary)]" />,
		},
	]

	return (
		<section id="about" className="py-6 md:py-12">
			<div className="section-container">
				<h2 className="section-title">About Me</h2>

				<div className="grid md:grid-cols-2 gap-6 items-start">
					{/* About Text */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-lg mb-3">
							I'm a passionate web developer and designer with a keen eye for
							detail and a love for creating beautiful, functional websites.
							With several years of experience in web development, I specialize
							in creating responsive, user-friendly websites that look great on
							any device.
						</p>
						<p className="text-lg mb-3">
							My journey in web development began when I discovered my passion
							for combining creativity with technical skills. I've since worked
							on various projects, from small business websites to complex web
							applications, always striving to deliver high-quality work that
							exceeds expectations.
						</p>
						<p className="text-lg mb-4">
							When I'm not coding, you'll find me exploring new design trends,
							learning new technologies, or enjoying outdoor activities. I
							believe in continuous learning and am always looking to expand my
							skill set.
						</p>

						<a href="#contact" className="button-primary">
							Let's Work Together
						</a>
					</motion.div>

					{/* Skills and Services */}
					<div className="space-y-4">
						{/* Skills */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h3 className="text-2xl font-bold mb-2">My Skills</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map((skill, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-[var(--bg-tag)] rounded-full text-sm text-[var(--text-primary)]"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>

						{/* Services */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h3 className="text-2xl font-bold mb-2">Services I Offer</h3>
							<div className="space-y-3">
								{services.map((service, index) => (
									<div key={index} className="flex gap-3 items-start">
										<div className="mt-1">{service.icon}</div>
										<div>
											<h4 className="text-xl font-semibold">{service.title}</h4>
											<p className="text-[var(--text-secondary)]">
												{service.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
