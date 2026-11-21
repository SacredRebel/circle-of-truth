# Circle of Truth — Nine GitHub 3D Tools: Integration & Feasibility Audit
**Reviewed:** 2026-11-20 | **Research source:** the nine public repositories supplied by the project owner, inspected directly through GitHub. | **Scope:** the fictional animated Circle of Truth character factory and reusable podcast stage.

> **DO NOT TREAT ANY TOOL AS INSTALLED, CONNECTED, LICENSE-CLEARED FOR ALL USES, OR PRODUCTION-PROVEN.** These are repository-level findings and a proposed test plan, not execution results. Every dependency, model weight, external service, output asset and rights grant must be verified in the actual runtime before production.

## Executive decision

**Use immediately as research/test candidates:** (1) AssetFurnace (`Bingeljell/image-to-3dlab`), (2) `img2threejs/img2threejs` with its separate optional `plugin-character`, primarily for procedural sets/props and quantitative rig quality checks, (3) Wonder3D as a controlled alternative to Tripo on one clean single-person reference.

**Optional in other pipeline lanes:** DepthFlow for 2.5D title/character-poster motion, openMVG curated links for research.

**Not worth prioritizing for the current talking-human pipeline:** older Stable-DreamFusion, old Hunyuan3D-1 locally, automobile bbox estimator, a GPT-3 website tutorial. The first two can be considered remote research benchmarks with proper hardware and license verification. Avoid bulk installs.

## Verified per-repository assessment

