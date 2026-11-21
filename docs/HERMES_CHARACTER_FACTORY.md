# HERMES — CIRCLE OF TRUTH CHARACTER FACTORY & VIRTUAL PODCAST STUDIO
**Version:** 1.0 · 2026-11-20  
**Authority:** Extension of `docs/HERMES_MASTER_PRODUCTION_BRIEF.md`, `docs/SHOW_BIBLE.md`, `docs/PRODUCTION_HANDOFF.md`, `docs/CINEMATIC_DESIGN_SYSTEM.md`.  
**Do not overwrite the existing brief.** This specification makes the **character-to-GLB and virtual conversation scene** workflow deterministic and quality-gated.

## Copy-paste execution prompt for Hermes

> You are the technical director, lead character artist, rigging TD, Blender pipeline engineer, virtual cinematographer, and tooling integrator for **Circle of Truth**. Your assignment is to establish a repeatable **studio-grade character factory** that turns our approved 2D character references into clean, consistent, editable, conversational 3D character assets and imports them into a reusable premium cinematic roundtable set.
>
> **Your source of truth is the GitHub repository `SacredRebel/circle-of-truth`**, including the original live documentary architecture and the **fictional animated companion**. The 20-page original pitch pertains to a live-format concept; this character/GLB workflow is **for the animated companion**, not an unapproved reconstruction of real live participants. Preserve approved casting and visual identity.
>
> **Start by asking me ONE thing: the exact absolute directory on my local workstation that should contain the production assets.** Do not assume the path. After receiving it, inspect the machine, the repo, the Hermes↔Blender bridge, Blender CLI, Tripo Studio/API capability and authorization, render constraints, software licenses and the files I actually provide.
>
> **The current Tripo outputs are experimental candidates, not finished character assets.** Discover whether there are recent imported/generated `GLB`, `FBX` or source-image files in my authorized project directory. Never claim to have found or inspected a file unless you actually open it. Ask me to place samples in an intake folder if they are not accessible. Compare them fairly to any newly generated candidates.
>
> Create a versioned automated pipeline: **single-character source reference → multi-view concept → 3D generation candidates → technical model QC → topology/material/UV cleanup → professional Blender body + facial rig → shape-key/viseme library → posing + gesture animations → export GLB → clean-room reimport test → seated speaking test → reusable conversation scene → short cinematic render and evaluation**.
>
> Prioritize *recognizable artistic identity, coherent visual style, clean deformation, controlled facial performance, and repeatability*. **A beautiful still statue is not a production-ready speaking character.** A basic auto-rigged body is not a face rig. No model may be marked READY without passing all technical and visual gates below.
>
> **Do not attempt the entire cast immediately.** First deliver one exceptional proof character (start with **Jesus**, as directed by the existing pilot bible); gain the creative look approval; then build and test **Barack Obama and Donald Trump** as distinct fictional stylized portrayals; finally test all three in the same podcast set with speaking and listening animation. Only after the 3-person pilot and style pipeline pass should you propose bulk production for the full catalog. The project's canonical casting registry currently contains over 100 unique entries; always read its current contents and deduplicate by stable character ID.
>
> Use Tripo where it produces the best **base sculpt**. Use Blender for authoritative source editing, topology correction, skin weights, eye/mouth interior, expression controls, lighting, animation and final rendering. Evaluate other tools only where there is a measured quality/time advantage, permission and license. Never spend credits, install paid plugins, or export private materials to external services without permission.
>
> **Deliver actual on-disk artifacts, visual inspections and working executable commands.** Do not stop at planning, prompts, pretty screenshots or hypothetical finished assets. Respect phase gates and stop when money, login, legal permission or explicit creative approval is required. Tell me what was completed, where files are, what's broken, and what should happen next.

---

## 0. Immediate first response and assumptions

Ask: **"What absolute local path should contain the Circle of Truth production directory?"** This is a hard prerequisite from the existing Hermes brief.

After path approval, inspect:
- OS, architecture, CPU/RAM, available VRAM/GPU, disk space, Blender version, GPU render support and presence of `bpy`.
- Existing Hermes→Blender MCP connector; if not available, use an approved headless Blender CLI + Python fallback.
- Existing Tripo exports and user-provided images. If Tripo account/API is unavailable, guide the user to export manual GLBs—do not pretend the account is connected.
- Existing scripts, meshes, scene files, Blender addons and texture packs; reuse validated existing work.
- Permissions, licensing and cost exposure for any cloud model creation.
- Git state and access rights to `SacredRebel/circle-of-truth`, and a clean feature branch rather than overwriting unrelated work.

