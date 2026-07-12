import Nav from '../components/Nav'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { ArrowRightIcon, ArrowDownIcon } from '../components/icons'
import '../styles/Experience.css'

const EMAIL = 'mioterasaki@gmail.com'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

const roles = [
  {
    dates: 'Apr 2026 – present',
    badge: { tone: 'terracotta', label: 'Current' },
    title: 'Founding Sales, Marketing & Operations Lead',
    company: 'countfor.me · pro bono · sole commercial hire',
    bullets: [
      "Set up the company's first outbound sales process — target segments across the Japanese and Melbourne markets, prospect list built from zero.",
      'Run full-cycle prospecting: account research, outreach sequences, and follow-up that converts cold contacts into qualified conversations.',
      'Use native Japanese and market fluency to open and localise the Japan go-to-market motion.',
      'Map the end-to-end customer journey and apply it to messaging across the website and social channels.',
    ],
  },
  {
    dates: 'Oct 2023 – Apr 2026',
    badge: { tone: 'sage', label: 'Regulated ops' },
    title: 'Customer Service Representative',
    company: 'Easygo (Stake.com) · Melbourne · regulated iGaming',
    bullets: [
      'Managed 100–400 daily customer touchpoints while sustaining a 95%+ QA score and meeting all SLAs.',
      'Designed and rolled out a structured payment-error workflow that cut ticket resolution time by 25%.',
      'Delivered 10+ Voice-of-Customer insights that directly improved internal processes.',
      'Partnered daily with Payments, Risk, KYC, Sportsbook and CRM teams on complex client issues.',
      'Authored internal documentation and response playbooks that reduced handling times.',
    ],
  },
  {
    dates: 'Sep 2020 – Dec 2021',
    badge: { tone: 'gold', label: 'Top 5% sales' },
    title: 'Teaching Mentor Manager',
    company: 'AmazingTalker · B2C accounts',
    bullets: [
      'Ranked in the top 5% of salespeople while owning acquisition, retention and renewals for a book of student accounts.',
      'Coached a cohort of teachers on the client-retention approach I built as a tutor.',
      'Standardised evaluation criteria and onboarding materials so account-management practice scaled consistently.',
    ],
  },
  {
    dates: 'May 2016 – May 2023',
    badge: { tone: 'neutral', label: 'Own business' },
    title: 'Japanese Tutor — Independent Business',
    company: 'Self-employed · Sydney & Melbourne',
    bullets: [
      'Owned the end-to-end client relationship for 400+ students — onboarding, check-ins and renewals over up to seven years.',
      "Drove retention by tailoring plans to each client's goals, sustaining long-term renewals and referrals.",
      'Ran the whole business alone: acquisition, scheduling, invoicing, retention.',
    ],
  },
  {
    dates: 'Apr 2011 – Mar 2015',
    badge: null,
    title: 'English Teacher',
    company: 'Prefectural High School, Japan',
    bullets: [
      'Presented to and managed engagement for classes of up to 40 students daily.',
      'Wrote and graded formal exams for Year 10–12, assessing 100+ students per year against fixed deadlines.',
    ],
  },
  {
    dates: 'Apr 2009 – Apr 2010',
    badge: { tone: 'neutral', label: 'Where it began' },
    title: 'Corporate Sales Representative',
    company: 'Fuji Xerox · Saga (Kyushu), Southern Japan',
    bullets: [
      'Ran the full B2B sales cycle for a portfolio of 40+ corporate and public-sector accounts, including local government.',
      'Built relationships across major Japanese enterprises including Toyota — and learned the consultative selling and business etiquette I still use today.',
      'Served as product expert for DocuWorks, translating technical features into business outcomes for non-technical buyers.',
    ],
  },
]

const skills = [
  { tone: 'sage', label: 'Regulated-industry operations' },
  { tone: 'sage', label: 'Process design & delivery' },
  { tone: 'terracotta', label: 'Full-cycle B2B sales' },
  { tone: 'terracotta', label: 'Account management & retention' },
  { tone: 'gold', label: 'SMB & public-sector selling' },
  { tone: 'gold', label: 'Consultative & value selling' },
  { tone: 'neutral', label: 'Cross-cultural / bilingual communication' },
  { tone: 'neutral', label: 'CRM & data-driven forecasting' },
]

const education = [
  { name: 'AML/KYC Certification (ACAMS / ICA pathway)', year: 'in progress · 2026', strong: true },
  { name: 'BA Linguistics — Yamaguchi University', year: '2009' },
  { name: 'Certificate IV in TESOL — International House Sydney', year: '2015' },
  { name: '420-hr Advanced Japanese Teacher Training — World Japanese Language Centre', year: '2019' },
  { name: "High School Teacher's Certificate — Yamaguchi Prefectural Board of Education", year: '2009' },
]

export default function Experience() {
  return (
    <div className="experience" data-screen-label="Experience">
      <Nav active="experience" />

      <header className="exp-header">
        <div className="exp-header__eyebrow">Experience</div>
        <h1 className="exp-header__title">From Kyushu enterprise sales to Melbourne regulated operations.</h1>
        <p className="exp-header__lede">
          Every role on this page taught me a different side of the same craft: winning trust,
          keeping accounts, and building the process that makes both repeatable.
        </p>
      </header>

      <section className="timeline">
        {roles.map((role) => (
          <article className="role" key={role.dates}>
            <div className="role__when">
              <span className="role__dates">{role.dates}</span>
              {role.badge && <Badge tone={role.badge.tone}>{role.badge.label}</Badge>}
            </div>
            <div>
              <h2 className="role__title">{role.title}</h2>
              <div className="role__company">{role.company}</div>
              <ul className="role__bullets">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="skills-edu">
        <div className="skills-edu__grid">
          <div>
            <h2 className="skills-edu__title">Key skills</h2>
            <div className="skills__badges">
              {skills.map((s) => (
                <Badge key={s.label} tone={s.tone}>{s.label}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="skills-edu__title">Education & certifications</h2>
            <div className="edu__list">
              {education.map((e) => (
                <div className="edu-row" key={e.name}>
                  <span className={`edu-row__name${e.strong ? ' edu-row__name--strong' : ''}`}>{e.name}</span>
                  <span className={`edu-row__year${e.strong ? ' edu-row__year--brand' : ''}`}>{e.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="exp-footer">
        <div className="exp-footer__grid">
          <div>
            <h2 className="exp-footer__title">The full story, on one page.</h2>
            <p className="exp-footer__body">Download the master résumé, or get in touch to talk specifics.</p>
          </div>
          <div className="exp-footer__actions">
            <Button href={RESUME_URL} target="_blank" iconRight={<ArrowDownIcon />}>Full résumé</Button>
            <Button to="/contact" variant="secondary" iconRight={<ArrowRightIcon />}>Contact</Button>
          </div>
        </div>
        <div className="exp-footer__meta">
          <span>Mio Terasaki · Melbourne, VIC</span>
          <span>{EMAIL} · linkedin.com/in/mioterasaki</span>
        </div>
      </footer>
    </div>
  )
}
