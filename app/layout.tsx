import '@/app/ui/global.scss'
import { Metadata } from 'next'
import { Analytics, Body } from './components'
import { LanguageProvider } from './i18n/LanguageContext'
import enCommon from './i18n/en/common.json'
import ruCommon from './i18n/ru/common.json'

// This is a server component, so we use a simple function to get translations
const getServerTranslation = (
  locale: string = 'en',
  key: string,
  namespace: string = 'common'
) => {
  const translations = {
    en: { common: enCommon },
    ru: { common: ruCommon }
  }
  
  const keys = key.split('.')
  let translation: any = translations[locale as keyof typeof translations][namespace as keyof typeof translations[keyof typeof translations]]
  
  for (const k of keys) {
    if (!translation) return key
    translation = translation[k]
  }
  
  return translation || key
}

export const metadata: Metadata = {
    title: getServerTranslation('en', 'title'),
    description: getServerTranslation('en', 'description'),
    metadataBase: new URL('https://shumlyansky.com'),
}

export default ({ children }: { children: React.ReactNode }) => (
    <html>
        <head>
            <Analytics />
        </head>
        <LanguageProvider>
            <Body children={children}/>
        </LanguageProvider>
    </html>
)
