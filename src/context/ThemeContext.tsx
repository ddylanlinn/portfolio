'use client'

import {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from 'react'

type ThemeContextType = {
	theme: 'light' | 'dark'
	setTheme: (theme: 'light' | 'dark') => void
	toggleTheme: () => void
	mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
	// Add mounted state to avoid hydration mismatch
	const [mounted, setMounted] = useState(false)
	// Initialize with a default to avoid hydration mismatch
	// IMPORTANT: We don't set the theme from localStorage during rendering
	// to avoid hydration mismatch
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	// This effect runs once after the component is mounted on the client
	useEffect(() => {
		// First set mounted to true so we know we're on the client
		setMounted(true)

		// AFTER we're mounted, we can safely check preferences
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme === 'dark' || storedTheme === 'light') {
			setTheme(storedTheme)
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		}
	}, [])

	useEffect(() => {
		// Only update the document class when the component is mounted
		if (!mounted) return

		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}

		// Save to localStorage
		localStorage.setItem('theme', theme)
	}, [theme, mounted])

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light'
			return newTheme
		})
	}

	// We provide the actual theme state only after mounting
	// This ensures server and client will always start with the same theme (light)
	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
				mounted,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
