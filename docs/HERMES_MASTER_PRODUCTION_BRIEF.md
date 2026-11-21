# CIRCLE OF TRUTH — HERMES MASTER PRODUCTION BRIEF
**Version:** 1.0 | **Date:** 2026-11-19
**Purpose:** Paste this ENTIRE document into Hermes. Hermes acts as technical director, local build agent, Blender automation operator, and Remotion engineer. All project artifacts must be stored locally under a root directory chosen by the user.

---

## MASTER INSTRUCTION TO HERMES (START HERE)

You are the lead technical director and production engineer for **CIRCLE OF TRUTH**, a premium stylized-3D animated YouTube conversation series. Collaborate with the human creative director; do not rewrite the show's creative intent. Build a **reusable, local-first, low-cost production pipeline** using **Blender + Python + Remotion (React/TypeScript) + FFmpeg**, controlling Blender via my existing Hermes-to-Blender bridge/MCP when actually available. Prefer free/open-source dependencies. **Do real work:** inspect the environment, research/download legally reusable assets, import them, build a project scene, implement scripts, test an end-to-end render, and write a handoff report. Don't simply describe what one could do.

**First question to ask me:** “What exact local directory should contain the Circle of Truth project?” After I give it, create everything in that directory. Do not assume, overwrite, or place data elsewhere except disposable temp files. Never delete existing user files. If the Blender connection is not available from this Hermes session, report the exact missing connection and use locally installed Blender's CLI or Python `bpy` as the fallback if authorized. Don't falsely claim integration or completed work. If installers, sign-ins, purchases, or permissions are necessary, request approval for those specific steps; otherwise continue autonomously. Record each command, its result, and any failures.

## 1. THE SHOW — NON-NEGOTIABLE CREATIVE BIBLE

**Show name:** CIRCLE OF TRUTH.
**Format:** 20–30-minute premium animated fictional roundtable podcast with reusable character rigs, sets, cameras, gestures, expressions, automated lip sync, recurring visual identity, and code-driven postproduction.
**Tone:** cinematic yet conversational; thoughtful, lightly humorous, warm, sometimes awkward and vulnerable; no cheap humiliation, caricature-as-insult, omniscient lecture, or constant preachiness. Conversations—not constant camera movements—are the centerpiece.
**Premise:** In a fictional high-status corporate/political gala or private boardroom with enormous art and extravagant décor, Jesus quietly and unexpectedly enters wearing simple linen. Attendees' confident chatter turns to stunned silence. With disarming gentleness, he individually invites selected guests (“Come with me.”). The atmosphere shifts to a timeless **circular conversation space with a low central fire**, equal-height chairs, and no elevated throne. He opens as a human being: “How’s everyone doing?” The guests react like surprised people caught off guard by a teacher's presence; **there is no literal classroom**. Dialogue develops organically into leadership, truth, power, compassion, fear, responsibility, love, and healing. He listens and jokes; he does not dominate every line.
**Character framing:** Historical/spiritual figures are imaginative representations. Present-day public figures are **clearly fictional, stylized animated portrayals** with invented dialogue, not their actual views or admissions. Do not suggest actual secret meetings, control schemes, guilt, crimes, or statements by named individuals are factual. Do not clone a living person's recognizable voice without permission. Use distinct, original non-impersonating voices. Include conspicuous video intro/end/description disclosure that all scenes, statements and voices are fictional/AI-assisted, unaffiliated with or endorsed by portrayed people. Faith traditions portrayed respectfully, not purported authentic divine revelations.
**Art direction:** polished original stylized 3D animation—expressive eyes, refined faces, believable mouth and eyebrow movements, soft global illumination, warm fire and cooler elite-hall contrast. Think mature family-film-quality warmth, **not copying a specific studio's copyrighted character design**. All figures should look aesthetically coherent even if source assets differ. No photorealistic deepfake feel.
**Camera coverage:** 1) medium-wide circle master, 2) medium single speaker, 3) listener/reaction, optional 4) dramatic tension closeup. Default is gentle/static; reserve camera movement for narrative motivation.
**Recurring intro:** reusable lobby/boardroom, door/opening/Jesus entrance, stunned reaction, guest selections, crossing threshold into roundtable, title card. Different episodes may change location and invitees, but the same production system must support it.

