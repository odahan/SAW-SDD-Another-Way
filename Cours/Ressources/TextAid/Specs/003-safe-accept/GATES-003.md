# Gates — LOT-003

> Before working on this lot, read the repository root README.md.

All gates below are active. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-003-001 — Build and platform tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Solution builds and deterministic platform tests pass, including Copy without paste or focus restoration and Replace refusing an invalid source target.

Method:
Run dotnet build -m:1 and dotnet test -m:1.

Tested at: 2026-09-26T19:54:00+02:00
Evaluated result: corrected V0.2 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` succeeded with zero warnings and errors. `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed all 14 platform cases. Root `publish.ps1` produced exactly one 173,663,371-byte `TextAid.exe` in the canonical directory after Olivier closed the prior resident instance.

### Test history

- 2026-09-26T19:53:00+02:00 — PASS on the prior corrected V0.2 candidate, SHA-256 `6DB09596045AD8824E3865F4DD7583E06285401DA51416B8FA7B0DBEE8E8F0A0`. Zero-warning build, 14 passing platform tests, and a sole 173,663,371-byte published EXE. Its evaluation is no longer applicable after the corrected native `INPUT` layout and foreground activation behavior.
- 2026-09-26T19:45:00+02:00 — PASS on the earlier V0.2 candidate, SHA-256 `A38B39129C90093E99AF5EE6AD89BD8B3F782B20CAB8A60C024BCDC38B3C0B6E`. Zero-warning build, 14 passing platform tests, and a sole 173,662,859-byte published EXE. Its evaluation is no longer applicable after correcting focus restoration and the session layout in response to F-003-002 and F-003-003.
- 2026-09-26T19:25:00+02:00 — PASS on the earlier V0.2 candidate, SHA-256 `0AFC77FACD4C50B002DC1AFF44A58EFE421F1B174B066CBF6C056CC9DB6765A0`. Zero-warning build, 13 passing platform tests, and a sole 173,662,859-byte published EXE. Superseded after adding the explicit modifier-timeout safety test and checking generic as well as left/right modifier virtual keys.

## G-003-002 — Replacement safety walkthrough

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Capture → uppercase preview → Replace replaces the intended selection in Notepad, TestTarget, a Chromium browser, and Visual Studio or VS Code. Copy puts the result in the clipboard, leaves the source unchanged, and closes the session. Cancel and failure never paste elsewhere. Captured and transformed text remain readable in equal, elastic panels while the session window is resized.

Method:
Run the application matrix manually on Windows, including Replace, Copy, Cancel, lost source window, and modifier timeout.

### Definition history

- Before D-008, condition: “Capture → uppercase preview → Replace replaces the intended selection in Notepad, TestTarget, a Chromium browser, and Visual Studio or VS Code. Copy puts the result in the clipboard, leaves the source unchanged, and closes the session. Cancel and failure never paste elsewhere.” D-008 adds only the readable, elastic 50/50 review condition.

Validated at: 2026-09-26T19:55:07+02:00
Validated by: Olivier
Evaluated result: corrected V0.2 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`.
Comment: PASS. Olivier confirmed all remaining walkthrough cases: Replace in TextAid.TestTarget and the previously reported applications; Copy with clipboard result, unchanged source, no automatic paste, and closed session; Escape and Alt+F4 cancellation; lost-source and modifier-held safe failures; foreground session appearance; and readable, elastic 50/50 panels during resizing.

### Test history

- 2026-09-26T19:40:00+02:00 — Partial validation by Olivier on V0.2 candidate SHA-256 `A38B39129C90093E99AF5EE6AD89BD8B3F782B20CAB8A60C024BCDC38B3C0B6E`: Cancel, window-close cancellation, selected-text capture, and uppercase transformation passed. Replace did not replace the source selection. The preview status overlapped the transformed text. The gate remains TO TEST; F-003-002 and F-003-003 track the corrections.
- 2026-09-26T19:50:00+02:00 — Partial validation by Olivier on corrected V0.2 candidate SHA-256 `6DB09596045AD8824E3865F4DD7583E06285401DA51416B8FA7B0DBEE8E8F0A0`: the prior successful capture, transformation, Cancel, and close behavior remains good; Replace reaches the final safe-failure message, “TextAid could not paste safely.” The session can appear behind other windows. The gate remains TO TEST; F-003-002 is refined with the `SendInput` cause and F-003-004 records foreground visibility.
- 2026-09-26T19:55:00+02:00 — Partial validation by Olivier on corrected V0.2 candidate SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`: Replace succeeds in Notepad, Visual Studio, Chrome, and Edge. This confirms the corrected native paste path in those applications. Copy, TestTarget, lost-source, modifier-timeout, and elastic-layout/foreground checks had not yet been individually reported; the gate remained TO TEST until Olivier's complete PASS at 19:55:07.
