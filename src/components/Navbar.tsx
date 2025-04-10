'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { messages } = useLanguage()

	const navigation = messages.navigation || {
		home: 'Home',
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navLinks = [
		{ name: navigation.home, href: '#home' },
		{ name: navigation.about, href: '#about' },
		{ name: navigation.experience, href: '#experience' },
		{ name: navigation.projects, href: '#projects' },
	]

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? 'dark:bg-[var(--bg-main)]/90 backdrop-blur-sm dark:shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0 font-bold text-xl">
						<Link href="#home" className="text-[var(--primary)] cursor-pointer">
							Portfolio
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center">
						<div className="flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="nav-link font-medium cursor-pointer"
								>
									{link.name}
								</Link>
							))}
						</div>

						{/* Theme Toggle and Language Toggle */}
						<div className="ml-8 flex items-center space-x-4">
							<div className="w-12">
								<LanguageToggle />
							</div>
							<ThemeToggle />
						</div>
					</div>

					{/* Mobile Menu Button and Theme Toggle */}
					<div className="flex items-center space-x-3 md:hidden">
						<div className="w-12">
							<LanguageToggle />
						</div>
						<ThemeToggle />
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-[var(--text-secondary)] hover:text-[var(--primary)] cursor-pointer"
							aria-label="Toggle menu"
						>
							{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className="md:hidden bg-[var(--bg-card)] shadow-lg"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--bg-tag)] nav-link cursor-pointer"
								onClick={() => setIsOpen(false)}
							>
								{link.name}
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	)
}

export default Navbar
