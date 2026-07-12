import ContactCard from '../components/ContactCard'
import { MailIcon, LinkedinIcon, CalendarIcon, ArrowDownIcon, LanguagesIcon } from '../components/icons'
import '../styles/Contact.css'

const EMAIL = 'mioterasaki@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/mioterasaki'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

export default function Contact() {
  return (
    <div className="page" data-screen-label="Contact">
      <nav className="nav">
        <a className="nav__brand" href="/">Mio Terasaki</a>
        <div className="nav__links">
          <a className="nav__link" href="/experience">Experience</a>
          <a className="nav__link nav__link--active" href="/contact">Contact</a>
        </div>
      </nav>

      <header className="header">
        <div>
          <div className="header__eyebrow">Contact · どうぞよろしく</div>
          <h1 className="header__title">Let's talk — in either language.</h1>
          <p className="header__lede">
            Hiring for delivery/PM, customer success or AML/KYC operations — or planning a move
            into the Japanese market? Write in English or Japanese; I answer in whichever you use.
          </p>
        </div>
        <div className="header__portrait">
          <img src="/assets/headshot.png" alt="Mio Terasaki" />
        </div>
      </header>

      <section className="main">
        <div className="cards">
          <ContactCard
            href={`mailto:${EMAIL}`}
            icon={<MailIcon />}
            title="Email"
            body="The fastest way to reach me."
            detail={EMAIL}
          />
          <ContactCard
            href={LINKEDIN_URL}
            target="_blank"
            icon={<LinkedinIcon />}
            title="LinkedIn"
            body="Connect, or message me directly."
            detail="linkedin.com/in/mioterasaki"
          />
          <ContactCard
            href={`mailto:${EMAIL}?subject=Booking%20a%20call`}
            icon={<CalendarIcon />}
            title="Book a call"
            body="Suggest a time by email — happy to work around AEST or JST."
            detail="Melbourne (AEST)"
          />
          <ContactCard
            href={RESUME_URL}
            target="_blank"
            icon={<ArrowDownIcon />}
            title="Résumé"
            body="The master résumé — full record of roles and results."
            detail="PDF · 3 pages"
          />
        </div>

        <div className="languages">
          <LanguagesIcon className="languages__icon" />
          <p className="languages__text">
            <strong>Working languages:</strong> native Japanese (business level) and fluent
            English, written and spoken. Based in Melbourne, VIC — available for remote work
            across APAC time zones.
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>Mio Terasaki · Melbourne, VIC</span>
        <span>
          {EMAIL} · <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/mioterasaki</a>
        </span>
      </footer>
    </div>
  )
}
