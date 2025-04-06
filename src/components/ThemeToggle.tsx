'use client'

import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
	const { theme, toggleTheme, mounted } = useTheme()

	if (!mounted) {
		return (
			<div className="p-2 rounded-full" aria-label="Loading theme toggle">
				<div className="w-5 h-5"></div>
			</div>
		)
	}

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full bg-[var(--bg-tag)] text-[var(--text-primary)] hover:bg-[var(--bg-tag-hover)] transition-colors"
			aria-label={
				theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
			}
		>
			<motion.div
				initial={{ rotate: 0 }}
				animate={{ rotate: theme === 'dark' ? 180 : 0 }}
				transition={{ duration: 0.3 }}
				className="flex items-center justify-center"
			>
				{theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
			</motion.div>
		</button>
	)
}

export default ThemeToggle
