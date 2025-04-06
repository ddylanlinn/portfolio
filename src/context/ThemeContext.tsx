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
	const [mounted, setMounted] = useState(false)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')

	useEffect(() => {
		setMounted(true)

		const storedTheme = localStorage.getItem('theme')
		if (storedTheme === 'dark' || storedTheme === 'light') {
			setTheme(storedTheme)
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		}
	}, [])

	useEffect(() => {
		if (!mounted) return

		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}

		localStorage.setItem('theme', theme)
	}, [theme, mounted])

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light'
			return newTheme
		})
	}

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
