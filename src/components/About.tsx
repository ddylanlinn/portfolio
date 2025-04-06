'use client'

import { motion } from 'framer-motion'
import {
	FaCode,
	FaPaintBrush,
	FaMobileAlt,
	FaServer,
	FaTools,
} from 'react-icons/fa'
import { useState } from 'react'

type SkillCategory = 'front-end' | 'back-end' | 'others'

const About = () => {
	const [activeTab, setActiveTab] = useState<SkillCategory>('front-end')

	const skillCategories: Record<SkillCategory, string[]> = {
		'front-end': [
			'HTML / CSS',
			'JavaScript / TypeScript',
			'React / Redux / Redux Saga',
			'Next.js',
			'Tailwind',
			'Bundle Tools',
			'Testing',
			'SEO Improvement',
			'Performance Optimization',
		],
		'back-end': [
			'Node.js',
			'Prisma',
			'Express / Sequelize',
			'PHP',
			'MySQL',
			'RESTful API',
			'Redis',
		],
		others: [
			'AWS EC2 / S3 / CloudFront',
			'Entra / Azure',
			'GCP GCE',
			'Nginx',
			'CI/CD',
			'Error monitoring',
			'Docker',
			'Feature flag',
			'Monorepo',
			'GTM Management',
		],
	}

	const services = [
		{
			title: 'Web Development',
			description:
				'Building fast, responsive, and modern websites using the latest technologies.',
			icon: <FaCode size={28} className="text-[var(--primary)]" />,
		},
		{
			title: 'Web Design',
			description:
				'Creating beautiful and intuitive user interfaces with a focus on usability.',
			icon: <FaPaintBrush size={28} className="text-[var(--primary)]" />,
		},
		{
			title: 'Mobile Responsive',
			description:
				'Ensuring websites look and function perfectly on all devices and screen sizes.',
			icon: <FaMobileAlt size={28} className="text-[var(--primary)]" />,
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
					<div className="space-y-6">
						{/* Skills */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-[var(--bg-card)] rounded-lg p-4 shadow-sm"
						>
							<h3 className="text-2xl font-bold mb-3">My Skills</h3>

							{/* Skills Tab Navigation */}
							<div className="flex mb-4 border-b border-[var(--border-color)]">
								<button
									className={`px-4 py-2 font-medium border-b-2 transition-colors ${
										activeTab === 'front-end'
											? 'border-[var(--primary)] text-[var(--primary)]'
											: 'border-transparent hover:text-[var(--primary)]'
									}`}
									onClick={() => setActiveTab('front-end')}
								>
									<span className="flex items-center gap-2">
										<FaCode /> Front-end
									</span>
								</button>
								<button
									className={`px-4 py-2 font-medium border-b-2 transition-colors ${
										activeTab === 'back-end'
											? 'border-[var(--primary)] text-[var(--primary)]'
											: 'border-transparent hover:text-[var(--primary)]'
									}`}
									onClick={() => setActiveTab('back-end')}
								>
									<span className="flex items-center gap-2">
										<FaServer /> Back-end
									</span>
								</button>
								<button
									className={`px-4 py-2 font-medium border-b-2 transition-colors ${
										activeTab === 'others'
											? 'border-[var(--primary)] text-[var(--primary)]'
											: 'border-transparent hover:text-[var(--primary)]'
									}`}
									onClick={() => setActiveTab('others')}
								>
									<span className="flex items-center gap-2">
										<FaTools /> Others
									</span>
								</button>
							</div>

							{/* Skills Content */}
							<motion.div
								key={activeTab}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className="min-h-[180px]"
							>
								<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
									{skillCategories[activeTab].map((skill, index) => (
										<li key={index} className="flex items-center gap-2">
											<span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
											<span className="text-[var(--text-primary)]">
												{skill}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
