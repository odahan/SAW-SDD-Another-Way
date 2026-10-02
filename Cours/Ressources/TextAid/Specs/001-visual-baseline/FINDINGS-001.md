# Findings — LOT-001

> Before working on this lot, read the repository root README.md.

## F-001-001 — Existing full logo includes a bright capsule

Status: RESOLVED LOCALLY
Found at: 2026-09-26T00:09:00

Finding:
`assets/Logo-final.png` contains a bright white capsule behind the wordmark. Its corners are transparent, but the central bright field is part of the artwork.

Evidence:
Visual inspection of `assets/Logo-final.png` and its RGBA metadata.

Impact:
On a dark About window, the logo needs a contained brand tile and aspect-preserving fit so its edge appears intentional.

Resolution:
`VISUAL-BASELINE.md` defines the brand tile, and `reference.html` demonstrates it. The logo itself was left intact; Olivier accepted the complete baseline in G-001-001 on 2026-09-26.

Destinations:
- Local

## F-001-002 — Brand asset anomalies reported during human review

Status: RESOLVED LOCALLY
Found at: 2026-09-26T00:24:17

Finding:
The user accepted the visual baseline except for anomalies in the logo. The user corrected the SVG and PNG, then requested ICO regeneration.

Evidence:
User feedback and revised `assets/TextAid-icon.svg` and `assets/TextAid-icon.png` provided on 2026-09-26.

Impact:
Candidate 1 cannot be accepted. Candidate 2 uses the corrected SVG and PNG and a regenerated ICO; Olivier accepted this result in G-001-001 on 2026-09-26.

Resolution:
`assets/render_icon.py` now generates the ICO from the corrected PNG without rewriting either corrected source. The ICO was regenerated and `check_baseline.py` verified its frames and 256 px content against the PNG. G-001-002 was reevaluated on candidate 2.

Destinations:
- Local
