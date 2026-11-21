# Circle of Truth — Cinematic Design System (v2)

## Creative north star

**One circle. Two worlds. Infinite perspectives.**

The original 20-page pitch deck combines the silhouettes of flame and ember, monumental nature/ancient places, real people in circles, ritual textures, music and silence. The later cast-sheet images add a golden Tree of Life, subtle sacred geometry, midnight blue, a warm ethereal glow and premium title lettering.

The website must honor BOTH; do not replace the founding source with the fictional cast posters or present imagined scenes as real film footage.

## Art direction

- **Palette:** ink `#080d15`, midnight `#0d131b`, charcoal `#171c23`, molten bronze `#c7a078`, ember `#d88e4a`, warm linen `#eee2d0`, muted slate `#aeb3b9`.
- **Type:** Cormorant Garamond for monumental theatrical editorial titles; DM Sans for clear metadata, body copy and functional UI.
- **Hero:** Custom-designed, original SVG artwork in `assets/origin-cover.svg` — the flame, concentric sacred-circle and landscape source motif. Public homepage: large confident type, roomy atmospheric composition, no imitation of third-party film franchises.
- **Animated companion:** The original Tree of Life asset `assets/tree-of-life.svg` supports the separate fictional track.
- **Mark:** `assets/circle-sigil.svg` custom native SVG, used as browser tab icon and brand signature.
- **Layout:** Film launch first, backstage data later. Full-height opening acts, slow visual transitions, border-lit card collections, single sentence headers, disciplined editorial rhythm.
- **Interaction:** Responsive navigation, clickable act selectors, live original guest vs character-index filters, story and season boards. All visual animation respects `prefers-reduced-motion`.

## Public routes

| URL | Purpose |
| --- | --- |
| `/#/` | Cinematic premiere / master project overview |
| `/#/origin` | Original live documentary concept, format, 3-day arc, pitch-era crew and distribution |
| `/#/animated` | Fictional 3D counterpart and pilot development |
| `/#/acts` | Eight editorial acts from deck pp. 5–6 |
| `/#/people` | 24 potential original guests and full registry |
| `/#/season` | 15 documentary episode slots; no invented assignments |
| `/#/impact` | Regenerative field projects and proposed Ojai context |
| `/#/partners` | Historical pitch financial figures and five draft sponsor concepts |
| `/#/timeline` | Original 2026 timeline versus current pre-production |
| `/#/foundations` | Compare the two formats and source provenance |

## Backstage / production routes

The previous app pages are PRESERVED: `/#/collections`, `/#/collection/<id>`, `/#/characters`, `/#/character/<id>`, `/#/episodes`, `/#/episode/<id>`, `/#/gallery`, `/#/story`, `/#/production`, `/#/assets`, `/#/collaboration`. They use a dark production-dashboard layout for heavier information work, separate from the theatrical public site.

## Approved content and risk management

- Credits, guest list, funding and sponsor tiers in the original pitch are *historical proposals*, not contracts.
- Source deck contact details and mood-board images are intentionally not republished.
- Any Indigenous, Ojai history, medical, tax, finance, distribution or philanthropic outcome claims require independent evidence and review.
- Animated figures must be clearly framed as fictional.
- Label approved visual references separately from rejected/mismatched cast renderings.
- Vercel project-level protection and GitHub visibility are separate. The GitHub repo is currently public.

## Acceptance criteria / release QA

1. Every public route loads without JavaScript errors.
2. Every source-derived fact carries an accurate original-deck source page in data/documentation.
3. 24 potential guest names are canonicalized without duplicate records.
4. Fifteen documentary episode placeholders are explicit and cannot be confused with the eight acts.
5. Mobile and desktop nav work, focus is visible, and reduced-motion users can use the site.
6. Every visible CTA navigates to a working page; no fake trailers, funding checkouts or approvals.
7. Preserve the old studio routes and episode/character artwork references.
8. Verify Vercel deployment state and GitHub branch SHA before claiming completion.
