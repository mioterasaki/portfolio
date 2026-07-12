import Nav from '../components/Nav'
import Button from '../components/Button'
import Testimonial from '../components/Testimonial'
import { MailIcon, CalendarIcon, ArrowRightIcon, ArrowDownIcon } from '../components/icons'
import '../styles/Home.css'

const EMAIL = 'mioterasaki@gmail.com'
const LINKEDIN_URL = 'https://linkedin.com/in/mioterasaki'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

const stats = [
  { value: '95%+', label: 'QA at Easygo (Stake.com)' },
  { value: '−25%', label: 'ticket resolution time' },
  { value: 'Top 5%', label: 'sales rank, AmazingTalker' },
  { value: '400+', label: 'clients retained' },
]

const proofCards = [
  {
    caption: 'EASYGO (STAKE.COM) · 2023–26',
    stat: '−25%',
    title: 'Payment-error workflow, designed from the frontline',
    body: 'Spotted the recurring failure pattern across 100–400 daily touchpoints, designed a structured workflow with Payments and Risk, and cut ticket resolution time by a quarter.',
  },
  {
    caption: 'AMAZINGTALKER · 2020–21',
    stat: 'Top 5%',
    title: 'A retention playbook that scaled beyond me',
    body: 'Ranked top 5% of salespeople, then standardised the evaluation and onboarding materials so a whole cohort of teachers could retain accounts the same way.',
  },
  {
    caption: 'INDEPENDENT · 2016–23',
    stat: '7 yrs',
    title: 'A 400-client book, built and kept single-handed',
    body: 'Acquisition, onboarding, renewals and referrals for 400+ clients — the full account-management cycle, run alone, for seven years.',
  },
]

const bridgeItems = [
  {
    number: '01',
    title: 'Consensus is built before the meeting',
    body: 'Nemawashi vs. deciding in the room — I prepare stakeholders the way their culture expects.',
  },
  {
    number: '02',
    title: 'Trust runs on different clocks',
    body: 'Years-long relationships in Japan, quarter-by-quarter outcomes in the West — I run both renewal playbooks.',
  },
  {
    number: '03',
    title: 'Service floors are set differently',
    body: 'Omotenashi sets an uncompromising standard — I hold it at Western volume: 95%+ QA at 400 touchpoints a day.',
  },
]

// Placeholder quotes — swap in real references before promoting the site.
const testimonials = [
  {
    quote: 'Placeholder — a former manager on your cross-team work with Payments, Risk and KYC.',
    name: 'Reference name',
    title: 'Role · Easygo (Stake.com)',
  },
  {
    quote: 'Placeholder — a long-term client on seven years of renewals and referrals.',
    name: 'Reference name',
    title: 'Client · Independent practice',
  },
]

export default function Home() {
  return (
    <div className="home" data-screen-label="Home">
      <Nav />

      <header className="hero">
        <div>
          <div className="hero__eyebrow">Tokyo-grade service · Melbourne-grade scale</div>
          <h1 className="hero__title">Ten years of turning cross-cultural nuance into commercial results.</h1>
          <p className="hero__lede">
            Bilingual sales, customer success and operations — from consultative enterprise
            selling in Japan to regulated iGaming operations in Australia. Now moving into
            delivery management and financial-crime operations.
          </p>
          <div className="hero__actions">
            <Button to="/contact" iconRight={<ArrowRightIcon />}>Let's talk</Button>
            <Button to="/experience" variant="secondary">View experience</Button>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
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
        <div className="proof__eyebrow">Proof, not adjectives</div>
        <h2 className="proof__title">Three things I've actually shipped</h2>
        <div className="proof__grid">
          {proofCards.map((c) => (
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
            <div className="bridge__eyebrow">The bridge</div>
            <h2 className="bridge__title">Two business cultures, read fluently</h2>
            <p className="bridge__intro">
              Most companies learn these differences by losing a deal. I learned them by living
              on both sides — and I use them to keep deals, teams and customers from falling
              into the gap.
            </p>
          </div>
          <div className="bridge__list">
            {bridgeItems.map((item) => (
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
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <Testimonial key={t.title} {...t} />
          ))}
        </div>
      </section>

      <footer className="cta-footer">
        <div className="cta-footer__grid">
          <div>
            <h2 className="cta-footer__title">Bring me the gap.</h2>
            <p className="cta-footer__body">
              Delivery/PM, customer success, AML/KYC operations, or Japan market entry — email,
              book a call, or find me on LinkedIn.
            </p>
          </div>
          <div className="cta-footer__actions">
            <Button href={`mailto:${EMAIL}`} iconRight={<MailIcon />}>Email me</Button>
            <Button to="/contact" variant="ghost" iconRight={<CalendarIcon />}>Book a call</Button>
            <Button href={RESUME_URL} target="_blank" variant="ghost" iconRight={<ArrowDownIcon />}>Full résumé</Button>
          </div>
        </div>
        <div className="cta-footer__meta">
          <span>Mio Terasaki · Melbourne, VIC</span>
          <span>
            {EMAIL} · <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/mioterasaki</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
