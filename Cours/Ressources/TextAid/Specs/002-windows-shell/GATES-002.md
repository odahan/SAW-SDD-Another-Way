# Gates — LOT-002

> Before working on this lot, read the repository root README.md.

All gates below are active. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-002-001 — Build and publish

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Solution builds and Release publish yields one distributable TextAid.exe.

Method:
Run dotnet build -m:1 and dotnet publish for win-x64 with the specified properties; inspect publish output.

Tested at: 2026-09-26T04:47:14+02:00
Evaluated result: `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false -v quiet` succeeded with zero warnings and errors. Root `publish.ps1` produced the sole 173,655,691-byte self-contained win-x64 EXE in the canonical directory. An interactive Windows probe on this EXE confirmed a first resident process, rejection of a second launch, Ctrl+C+C opening one visible session centered on the source's second monitor, and successful retrigger after closing that session (`evidence/shell-integration-corrected.txt`).
Validity after D-003: PASS remains applicable. D-003 preserves an already observed invocation path; no code, binary, or build condition changed.

### Test history

- 2026-09-26T04:25:32+02:00 — PASS on the previous canonical EXE, SHA-256 `59204A2BCC32D46C7E37742FB818CA6FE3E3A20BC7641D4EC3B574001D224D0D`. Zero-warning solution build and sole 173,655,691-byte publish; only About version formatting had changed. Superseded by the single-instance and placement corrections.
- 2026-09-26T04:06:17+02:00 — PASS on the previous canonical EXE, SHA-256 `61823D3AE5797606B356CB781490F532D8FC2FCB3807A3F96D6DD93102B453F0`. Zero-warning solution build and sole 173,655,691-byte publish. An authorized Windows launch and synthetic Ctrl+C+C opened a visible session without process error. Superseded by the About version correction.
- 2026-09-26T03:29:51+02:00 — PASS on canonical `TextAid.exe`, SHA-256 `F5D0D027BDAAD68CE4B376B53C62C55DC070C319331B0CC5951D953279EBD098`. Zero-warning solution build and two successful `publish.ps1` runs; sole 173,651,595-byte EXE. Authorized launch remained resident and created user configuration. Superseded by the corrected candidate.
- 2026-09-26T03:19:39+02:00 — PASS on `artifacts/publish-v01-final/TextAid.exe`, SHA-256 `F5D0D027BDAAD68CE4B376B53C62C55DC070C319331B0CC5951D953279EBD098`. `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false -v quiet` had zero warnings/errors. The old publish command yielded a sole 173,651,595-byte EXE; an authorized Windows launch remained resident and created `%APPDATA%\TextAid\config.json`. Superseded as the presented result by D-001.

## G-002-002 — Keyboard state cases

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Deterministic keyboard-trigger tests cover ordinary copy, double copy, key repeat, timeout, intervening key, triple C, and released Ctrl/C.

Method:
Run the relevant dotnet test -m:1 project.

Tested at: 2026-09-26T04:47:14+02:00
Evaluated result: `tests/TextAid.Platform.Windows.Tests/DoubleCopyDetectorTests.cs` against the corrected `DoubleCopyDetector` implementation.
Result: PASS
Evidence: `dotnet test tests/TextAid.Platform.Windows.Tests/TextAid.Platform.Windows.Tests.csproj -m:1 --no-restore -p:NuGetAudit=false -v quiet` passed all nine event-sequence cases, including Ctrl press/release tracking, ordinary copy, second copy, key repeat, timeout, intervening key, triple C, and released C.
Validity after F-002-008 through F-002-010: PASS remains applicable to the detector; the new instance guard and window-placement code do not change its event logic. The interactive Windows probe additionally confirmed one trigger and successful retrigger on the new EXE.
Validity after D-003: PASS remains applicable. The detector tests and implementation are unchanged; the HUMAN walkthrough now records no-selection invocation explicitly.

### Test history

- 2026-09-26T04:06:17+02:00 — PASS on the same detector and test file: nine event-sequence cases passed. Remained valid after the About-only change F-002-007 and decision D-002; reevaluated with the new shell candidate.
- 2026-09-26T03:14:00+02:00 — PASS on the prior detector and `UnitTest1.cs`: seven cases passed. D-001 changed only publication; this result remained valid until the detector changed for F-002-006.

## G-002-003 — Windows shell walkthrough

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23
Decision: D-002 clarifies the separate-machine check; R-012 tracks its deferral.

Condition:
On the validator's Windows desktop, the trigger, source-monitor centering, capture, complete dark theme, tray, About, and launch/stop of the standalone executable are accepted.

Method:
Exercise the V0.1 executable on a Windows desktop and record the named validator. The separate clean-machine portability check is tracked in `PORTABILITY-CHECKS.md` under R-012; lack of a second machine alone does not determine this gate's result.

### Definition history

