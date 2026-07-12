export default function ContactCard({ href, target, icon, title, body, detail }) {
  return (
    <a className="card-link" href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
      <div className="card">
        <div className="card__icon">{icon}</div>
        <h2 className="card__title">{title}</h2>
        <p className="card__body">{body}</p>
        <span className="card__detail">{detail}</span>
      </div>
    </a>
  )
}
