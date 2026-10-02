# Gates — LOT-010

> Before working on this lot, read the repository root README.md.

All gates below are active. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-010-001 — Automated regression

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Build and non-integration test suites pass on the identified candidate result.

Method:
Run dotnet build -m:1 and dotnet test -m:1; record candidate identity and evidence.

Tested at: 2026-09-28T20:37:19+02:00
Evaluated result: Published V0.9 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`, including REQ-010-007 through REQ-010-009 and F-010-002 through F-010-007 corrections.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false --no-restore` completed with 0 warnings and 0 errors. `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false --no-restore` passed 12 AI, 63 Core, and 17 Windows-platform tests. `publish.ps1` published the self-contained win-x64 executable and accepted only `TextAid.exe` plus the pre-existing user-data `actions` directory.

### Test history

- 2026-09-28T18:53:45+02:00 — PASS on the working-tree candidate based on `44d7b65`: build completed with 0 warnings and 0 errors; 92 non-integration tests passed.
- 2026-09-28T19:04:43+02:00 — PASS on the current working-tree candidate based on `44d7b65`: after the in-place locale selection and emoji-preservation corrections, build completed with 0 warnings and 0 errors; 92 non-integration tests passed.
- 2026-09-28T20:37:19+02:00 — PASS on published V0.9 candidate SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`: build completed with 0 warnings and 0 errors; 92 non-integration tests passed; `publish.ps1` produced the self-contained win-x64 single-file executable.

## G-010-002 — Windows compatibility matrix

Type: HUMAN
Status: N/A
Defined at: 2026-09-25T23:53:23

Condition:
The required application, DPI, monitor, failure, text, both invocation paths, translation-direction, destination-change, and shortcut-reassignment cases are exercised and results recorded with named human validation.

Method:
Run the V0.9 matrix on Windows and record each required and exploratory outcome.

Validated at: 2026-09-28T20:39:17+02:00
Validated by: Olivier
Evaluated result: Published V0.9 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`.
Comment: The completed matrix paths are recorded in Test history. Under D-041, the only unperformed portions, VS Code and 100/125/150-percent DPI/multi-monitor checks, are N/A for this LOT-010 closure and remain deferred work.

### Test history

- 2026-09-28 — Partial validation by Olivier: after stopping Ollama to unload the model, the next local transformation resumed almost immediately with no issue. The existing session also exposed a transient neutral-language selection defect after French UI generation and a leading-emoji omission in local Rewrite and Correct; F-010-002 and F-010-003 record the corrective changes. Full matrix validation remains TO TEST.
- 2026-09-28T20:39:17+02:00 — Partial validation by Olivier on published candidate SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`: confirmed the corrected warm-up, in-place locale, neutral-language, and leading-emoji paths; confirmed both invocation paths, translation destination change, Copy, Replace in Notepad and a Chromium text field, and Cancel/Escape; confirmed the current privacy and deployment-boundary checks. The Visual Studio/VS Code, Chromium contenteditable, Word, Outlook, multi-monitor, and 100/125/150-percent DPI cases remain unrecorded, so this gate remains TO TEST.
- 2026-09-28T20:39:17+02:00 — Olivier explicitly deferred the multi-monitor and 100/125/150-percent DPI checks because appropriate displays are not currently available. This is a deferred human test, not a PASS or N/A evaluation. The application-specific cases remain unrecorded.
- 2026-09-28T20:39:17+02:00 — Olivier confirmed successful capture/window/Replace/Copy validation in Visual Studio, Chromium, Word, and Outlook. VS Code is explicitly deferred. The gate remains TO TEST because the VS Code and deferred display cases are still within its active condition.

## G-010-003 — Privacy and paste release blockers

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
No wrong-window paste, prohibited log content, or deployment-mode boundary escape remains in the candidate.

Method:
Review failure reproductions and evidence from LOT-003, LOT-007, and current regression.

Validated at: 2026-09-28T20:39:17+02:00
Validated by: Olivier
Evaluated result: Published V0.9 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`.
Comment: Olivier confirmed no wrong-window paste, no prohibited Safe Debug content, and no deployment-mode boundary escape during the current regression pass.

### Test history

- 2026-09-28T20:39:17+02:00 — PASS by Olivier on published candidate SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`: current regression confirms Copy preserves the source, Replace targets the captured source, Cancel/Escape does not paste, Safe Debug contains no prohibited content, and This device only does not escape its deployment boundary.
