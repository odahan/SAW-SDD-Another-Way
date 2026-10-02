# Convergence — LOT-011

> Before working on this lot, read the repository root README.md.

Closed at: 2026-09-28T22:07:56+02:00
Closed by: Olivier
Decision: D-043
Convergence: TOTAL

## Result obtained

The accepted V1 result is [TextAid.exe](../../src/TextAid.App/bin/Publish/TextAid.exe), SHA-256 `48BDA1471C6971242A60FB2EA1D1DE04AF930D5A2CFAC7A4E9733D70C3D67F8E`. It is the self-contained win-x64 executable published by `publish.ps1`, with its initialized editable `actions` user-data directory. It includes the persisted current-user Windows-startup option: Settings creates, updates, or removes only TextAid's `HKCU` Run registration and reports a recoverable error if Windows rejects the update.

## Differences from active requirements

None. REQ-011-001 through REQ-011-006 are accepted on the identified V1 candidate. The separate-machine portability check for this specific EXE is deferred under R-012 and remains visible in `PORTABILITY-CHECKS.md`; it is not a passing portability claim and does not block closure under the active rule.

## Essential gate results

- G-011-001 — PASS. The candidate built and published successfully. The non-integration suite passed 12 AI, 63 Core, and 20 Windows-platform tests, including deterministic current-user startup enable/disable/failure behavior.
- G-011-002 — PASS. Olivier confirmed that the software was tested throughout development, that all functions are working, and accepted the V1 candidate without duplicating already completed coverage.

## Findings disposition

No LOT-011 findings were recorded.

## Residual work

The separate-machine launch check for the identified V1 EXE remains deferred in `PORTABILITY-CHECKS.md`. Future defects are ordinary corrective work; they do not leave an unaccepted LOT-011 requirement or gate.

## Closure decision

Olivier explicitly requested economical LOT-011 finalization on 2026-09-28, confirmed the application has been tested throughout its construction and that all functions work, and accepted the candidate. Both active gates are PASS and no active requirement has an unaccepted deviation.

## Historical convergences

None.
