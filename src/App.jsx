import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Contact />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
