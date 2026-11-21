# Circle of Truth — Unified production handoff

**Project rule:** The source deck represents a *live documentary flagship*. The later animated pilot is a related *fictional companion*. Preserve both identities and never average or silently overwrite their contradictory timelines, budgets, guests, rights or episode structures.

## Canonical project data

- `data/original-concept.json` — all major content extracted from the 20-page original pitch with page provenance and tentative status.
- `data/concept-integration.json` — boundaries and bridges between the original and animated tracks.
- `data/live-season-plan.json` — 15 documentary episode planning slots; none has a confirmed title, date, guests, venue or scripted story.
- `data/content.json` — 121 deduplicated person records, 11 collections, 1 animated storyboard and 7 animated concept episodes, 16 artwork manifest entries.
- `docs/ORIGINAL_DECK_ANALYSIS.md` — the comparison and content rights audit.
- `docs/CINEMATIC_DESIGN_SYSTEM.md` — brand aesthetic, layout rules, route map and quality gates.

## Current confirmed technical result

- Cinematic public experience in `src/cinematic.js` + `src/cinematic.css` (loaded through `src/site.js`).
- A separately designed backstage workspace remains at `/#/collections`, `/#/characters`, `/#/episodes`, `/#/gallery`, `/#/production` and `/#/collaboration`.
- Site deploys from GitHub `main` to `circle-of-truth.vercel.app`. Deployment protection may require authorized access.
- The original 20-page PDF has NOT been published to this public repository.
- Original binary artwork remains an import task; track correct-roster status before marking any poster approved.

## Next work

1. Confirm which founding-deck statements should be treated as current plans with producers before changing tentative statuses.
2. Import the 16 web-ready artwork files from the previously provided image package to `artwork/` (keep filenames exact).
3. Audit story realism, source permissions, cast names and misrendered posters.
4. Identify filming partners for the live project only after approval; do not publish historical contact details or fundraising promises as live.
5. Develop the 15 live episode slots collaboratively rather than assigning invented plots.
6. For the animated track, follow the small first Blender/voice/render gate; do not claim a feature episode exists.
7. Keep the site visually premium and accessible: responsive layouts, accurate status labels, WCAG contrast, and reduced-motion fallbacks.
8. Collaborate through GitHub issues/PRs; on-site notes are browser-local drafts, not shared back-end data.

`docs/PRODUCTION_HANDOFF.md` formerly documented only the animated track; it is now this combined handoff. The detailed original animation notes remain in `docs/HERMES_MASTER_PRODUCTION_BRIEF.md` and `docs/SHOW_BIBLE.md`.