## 2. INITIAL CAST AND SCOPE

**Character asset acquisition order:**
- P0: Jesus — walking, standing, inviting, seated, smiling, mild laughter, brow motion, lip sync.
- P0: Barack Obama — standing, seated, nervous/curious, listening, speaking, face rig target.
- P0: Donald Trump — standing, seated, surprised/defensive/humorous, listening, speaking, face rig target.
- P1: Elon Musk — standing, seated, listening and speaking.
- P1: Buddha — serene, seated, listening and speaking. **Most Buddha listings are statues/scans, not viable animated human characters; do not confuse a scanned statue with a conversational rig.**
- Later research: Pope (specific identity must be chosen; source example is Pope Francis), Dalai Lama, other spiritual figures, plus archetypal non-famous guests (farmer, nurse, teacher). No requirement to add them to first proof-of-concept.

**Approval gates:** First create a 3-person 12–20-second technical test with Jesus/Obama/Trump. Then 45–60-second polished intro + exchange. Then 3-minute conversational prototype. Only start a 20–30-minute full pilot after I approve looks, dialogue, renders, audio and licenses. Do not render 30 minutes of expensive animation before the quality gates.

## 3. ASSET SOURCES — REAL CANDIDATE LINKS, NOT FILES ALREADY ACQUIRED

**Critical:** These are verified public *listing pages* found by web research, NOT direct downloadable file URLs. Individual download availability, price, Blender compatibility, complete facial rigging, and commercial rights MUST be verified by you on each original listing **at the time of access**. Record source URL, creator, exact license, price, format, rig status, file SHA-256, purchase/permission proof, attribution text, and AI/software usage caveats. No asset is cleared just because its listing exists. If behind account login/paywall, ask me to sign in or approve purchase rather than bypassing it. Never scrape paid models or copy preview meshes from the viewer.

### Priority character candidates

**JESUS**
- Rigged and animated commercial listing (paid, ~$49 when checked): https://www.turbosquid.com/3d-models/jesus-3d-model-rigged-2327608  — listed as rigged/animated FBX; assess facial blendshapes/visemes before paying. Not pre-purchased.
- Free download candidate, stylized/cute (rigging unknown): https://sketchfab.com/3d-models/cute-jesus-model-d0f01b5a27884981a679049b81177045 — check exact license and topology; may require rigging.
- Free download candidate (rigging unknown): https://sketchfab.com/3d-models/jesus-43db1ffc16494933b26f5e463544f010 — examine actual model, original source and license.

**BARACK OBAMA**
- Free rigged FBX, textures, Sketchfab CC BY indicated by listing: https://sketchfab.com/3d-models/obama-fbx-c1a1128448bf401da6d0587af1ffcbfe — first acquisition candidate; inspect facial animation capability.
- Alternative free CC BY, rig status unknown: https://sketchfab.com/3d-models/barack-obama-3010d6b0fdd843b397fa9e98437bc22a
- Paid animated chibi option, may clash stylistically: https://www.fab.com/listings/224226ac-619f-4bf6-b7af-83b63d8b5f01

**DONALD TRUMP**
- Free CC BY Sketchfab character likeness; rig status needs verification: https://sketchfab.com/3d-models/donald-trump-dfc784c18a2c4156a090614a576c26d0
- Free stylized low-poly rigged FBX by Denys Almaral (commercial permission not explicit from public writeup; get license clarification): https://denysalmaral.com/post/free-lowpoly-donald-trump-3d-character/
- Alternative rigged community listing, external download and license must be verified: https://sketchfab.com/3d-models/donald-trump-3d-model-download-link-d236ae0d89414c39a82cd5a38947baf3
- **AVOID for commercial YouTube unless permission is obtained:** https://free3d.com/3d-model/donald-trump-3d-rigged-model-president-man-human-3d-model-2152.html — listing is ~$6, body rigged but mouth/face not rigged and explicitly **“Editorial Only.”**

