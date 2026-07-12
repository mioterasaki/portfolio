import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

const titles = {
  '/': 'Mio Terasaki — Bilingual sales, CS & operations',
  '/experience': 'Experience — Mio Terasaki',
  '/contact': 'Contact — Mio Terasaki',
}

function PageChrome() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] || titles['/']
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PageChrome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  )
}
