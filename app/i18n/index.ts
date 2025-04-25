import enCommon from './en/common.json'
import ruCommon from './ru/common.json'
import enSlides from './en/slides.json'
import ruSlides from './ru/slides.json'

type Locale = 'en' | 'ru'
type TranslationKeys = keyof typeof enCommon
type NestedTranslationKey = string

const translations = {
  en: {
    common: enCommon,
    slides: enSlides
  },
  ru: {
    common: ruCommon,
    slides: ruSlides
  }
}

export const getLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  
  // Check for cookies first
  const cookies = document.cookie.split(';')
  const localeCookie = cookies.find(cookie => cookie.trim().startsWith('NEXT_LOCALE='))
  
  if (localeCookie) {
    const locale = localeCookie.trim().split('=')[1]
    // Make sure we handle possible spaces in cookie value
    if (locale === 'ru') return 'ru'
    if (locale === 'en') return 'en'
  }
  
  // Additional check for cookie format issues
  const cookieMap = new Map()
  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=')
    if (name) cookieMap.set(name, value)
  })
  
  const nextLocale = cookieMap.get('NEXT_LOCALE')
  if (nextLocale === 'en') return 'en'
  if (nextLocale === 'ru') return 'ru'
  
  // Fallback to browser language
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'ru' ? 'ru' : 'en'
}

export const t = (key: string, namespace: string = 'common'): string => {
  const locale = getLocale()
  
  const keys = key.split('.')
  let translation: any = translations[locale][namespace as keyof typeof translations[typeof locale]]
  
  for (const k of keys) {
    if (!translation) return key
    translation = translation[k]
  }
  
  return translation || key
}

export const withLocale = <T extends Function>(Component: T): T => {
  return Component
}

export default { t, getLocale, withLocale } 