| Repo / status | Real purpose | Circle of Truth fit | Host requirements / risks | Action |
|---|---|---|---|---|
| [AssetFurnace — Bingeljell/image-to-3dlab](https://github.com/Bingeljell/image-to-3dlab) — **HIGH** | Image/text to textured models, mesh cleanup, SkinTokens body rig, 21 animation presets, animated GLB; agent workflow | Strongest open-source alternative/orchestrator to compare against Tripo, especially for reusable humanoid body rigs | Official README describes Windows support as *limited testing*, NVIDIA/Apple Silicon/AMD ROCm paths, and model weights that may total 8+ GB; an integrated Intel GPU is not advertised as a fully supported generation target. Code Apache-2.0; model weights have **individual licenses**. Body rig ≠ facial blendshapes. Cloud option may incur fees; do not assume quoted promotional price persists. | Test one existing Tripo GLB as *input* and one isolated single-person reference as fresh generation, only after environment/credits review. |
| [img2threejs](https://github.com/img2threejs/img2threejs) — **HIGH for scene/skill** | Agent skill producing **code-only procedural Three.js geometry** from reference images, not regular image→mesh photogrammetry | Useful for scene layout, Circle of Truth stage props/environment previews and quality-gated, reproducible Three.js objects; explicitly documents Hermes installation | Its **base** creates Three.js group factories, **not automatically GLB**. Its plugin system has optional hosted [img2glb](https://github.com/img2threejs/plugin-img2glb), and a separate [plugin-character](https://github.com/img2threejs/plugin-character) for body skeleton/skin/clip validation. Plugin face visemes **not established** by README. Apache-2.0 base. | Inspect/install in isolated Hermes profile only after reviewing install scripts/permissions; try 1 stool/chair, one background architectural fixture, 1 rig QA. |
| [Wonder3D](https://github.com/xxlong0/Wonder3D) — **MEDIUM** | Single-view image → six consistent colored/normal views → mesh reconstruction | Useful A/B output candidate versus Tripo for Jesus isolated front view | CUDA-based implementation with model weights; author's README says images are reduced to 256×256; possible subtle face loss; does not make speaking rig. MIT source, review model/data terms. | Test remotely or on compatible GPU once if geometry reconstruction quality warrants. |
| [DepthFlow](https://github.com/BrokenSource/DepthFlow) — **HIGH for marketing, NOT character GLB** | Depth-driven 2.5D parallax videos from flat images | Animate existing beautiful cast posters, cinematic intro artwork, trailers and shorts without modeling the full cast | Does not create free-moving, fully volumetric character rigs. The repository declares AGPL-3.0; review redistribution/network obligations for integrated code and any estimator weights. | Separate optional marketing-motion lane. Do not send to character rig queue. |
| [openMVG awesome 3D Reconstruction list](https://github.com/openMVG/awesome_3DReconstruction_list) — **RESEARCH** | Curated index of 3D reconstruction papers/tools | Literature/resource discovery when comparing tools or multi-view recon approaches | Not executable reconstruction software by itself; last code push dated 2021. | Bookmark only. |
| [Tencent Hunyuan3D-1](https://github.com/Tencent-Hunyuan/Hunyuan3D-1) — **LOW locally / potential cloud benchmark** | Early text/image-to-3D generator | Potential alternate mesh candidate but superseded by the author's newer Hunyuan versions | Author's README: standard pipeline ~30 GB VRAM (~24 GB with `--save_memory`), lite ~22 GB (~18 GB saving). Current recorded machine: ~32 GB system RAM, Intel integrated graphics, no dedicated comparable VRAM. **Important:** repository explicitly says its Dust3R-based texture-baking module uses CC BY-NC-SA 4.0, so it cannot be used commercially as-is. GitHub license shows custom/NOASSERTION—inspect component, model and output terms. | Do NOT install/run locally. Review newer Hunyuan generation + hosted compute only if justified and licensed. |
| [Stable-DreamFusion](https://github.com/ashawkey/stable-dreamfusion) — **LOW** | Experimental SDS NeRF/diffusion text/image-to-3D, mesh export | Reference research, not an efficient facially rigged-human factory | Repo's own README points to newer `threestudio`; last source push 2023; readme describes approx. 16 GB GPU usage and CUDA compilation paths. Apache-2.0 code. Does not create phoneme-ready human rig. | Skip for current production. |
| [image-to-3d-bbox](https://github.com/experiencor/image-to-3d-bbox) — **NO FIT** | Keras CNN to estimate 3D **car** bounding boxes from 2D vehicle images | No character mesh, facial rig or studio generation; vehicle research only | Old project / no obvious relevant output | Skip. |
| [project_modern_ui_ux_gpt3](https://github.com/adrianhajdin/project_modern_ui_ux_gpt3) — **WEBSITE REFERENCE ONLY** | React/CSS tutorial landing page styled around GPT-3 | Could teach layout/components but adds nothing to 3D creation; Circle of Truth already has a custom cinematic Vercel site | Tutorial design is unrelated; do not overwrite established site or assume screenshot/code licensing | Optional research only, no character pipeline install. |

## Important new find — AssetFurnace

The project is presently branded **AssetFurnace**, formerly Image-to-3D Lab. Its README documents:
- Text/image/GLB intake, one or more alternative model generation engines, dense-mesh finishing, rigging, animation presets, export.
- `SkinTokens` body skeleton/skin weighting and 21 move presets. **Facial speaking controls are not claimed by the README as a completed standard**; inspect any actual morph targets rather than promising them.
- Separate model-weight licensing; the presence of an Apache-2.0 code license does **not** license all checkpoint weights or third-party assets.
- Windows installer described as having limited testing. Avoid blind `irm ... | iex` or `curl ... | bash`—inspect installer, dependencies, network/telemetry behavior and installation locations first. Get the user's permission.
- Current user's Tripo account is independent; never assume it is connected to AssetFurnace.

## Important new find — img2threejs

Base repo has explicit Hermes integration instructions but is **procedural 3D code reconstruction**, not one-click photogrammetric production characters.
- Base skill: `npx --yes img2threejs@latest install` (READ/APPROVE before executing); `npx --yes img2threejs@latest doctor`.
- Documented Hermes profile needs a skill symlink, and agent restart may be needed; verify the correct actual profile on the target machine rather than writing arbitrary folders.
- Optional `plugin-character` documents building/checking body rigs from a GLB, skin conditioning, clip measurement and a 12-check rig gate. It is NOT demonstrated to create our full lip-sync shapes.
- Optional `plugin-img2glb` references a **hosted** TRELLIS generator—treat as cloud data transfer, login, credits and provider licensing; require opt-in.
- A plugin installer being available **does not** mean the mesh has been reconstructed, rigged, measured or made animation-ready.

## Recommended practical A/B benchmark

**Test one character and one room asset before any cast batch.**

1. **Reference quality first:** isolated full-body front, side, back in A-pose, clean backdrop; face closeup. Do not feed the 12-person spiritual poster directly as a supposed single character. Keep the same character style identity.
2. **Tripo baseline:** import user's preexisting Tripo GLB(s). Run geometry and GLB inspection. If a 12-person-poster model contains 1 mesh and no armature or morphs, classify as LOOKDEV_ONLY.
3. **AssetFurnace comparison:** import or generate the same isolated subject; document engine/version, licenses, credit usage, resulting geometry, scan/skin/pose tests.
4. **Wonder3D optional comparison** on GPU remote/hosted if approved; document cost and output limits.
5. **Blender hero master:** repair topology around face, separate eyes/teeth/tongue, build deformation-safe jaw, blink/brow, body skeleton, animation actions and actual visemes. Master `.blend` is source of truth.
6. **GLB certification:** export, reimport in clean Blender project, inspect mesh, materials, bones, morphs, seated deformation, lip-sync, gaze, blink and speaking closeups.
7. **Scene proof:** build a Circle of Truth room in Blender, optionally use procedural img2threejs elements for selected props; place 3 characters at seat anchors, play original licensed WAV with Rhubarb/face-shape mapping, render 10–20 seconds.
8. **Marketing only:** use DepthFlow on approved flat artwork, not as a substitute for real speaking models.
9. **Results table** (one row per candidate): source; GPU/OS; exact model version; license evidence; run seconds; credits; vertices/triangles; tex resolution; GLB MB; joints/weights; viseme count; seated deformation PASS/FAIL; head/eyes/mouth PASS/FAIL; clean-room reimport PASS/FAIL; creator approval.

## Hermes execution instructions

Read the master brief and `docs/HERMES_CHARACTER_FACTORY.md` before interpreting this file. **Do not install anything yet**. Audit the user's actual machine (Windows, Intel iGPU and updated hardware if applicable), installed Blender/Python/Node/FFmpeg, Tripo exports and rights; propose the smallest one-character A/B. Ask permission before any substantial cloud use, downloads, system modifications or credits. Implement in an isolated branch or local sandbox, not the live site main branch. Record real outputs in `reports/3d-tool-benchmark.md` and `reports/character_pipeline_status.md`; never substitute invented successes.

**Decision:** start with **Tripo + Blender** and compare **AssetFurnace**; add **img2threejs** for targeted procedural scenery/rig QA; consider **Wonder3D** only if measurable gains; use **DepthFlow** for promotional visuals. Everything else is research/skip. No other repo by itself guarantees high-quality seated dialogue, facial visemes, and production-safe GLBs.
