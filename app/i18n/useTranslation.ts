'use client'

import { useLanguage } from './LanguageContext'
import enCommon from './en/common.json'
import ruCommon from './ru/common.json'
import enSlides from './en/slides.json'
import ruSlides from './ru/slides.json'

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

export const useTranslation = (namespace: string = 'common') => {
  const { locale } = useLanguage()
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let translation: any = translations[locale][namespace as keyof typeof translations[typeof locale]]
    
    for (const k of keys) {
      if (!translation) return key
      translation = translation[k]
    }
    
    return translation || key
  }
  
  return { t, locale }
} 