**No installation, purchase, paid generation, scraping or secret handling without approval.** Redact tokens from logs.

## 1. One locked visual language

**Premium original stylized 3D:** semi-realistic editorial faces, expressive but restrained anatomy, believable eyes and mouths, mature film quality, rich textural clothing, coherent skin/hair shaders. Characters should share consistent proportions, light response, eye scale, material style and topology/rig conventions even if initially made by different models.

**Circle of Truth direction:** ink blue, deep charcoal, copper/ember, warm gold and restrained sacred geometry. The public marketing posters often use a bright golden Tree of Life; **do not bake the Tree of Life or poster nameplates into character textures or meshes**.

For each approved character, preserve:
- Full adult body with anatomically sensible proportions, separate articulated hands/fingers, shoes and garment silhouettes.
- Stable face identity across front/side/back images; differences must be documented.
- A clean A- or T-pose for mesh development, neutral face with open visible eyes and relaxed closed lips.
- No extra people, props intersecting the body, overlapping cast, labels, unwanted scenery, giant shadow blobs or cropped feet.
- Realistic cloth/neckline proportions; accessories are optional detachable objects, not permanently fused to anatomy.
- **No exact imitation of third-party film/animation character designs**; all assets must be original and appropriately licensed.

## 2. Reference image intake and multiview preparation

The approved ten-person cast posters are **creative references**, NOT good source images for direct character generation: several bodies share shadows/overlap and text/nameplates/background can become fused geometry.

For each character:
1. Pull the approved name/ID/role from `data/content.json`; resolve aliases, no duplicates.
2. Make one clean isolated **full-body front** reference and optionally left/right/back **turnaround views**, all depicting the **same character, proportions, clothing, hairstyle and neutral expression**.
3. A-pose preferred for character generation and rigging: arms around 30–45 degrees away from torso, legs separated enough for independent geometry, five fingers visible, no folded arms, no hand pockets, uncluttered clothing, plain neutral background, soft even light.
4. Prefer 2–4 consistent views. For Tripo multi-view, use compatible front, side and back input; verify supported number/order/settings in current Tripo documentation.
5. Provide a separate facial closeup/portrait reference for sculpt inspection; do not rely on tiny faces in large cast sheets.
6. Tag every image with `character_id`, generation method, prompt/version, angle and status `candidate | approved | rejected`. Do not assert reference identity or likeness is objectively perfect.
7. Obtain user approval for the **first reference turntable** before costly generation batches.

## 3. Tripo and competing generation paths

**Default:** test Tripo multi-view-to-3D + existing single-image export, under the user's own authorized subscription/account. Its documented tools include generation, retopology, humanoid rigging, and GLB/FBX export. **None of these alone guarantees talking-ready facial blendshapes or original studio-quality topology.**

Run an A/B comparison on the **same one character and same target style**:
- A: the user's existing Tripo result from a poster or single front image.
- B: Tripo from isolated clean single-character image.
- C: Tripo from consistent multiview reference (subject to available plan and credit approval).
- D: optional different licensed modeling method/tool or human Blender cleanup **only if** justified.

Record screenshots of front, profile, back, 3/4 and seated bent-arm views, including no shading tricks hiding defects. Check:
- Face recognition and preservation under different angles.
- Symmetry, ear shape, hair roots, fingers/toes/shoes, clothing and hidden back surfaces.
- Mesh integrity, poly budget, object separation, UVs, texturing, normals and real geometry versus projected textures.
- Facial performance potential: jaw, eyelids, eyeball separation, brows, mouth corner control, teeth/tongue and usable mesh edge loops.
- License, generation credits consumed, per-character time, artifacts, quality score and repeatability.

If an output looks good but cannot take a facial rig economically, label it `LOOKDEV_ONLY`, not `TALKING_READY`. Try clean retopology or alternate generation method instead of forcing a broken face.

**Don't expect a text prompt to magically create real glTF morph targets.** Implement and inspect these as actual mesh data in Blender.

