'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

type ExperienceItem = {
	company: string
	logo: string
	title: string
	period: string
	description: string[]
	technologies: string[]
}

type ExperienceText = {
	title: string
	period: string
	technologiesUsed: string
	list?: ExperienceItem[]
}

const Experience = () => {
	const { messages } = useLanguage()

	const experienceText = (messages.experience || {
		title: 'Work Experience',
		period: 'Period',
		technologiesUsed: 'Technologies Used',
		list: [],
	}) as ExperienceText

	const experiences = experienceText.list || []

	return (
		<section id="experience" className="py-6 md:py-12">
			<div className="section-container">
				<h2 className="section-title mb-6">{experienceText.title}</h2>

				<div className="space-y-8">
					{experiences.map((exp: ExperienceItem, index: number) => (
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
											<span>
												{experienceText.period}: {exp.period}
											</span>
										</div>
									</div>
								</div>

								{/* Details section */}
								<div className="border-t border-[var(--border-color)] mt-4 pt-4">
									<div className="space-y-2 mb-4">
										{exp.description.map((desc: string, i: number) => (
											<div key={i} className="flex items-baseline gap-3">
												<span className="text-[var(--primary)] flex-shrink-0 inline-block w-2 h-2 rounded-full bg-[var(--primary)]" />
												<p className="text-[var(--text-secondary)]">{desc}</p>
											</div>
										))}
									</div>

									<div className="mt-4">
										<p className="text-[var(--text-primary)] font-medium mb-2">
											{experienceText.technologiesUsed}:
										</p>
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech: string, i: number) => (
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
