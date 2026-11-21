# Deploy & share checklist

1. Confirm `main` includes `index.html`, `src/site.js`, `src/site.css`, `data/content.json`, `assets/tree-of-life.svg`, and `vercel.json`.
2. Run `node scripts/validate-content.mjs` and `python -m http.server 3000` from the repo root to verify locally.
3. Log in to Vercel, **Add New → Project**, import `SacredRebel/circle-of-truth`.
4. Select **Other** framework. Root is `./`; no build command. Deploy.
5. Visit homepage and `/#/collections`, `/#/characters`, `/#/episodes`, `/#/gallery`. Try collection and character links.
6. Import the optimized artwork package separately into `artwork/`, matching the exact filenames in `data/content.json`. Commit/push; Vercel should redeploy.
7. Request colleagues work through GitHub issues/PRs. The website checklist is browser-local **not shared**.
8. Repository is **PUBLIC** at the moment; if private collaboration is the goal, change access / add Vercel-level authentication before putting in confidential project data.
9. Link teammates to the live deployment only after checking privacy and poster accuracy.
10. Keep fictional-portrayal disclosure on-screen in finished media and check licensing before final video release.

**Known blockers:** Original PNG/JPG images have not yet been transferred to GitHub; no complete animated episode or verified 3D files in repo. The site works without them using the project Tree of Life fallback.
