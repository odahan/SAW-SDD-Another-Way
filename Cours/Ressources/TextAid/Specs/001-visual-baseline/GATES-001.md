# Gates — LOT-001

> Before working on this lot, read the repository root README.md.

Both gates below are active. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-001-001 — Visual baseline accepted

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The named human accepts the palette, typography, dimensions, control styles, logo, icon, and reference screen as the V0.1 baseline.

Method:
Inspect the reference screen and asset files.

Validated at: 2026-09-26T00:50:32
Validated by: Olivier
Evaluated result: Candidate 2, SHA-256 `31f4cf6c5a5b7243e15e14dd210288e43d7673366ac221bd9863d6432a51d9bf` over the seven paths listed in `check_baseline.py`.
Comment: Olivier approved LOT-001 after the corrected SVG and PNG were incorporated and the ICO regenerated. This accepts the palette, typography, dimensions, control styles, logo, icon, and reference screen as the V0.1 baseline.

### Test history

No evaluations yet.

## G-001-002 — Baseline documented

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The baseline documents the required tokens and identifies the logo and icon files.

Method:
Inspect the delivered visual baseline files and token list.

Tested at: 2026-09-26T00:48:13
Evaluated result: Candidate 2, SHA-256 `31f4cf6c5a5b7243e15e14dd210288e43d7673366ac221bd9863d6432a51d9bf` over the seven paths listed in `check_baseline.py`.
Result: PASS
Evidence: `check_baseline.py` exited 0: 14 documented token names and values match the reference HTML; logo and icon paths exist; corrected SVG parses; ICO contains 16, 24, 32, 48, 64, 128, and 256 px frames; its 256 px frame matches the corrected 512 × 512 PNG resampled with Lanczos.

Validation impact review: Correcting the SVG and PNG and regenerating the ICO changed the evaluated result. G-001-002 was rerun on candidate 2. G-001-001 remains TO TEST and must be evaluated by a named human on candidate 2.

### Test history

- 2026-09-26T00:18:23 — PASS by `check_baseline.py` on candidate 1 SHA-256 `77ddb12879ab9e99583027d3cdb65e07190eb4465e1d941e36877eb3d51c7dc9`. Evidence: 14 matching tokens, required assets, ICO frames, and preview size. Superseded by the chrome paragraph clarification.
- 2026-09-26T00:19:00 — PASS by `check_baseline.py` on candidate 1 SHA-256 `1e3a43dcb11aeca1789d0d7ebcfc7adf1bea8496722cadc29a5d2244ca50a219`. Evidence: 14 matching tokens, required assets, ICO frames, and preview size. Superseded by the user's SVG and PNG corrections and ICO regeneration.
