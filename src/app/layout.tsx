import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Portfolio | Dylan',
	description: 'Personal portfolio website showcasing projects and skills',
	keywords: ['portfolio', 'developer', 'design', 'projects'],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} font-sans`} suppressHydrationWarning>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
