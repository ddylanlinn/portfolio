'use client'

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react'
import { Locale, defaultLocale, locales, getBrowserLanguage } from '@/i18n'
import { getMessages } from '@/i18n'

type LanguageContextType = {
	locale: Locale
	setLocale: (locale: Locale) => void
	messages: Record<string, any>
	toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>(defaultLocale)
	const [messages, setMessages] = useState<Record<string, any>>({})

	useEffect(() => {
		const browserLang = getBrowserLanguage()
		setLocale(browserLang)
	}, [])

	useEffect(() => {
		const msgs = getMessages(locale)
		setMessages(msgs)

		if (typeof window !== 'undefined') {
			localStorage.setItem('userLanguage', locale)
		}
	}, [locale])

	const toggleLocale = () => {
		setLocale(locale === 'en' ? 'zh-TW' : 'en')
	}

	return (
		<LanguageContext.Provider
			value={{ locale, setLocale, messages, toggleLocale }}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