- Before D-002, condition: “On Windows, the trigger, source-monitor centering, capture, complete dark theme, tray, About, and standalone executable are accepted.” Method: “Exercise the V0.1 executable on a Windows desktop and record the named validator.” The associated walkthrough required a clean Windows x64 machine for the standalone check. D-002 moves only that separate-machine check outside the blocking condition; the product's single-file requirement remains active.

Validated at: 2026-09-26T04:57:02+02:00
Validated by: Olivier
Evaluated result: `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`.
Comment: PASS. Olivier confirmed the current EXE centers its session on the source monitor and rejects a second instance. He had already confirmed on this EXE that Ctrl+C+C opens a session without selected text and that Cancel and the Windows close button work. Prior acceptance of unchanged menu, dark screens, ordinary Ctrl+C, selected-text capture, tray Enable/Disable and Exit, EXE launch/stop, and About details remains applicable. The interactive Windows probe (`evidence/shell-integration-corrected.txt`) additionally found one session, zero centering offset on the second monitor, close, and retrigger. The separate-machine portability check stays DEFERRED under D-002/R-012 and is outside this blocking gate.

### Test history

- 2026-09-26T04:51:29+02:00 — TO TEST on the current canonical EXE, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`. Olivier confirmed no-selection invocation and Cancel/window-close behavior. Placement and single-instance behavior still awaited his review; technical probe evidence alone did not satisfy the HUMAN gate.
- 2026-09-26T04:41:13+02:00 — FAIL by Olivier on the previous canonical EXE, SHA-256 `59204A2BCC32D46C7E37742FB818CA6FE3E3A20BC7641D4EC3B574001D224D0D`: the session appeared in the upper-left quarter instead of centered on the monitor of the focused source control; repeated launches created multiple tray icons; after closing them, Ctrl+C+C stopped opening the session. Cancel/close could not be tested. F-002-008 through F-002-010 track the corrections.
- 2026-09-26T04:29:23+02:00 — Partial human validation by Olivier on the previous canonical EXE, SHA-256 `59204A2BCC32D46C7E37742FB818CA6FE3E3A20BC7641D4EC3B574001D224D0D`: About version display was correct. Other previously reported checks referred to the still earlier candidate. Full gate stayed TO TEST.
- 2026-09-26T04:19:05+02:00 and 2026-09-26T04:23:27+02:00 — Partial human validation by Olivier on the previous canonical EXE, SHA-256 `61823D3AE5797606B356CB781490F532D8FC2FCB3807A3F96D6DD93102B453F0`. Menu, screens, theme, ordinary Ctrl+C, Ctrl+C+C, selected-text display, Enable/Disable, Exit, and EXE launch/stop passed. About details were accepted except the version suffix. Clean-machine standalone distribution was deferred; other walkthrough checks were not explicitly reported. Full gate stayed TO TEST.
- 2026-09-26T03:40:53+02:00 — FAIL by Olivier on the previous canonical EXE, SHA-256 `F5D0D027BDAAD68CE4B376B53C62C55DC070C319331B0CC5951D953279EBD098`: thick white lines at tray separators (`evidence/tray-menu-failed.png`), white About background, and no visible response to Ctrl+C+C while Enabled. Other walkthrough checks were not accepted.

## G-002-004 — Canonical publish script and directory

Type: AUTO
Status: PASS
Defined at: 2026-09-26T03:23:39+02:00
Decision: D-001

Condition:
Running root `publish.ps1` succeeds and leaves exactly one file, `TextAid.exe`, in `src/TextAid.App/bin/Publish/`.

Method:
Run `publish.ps1`; inspect the canonical directory and the EXE file type.

Tested at: 2026-09-26T04:47:14+02:00
Evaluated result: `publish.ps1` and `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`.
Result: PASS
Evidence: `./publish.ps1` succeeded. Inspection found exactly one file named `TextAid.exe`, 173,655,691 bytes, in the canonical directory. The prior evaluation established the Release `PublishDir` and `MZ` header; the script and project publish configuration are unchanged.
Validity after D-003: PASS remains applicable. The output and publish condition are unchanged.

### Test history

- 2026-09-26T04:25:32+02:00 — PASS on the previous canonical EXE, SHA-256 `59204A2BCC32D46C7E37742FB818CA6FE3E3A20BC7641D4EC3B574001D224D0D`. The script left the sole 173,655,691-byte EXE in the canonical directory. Superseded by the single-instance and placement corrections.
- 2026-09-26T04:06:17+02:00 — PASS on the previous canonical EXE, SHA-256 `61823D3AE5797606B356CB781490F532D8FC2FCB3807A3F96D6DD93102B453F0`. The script left the sole 173,655,691-byte EXE in the canonical directory. Superseded by the About version correction.
- 2026-09-26T03:29:51+02:00 — PASS on the previous canonical EXE, SHA-256 `F5D0D027BDAAD68CE4B376B53C62C55DC070C319331B0CC5951D953279EBD098`. Two consecutive script runs left the sole 173,651,595-byte EXE; Release `PublishDir` was canonical and the file had an `MZ` header.
