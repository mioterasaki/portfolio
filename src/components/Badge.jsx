// Pill badge from the brand system. Tones per the handoff README:
// terracotta (Current), sage (Regulated ops), gold (Top 5% sales), neutral.
export default function Badge({ children, tone = 'neutral' }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
