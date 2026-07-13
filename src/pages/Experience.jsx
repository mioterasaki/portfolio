import Nav from '../components/Nav'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { ArrowRightIcon, ArrowDownIcon } from '../components/icons'
import { useLanguage } from '../i18n'
import '../styles/Experience.css'

const EMAIL = 'mioterasaki@gmail.com'
const RESUME_URL = '/resume/Mio_Terasaki_Master_Resume_v2.pdf'

export default function Experience() {
  const { t } = useLanguage()
  const x = t.experience
  return (
    <div className="experience" data-screen-label="Experience">
      <Nav active="experience" />

      <header className="exp-header">
        <div className="exp-header__eyebrow">{x.eyebrow}</div>
        <h1 className="exp-header__title">{x.title}</h1>
        <p className="exp-header__lede">{x.lede}</p>
      </header>

      <section className="timeline">
        {x.roles.map((role) => (
          <article className="role" key={role.title}>
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
            <h2 className="skills-edu__title">{x.skillsTitle}</h2>
            <div className="skills__badges">
              {x.skills.map((s) => (
                <Badge key={s.label} tone={s.tone}>{s.label}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="skills-edu__title">{x.eduTitle}</h2>
            <div className="edu__list">
              {x.education.map((e) => (
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
            <h2 className="exp-footer__title">{x.footer.title}</h2>
            <p className="exp-footer__body">{x.footer.body}</p>
          </div>
          <div className="exp-footer__actions">
            <Button href={RESUME_URL} target="_blank" iconRight={<ArrowDownIcon />}>{x.footer.resume}</Button>
            <Button to="/contact" variant="secondary" iconRight={<ArrowRightIcon />}>{x.footer.contact}</Button>
          </div>
        </div>
        <div className="exp-footer__meta">
          <span>{x.footer.location}</span>
          <span>{EMAIL} · linkedin.com/in/mioterasaki</span>
        </div>
      </footer>
    </div>
  )
}
