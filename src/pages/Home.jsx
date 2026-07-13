import Nav from '../components/Nav'
import Button from '../components/Button'
import Testimonial from '../components/Testimonial'
import { MailIcon, CalendarIcon, ArrowRightIcon, ArrowDownIcon } from '../components/icons'
import { useLanguage } from '../i18n'
import '../styles/Home.css'

const EMAIL = 'mioterasaki@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/mioterasaki'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

export default function Home() {
  const { t } = useLanguage()
  const h = t.home
  return (
    <div className="home" data-screen-label="Home">
      <Nav />

      <header className="hero">
        <div>
          <div className="hero__eyebrow">{h.hero.eyebrow}</div>
          <h1 className="hero__title">{h.hero.title}</h1>
          <p className="hero__lede">{h.hero.lede}</p>
          <div className="hero__actions">
            <Button to="/experience" variant="cta" size="lg" iconRight={<ArrowRightIcon />}>
              {h.hero.ctaPrimary}
            </Button>
            <Button to="/contact" variant="ghost-dark">{h.hero.ctaSecondary}</Button>
          </div>
          <div className="hero__stats">
            {h.hero.stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__portrait-col">
          <div className="hero__portrait">
            <img src="/assets/headshot.png" alt="Mio Terasaki" />
          </div>
        </div>
      </header>

      <section className="proof">
        <div className="proof__eyebrow">{h.proof.eyebrow}</div>
        <h2 className="proof__title">{h.proof.title}</h2>
        <div className="proof__grid">
          {h.proof.cards.map((c) => (
            <div className="proof-card" key={c.caption}>
              <span className="proof-card__caption">{c.caption}</span>
              <span className="proof-card__stat">{c.stat}</span>
              <h3 className="proof-card__title">{c.title}</h3>
              <p className="proof-card__body">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bridge">
        <div className="bridge__grid">
          <div>
            <div className="bridge__eyebrow">{h.bridge.eyebrow}</div>
            <h2 className="bridge__title">{h.bridge.title}</h2>
            <p className="bridge__intro">{h.bridge.intro}</p>
          </div>
          <div className="bridge__list">
            {h.bridge.items.map((item) => (
              <div className="bridge-item" key={item.number}>
                <span className="bridge-item__number">{item.number}</span>
                <div>
                  <h3 className="bridge-item__title">{item.title}</h3>
                  <p className="bridge-item__body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__eyebrow">{h.testimonials.eyebrow}</div>
        <h2 className="testimonials__title">{h.testimonials.title}</h2>
        <p className="testimonials__note">{h.testimonials.note}</p>
        <div className="testimonials__grid">
          {h.testimonials.items.map((x) => (
            <Testimonial key={x.name} {...x} />
          ))}
        </div>
      </section>

      <footer className="cta-footer">
        <div className="cta-footer__grid">
          <div>
            <h2 className="cta-footer__title">{h.ctaFooter.title}</h2>
            <p className="cta-footer__body">{h.ctaFooter.body}</p>
          </div>
          <div className="cta-footer__actions">
            <Button href={`mailto:${EMAIL}`} iconRight={<MailIcon />}>{h.ctaFooter.email}</Button>
            <Button to="/contact" variant="ghost" iconRight={<CalendarIcon />}>{h.ctaFooter.call}</Button>
            <Button href={RESUME_URL} target="_blank" variant="ghost" iconRight={<ArrowDownIcon />}>{h.ctaFooter.resume}</Button>
          </div>
        </div>
        <div className="cta-footer__meta">
          <span>{h.ctaFooter.location}</span>
          <span>
            {EMAIL} · <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/mioterasaki</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
