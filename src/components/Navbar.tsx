'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

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
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	]

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0 font-bold text-xl">
						<Link href="#home" className="text-[var(--primary)]">
							Portfolio
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="nav-link font-medium"
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 dark:text-gray-200 hover:text-[var(--primary)]"
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
					className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 nav-link"
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
