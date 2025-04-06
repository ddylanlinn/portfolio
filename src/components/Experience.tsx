'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa'

type ExperienceItem = {
	company: string
	logo: string
	title: string
	period: string
	description: string[]
	technologies: string[]
}

const Experience = () => {
	const experiences: ExperienceItem[] = [
		{
			company: 'Tech Innovations Inc.',
			logo: '/images/company1.jpg',
			title: 'Senior Frontend Developer',
			period: 'Jan 2022 - Present',
			description: [
				`Led the development of the company's flagship SaaS product using React, NextJS, and TypeScript.`,
				'Implemented CI/CD pipelines and improved application performance by 40%.',
				'Collaborated with UX designers to create intuitive and accessible user interfaces.',
				'Mentored junior developers and conducted code reviews to ensure high code quality.',
			],
			technologies: [
				'React',
				'Next.js',
				'TypeScript',
				'Redux',
				'Tailwind CSS',
				'GraphQL',
				'AWS',
			],
		},
		{
			company: 'Digital Solutions Group',
			logo: '/images/company2.jpg',
			title: 'Full Stack Developer',
			period: 'Mar 2019 - Dec 2021',
			description: [
				'Developed and maintained multiple web applications for clients in the finance and healthcare sectors.',
				'Built RESTful APIs using Node.js, Express, and integrated with various database systems.',
				'Implemented responsive designs and ensured cross-browser compatibility.',
				'Participated in agile development processes and sprint planning.',
			],
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
				'MySQL',
				'MongoDB',
				'React',
				'Docker',
			],
		},
		{
			company: 'Creative Web Studios',
			logo: '/images/company3.jpg',
			title: 'Frontend Developer',
			period: 'Jun 2017 - Feb 2019',
			description: [
				'Created responsive web interfaces for e-commerce and corporate clients.',
				'Collaborated with the design team to implement pixel-perfect UI designs.',
				'Optimized website performance and implemented SEO best practices.',
				`Assisted in transitioning the company's development workflow to use modern JavaScript frameworks.`,
			],
			technologies: [
				'HTML5',
				'CSS3',
				'JavaScript',
				'jQuery',
				'Bootstrap',
				'WordPress',
				'PHP',
			],
		},
	]

	return (
		<section id="experience" className="py-6 md:py-12">
			<div className="section-container">
				<h2 className="section-title mb-6">Work Experience</h2>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-[var(--bg-card)] rounded-lg shadow-sm overflow-hidden"
						>
							<div className="p-5">
								{/* Header section with logo and title */}
								<div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
									{/* Company Logo */}
									<div className="flex-shrink-0">
										<div className="bg-white p-1 rounded-full border-2 border-[var(--border-color)] h-20 w-20 flex items-center justify-center overflow-hidden">
											<Image
												src={exp.logo}
												alt={exp.company}
												width={72}
												height={72}
												className="rounded-full object-cover"
											/>
										</div>
									</div>

									{/* Content */}
									<div className="flex-grow text-center sm:text-left">
										<h3 className="text-xl font-bold text-[var(--text-primary)]">
											{exp.title}
										</h3>
										<p className="text-[var(--primary)] font-medium">
											{exp.company}
										</p>
										<div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-[var(--text-secondary)] text-sm">
											<FaCalendarAlt />
											<span>{exp.period}</span>
										</div>
									</div>
								</div>

								{/* Details section */}
								<div className="border-t border-[var(--border-color)] mt-4 pt-4">
									<div className="space-y-2 mb-4">
										{exp.description.map((desc, i) => (
											<div key={i} className="flex gap-2">
												<span className="text-[var(--primary)] mt-1 flex-shrink-0">
													•
												</span>
												<p className="text-[var(--text-secondary)]">{desc}</p>
											</div>
										))}
									</div>

									<div className="mt-4">
										<p className="text-[var(--text-primary)] font-medium mb-2">
											Technologies Used:
										</p>
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech, i) => (
												<span
													key={i}
													className="px-2 py-1 text-xs bg-[var(--bg-tag)] text-[var(--text-primary)] rounded"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
