import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './content'

// Language context: 'en' | 'ja'. Persisted to localStorage; the <html lang>
// attribute drives the JA font-fallback overrides in tokens.css.
const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: content.en })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return window.localStorage.getItem('lang') === 'ja' ? 'ja' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang)
    } catch {
      // private browsing — fine, just don't persist
    }
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
