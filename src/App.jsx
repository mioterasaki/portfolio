import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { LanguageProvider, useLanguage } from './i18n'
import { ThemeProvider } from './theme'

function PageChrome() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  useEffect(() => {
    document.title = t.titles[pathname] || t.titles['/']
  }, [pathname, t])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <PageChrome />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
