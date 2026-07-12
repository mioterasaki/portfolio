# Mio Terasaki — Brand System

A personal brand and design system for **Mio Terasaki**, a bilingual (Japanese / English) customer-experience and operations professional based in Melbourne, VIC — 10+ years across Japan and Australia, most recently in regulated iGaming (Easygo / Stake.com), now advancing into delivery/project management and financial-crime (AML/CTF/KYC) operations. The system powers a personal website, an intro/pitch deck, and social assets (LinkedIn banner + headshot frame). Direction: **warm-modern**, editorial-serif, terracotta & sage.

> **Sources.** This system was generated from a brand brief plus Mio's master résumé (`uploads/Mio_Terasaki_Master_Resume_v2.pdf`). All proof points in the website/deck are drawn from that résumé. The user referenced a Google Stitch sample (`https://stitch.withgoogle.com/projects/18292984307647983065?node-id=22d7602c26b445448522ef85880b0771`) which required login and could not be opened; the palette and type were chosen from on-canvas explorations the user approved (Direction **A · Terracotta & Sage**). See `explorations/` for the three directions that were shown.

---

## Positioning & voice (who this is for)

Mio blends **warmth with rigor** — a relationship-led operator who also lives in the numbers (QA scores, resolution times, retention). A **bilingual bridge between Japan and APAC** with enterprise-sales roots (Fuji Xerox) and frontline regulated-industry ops (Easygo/Stake.com). The brand should feel **polished & premium** and **calm & trustworthy**: confident without shouting, human without being cute.

---

## CONTENT FUNDAMENTALS

**Point of view.** First person for Mio's own voice ("I build the workflows that…", "I'm a bilingual operations professional"). Second person when addressing a prospective employer/client ("your customers", "your compliance risk"). Never corporate-third-person ("Mio is a results-driven professional who…") — that reads like a stale résumé.

**Tone.** Warm, direct, quietly confident. Lead with outcomes, not adjectives. Prefer concrete proof ("Cut ticket resolution time by 25%") over vague claims ("passionate about customer service"). Calm authority — no hype, no exclamation-point energy.

**Casing.** Sentence case for everything — headings, buttons, nav. Uppercase is reserved for small **eyebrow** labels (tracked-out, e.g. `CUSTOMER EXPERIENCE · OPERATIONS · BILINGUAL JP / EN`). Title Case only for proper nouns and section eyebrows if desired.

**Sentence length.** Short. One idea per sentence. Em dashes for a warm aside — like this. Serif headlines can run to two lines; keep them under ~7 words.

**Numbers.** Always concrete and specific, drawn from the résumé: `95%+ QA`, `100–400 daily touchpoints`, `−25% resolution time`, `10+ VoC insights`, `Top 5%`, `40+ accounts`, `400+ students`, `10+ years`. Percentages abbreviated. Metrics are the brand's signature — they belong in the display serif as `Stat` blocks.

**Emoji.** None. The warmth comes from color, type, and language — not emoji. (The only unicode used decoratively is the middle dot `·` as a separator in eyebrows.)

**Examples**
- Eyebrow: `CUSTOMER EXPERIENCE · OPERATIONS · BILINGUAL JP / EN`
- Headline: *"Calm operations for high-volume, regulated teams."*
- Lede: *"I'm a bilingual customer-experience and operations professional with 10+ years across Japan and Australia — most recently 2.5 years inside a regulated iGaming operator."*
- CTA: `Let's talk` · `View experience` · `Full résumé`
- Proof: *"Designed a payment-error workflow that cut ticket resolution time by 25%."*

---

## VISUAL FOUNDATIONS

**Palette.** Warm cream paper (`#FFFBF5`) as the base — never pure white, never cold grey. **Terracotta** (`#E07856`) is the primary brand color (CTAs, links, accents). **Gold** (`#F2C879`) is the secondary highlight (soft backgrounds, the signature gradient, avatar fills). **Sage** (`#4A5D52`) is the deep anchor — ghost buttons, dark sections, footers, and headings-on-dark. Text is warm near-black **ink** (`#2E2A26`) with warm-grey body (`#5A5049`) and muted (`#8A8078`). Status colors stay warm (sage-green success, gold warning, clay-red danger). See `tokens/colors.css`.

**Signature gradient.** `linear-gradient(150deg, gold-500, terracotta-500)` — used for avatar fallbacks, the monogram tile, and hero portrait placeholders. Use sparingly; it's the one gradient in the system.

**Typography.** Display/headings in **Newsreader** (editorial serif, medium 500 weight, tight `-0.02em` tracking, optical sizing on). Body/UI in **Hanken Grotesk** (humanist grotesque, relaxed 1.65 leading for warmth). Numerals/metadata in **Spline Sans Mono**. Metrics and quotes render in the serif — it's where the brand's editorial personality lives. See `tokens/typography.css`.

**Backgrounds.** Flat warm surfaces (paper, sand). No photographic hero backgrounds by default; imagery appears in framed portrait blocks with the signature gradient behind. No repeating patterns or textures. At most one gradient (the signature). Dark sections use sage-900.

