import { Link } from 'react-router-dom'
import Button from './Button'

// Sage-900 nav bar. Home/Experience show the "Let's talk" CTA;
// the Contact page omits it (the page itself is the CTA).
export default function Nav({ active, showCta = true }) {
  const linkClass = (name) => `nav__link${active === name ? ' nav__link--active' : ''}`
  return (
    <nav className="nav">
      <Link className="nav__brand" to="/">Mio Terasaki</Link>
      <div className="nav__links">
        <Link className={linkClass('experience')} to="/experience">Experience</Link>
        <Link className={linkClass('contact')} to="/contact">Contact</Link>
        {showCta && <Button to="/contact" size="sm">Let's talk</Button>}
      </div>
    </nav>
  )
}
