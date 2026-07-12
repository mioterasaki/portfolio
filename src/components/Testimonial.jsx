import { QuoteIcon } from './icons'

// Dark-variant testimonial card from the brand system (quote icon in gold,
// serif quote, initials avatar). Copy is placeholder until real references land.
export default function Testimonial({ quote, name, title }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <figure className="testimonial">
      <span className="testimonial__mark"><QuoteIcon width={30} height={30} /></span>
      <blockquote className="testimonial__quote">{quote}</blockquote>
      <figcaption className="testimonial__caption">
        <span className="testimonial__avatar">{initials}</span>
        <span className="testimonial__who">
          <span className="testimonial__name">{name}</span>
          <span className="testimonial__title">{title}</span>
        </span>
      </figcaption>
    </figure>
  )
}