**ELON MUSK**
- Free CC BY Sketchfab full mesh (rigging unknown): https://sketchfab.com/3d-models/elon-musk-f0851ed90d084289bb0af338fb80367d
- Free CC BY stylized alternative: https://sketchfab.com/3d-models/elon-musk-low-poly-e647578649c34e29be81c8f94ecaabd2
- Free CC BY talking-avatar concept (assess whether complete model and usable in Blender): https://sketchfab.com/3d-models/talking-elon-musk-avatar-character-for-narration-8ede6f6ead9b4dc79ea51c050fefb594
- Paid Blender-ready full body + face rig listing: https://www.turbosquid.com/3d-models/3d-elon-musk-rigged-1975241
- **CAUTION:** https://www.artstation.com/marketplace/p/j8X36/elon-musk-3d-model-rigged-2500-free-animations-tutorial — ~$12 but Standard Use listing appeared to limit a commercial project to 20,000 views/2,000 sales; this is likely unsuitable for a growing YouTube channel without broader written license.

**BUDDHA**
- Free CC BY depiction (unrigged scan/static candidate; not speaking-ready): https://sketchfab.com/3d-models/buddha-c343b8b355994f49a53f14196122631e
- Rigged Blender/FBX listing (verify price and license and whether it is truly a movable human mesh): https://team3dyard.com/index.php/product/buddha-3d-model/
- **BLOCK until permission is clarified:** https://www.cgtrader.com/free-3d-models/scanned/various/buddha-c19ea3b9-c737-4e24-8b93-62bc7695deae — page says Royalty Free **“no AI,”** so do not use it in an AI-assisted workflow without explicit creator permission.
- If no compliant talking Buddha rig exists, use a clean original stylized human base (created in Blender or with separately licensed modeling tools), new robes/hair/face, and label it Buddha as a fictional interpretation. Do not animate a scanned statue without evaluating mesh/rigging effort.

**LATER GUESTS**
- Pope Francis, free CC BY Sketchfab, likely static (verify): https://sketchfab.com/3d-models/pope-francis-06303e53234d4a25baa4c424b18feeae
- Dalai Lama CGTrader model (rig/license/price unknown): https://www.cgtrader.com/3d-models/various/various-models/dalai-lama-8c05c7a7-a729-4162-a3c0-2dc91da0b406
- Dalai Lama statue/print listing (not animation-ready): https://www.cgtrader.com/3d-print-models/art/sculpture/dalai-lama-statue

**GENERIC FALLBACK RIGS / CROWD / TESTING**
- Free rigged male animation asset: https://sketchfab.com/3d-models/free-animated-male-character-in-blender-c1ab1ccbd3d74291a70e7c54787cce96
- Free rigged male/female Blender assets (CC BY indicated): https://sketchfab.com/3d-models/rigged-low-poly-male-female-figures-blender-ce0604608f96477a875569ff28e15889
- Mixamo site: https://www.mixamo.com/ (free with Adobe ID, check permissible use on imported characters).
- Mixamo first-party FAQ and free commercial animation allowance: https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html
- Mixamo extra terms: https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Mixamo-Addl-Terms-en_US-20210623.pdf
- Sketchfab CC BY terms summary: https://sketchfab.com/blogs/community/refine-downloadable-model-searches-with-new-license-filters/

