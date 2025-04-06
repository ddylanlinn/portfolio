import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Portfolio | Your Name',
	description: 'Personal portfolio website showcasing projects and skills',
	keywords: ['portfolio', 'developer', 'design', 'projects'],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
			>
				{children}
			</body>
		</html>
	)
}