**Layout.** Generous whitespace, wide gutters (`--pad-page-x` 64px desktop), max content width ~1120–1280px. Asymmetric hero (text-heavy left, portrait right). 4px spacing grid. Sections separated by hairline borders (`--border-subtle`), not heavy rules.

**Corner radii.** Soft and generous: pills (999px) for all buttons/badges/avatars; `lg` (16px) for cards; `md` (10px) for inputs and small tiles. Nothing sharp-cornered.

**Cards.** Warm white (`--surface-card`) on paper, `lg` radius, a **hairline subtle border + soft low-spread shadow** (`--shadow-sm`). Interactive cards lift 3px and deepen to `--shadow-lg` on hover. Alternate surface is `sunken` (sand, no shadow). Dark card variant uses sage.

**Shadows.** Warm, ink-tinted (`rgba(58,46,40,…)`), low opacity, negative spread so they read as soft ambient light, not hard drop-shadows. Five steps xs→xl. Modals/floating use `lg`/`xl`; resting cards use `sm`.

**Borders.** Hairline `1px` subtle (`--stone-100`) for dividers; `1.5px` regular (`--stone-200`) for card/input outlines; `2px` heavy rarely. Warm stone tones, never grey-blue.

**Motion.** Restrained and soft. Standard ease `cubic-bezier(.2,.6,.2,1)`, entrance ease-out `cubic-bezier(.16,1,.3,1)`. Durations 140/220/360ms. Buttons lift 1px on hover; cards lift 3px. No bounces, no infinite loops. Fades and short translate-ups only. Respect `prefers-reduced-motion`.

**Hover states.** Buttons darken (terracotta 500→600) and lift 1px. Ghost buttons gain a sage border + sage text. Links go from terracotta to deep terracotta (`--brand-press`). Cards lift + deepen shadow.

**Press states.** Slight settle (documented `--press-scale` 0.97 available); primarily color deepens to `--brand-press` (700).

**Transparency & blur.** Reserved for the sticky nav only: translucent paper (`rgba(255,251,245,.82)`) with `backdrop-filter: blur(10px)`. Body content is fully opaque.

**Imagery vibe.** Warm-toned, natural light, human/candid over corporate-stock. Portraits framed in rounded blocks over the signature gradient. No cool/desaturated/black-and-white treatments; no heavy grain.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — clean 2px-stroke, round-cap line icons that match the warm, humanist tone. **Loaded from CDN** (`https://unpkg.com/lucide@latest`); the `Icon` component wraps it. *(Substitution note: no icon set was provided in the brief, so Lucide was chosen as the closest fit to a polished, humanist personal brand. Swap freely if you prefer another line set.)*
- **Brand glyphs:** current Lucide dropped social/brand marks (e.g. `linkedin`) from its core set, so the `Icon` component renders those **inline** (see `BRAND_ICONS` in `components/core/Icon.jsx`) — `Icon name="linkedin"` and `IconButton icon="linkedin"` always work regardless of the CDN build. Raw-HTML cards/slides that need `linkedin` embed the same inline SVG.
- **Usage:** line icons only, inherit `currentColor`, sized 16–26px inline with text. Icons support labels, stats, nav, and buttons — never used as large decorative illustrations.
- **No emoji.** No custom illustration set. No PNG/sprite icons.
- **Curated glyphs** for this brand: `arrow-right`, `arrow-up-right`, `mail`, `phone`, `linkedin`, `calendar`, `message-circle`, `heart-handshake`, `trending-up`, `users`, `star`, `quote`, `check`, `sparkles`, `briefcase`, `award`.
- **No logo mark exists.** The brand is set in type — "Mio Terasaki" in Newsreader. A monogram **"MT"** on the signature gradient stands in for an avatar/favicon where a mark is needed. Do not invent a logo.

---

## Fonts — substitution note

All three families are loaded from **Google Fonts CDN** (`tokens/fonts.css`), not self-hosted binaries: **Newsreader**, **Hanken Grotesk**, **Spline Sans Mono**. If you want offline/self-hosted webfonts or a licensed alternative, provide the files and I'll wire up `@font-face` rules.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import manifest; link this one file).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `foundations/` — specimen cards (Colors, Type, Spacing, Brand groups).
- `components/` — reusable primitives (below).
- `ui_kits/website/` — the personal-website recreation.
- `slides/` — pitch/intro deck sample slides.
- `assets/social/` — LinkedIn banner + headshot frame.
- `explorations/` — the 3 approved directions + samples.
- `SKILL.md` — Agent-Skills wrapper.

**Components** (`window.MioTerasakiBrandSystem_051fd5.<Name>`)
- `core/` — **Icon**
- `forms/` — **Button**, **IconButton**, **Input**, **Textarea**
- `content/` — **Card**, **Badge**, **Stat**, **Avatar**, **Testimonial**
- `navigation/` — **NavBar**

*Intentional additions:* `Icon` (wrapper over Lucide, since no icon set was supplied) and `NavBar` (needed for the website kit). All other primitives are the standard from-scratch set sized to a personal-brand site.

**UI kits**
- `ui_kits/website/` — hero, about, work/case-studies, testimonials, contact (interactive index.html).

**Deck**
- `slides/` — title, stat, case-study, quote, contact slide types (16:9).
