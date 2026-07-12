# Handoff: Mio Terasaki — Personal Portfolio Website

## Overview
A three-page personal-brand website for Mio Terasaki, a bilingual (Japanese/English) sales / customer-success / operations professional in Melbourne. The site positions her as a "bridge between Japanese and Western business", leads with concrete metrics, and drives to four CTAs: email, LinkedIn, book a call, résumé download.

Pages: **Home** (hero, proof cards, culture-bridge insights, testimonials, CTA footer), **Experience** (full role timeline, skills, education/certs), **Contact** (four contact cards + languages note).

## About the Design Files
The `.dc.html` files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, plain static site, etc.) using its established patterns. If no environment exists yet, a simple static-site setup (e.g. Astro, plain HTML/CSS, or Next.js static export) is appropriate — this is a content site with no backend.

The files open in a browser but rely on a custom runtime (`support.js`) and a component bundle (`_ds/**/_ds_bundle.js`). Treat the rendered result as the spec; read the inline styles in the `.dc.html` files for exact values.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and hover states are final. Recreate pixel-perfectly. All numbers/claims are sourced from the included résumé (`uploads/Mio_Terasaki_Master_Resume_v2.pdf`).

## Design system
All visual values come from the **Mio Terasaki Brand System** included at `_ds/mio-terasaki-brand-system-051fd5f7-9900-4e29-8509-4bddfe3cea54/`:
- `tokens/fonts.css` — Google Fonts: **Newsreader** (display serif, weight 500, letter-spacing −0.02em), **Hanken Grotesk** (body/UI, line-height 1.65), **Spline Sans Mono** (dates, metadata).
- `tokens/colors.css` — full palette. Key values: paper `#FFFBF5`, terracotta brand `#E07856` (press `#C05A3C`-range 700), gold `#F2C879`, sage-900 dark `#2E3B33`-range, ink `#2E2A26`, body `#5A5049`, muted `#8A8078`. **Use the CSS custom properties, not hard-coded hex** — read the file for exact values.
- `tokens/typography.css`, `tokens/spacing.css` (4px grid), `tokens/effects.css` (radii, warm ink-tinted shadows, easings), `tokens/base.css`, `styles.css`.

Brand rules: sentence case everywhere; uppercase only for small tracked-out eyebrow labels; no emoji; pill (999px) buttons/badges; 16px card radius; the ONE gradient allowed is `linear-gradient(150deg, gold-500, terracotta-500)` (headshot ring only); Lucide line icons only.

## Screens / Views

### 1. Home (`Home.dc.html`)
- **Nav** — sage-900 bar, 20px×64px padding. Left: "Mio Terasaki" wordmark (Newsreader, ~20px, 600). Right: flex gap 30px — links "Experience", "Contact" (14px, 500, dark-muted → dark-text on hover) + primary pill button "Let's talk" (small, terracotta).
- **Hero** — sage-900, padding 80/64/88px, grid `1.2fr 0.8fr`, gap 64px, items centered.
  - Left: gold eyebrow `TOKYO-GRADE SERVICE · MELBOURNE-GRADE SCALE` (12px, 600, 0.16em tracking, uppercase); H1 Newsreader 62px/1.05, −0.02em, cream text: "Ten years of turning cross-cultural nuance into commercial results."; lede paragraph (~17px/1.65, dark-muted, max 50ch); two buttons (primary "Let's talk" → Contact, secondary "View experience" → Experience); stat row (4 stats, top hairline `rgba(243,235,221,.15)`, 30px padding-top, gap 44px) — value in Newsreader ~24px gold, label 12px dark-muted: `95%+ / QA at Easygo (Stake.com)`, `−25% / ticket resolution time`, `Top 5% / sales rank, AmazingTalker`, `400+ / clients retained`.
  - Right: circular headshot 340px — 10px ring of the signature gradient, photo 320px circle, `object-fit: cover`, shadow-xl. Asset: `assets/headshot.png`.
- **Proof section** ("Three things I've actually shipped") — paper bg, 72/64px padding. Terracotta eyebrow `PROOF, NOT ADJECTIVES`; H2 Newsreader ~30px. 3-col grid, gap 24px. Card: warm white, 1.5px subtle border, 16px radius, 32px padding, shadow-sm; hover lifts 3px + shadow-lg (220ms `cubic-bezier(.2,.6,.2,1)`). Card anatomy: mono caption (12px, muted, uppercase) → big serif stat (~36-40px terracotta) → serif H3 (~20px) → body (14px/1.65). Cards: `−25%` payment-error workflow / `Top 5%` retention playbook / `7 yrs` 400-client book.
- **Bridge section** — sunken sand bg, 72/64px. Grid `0.9fr 1.1fr`, gap 64px. Left: eyebrow `THE BRIDGE`, H2 "Two business cultures, read fluently", intro paragraph. Right: 3 numbered rows (grid `44px 1fr`, gap 20px, 22px vertical padding, hairline dividers): serif number in stone-300, serif H3 + 14px body. Items: 01 "Consensus is built before the meeting" (nemawashi) / 02 "Trust runs on different clocks" / 03 "Service floors are set differently" (omotenashi).
- **Testimonials** — paper bg, 2-col grid gap 24px, dark-variant Testimonial cards. **Copy is placeholder** — awaiting real references.
- **CTA footer** — paper, top hairline, 64px padding. Grid `1fr auto`: H2 Newsreader ~36px "Bring me the gap." + paragraph; right: buttons "Email me" (primary, mail icon, `mailto:mioterasaki@gmail.com`), "Book a call" (ghost, calendar), "Full résumé" (ghost, arrow-down, links to the PDF). Bottom meta row: hairline, 12px muted, name/location left, email + LinkedIn right.

### 2. Experience (`Experience.dc.html`)
- Same nav (active link in dark-text).
- **Header** — sage-900, 72/64px. Gold eyebrow `EXPERIENCE`; H1 54px "From Kyushu enterprise sales to Melbourne regulated operations."; lede.
- **Timeline** — paper, 64px padding. Each role is a grid `220px 1fr`, gap 40px, 36px vertical padding, hairline divider. Left column: date range in Spline Sans Mono 14px muted + optional pill badge (tones: terracotta "Current", sage "Regulated ops", gold "Top 5% sales", neutral). Right: serif H2 ~24px role title, 14px muted company line, bulleted list (14px/1.6, 8px gap). Roles in order: countfor.me (Apr 2026–present) · Easygo/Stake.com (Oct 2023–Apr 2026) · AmazingTalker (Sep 2020–Dec 2021) · Independent Japanese tutor (May 2016–May 2023) · Prefectural High School (Apr 2011–Mar 2015) · Fuji Xerox, Saga (Apr 2009–Apr 2010). Exact bullet copy is in the file — keep it verbatim (sourced from résumé).
- **Skills + Education** — sunken bg, 2-col grid gap 64px. Left: "Key skills" as pill badges (sage/terracotta/gold/neutral tones). Right: "Education & certifications" as hairline-divided rows, name left (14px; the in-progress AML/KYC cert is bold with terracotta mono date "in progress · 2026"), year right in mono 12px muted.
- **Footer CTA** — sage-900: "The full story, on one page." + primary "Full résumé" (PDF) and secondary "Contact" buttons; meta row.

### 3. Contact (`Contact.dc.html`)
- Nav without the CTA button (page is the CTA). Column layout fills viewport height.
- **Header** — sage-900, grid `1fr auto`. Gold eyebrow `CONTACT · どうぞよろしく`; H1 54px "Let's talk — in either language."; lede inviting English or Japanese. Right: 220px circular headshot with 8px gradient ring.
- **Contact cards** — paper, 4-col grid gap 24px. Each card is a full-card link: Lucide icon 26px → serif H3 → 14px body → mono 12px terracotta detail pinned to bottom (`margin-top: auto`). Cards: Email (`mailto:`) / LinkedIn (profile URL) / Book a call (mailto with subject; "AEST or JST") / Résumé (PDF). Same hover lift as Home cards.
- **Languages note** — sunken rounded panel, 32/40px padding, grid `auto 1fr` gap 28px: languages icon + one paragraph (working languages, Melbourne base, APAC remote).
- **Footer** — slim meta row only.

## Interactions & Behavior
- Nav links navigate between the three pages; wordmark → Home.
- Card hover: `translateY(-3px)` + shadow-sm → shadow-lg, 220ms `cubic-bezier(.2,.6,.2,1)`. Button hover (from design system): darken terracotta 500→600 + 1px lift; ghost buttons gain sage border/text. Link color: terracotta → deep terracotta on hover.
- External links (LinkedIn, résumé PDF) open in a new tab.
- No forms, no client state, no data fetching. Motion should respect `prefers-reduced-motion`.
- Responsive behavior was not designed (desktop ≥1080px). If needed: collapse multi-column grids to single column, reduce hero H1 to ~40px, stack hero portrait above text.

## State Management
None required — fully static content site.

## Design Tokens
Read the token files (authoritative): `_ds/.../tokens/*.css`. Summary: warm cream paper base, terracotta primary, gold highlight, sage dark anchor; Newsreader/Hanken Grotesk/Spline Sans Mono; 4px spacing grid; radii pill/16px/10px; five warm ink-tinted shadow steps; eases `cubic-bezier(.2,.6,.2,1)` and `cubic-bezier(.16,1,.3,1)`, durations 140/220/360ms.

## Assets
- `assets/headshot.png` — Mio's headshot (user-provided). Used at 320px and 204px circles.
- `uploads/Mio_Terasaki_Master_Resume_v2.pdf` — the résumé the "Full résumé" links point at.
- Icons: [Lucide](https://lucide.dev) line icons (`mail`, `calendar`, `arrow-right`, `arrow-down`, `languages`, `linkedin` — LinkedIn glyph may need the inline SVG in `components/core/Icon.jsx` of the brand-system source since current Lucide builds dropped brand marks).
- Fonts via Google Fonts (see `tokens/fonts.css`).

## Files
- `Home.dc.html`, `Experience.dc.html`, `Contact.dc.html` — the three page designs (inline-styled; read these for exact values and copy).
- `support.js` — prototype runtime (reference only; do not ship).
- `_ds/mio-terasaki-brand-system-.../` — design tokens, global styles, and component bundle.
- `assets/`, `uploads/` — as above.

## Open items
- Testimonial quotes on Home are placeholders — replace with real references before launch.
- "Book a call" currently falls back to a mailto; swap in a scheduling link (e.g. Calendly) if one exists.