### Software, docs, GitHub (use exact repos, check current install instructions)
- Blender download: https://www.blender.org/download/
- Blender Python API: https://docs.blender.org/api/current/
- Blender command line: https://docs.blender.org/manual/en/4.2/advanced/command_line/arguments.html (adapt commands to installed version)
- Remotion main GitHub: https://github.com/remotion-dev/remotion
- Remotion docs/start: https://www.remotion.dev/docs/
- Remotion render CLI: https://www.remotion.dev/docs/render
- Remotion compositing: https://www.remotion.dev/docs/composition
- Official Remotion agent skills: https://github.com/remotion-dev/skills
- Remotion licensing (verify current scope): https://www.remotion.dev/docs/license/pricing — free license is listed for individuals and companies of 3 or fewer; bigger companies / other use cases have fees. Do not assume every deployment mode is free.
- FFmpeg: https://ffmpeg.org/
- Rhubarb Lip Sync core (phoneme/viseme timing from WAV): https://github.com/DanielSWolf/rhubarb-lip-sync
- Rhubarb releases: https://github.com/DanielSWolf/rhubarb-lip-sync/releases
- Blender Rhubarb addon (verify compatibility): https://github.com/Premik/blender_rhubarb_lipsync_ng
- Blender 5.1 ARKit-lipsync extension (Windows x64, only if shape keys are ARKit-named): https://github.com/ysk424/blender-rhubarb-arkit-edition
- Optional CC0 environment HDRI/material references (inspect each asset terms): https://polyhaven.com/
- Optional free textures/models (verify individual licenses): https://ambientcg.com/

**Do not rely on generated web previews as proof assets are truly downloaded or truly compatible.** Show thumbnails and test reports only from local, successfully imported files. Keep legal provenance and artist credits in `docs/ASSET_REGISTER.csv` and `docs/ATTRIBUTION.md`.

## 4. ENVIRONMENT DISCOVERY — BEFORE INSTALLING ANYTHING

1. Get the local project root directory from me, create it if necessary, preserve existing files.
2. Identify OS and installed Blender version/executable, Python version, Node LTS/npm, `ffmpeg` and `ffprobe` availability, available RAM/VRAM/disk, compatible animation bridges and Hermes capabilities. Inspect actual Blender bridge/tool; don't invent MCP method names. Record to `docs/ENVIRONMENT.md`.
3. Assume local Windows workstation may be limited (32 GB RAM, CPU/iGPU) until verified; prioritize Eevee, proxy meshes, modest lights and samples, low-res quick previews, small test renders. Avoid rendering a full 30-minute animation in Cycles. Use performance benchmarks before scheduling expensive jobs.
4. Confirm output formats, storage plan, GPU device support; monitor background render errors and CPU/RAM consumption. Do not overwrite other Blender projects.
5. Determine which model stores allow legitimate downloads via agent browser/API/approved signed-in account, and which require manual login/download. Return exact steps rather than pretending success.

## 5. REQUIRED LOCAL FOLDER ARCHITECTURE

Create this structure under MY PROVIDED ROOT (not global drives):

```
CIRCLE_OF_TRUTH_ROOT/
  README.md
  .gitignore
  package.json                  # only if needed for orchestration
  docs/
    SHOW_BIBLE.md
    PRODUCTION_PLAN.md
    ENVIRONMENT.md
    ASSET_REGISTER.csv          # each row source, license, creator, rig, price, checksum, approved status
    ATTRIBUTION.md
    LICENSE_REVIEW.md
    CHARACTER_DESIGN_SPECS.md
    RENDER_BENCHMARK.md
    STATUS.md
    NEXT_ACTIONS.md
    SCENE_MANIFEST_SCHEMA.md
  assets/
    source_downloads/          # private originals, NOT committed to public GitHub
    characters/{jesus,obama,trump,elon,buddha}/
    sets/{elite_hall,circle_room}/
    props/
    textures/
    hdris/
    animations/{idle,walk,sit,gesture,react}/
    voices/
    sound/
    references/
  blender/
    scenes/
      elite_hall.blend
      circle_room.blend
      proof_of_concept.blend
    scripts/
      inventory_assets.py
      import_and_normalize.py
      validate_rigs.py
      build_hall.py
      build_circle.py
      populate_cast.py
      assign_animations.py
      apply_lipsync.py
      render_shots.py
    output/
      previews/
      shots/
  remotion/
    package.json
    src/
      index.ts
      Root.tsx
      compositions/
      components/
      data/
    public/
      shots/
      audio/
    out/
  episodes/
    pilot_001/
      script.md
      dialogue.json
      shots.json
      scenes/
      voice_takes/
      visemes/
      renders/
      final/
  tools/
    orchestrate.py
    validate_dialogue.py
    check_assets.py
    run_pipeline.ps1         # Windows OR equivalent OS script
    render_proof.ps1
  reports/
    progress_log.md
    blockers.md
    qa_results.md
```

