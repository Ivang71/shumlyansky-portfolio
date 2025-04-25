'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getLocale } from './index'

type Locale = 'en' | 'ru'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
    document.documentElement.lang = newLocale
  }

  useEffect(() => {
    const detectedLocale = getLocale()
    setLocaleState(detectedLocale)
    document.documentElement.lang = detectedLocale
    setIsLoaded(true)
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext 