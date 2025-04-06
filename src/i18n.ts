export const locales = ['en', 'zh-TW'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function getBrowserLanguage(): Locale {
	if (typeof window === 'undefined') return defaultLocale

	const savedLanguage = localStorage.getItem('userLanguage') as Locale | null
	if (savedLanguage && locales.includes(savedLanguage as Locale)) {
		return savedLanguage as Locale
	}

	return defaultLocale
}

export function getMessages(locale: string) {
	try {
		if (locale === 'zh-TW') {
			return require('../messages/zh-TW/common.json')
		}
		return require('../messages/en/common.json')
	} catch (error) {
		console.error('Error loading messages:', error)
		return {}
	}
}
