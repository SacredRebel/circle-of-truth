# Circle of Truth
### A conversation beyond the noise.

**An original fictional stylized-3D animated roundtable series — production site + organized source archive.**

This repository holds the creative bible, canonical pilot concept, development slate, **102 deduplicated character records**, 11 themed collections (including the priority production cast and an archive of previously used names), artwork status manifest, and production collaboration notes.

**Live production deployment:** https://circle-of-truth.vercel.app/ (Vercel deployment reports READY; Vercel Authentication may require authorized login).\n\n## Start here

- **Homepage** — cinematic series introduction and creative overview
- **Collections** — ordered 10-person cast rosters with no silent substitutions
- **Character library** — 102 searchable unique people with linked collection appearances
- **Episodes** — one pilot storyboard plus seven explicitly proposed concepts
- **Gallery** — status-labeled artwork inventory; rejected/draft work is not published as final
- **Story world** — gala, invitation, fire circle, storytelling tone, portrayal rules
- **Production** — Blender / FFmpeg / Remotion plan and quality gates
- **Assets & research** — original production and research source documents
- **Collaboration** — local scratch checklists/notes, with GitHub Issues and PRs as shared source of truth

## Deploy on Vercel

1. Open [Vercel New Project](https://vercel.com/new) and import `SacredRebel/circle-of-truth`.
2. **Framework preset:** Other (static HTML/CSS/JavaScript). No npm installation or build step is required.
3. **Root directory:** `./`. **Build command:** none. **Output directory:** `./` if requested.
4. Deploy `main`. The website uses hash routes (e.g. `/#/collections`) so no server-side rewrite rules are necessary.
5. Pushes to `main` can redeploy automatically after GitHub integration is configured.

> **Access notice:** The GitHub repository is **PUBLIC**. A Vercel preview URL is not private authentication; use access controls or a private repository before uploading non-public scripts, sensitive production notes or confidential files.

## Local preview

Run a simple static server from the repo root:

```bash
python -m http.server 3000
```

Open `http://localhost:3000`. Do not use `file://` because the site loads `data/content.json` with `fetch`.

## Content editing

- Primary data source: [`data/content.json`](data/content.json)
- Cast collections: `collections[].people` in locked order
- Single canonical records: `characters[]` with roles, tags and collection IDs
- Episode slate: `episodes[]`, with `status` and `notes` distinguishing concepts from completed production
- Artwork intake: `artworks[]` with original filename and QA status

Edit data and run:

```bash
node scripts/validate-content.mjs
```

Contributors should use a feature branch and PR; link the collection or episode ID in the PR body.

## Artwork: what is and isn't uploaded

**The site currently ships a custom SVG Tree of Life as its fully self-contained fallback graphic.** Binary artwork generated earlier in the chat has NOT yet been committed to this repository. All known filenames, collection assignments and accepted/rejected status are in [`docs/ARTWORK_ASSET_REGISTER.md`](docs/ARTWORK_ASSET_REGISTER.md).

When you transfer the existing poster files, place them under `artwork/` **with the exact filenames** in `data/content.json`. The gallery will then automatically show them. Keep rejected imagery clearly labeled; do not promote incorrect rosters. The separate download package prepared for the project includes ready-to-import web-size images. Do not pretend source assets are in GitHub until committed.

## Creative / production reference

- [Show bible](docs/SHOW_BIBLE.md)
- [Full original Hermes technical master brief](docs/HERMES_MASTER_PRODUCTION_BRIEF.md)
- [Original Freemasonry discussion source](research/FREEMASONRY_DISCUSSION_SOURCE.txt)
- [Pilot 001 storyboard](episodes/pilot-001/STORYBOARD.md)
- [Dialogue data](episodes/pilot-001/dialogue.json) and [schema](episodes/pilot-001/dialogue.schema.json)
- [Collaboration handoff](docs/PRODUCTION_HANDOFF.md)

### Story synopsis

A mysterious teacher dressed in plain linen walks into an elite gala and invites selected guests away from status and spectacle. They enter a simple, fire-lit circular room with equal-height chairs and begin an unexpectedly human conversation.

**The priority proof-of-concept cast is Jesus, Barack Obama and Donald Trump.** Later thematic guests and collections are for exploratory casting. The technical path is a 12–20 second character animation proof, then a one-minute opening, a three-minute prototype, and a long-form episode only after explicit approvals.

### Fiction and representation

Real contemporary figures, historical figures and spiritual teachers are **fictional, stylized animated portrayals**. Spoken words and interactions are invented and are not authentic views, real meetings or endorsements. Do not use unauthorized voice clones, assert rumors about private affiliations as fact, or publish unlicensed third-party character models. See the show bible for the full disclosure.

## Status

- **Implemented:** static Vercel-ready website, cast catalog, episode slate, story world, project documentation, text sources and collaboration page.
- **Still pending:** transferring original binary artwork, verifying public names/titles and affiliations, real Blender/Remotion render tests, completed dialogue and final episodes, and any private access control.

© Circle of Truth — Creative development project.