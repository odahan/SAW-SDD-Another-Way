# Convergence — LOT-010

> Before working on this lot, read the repository root README.md.

Closed at: 2026-09-28T20:39:17+02:00
Closed by: Olivier
Decision: D-041
Convergence: PARTIAL

## Result obtained

The accepted V0.9 result is [TextAid.exe](../../src/TextAid.App/bin/Publish/TextAid.exe), SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`. It is the self-contained win-x64 executable published by `publish.ps1`, with its initialized editable `actions` user-data directory. The candidate includes local-model warm-up feedback, locale and neutral-output-language corrections, emoji preservation, the Synonymes and Humanize base actions, and the documented prompt refinements.

## Differences from active requirements

REQ-010-001 through REQ-010-009 are implemented or validated on the accepted candidate. The only accepted difference is within the human compatibility matrix: Visual Studio Code and 100/125/150-percent DPI/multi-monitor validation were not performed. D-041 declares those portions N/A for this closure; they remain deferred work and are not passing results.

## Essential gate results

- G-010-001 — PASS. The accepted candidate built with 0 warnings and 0 errors; 92 non-integration tests passed.
- G-010-002 — N/A under D-041. Olivier validated the remaining required user journeys, application paths, and regressions; only the explicitly deferred VS Code and display cases are N/A for this closure.
- G-010-003 — PASS. Olivier confirmed current safe Replace/Copy/Cancel behavior, Safe Debug boundaries, and This device only deployment-boundary behavior.

## Findings disposition

F-010-001 through F-010-005 are verified by Olivier on the accepted candidate. F-010-006 and F-010-007 record the accepted difference in Humanize quality between local qwen3.5:9b and GPT 5.4; the action remains bounded and editable, and its local-model variance is accepted for V0.9. Deferred compatibility checks remain visible through D-041 and G-010-002.

## Residual work

Run the deferred Visual Studio Code and DPI/multi-monitor compatibility checks when suitable environments are available. Revisit local-model Humanize behavior only as future action work, potentially including a Gemma 4 evaluation; no additional V0.9 change is authorized or required by this closure.

## Closure decision

Olivier accepted the stated N/A conditions and explicitly requested and validated LOT-010 closure on 2026-09-28. The convergence is PARTIAL because D-041 accepts the documented unperformed compatibility checks.

## Historical convergences

None.
