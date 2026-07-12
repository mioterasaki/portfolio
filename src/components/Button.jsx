import { Link } from 'react-router-dom'

// Pill CTA from the brand system's Button.jsx. Renders a real link when
// `to` (router) or `href` is given so buttons stay navigable markup.
export default function Button({ children, variant = 'primary', size = 'md', iconRight, to, href, target, ...rest }) {
  const className = `btn btn--${variant} btn--${size}`
  const content = (
    <>
      {children}
      {iconRight && <span className="btn__icon">{iconRight}</span>}
    </>
  )
  if (to) {
    return <Link className={className} to={to} {...rest}>{content}</Link>
  }
  return (
    <a className={className} href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} {...rest}>
      {content}
    </a>
  )
}