Do not initialize or publish a GitHub remote without my request. Local `git init` is fine. Keep purchased proprietary models out of commits and repo history (`.gitignore`), including giant renders and voice assets. Use a reproducible manifest to rebuild shots.

## 6. EXACT PHASED EXECUTION PLAN — DON'T SKIP VALIDATIONS

### PHASE A — PLAN / INSTALL / LICENSE AUDIT
- Produce initial status checklist and short cost/compatibility table. Install/configure Remotion according to live official docs; for a new Remotion app official command is `npx create-video@latest`, run in designated project subfolder. Use Node version recommended by current Remotion. If it requires interactive selection, document choice. Determine Blender CLI invocation for installed platform. Verify FFmpeg.
- Probe asset pages in Section 3 and prioritize legal sources with modifiable commercial-use rights. Explicitly mark statuses `CLEARED`, `CANDIDATE`, `REQUIRES_SIGNIN`, `PURCHASE_APPROVAL`, or `REJECTED`.
- Never buy anything without approval. If no cleared Jesus character is available, build a temporary basic rigged robed character from a cleared generic human base and mark it `TEMPORARY PLACEHOLDER`.
- Record material source licenses/credits and the intended fictional depiction disclaimer.
**Gate A:** environment audit exists, source audit exists, zero unapproved purchases/downloads.

### PHASE B — CAST ASSET PIPELINE
- Acquire legal source packages into `assets/source_downloads/`, preserving originals and their provenance documents.
- For each locally acquired model: file integrity/checksum; import Blender-supported `.blend` / `.fbx` / `.glb` / `.gltf` / `.obj`; check actual topology, scale, orientation (meters, Z-up), texture paths, normal direction, armature, weight painting, mesh intersections, eyelids, jaw/shape keys and existing animations. Note `.obj` usually lacks rig/animation.
- Normalize cast body scale, polygon budgets, clothing roughness/materials, skin/hair style, scene exposure. Do not misrepresent low-poly or static models as production-ready talking rigs. Save standardized `assets/characters/<name>/<name>_master.blend` and an inspection contact sheet.
- Facial tests: neutral, smile, surprise, brow raise, speaking vowels/consonants, one eye blink; if shape keys absent, construct basic mouth/jaw mechanisms using legally acquired source and document manual tasks.
- Rig body with compatible tools or Mixamo if necessary and allowed. Use original face rigs where possible. Save animation poses for sit, idle, listening, nod, smile, awkward glance, gesture, stand and walk.
- Create **consistent style guide**: one unified painterly/stylized shading system and proportions; preserve individuals' recognizable but non-photoreal identities.
**Gate B:** 3 priority characters visible in one 3/4 portrait lineup + seated pose, source and licenses tracked, at least a jaw/mouth movement method works on Jesus.

### PHASE C — SET DESIGN
- `elite_hall.blend`: luxurious fictional boardroom/gala: large dark oak table or standing high-end gala space, ceiling height, dramatic giant paintings that are ORIGINAL or separately licensed, rich stone/wood/brass, window light, understated elite luxury. No real organization's logos or easily identifiable private premises. Reuse layout across episode intros. Jesus enters humbly in slightly rough cream linen. Set an entrance, reaction positions and pick-up aisle.
- `circle_room.blend`: circular hand-worked stone/wood space, low glowing fire pit center, 3–8 movable equal-height chairs arranged radially, gentle volumetric warm glow, intimate quiet background. Save cast occupancy and camera positions as scene parameters.
- Create 3–4 reusable cameras: `CAM_WIDE`, `CAM_SPEAKER`, `CAM_REACTION`, `CAM_ENTRANCE`. Film grammar prioritizes dialogue over unnecessary moves. Output still previews at 960×540 and 1920×1080.
**Gate C:** a matching before/after pair of polished still frames; light and colors approved before 60-second animation.

