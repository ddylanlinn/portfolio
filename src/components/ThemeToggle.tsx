'use client'

import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/context/ThemeContext'

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full hover:bg-[var(--bg-tag)] transition-colors cursor-pointer"
			aria-label={
				theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
			}
		>
			{theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
		</button>
	)
}

export default ThemeToggle
