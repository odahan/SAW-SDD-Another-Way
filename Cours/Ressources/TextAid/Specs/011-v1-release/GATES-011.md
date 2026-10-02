# Gates — LOT-011

> Before working on this lot, read the repository root README.md.

All gates below are active. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-011-001 — Release build and tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Release candidate builds, non-integration tests pass, and a single self-contained TextAid.exe is produced. Deterministic tests cover current-user startup registration enable/disable and failure handling without touching machine-wide registration.

Method:
Run dotnet build -m:1, dotnet test -m:1, and the Release publish; identify the candidate result.

Tested at: 2026-09-28T22:07:56+02:00
Evaluated result: Published V1 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `48BDA1471C6971242A60FB2EA1D1DE04AF930D5A2CFAC7A4E9733D70C3D67F8E`.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false` and `dotnet build src/TextAid.App/TextAid.App.csproj -m:1 -p:NuGetAudit=false --no-restore` completed without errors; `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false --no-restore` passed 12 AI, 63 Core, and 20 Windows-platform tests. The startup-registration tests cover enable, disable, and a recoverable registry-write failure without accessing a real machine-wide registration. `publish.ps1` produced the self-contained win-x64 `TextAid.exe`; its output contains only that EXE and the pre-existing user-data `actions` directory allowed by the publication contract.

### Test history

No prior evaluations.

## G-011-002 — V1 acceptance

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The named human accepts the candidate against each formal V1 release criterion, including both invocation paths, quick-translation direction and destination changes, safe `Replace`, non-replacing `Copy`, configurable shortcuts, the optional per-user Windows-startup switch, and the documented compatibility limits.

Method:
Review release evidence and exercise the candidate; record named, dated validation.

Validated at: 2026-09-28T22:07:56+02:00
Validated by: Olivier
Evaluated result: Published V1 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `48BDA1471C6971242A60FB2EA1D1DE04AF930D5A2CFAC7A4E9733D70C3D67F8E`.
Comment: Olivier confirmed that the software has been tested throughout its construction, that its functions are working, and requested an economical finalization of LOT-011 rather than further duplicate coverage. This accepts the candidate against the V1 criteria, including the two invocation routes, safe Replace/Copy/Cancel, configurable shortcuts, and the per-user Windows-startup option. Ordinary future defects remain subject to normal corrective work.

### Test history

No prior evaluations.