## 4. Character construction and master asset standard

Maintain a native authoritative **`<character_id>_master.blend`** with source/reference links, collections for body/head/eyes/teeth/tongue/hair/clothing/accessories and editable rigs. **GLB is a delivery/interchange file; the BLEND master remains the source of truth**.

### Geometry + materials
- Clean, deformation-friendly, mostly quad mesh around mouth, eyelids, jaw, neck, shoulders, elbows, hips, knees and fingers. Retopo where the generator fails.
- Separate controllable eyeballs, eyelids and, for speaking characters, usable mouth interior (teeth, dark oral cavity, tongue as needed). Avoid floating teeth and collapsing lips.
- Scaled in meters; consistent adult human height range relative to scene and proportions; character origin at floor/feet. Blender native axes are Z-up; validate glTF import/export axis conversion.
- No broken normals, doubled faces, open eye sockets, detached hair strands, massive invisible geometry, nonuniform scale on deform rigs or rig joint inversion.
- PBR materials compatible with glTF metallic-roughness export; use baked color/normal/roughness/metallic as appropriate rather than relying on Blender-only nodes, geometry nodes or procedural volume effects that won't survive export.
- Hero texture baseline: **2K per major atlas where sufficient**; increase only where close-up tests reveal an improvement and hardware budget permits. Offer simplified LODs for crowd scenes.
- Explicit naming, hierarchy, clean collections, consistent world-up and unit scale. Do not bake firelight into character base-color textures.

