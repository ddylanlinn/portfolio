'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('all')

	const categories = ['all', 'web', 'mobile', 'design']

	const projects = [
		{
			title: 'E-Commerce Website',
			description:
				'A fully responsive e-commerce platform with product filtering and user authentication.',
			image: '/images/project1.jpg',
			category: 'web',
			technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
		{
			title: 'Portfolio Website',
			description:
				'A creative portfolio website with animations and responsive design.',
			image: '/images/project2.jpg',
			category: 'web',
			technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
		{
			title: 'Weather App',
			description:
				'A mobile app that provides real-time weather information using geolocation.',
			image: '/images/project3.jpg',
			category: 'mobile',
			technologies: ['React Native', 'TypeScript', 'Weather API'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
		{
			title: 'Brand Identity Design',
			description:
				'Complete brand identity including logo, color palette, and brand guidelines.',
			image: '/images/project4.jpg',
			category: 'design',
			technologies: ['Figma', 'Illustrator', 'Photoshop'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
		{
			title: 'Task Management App',
			description:
				'A productivity app that helps users organize tasks and track progress.',
			image: '/images/project5.jpg',
			category: 'web',
			technologies: ['Vue.js', 'Firebase', 'Vuetify'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
		{
			title: 'Restaurant Website',
			description:
				'A website for a restaurant with online ordering and reservation capabilities.',
			image: '/images/project6.jpg',
			category: 'web',
			technologies: ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
			github: 'https://github.com',
			live: 'https://example.com',
		},
	]

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.category === activeFilter)

	return (
		<section id="projects" className="py-6 md:py-12 bg-[var(--bg-main)]">
			<div className="section-container">
				<h2 className="section-title">My Projects</h2>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveFilter(category)}
							className={`px-4 py-2 rounded-full capitalize transition-colors ${
								activeFilter === category
									? 'bg-[var(--primary)] text-white'
									: 'bg-[var(--bg-tag)] hover:bg-[var(--bg-tag-hover)]'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-[var(--bg-card)] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="relative h-40 w-full">
								<Image
									src={project.image}
									alt={project.title}
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<div className="p-4">
								<h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
									{project.title}
								</h3>
								<p className="text-[var(--text-secondary)] mb-3 text-sm">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-3">
									{project.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="px-2 py-0.5 text-xs bg-[var(--bg-tag)] text-[var(--text-primary)] rounded"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm"
										aria-label="GitHub Repository"
									>
										<FaGithub /> Code
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--primary)] text-sm"
										aria-label="Live Demo"
									>
										<FaExternalLinkAlt /> Live Demo
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<p className="text-center py-6">
						No projects found in this category.
					</p>
				)}
			</div>
		</section>
	)
}

export default Projects
