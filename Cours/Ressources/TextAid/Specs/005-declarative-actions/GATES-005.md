# Gates — LOT-005

> Before working on this lot, read the repository root README.md.

All gates below are active and unevaluated. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-005-001 — Action and template tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
All nine built-in actions validate from the action folder beside the executable, including Answer this mail requiring supplementary instructions, and template tests cover `{{text}}`, rejection of every other placeholder, Unicode, literal braces, arbitrary instruction-bearing input as literal data, and Translate's declarative output-language default with unchanged original input.

Method:
Run dotnet test -m:1 for Core and AI tests.

Tested at: 2026-09-27T00:00:00+02:00
Evaluated result: published V0.4 candidate `TextAid.exe`, SHA-256 `4448B162D1867B2827762DC0F24714F103EFBF496E2F59D6FC0C25B775BFE379`.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors. `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 8 Core, and 14 Platform.Windows tests. Core tests cover all nine embedded built-ins, unversioned external action loading, a user-added action, the protected Translate action, text-only templates, literal braces, Unicode-capable .NET strings, and invalid language data. `publish.ps1` produced the sole canonical 178,380,207-byte executable.

### Test history

- 2026-09-27T00:00:00+02:00 — PASS on the preceding V0.4 candidate SHA-256 `461B21E646B03E9B5D3ABFE5900819E095BEC86B6D8FD28AD7053C77478B8F8A` before default action definitions were embedded in the single executable.

## G-005-002 — Action extensibility

Type: HUMAN
Status: TO TEST
Defined at: 2026-09-25T23:53:23

Condition:
Adding a JSON action to the visible action folder and reloading it exposes it for use without recompiling TextAid.

Method:
Add a disposable sample action and exercise it in the running application.

Validated at: 2026-09-27T00:00:00+02:00
Validated by: Olivier
Evaluated result: V0.4 candidate `TextAid.exe` with its initialized visible action folder.
Comment: Olivier confirmed that the completed LOT-005 action workflow, including the action selector and the visual corrections, is successful and authorized lot closure.

### Test history

- 2026-09-27T00:00:00+02:00 — PASS. Olivier accepted the completed declarative-action result and authorized LOT-005 closure.