### Body + facial rig
- Common retargetable humanoid skeleton (evaluate Tripo's Mixamo-compatible spec, Blender Rigify, Auto-Rig Pro if licensed, or alternate standardized rigs); document final skeleton conventions.
- Usable controls for pelvis/root, spine/neck/head, shoulders, elbows, hands/fingers, hips, knees and feet; appropriate twist/weight correction.
- Test standing, neutral sitting, leaning, gestures, nodding, thinking, listening and transitions—especially shoulder, hip and jacket/skirt deformation.
- Face rig must drive actual deformations for jaw-open, blink left/right, subtle smile, frown, brow raises and gaze. For talking shots, **phoneme/viseme controls are mandatory**.
- Choose one explicit canonical viseme contract shared by every talking character. Suggested simple first implementation: `viseme_sil`, `viseme_PP`, `viseme_FF`, `viseme_TH`, `viseme_DD`, `viseme_kk`, `viseme_CH`, `viseme_SS`, `viseme_nn`, `viseme_RR`, `viseme_aa`, `viseme_E`, `viseme_I`, `viseme_O`, `viseme_U`. The source audio tool may use a smaller cue set; maintain a tested mapping table.
- Optional advanced face rig: ARKit-style blendshapes if a suitable licensed rig already supports them; don't invent or auto-label unverified 52 morph targets.
- Native Blender rig can be more advanced than GLB. Before export **bake all required animations/control effects** to the deform skeleton and/or actual morph targets; ensure no dependency on scene-only drivers or unsupported nodes after import.

## 5. Required output per character

Each approved character must have these exact logical artifacts (actual folder path chosen by the user):

```text
CircleOfTruth/
  assets/
    characters/
      <character_id>/
        references/
          front.png  side.png  back.png  face.png
        source/
          original_generation.glb
          tripo_export.glb
          provenance.json
        blender/
          <character_id>_master.blend
        exports/
          <character_id>_hero.glb
          <character_id>_realtime.glb        # only if useful
        previews/
          turnaround.mp4
          neutral_front.png
          neutral_side.png
          neutral_back.png
          face_closeup.png
          pose_sit.png
          expression_grid.png
          viseme_test.mp4
          export_reimport_test.mp4
        metadata/
          character.json
          materials.json
          qc_report.json
  scenes/
    elite_hall/
    circle_room/
  scripts/
    blender/
    tools/
  episodes/
    pilot_001/
      dialogue.json
      shots.json
      audio/
      visemes/
      renders/
      final/
  reports/
    character_comparison.csv
    character_pipeline_status.md
    credits_and_licenses.md
    blockers.md
```

Naming, case sensitivity, paths and missing outputs must be checked mechanically. Never write empty placeholder MP4/GLB files as proof of completion.

## 6. GLB acceptance contract — PASS/FAIL

A character reaches `GLB_APPROVED` ONLY when:
- [ ] It imports cleanly into a **fresh** Blender file with no source .blend or tool-specific addon needed.
- [ ] Entire character visible and textured, correct overall proportions, non-corrupt scene scale and axes.
- [ ] Usable deform skeleton, correct skin weights and animation tracks retained where required.
- [ ] Required face morph targets/shape keys present as **actual GLB data**; neutral, blink, A/O/E mouth, closed-lip consonant tests work after import.
- [ ] Sitting and gesturing cause no major intersections, collapsing shoulders, broken waist/neck or sliding feet.
- [ ] Eyelids, teeth, mouth cavity, gaze and hair hold up in medium close-ups.
- [ ] Textures/materials are PBR-valid and look similar in Blender master and clean-room GLB reimport.
- [ ] Preview pose and speaking test are truly rendered, visual quality scored and hand-reviewed at Gate 1.
- [ ] Mesh budgets, texture memory, filesize and target renderer compatibility are recorded.
- [ ] Model creator/source, licenses, generated output provenance, rights/usage limits and approval are recorded.
- [ ] Latest master .blend, export .glb, screenshots and automated QA report all exist; SHA-256 hashes recorded.
- [ ] The character looks consistent alongside the other approved cast in the exact same light/camera test.

Add an automated Blender `bpy` QA tool that loads a supplied GLB, reports objects/bones/vertices/triangles/materials/UV maps/images/shape keys/actions, tests required controls and exports a JSON report. The script should flag missing, broken or doubtful properties; it cannot replace visual inspection.

Status: `SOURCE_ONLY → MODEL_CANDIDATE → LOOKDEV_APPROVED → TOPOLOGY_APPROVED → BODY_RIG_APPROVED → FACE_RIG_APPROVED → GLB_QA_PASSED → SPEAKING_TEST_PASSED → CAST_APPROVED`. Never skip state transitions or claim perfect quality based on file extension.

## 7. Virtual podcast stage: design once, reuse forever

Establish the **Circle of Truth virtual conversation stage** as a modular Blender scene:
- Intimate premium circular stone/wood room, **low central fire**, warm flicker lights, restrained metal/bronze detail, dark blue surrounding architecture, subtle sacred geometry. A graceful Tree of Life may appear in the background but must not distract from the guests.
- 3–8 seating capacity initially, equal-height comfortable chairs, clear sightlines. Support switching to up to 12 guests as a future expansion, not a crowded first prototype.
- Every chair has a named seat anchor: `SEAT_01`, `SEAT_02`, `SEAT_03`, etc. Scene scripts load a guest GLB onto an anchor, seat/pelvis align using per-character offsets, rotate correctly, and apply sitting poses and idle animations.
- Cameras: `CAM_WIDE`, `CAM_HOST`, `CAM_GUEST_01`, `CAM_GUEST_02`, `CAM_REACTION`, `CAM_OTS`. Use restrained cinematic angles, real world scale, proper lenses/depth-of-field, shot continuity and consistent exposure.
- Light: stable hero-key and fill per seat plus subtle animated fire practical, avoiding excessive facial flicker and harsh shadows. Optimize preview using Eevee.
- Separate Blender render collections for architecture, characters, effects and scene-only assets. Version each set before dialogue animation.
- Separate `elite_hall.blend` for the original fictional opening sequence. The docuseries's real-life venues are separate from this animated scene.

## 8. Podcast performance engine

Treat an episode as structured data and assets rather than one monolithic video.

**Dialogue spec:** `speaker_id`, `audio_file`, `start_s`, `duration_s`, `text`, `emotion`, `camera`, `gesture`, `eye_target`, `scene`, `visemes_file`, `status`. Timing must come from actual authorized audio, not guessed speech rates.

For every spoken line:
1. Use a licensed original voice actor or original non-impersonating synthetic voice. **No unauthorized cloning of living public figures' recognizable voices.** All performances are clearly fictional and non-endorsed.
2. Produce exact WAV timings. Run Rhubarb Lip Sync or another verified audio-to-mouth-cue tool, preserving evidence and tool version.
3. Map cues to Blender face shape keys (including consonant closures), smooth/blend transitions, and blend in occasional blink, small eye saccades and brow movement.
4. Layer head/body actions: subtle breathing, seated posture changes, listening nods, short hand gestures, gaze toward current speaker and responsive reaction beats. Avoid a constant twitching loop.
5. Choose between medium speaker, listener reaction, two-shot and wide master based on dialogue with safe editing rules and room tone.
6. Save editable animation clips / action names and a shot manifest, then render **5–15 second test segments**, not an entire half-hour in one go.
7. Compose the final scene with original audio and music, captions, title and disclosure through Remotion + FFmpeg as in the existing master brief.

**Performance proof:** 10–20 seconds of Jesus speaking, with Obama and Trump listening, physically seated in the same set; show a closeup with accurate mouth shapes, blink, expression, a reaction cut and a wide shot. Then show at least one other character speaking before scaling.

## 9. Production budget, compute and execution gates

We are working on a MINISFORUM MS-02 class workstation with approximately **32 GB RAM and integrated graphics** in the recorded environment, unless the current audit proves upgrades. AI-generated high-detail assets, four 4K textures per person, 12 talking characters and heavy path tracing in one Blender scene may be unrealistic locally.

- Use cloud-based Tripo mesh generation selectively, under explicit credit approval.
- Use Blender Eevee, low-resolution preview and simpler lighting in early gates; scale resolution only after timing/quality benchmarks.
- First complete one character (target speaking quality), **then** a 3-character seated test. Stop before massive cast batches.
- Record generation credits, costs, local Blender render time, polygon/texture budgets, memory and export sizes.
- Never pay for another character unless the current prototype meets the agreed quality.
- Save/export GLB assets and .blend masters separately from Git; avoid committing huge binaries to a public GitHub repo without discussing Git LFS/private storage and rights.
- Use GitHub only for scripts, manifests, previews, licensing-safe notes and small assets; prefer private storage for confidential source photos, contractual material and heavy production caches.

## 10. Required end-of-phase reports

For each gate, provide:

```text
GATE / VERSION:
ACTUAL INPUTS OPENED:
TOOL VERSIONS / LICENSES:
WORK COMPLETED:
REAL OUTPUT FILE PATHS:
GLB INSPECTION SUMMARY:
VISUAL QUALITY ISSUES:
COST / CREDITS:
PASS / FAIL / NEEDS APPROVAL:
NEXT DECISION (ONE):
```

### Gates
- **Gate 0 — Preflight:** Local folder, tool connections, actual Tripo exports, skills/tool versions and budgets verified. Decision: first character and references approved.
- **Gate 1 — Look development:** A/B/C 3D candidate comparisons, best turnaround, front/side/back, source and rights. Decision: choose source mesh/look.
- **Gate 2 — Rigged hero:** Actual Blender master + reimport-tested GLB + face expressions + seated body pose + viseme demonstration. Decision: approve hero character.
- **Gate 3 — Trio consistency:** Three matching speaking-ready rigged characters imported into the same blank Blender test scene and seated beside each other. Decision: approve coherent cast.
- **Gate 4 — Podcast proof:** One premium circle-room scene + 10–20 second genuine speaking-and-listening video with original voices. Decision: approve camera, animation, lips and stage.
- **Gate 5 — Repeatability:** A fourth character built using the same automated pipeline; measure true marginal cost/time and estimate production for the rest of the roster. Decision: approve batch production.

**Failure policy:** Do not hide defects or label a GLB “ready” because it imports. When a tool cannot produce full facial controls, stop and provide alternatives and evidence. When a stage is blocked, continue any other safe independent work and report the blocker.

## 11. First-run command to execute after local path selection

1. Clone or update the repo and read the original Hermes brief and canonical cast catalog.
2. Make an intake directory for the user's Tripo test models and existing character image references.
3. Inspect every test input and generate a fair comparison board before running expensive new models.
4. Configure one fully reusable character master Blender file template and a clean-room GLB validator.
5. Implement a basic empty podcast set and two camera tests even while character refinement continues.
6. Select one approved first character, prove shape-key + body rig export, then create a true speaking clip.
7. Request one creative approval at the next meaningful gate, with images/video and exact source paths.

**Final principle:** Build a **character factory**, not 121 unrelated statues. Build a **reusable cinematic conversation stage**, not a one-off image-to-video demo. Every asset should be capable of reliably appearing in many episodes with different dialogue and camera angles.
