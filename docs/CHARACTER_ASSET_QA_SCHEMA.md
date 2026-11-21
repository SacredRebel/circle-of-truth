# Character Factory — per-character metadata and quality contract
```json
{
  "schema": "cot-character-v1",
  "character_id": "char-001",
  "name": "Approved catalog name",
  "collection_ids": ["pilot-cast"],
  "style_version": "COT-3D-v1",
  "status": "MODEL_CANDIDATE",
  "source_references": [
    {
      "path": "references/front.png",
      "angle": "front",
      "rights": "creator-owned_or_permission_confirmed"
    }
  ],
  "generation": {
    "tool": "Tripo Studio",
    "model_version": "to-be-recorded",
    "task_id": null,
    "credits_consumed": null,
    "source_file_sha256": null
  },
  "meshes": {"triangles": null, "materials": null, "textures": [], "face_morph_targets": [], "body_bone_count": null},
  "exports": {
    "master_blend": "blender/char-001_master.blend",
    "hero_glb": "exports/char-001_hero.glb",
    "file_sha256": null
  },
  "checks": {
    "real_glb_import": false,
    "materials_pbr_ok": false,
    "body_deforms_sitting": false,
    "blink_left_right": false,
    "visemes_deform": false,
    "mouth_interior_valid": false,
    "face_camera_closeup": false,
    "speaking_test_rendered": false,
    "legal_provenance": false
  },
  "review": {"approved_by": null, "approved_at": null, "notes": "Not approved until evidence is recorded."}
}
```

## Skill modules to implement
- `character_reference_prep`: isolate and QC a single actor; consistent multi-view angles; versioned source.
- `tripo_candidate_intake`: ingest existing exported GLBs or authorized Tripo tasks; preserve version/cost/source.
- `blender_asset_inspection`: headless geometry/material/UV/bone/morph/clip inventory.
- `blender_character_repair`: retopo, weights, separating eyes and mouth interiors, hair/cloth.
- `blender_facial_rig`: actual shape-key authoring and cue mapping; inspect closeup deformations.
- `glb_export_validate`: export from master; reload clean; automatically validate.
- `podcast_stage_builder`: seats, cameras, lights, reusable location assets.
- `dialogue_to_animation`: audio-timed visemes and layered performances.
- `shot_render_qa`: small Eevee smoke renders, motion and sync review, no fake completed artifacts.

Each skill logs real inputs, outputs, version, success, errors and whether user approval was necessary.