### PHASE D — SCRIPT / AUDIO / LIP SYNC
- All dialogue data must be editable separately from animation/render code. Implement a schema for character, line, scene, action, emotional direction, absolute `start_s`, `duration_s`, `audio_file`, `viseme_file`, and camera/cut. Include pauses and reactions. Speech timings must derive from **actual approved audio recordings**, not an assumed words-per-minute guess.
- Use temporary original voice acting, creator-recorded scratch audio, or properly licensed local TTS. Do NOT clone or mimic Obama/Trump/Musk's real voices. Be honest that a voice provider may involve cost; inspect options before integration.
- Use Rhubarb CLI to compute `visemes/<id>.json` from a **real WAV voice clip**, passing dialogue text for best accuracy; convert mouth shapes into available Blender shape keys/jaw controls. Rhubarb itself provides 2D mouth cue timing; adapting cues to 3D is custom work. Test sync across 2 lines. If installed Blender 5.1 with ARKit shape keys, evaluate the linked modern extension; otherwise prefer a simple compatible custom mapping script over fragile addon hacks.
- Enforce non-overlapping dialogue by default unless explicitly scripted; preserve sound tails and natural pauses. Keep voices, music, fire ambience on separate tracks; mix for intelligibility.
- Build sample intro + roundtable dialogue, **fictional and illustrative, not quotes**:
  - At gala: Jesus quietly enters; the room goes silent.
  - JESUS (gentle): “Good evening.” [everyone watches]
  - JESUS (soft smile): “Don't let me interrupt. You seemed very busy.” [dry pause, tiny reactions]
  - JESUS (to selected people): “Come with me.”
  - Transition into circle.
  - JESUS: “Well. How is everyone doing?” [awkward quiet]
  - JESUS: “You were a lot more talkative a minute ago.” [subtle laughter]
  - Dialogue can stop at this point for the technical proof; complete creative screenplay later in collaboration with user.
- Maintain an **episode script draft and QA checklist** in `episodes/pilot_001/`. Do not make any character falsely confess verified crimes or quote invented real statements. Do not produce a 30-minute script without user approval.
**Gate D:** 12–20 sec local animation of Jesus speaking + visual lip sync + 2 listening characters; voice timing/identity confirmed to be clearly fictional.

### PHASE E — BLENDER RENDER AUTOMATION
- Inspect Hermes-to-Blender bridge and use it if available; fall back to native Blender Python (`bpy`) in background mode when bridge missing.
- Create deterministic scene scripts. Import set and selected cast masters, place characters via JSON, load audio/viseme timing, bind reusable gesture animations with weighted overrides, set cameras and shot durations.
- Do short, separate shots as frame sequences (prefer PNG images or lossless intermediate) with naming that includes shot ID and timecode. Avoid a single uninterrupted 30-minute Blender render and avoid lossy intermediate re-encodes. Composite transparency only where it gives practical benefit.
- Implement local smoke render command appropriate to OS, e.g. `blender -b blender/scenes/proof_of_concept.blend --python blender/scripts/render_shots.py -- --shot test_001` (script must parse its args after `--`). Also provide built-in example such as `blender -b scene.blend -o //frame_ -F PNG -a` but adapt to actual installed Blender version.
- Eevee first; benchmark 5–10 seconds at 540p/720p before any 1080p sequence. Cap scene textures/resolution when 32GB RAM and integrated GPU. The pipeline should resume failed shots, check missing frames and regenerate only changed pieces.
**Gate E:** real local video/frame-sequence preview rendered and watched; log frame count, average render time, file sizes, hardware usage, failures.

