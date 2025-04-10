'use client'

import { motion } from 'framer-motion'
import {
	FaCode,
	FaServer,
	FaTools,
	FaGraduationCap,
	FaLaptopCode,
} from 'react-icons/fa'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

type SkillCategory = 'frontend' | 'backend' | 'others'

type Education = {
	title: string
	list: string[]
}

type AboutData = {
	title: string
	description: string[]
	cta: string
	education?: Education
	skills: {
		title: string
		categories: {
			frontend: string
			backend: string
			others: string
		}
	}
}

const About = () => {
	const { messages } = useLanguage()
	const [activeTab, setActiveTab] = useState<SkillCategory>('frontend')

	const about: AboutData = messages.about || {
		title: 'About Me',
		description: [
			"I'm a passionate frontend developer with over 5 years of experience creating modern web applications.",
			'My goal is to build fast, accessible, and user-friendly websites that provide an exceptional user experience.',
			'I believe in clean code, continuous learning, and staying up-to-date with the latest web technologies and best practices.',
		],
		cta: 'Get In Touch',
		education: {
			title: 'Education',
			list: [
				'National Taiwan University, Department of Computer Science',
				'Graduated in 2019',
			],
		},
		skills: {
			title: 'My Skills',
			categories: {
				frontend: 'Frontend',
				backend: 'Backend',
				others: 'Others',
			},
		},
	}

	const skillCategories: Record<SkillCategory, string[]> = {
		frontend: [
			'HTML / CSS',
			'JavaScript / TypeScript',
			'React / Redux / Saga',
			'Next.js',
			'Tailwind',
			'Bundle Tools',
			'Testing',
			'SEO Improvement',
			'Performance Optimization',
		],
		backend: [
			'Node.js',
			'Prisma / Sequelize',
			'Express',
			'PHP',
			'MySQL',
			'RESTful API',
			'Redis',
		],
		others: [
			'EC2 / S3 / CloudFront',
			'Entra / Azure',
			'GCP / GCE',
			'Nginx',
			'CI/CD',
			'Error monitoring',
			'Docker',
			'Feature flag',
			'Monorepo',
			'GTM Management',
		],
	}

	return (
		<section id="about" className="py-6 md:py-12">
			<div className="section-container">
				<h2 className="section-title">{about.title}</h2>

				<div className="grid md:grid-cols-2 gap-6 items-start">
					{/* About Text */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						{about.description.map((paragraph, index) => (
							<p
								key={index}
								className={`text-lg mb-${
									index === about.description.length - 1 ? '4' : '3'
								}`}
							>
								{paragraph}
							</p>
						))}

						<a href="mailto:ddylanlinn@gmail.com" className="button-primary">
							{about.cta}
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
							<h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
								<FaLaptopCode className="text-[var(--primary)]" />{' '}
								{about.skills.title}
							</h3>

							{/* Skills Tab Navigation */}
							<div className="flex mb-4 border-b border-[var(--border-color)]">
								<button
									className={`px-4 py-2 font-medium border-b-2 transition-colors ${
										activeTab === 'frontend'
											? 'border-[var(--primary)] text-[var(--primary)]'
											: 'border-transparent hover:text-[var(--primary)]'
									}`}
									onClick={() => setActiveTab('frontend')}
								>
									<span className="flex items-center gap-2">
										<FaCode /> {about.skills.categories.frontend}
									</span>
								</button>
								<button
									className={`px-4 py-2 font-medium border-b-2 transition-colors ${
										activeTab === 'backend'
											? 'border-[var(--primary)] text-[var(--primary)]'
											: 'border-transparent hover:text-[var(--primary)]'
									}`}
									onClick={() => setActiveTab('backend')}
								>
									<span className="flex items-center gap-2">
										<FaServer /> {about.skills.categories.backend}
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
										<FaTools /> {about.skills.categories.others}
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

						{/* Education Section */}
						{about.education && (
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="bg-[var(--bg-card)] rounded-lg p-4 shadow-sm"
							>
								<h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
									<FaGraduationCap className="text-[var(--primary)]" />{' '}
									{about.education.title}
								</h3>

								<ul className="space-y-2">
									{about.education.list.map((edu: string, index: number) => (
										<li key={index} className="flex items-center gap-2">
											<span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
											<span className="text-[var(--text-primary)]">{edu}</span>
										</li>
									))}
								</ul>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
