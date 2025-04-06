'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const LanguageToggle = () => {
	const { locale, toggleLocale } = useLanguage()

	return (
		<button
			onClick={toggleLocale}
			className="p-2 rounded-full bg-[var(--bg-tag)] text-[var(--text-primary)] hover:bg-[var(--bg-tag-hover)] transition-colors cursor-pointer w-full flex justify-center"
			aria-label={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="flex items-center justify-center w-6"
			>
				{locale === 'en' ? '繁' : 'EN'}
			</motion.div>
		</button>
	)
}

export default LanguageToggle