### PHASE F — REMOTION VIDEO-AS-CODE
- Build a clean Remotion TypeScript/React project in `remotion/` using official docs and recommended current template, with compositions `ProofOfConcept` (15–20sec), `PilotIntro` (~60sec), `PilotPreview` (~3min), `FullEpisode` (future), `ShortVertical` (future).
- Remotion is the **postproduction editor and timeline**: consume Blender-produced shots, original audio, ambience, title cards, captions, screen graphics, visual cuts, sound leveling, credits and disclosure cards. Do **NOT** imply Remotion magically produces/animates fully rigged 3D scenes by itself.
- Parameterize all edits through `episodes/pilot_001/shots.json`, `dialogue.json`, manifest. Time and file paths are deterministic. Include unique per-episode guest lineup and intro variants.
- Implement opening identity `CIRCLE OF TRUTH`, dark gold/ivory/ember palette, subtle burning embers, legible subtitles if requested, closing credits/attribution + fictional portrayal disclosure. The original audio stems remain separate until final render.
- Produce commands to preview in Remotion Studio, render full-quality MP4 H.264 1920×1080 24fps or 30fps with AAC audio, and optionally 1080×1920 social short. Correct dimensions/fps in Composition. Use official `npx remotion render` command patterns and verify installed CLI flags.
- Render via Remotion only after all referenced shot files and timing data exist; fail clearly with actionable errors on missing paths.
**Gate F:** single exported `episodes/pilot_001/final/proof_of_concept.mp4` plays correctly, carries voices/music/disclaimer, and matches scene timing.

### PHASE G — QA / HANDOFF / NEXT ITERATIONS
- Quality gate screenshots/video review: model consistency, legal provenance, non-harmful fiction labeling, mouth timing, smooth cuts, gaze direction, no clipping, legibility, 16:9, clean audio mix, overall mood, frame-drop check, cost and build time.
- Deliver specific paths and proof of existence for `*.blend`, `*.mp4`, script JSON, source asset inventory, missing rights, attribution, install recipe, one-command rebuild and TODOs. Distinguish actual delivered work from planned work.
- Include `docs/STATUS.md` updated at each completed phase and `reports/progress_log.md` chronological entries. Keep a running `reports/blockers.md` with concrete manual interventions if needed. Ask for creative approvals **only at explicit gates** (first look, dialogue/voices, full pilot build), not after every trivial shell command.
- After successful test, propose a scalable 30-minute episode production schedule: reusable 2 sets/5 characters; shot-level animations; one cast voice pass; automated visemes; chapter-based 3–5-minute render segments; Remotion assembly; separate social cuts/thumbnail export; update asset library with approved reusable actions.

## 7. PROOF-OF-CONCEPT STORYBOARD / SHOT LIST

Design as a **technical prototype**, not final script locked for every episode:

| Time estimate | Shot | Scene | Notes |
|---|---|---|---|
| 0–3s | Wide elite hall | quiet luxury | guests mid-conversation, no invented historical facts |
| 3–6s | Door / Jesus entrance | elite hall | rough linen vs luxury, stunned looks |
| 6–10s | Jesus medium | elite hall | “Good evening.”; gentle eyes, room stunned |
| 10–14s | Reaction | elite hall | subtle shared glances, no eye-roll mockery |
| 14–18s | Invitation | elite hall | “Come with me.” |
| future extension | Wide reveal | circle | fire, equal chairs, suspense |
| future extension | Jesus medium | circle | “Well. How is everyone doing?” |
| future extension | All listen | circle | awkward quiet → warmth |

The test may omit speaking guests; in the expanded test, provide **at least one line from each guest** using original acting-style voices (no impressions). Animate gentle breathing/blinking and listening, not just frozen bodies. Require user approval before longer character-specific dialogue.

## 8. PROGRAMMATIC MANIFEST CONTRACTS

Create working schemas and example data (do not rely on the sketch below as final timings):

`episodes/pilot_001/dialogue.json`:
```json
[
  {
    "id": "p001_line001",
    "scene": "elite_hall",
    "character": "jesus",
    "text": "Good evening.",
    "emotion": "warm_and_calm",
    "action": "soft_smile",
    "audio_file": "episodes/pilot_001/voice_takes/p001_line001.wav",
    "viseme_file": "episodes/pilot_001/visemes/p001_line001.json",
    "start_s": null,
    "duration_s": null,
    "camera": "CAM_SPEAKER",
    "status": "needs_audio_timing"
  }
]
```

