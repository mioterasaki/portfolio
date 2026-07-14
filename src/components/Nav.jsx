import { Link } from 'react-router-dom'
import Button from './Button'
import { SunIcon, MoonIcon } from './icons'
import { useLanguage } from '../i18n'
import { useTheme } from '../theme'

// Sage-900 nav bar. Home/Experience show the "Let's talk" CTA;
// the Contact page omits it (the page itself is the CTA).
export default function Nav({ active, showCta = true }) {
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const linkClass = (name) => `nav__link${active === name ? ' nav__link--active' : ''}`
  const toggleClass = (name) =>
    `lang-toggle__btn${lang === name ? ' lang-toggle__btn--active' : ''}`
  return (
    <nav className="nav">
      <Link className="nav__brand" to="/">Mio Terasaki</Link>
      <div className="nav__links">
        <Link className={linkClass('experience')} to="/experience">{t.nav.experience}</Link>
        <Link className={linkClass('contact')} to="/contact">{t.nav.contact}</Link>
        <div className="lang-toggle" role="group" aria-label="Language / 言語">
          <button type="button" className={toggleClass('en')} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
            EN
          </button>
          <button type="button" className={toggleClass('ja')} onClick={() => setLang('ja')} aria-pressed={lang === 'ja'}>
            日本語
          </button>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
        </button>
        {showCta && <Button to="/contact" size="sm">{t.nav.cta}</Button>}
      </div>
    </nav>
  )
}
