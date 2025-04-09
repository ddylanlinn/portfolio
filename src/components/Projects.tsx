'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

type Project = {
	title: string
	description: string | string[]
	image: string
	category: string
	technologies: string[]
	github?: string
	live?: string
}

type ProjectsText = {
	title: string
	liveDemo: string
	viewCode: string
	noProjects: string
	list?: Project[]
}

// CSS styles for description container
const descriptionStyles = `
  .description-container {
    max-height: 6em; /* Approximately 4 lines of text */
    overflow: hidden;
    transition: max-height 0.3s ease;
    position: relative;
  }

  @media (min-width: 768px) {
    .description-container::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5em;
      background: linear-gradient(transparent, var(--bg-card));
      transition: opacity 0.3s ease;
    }
    
    .bg-\\[var\\(--bg-card\\)\\]:hover .description-container {
      max-height: 300px;
    }
    
    .bg-\\[var\\(--bg-card\\)\\]:hover .description-container::after {
      opacity: 0;
    }
  }
`

const Projects = () => {
	const { messages } = useLanguage()

	const projectsText = (messages.projects || {
		title: 'My Projects',
		liveDemo: 'Live Demo',
		viewCode: 'View Code',
		noProjects: 'No projects available at the moment.',
		list: [],
	}) as ProjectsText

	const projects = projectsText.list || []

	const renderDescription = (description: string | string[]) => {
		if (typeof description === 'string') {
			return description
				.split(/\n\n|\n/)
				.filter((para) => para.trim() !== '')
				.map((paragraph, paraIndex) => (
					<p key={paraIndex} className="mb-2 last:mb-0">
						{paragraph}
					</p>
				))
		}

		return description.map((paragraph, paraIndex) => (
			<p key={paraIndex} className="mb-2 last:mb-0">
				{paragraph}
			</p>
		))
	}

	return (
		<section id="projects" className="py-6 md:py-12 bg-[var(--bg-main)]">
			<style dangerouslySetInnerHTML={{ __html: descriptionStyles }} />
			<div className="section-container">
				<h2 className="section-title">{projectsText.title}</h2>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project: Project, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-[var(--bg-card)] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
						>
							<div className="flex justify-center items-center p-4">
								<div className="relative h-48 w-80">
									<Image
										src={project.image}
										alt={project.title}
										fill
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
							<div className="p-4 flex flex-col flex-grow">
								<h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
									{project.title}
								</h3>

								<div className="flex flex-col justify-between flex-grow">
									<div className="text-[var(--text-secondary)] text-sm space-y-2 mb-3 description-container">
										{renderDescription(project.description)}
									</div>

									<div className="flex flex-wrap gap-2">
										{project.technologies.map(
											(tech: string, techIndex: number) => (
												<span
													key={techIndex}
													className="px-2 py-0.5 text-xs bg-[var(--bg-tag)] text-[var(--text-primary)] rounded"
												>
													{tech}
												</span>
											)
										)}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{projects.length === 0 && (
					<p className="text-center py-6">{projectsText.noProjects}</p>
				)}
			</div>
		</section>
	)
}

export default Projects