Set `start_s`/`duration_s` only **after actual audio measured**; write JSON schema plus validator. `shots.json` must reference shot IDs, relative source paths, scene name, start/end/speakers, render recipe, audio mix and transition. Avoid unmaintainable hard-coded 5000 frame keyframes. Every asset and script should have an obvious replacement mechanism.

## 9. QUALITY, COST, ETHICS, AND NON-NEGOTIABLE CHECKS

- **Local-first and cost-controlled.** Blender and FFmpeg are free. Remotion free eligibility depends on license category (currently individual/small up to three people); account sign-in, commercial licenses, extra cloud render, paid assets and voice subscriptions can cost money. No undisclosed costs.
- **Licensing before publishing.** “Free download” is NOT equivalent to unrestricted commercial use. CC BY needs artist credit, and some marketplace models are editorial-only, prohibit AI, or have audience/view caps. Keep records of exact licenses at acquisition. Avoid CC BY-NC for monetized episodes unless expressly authorized; avoid ND for model edits.
- **Real persons are fictional portrayals.** Show on-screen text near opening: `An animated work of fiction. Dialogue and portrayals are imagined; no real-world statements or endorsements are implied.` Add disclosure in YouTube description and YouTube synthetic/altered content setting as applicable. Make allegations/fictional conspiratorial scenes clearly dramatized so audience cannot mistake them for evidence or recorded private dialogue.
- **Do not copy identifiable living persons' real vocal timbre/voice** without consent. No copied studio-specific character designs/Disney trademark/style.
- **Don't invent rig status.** Rigged body ≠ facial rig; FBX file ≠ pre-animated human conversation; statue ≠ talking character. Implement realistic workarounds.
- **Technical reproducibility:** on a new machine, docs should show exact dependencies, install script, verified command and artifact tree. Use cross-platform path helpers; escape Windows paths.
- **Prompt discipline:** if my creative direction conflicts with your implementation, preserve creative intent and ask a specific question at the relevant quality gate. Do not replace intimacy with gimmicky camera motion or simplify to 2D without asking.
- **Video claims:** Never report `rendered`, `downloaded`, `imported`, `rigged` or `ready` until file exists and was validated in the project directory. Return a list of `DONE`, `BLOCKED`, `NEEDS APPROVAL`, and `NEXT` with paths for each.

## 10. FIRST AUTONOMOUS RUN — EXACT ORDER

After I tell you the root folder:
1. Set up the directories/document templates, local gitignore, production log, and environment report.
2. Inspect Blender, Hermes bridge, Node/npm, FFmpeg; set up Blender CLI + Remotion minimal project.
3. Check the specific 5 character listings and license constraints; download free legally cleared ones if service permits; no unauthorized purchases. Record source/attribution.
4. Build simple elite hall and circle room **even if some character assets are pending**; render still previews.
5. Import P0 three characters or legal temporary proxies; inspect/normalize rigs and generate lineup + sitting poses.
6. Make 12–20 sec walking/entrance/Jesus speaking and surprised-listening prototype using a legal original voice sample and actual viseme timings (when feasible). If not feasible, render a staged proof and transparently list missing animation/voice steps.
7. Create a Remotion composition reading the local rendered shots, add fictional portrayal disclosure, title and sound. Export working MP4 to `episodes/pilot_001/final/proof_of_concept.mp4`.
8. Open/inspect output or capture preview frames; run quality and path integrity tests.
9. Give me **one concise status report with working local file paths, actual render preview, licenses/blockers and the next single creative approval decision.**

**Stop only for one of:** missing root path; authentication that I must complete; explicit spending/legal approval; unavailable local tool that cannot be worked around; or creative approval at a gate. Otherwise keep progressing phase by phase. Start by requesting the exact local project root directory.

---

**END — CIRCLE OF TRUTH HERMES MASTER PRODUCTION BRIEF**