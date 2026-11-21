# Production & Collaboration Handoff

## Current verified state

- GitHub site content: organized concept, cast, episodes, source registry, and story/technical notes.
- First major characters for 3D proof: Jesus, Barack Obama, Donald Trump.
- Several AI-rendered cast sheets are known, but image files must be individually transferred to GitHub and assessed before being marked as published web assets.
- No completed Blender rigs, rendered pilot video or 30-minute final episode has been confirmed in this project.

## How to work together

1. Each collaborator creates an issue describing a cast, visual, dialogue, research or technical task.
2. Link the relevant collection or episode ID in the issue (`hollywood-superstars-ii`, `pilot-001`).
3. Work on a `feature/<short-name>` branch and open a PR with screenshots for visual changes.
4. Update `data/content.json` as the single catalog source. Never fork duplicate names; add collection IDs to the existing character record.
5. Preserve status distinctions: *planned*, *rendered*, *approved*, *rejected*.
6. Before merging images, compare all 10 names, positions, full-body visibility, labels and one-row layout.
7. Use project issues and PRs for shared progress. The web portal's quick notes/checks use **browser-local storage only**, not shared cloud sync.

## Next high-priority tasks

- Import and verify binary artwork poster files under `artwork/` (image filenames in `docs/ARTWORK_ASSET_REGISTER.md`).
- Fix missing Hollywood Influence II artwork to match exact 10 names; do not accept unrelated people.
- Produce valid Music & Cultural Influence IV artwork; previous actor-list outputs were rejected.
- Fix Historical Freemasons poster's erroneous substitution of Winston Churchill for John Wayne.
- Verify factual public titles and sensitive membership claims before public publication.
- Establish real Blender / lip-sync / camera tests in a separate production branch.
- Add an access control layer if the site should not be public; GitHub repository is currently PUBLIC and static hosting is not authentication.
