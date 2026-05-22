# Design

## Color

Strategy: **Committed** — the brand crimson carries 40–60% of the surface. Identity-driven pages.

```
--color-bg:        oklch(98% 0.005 25);   /* warm off-white */
--color-surface:   oklch(95% 0.007 25);   /* light warm gray */
--color-border:    oklch(88% 0.010 25);   /* subtle warm rule */
--color-text:      oklch(16% 0.012 25);   /* near-black with warmth */
--color-muted:     oklch(50% 0.010 25);   /* mid-gray captions */
--color-crimson:   oklch(34% 0.140 25);   /* JSM brand red */
--color-crimson-h: oklch(42% 0.140 25);   /* crimson hover */
--color-dark:      oklch(14% 0.015 25);   /* hero dark bg */
--color-dark-s:    oklch(20% 0.018 25);   /* hero surface/card */
```

## Typography

Fonts: **Fraunces** (display, variable — headings) + **Plus Jakarta Sans** (body, UI)

Scale (rem):
- Display: 4.5rem / 900 weight
- H1: 3rem / 800
- H2: 2rem / 700
- H3: 1.25rem / 600
- Body: 1rem / 400, line-height 1.65
- Small: 0.875rem

Line length: max 65ch on body copy.

## Layout

- Section vertical rhythm: 6rem (96px) top/bottom padding
- Container: max-width 1200px, 1.5rem horizontal padding
- Grid: CSS Grid throughout, no card grids of identical repeating items
- Spacing scale: 4px base unit (0.25rem increments)

## Elevation

- Sections use background color shifts, not shadows, for layering
- One exception: contact form card gets a subtle shadow in the dark section

## Motion

- Fade-in-up on scroll for section content (intersection observer)
- Ease-out-quart on all transitions
- Respect prefers-reduced-motion: skip animations entirely

## Components

- **Header**: Fixed, transparent over hero, solid dark on scroll. Logo left, nav right.
- **Button primary**: Crimson bg, white text, no radius (square corners signal seriousness), 0.875rem tracking
- **Button secondary**: White bg, crimson text + border
- **Service block**: Full-width rows with number, name, description — no cards
- **Review card**: Left-aligned quote, author, stars — varies in width for rhythm
- **Form inputs**: Warm white bg, 1px border, 4px radius — minimal

## Icons

Use Lucide React for all icons. No decorative icon walls.
