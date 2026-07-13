import Nav from '../components/Nav'
import ContactCard from '../components/ContactCard'
import { MailIcon, LinkedinIcon, CalendarIcon, ArrowDownIcon, LanguagesIcon } from '../components/icons'
import { useLanguage } from '../i18n'
import '../styles/Contact.css'

const EMAIL = 'mioterasaki@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/mioterasaki'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  return (
    <div className="page" data-screen-label="Contact">
      <Nav active="contact" showCta={false} />

      <header className="header">
        <div>
          <div className="header__eyebrow">{c.eyebrow}</div>
          <h1 className="header__title">{c.title}</h1>
          <p className="header__lede">{c.lede}</p>
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
            title={c.cards.email.title}
            body={c.cards.email.body}
            detail={EMAIL}
          />
          <ContactCard
            href={LINKEDIN_URL}
            target="_blank"
            icon={<LinkedinIcon />}
            title={c.cards.linkedin.title}
            body={c.cards.linkedin.body}
            detail="linkedin.com/in/mioterasaki"
          />
          <ContactCard
            href={`mailto:${EMAIL}?subject=Booking%20a%20call`}
            icon={<CalendarIcon />}
            title={c.cards.call.title}
            body={c.cards.call.body}
            detail={c.cards.call.detail}
          />
          <ContactCard
            href={RESUME_URL}
            target="_blank"
            icon={<ArrowDownIcon />}
            title={c.cards.resume.title}
            body={c.cards.resume.body}
            detail={c.cards.resume.detail}
          />
        </div>

        <div className="languages">
          <LanguagesIcon className="languages__icon" />
          <p className="languages__text">
            <strong>{c.languagesLabel}</strong>
            {c.languagesText}
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>{c.location}</span>
        <span>
          {EMAIL} · <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/mioterasaki</a>
        </span>
      </footer>
    </div>
  )
}
