# Gates — LOT-007

> Before working on this lot, read the repository root README.md.

All gates below are active and unevaluated. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-007-001 — Privacy and policy tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Tests prove endpoint classification, Strict Local rejection, Debug-off file absence, and redaction when Debug is on.

Method:
Run dotnet test -m:1 with representative secret and text sentinels.

Tested at: 2026-09-27
Evaluated result: PASS on the current LOT-007 candidate, including sole-configuration promotion and Full log credential redaction.
Result: PASS
Evidence: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 33 Core, and 14 Windows tests. Core tests cover the three permitted loopback hosts, remote-host rejection, debug-off file absence, log truncation, redaction of representative API-key and clipboard-text sentinels from metadata and exceptions, safe failure-category/stack diagnostics, Full log text inclusion with API-key and Bearer-token redaction, sole External promotion for a local action, and rejection of ambiguous multi-connection promotion.

### Test history

- 2026-09-27 — PASS: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 30 Core, and 14 Windows tests, including deterministic endpoint, debug-off, truncation, and redaction checks.
- 2026-09-27 — PASS: after D-029, `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 32 Core, and 14 Windows tests, including sole-configuration promotion and ambiguous-choice rejection.
- 2026-09-27 — PASS: after F-007-001, `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 32 Core, and 14 Windows tests, including safe failure-category and exception-stack diagnostics with secret/text sentinels absent.
- 2026-09-27 — PASS: after D-030, `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 33 Core, and 14 Windows tests, including Full log text inclusion and credential redaction.

## G-007-002 — Privacy behavior

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The user sees an understandable local/remote connection indication and errors; Debug controls and file behavior match the documented privacy rules.

Method:
Inspect the running app and log from an opt-in session.

Validated at: 2026-09-27
Validated by: Olivier
Evaluated result: PASS on the published candidate SHA-256 `2EBBCDCD4A554FAA8A6EAA0B88174315558370D8EAF4039AD05BBF0ED6FE989B`.
Comment: Olivier confirmed the opt-in Debug log, its persistence across application restarts, categorized failure diagnostics, the Full log disclosure and credential redaction behavior, the Debug-folder command, the red Full log indicator in the main session, and its live Settings synchronization all work as intended.

### Test history

- 2026-09-27 — PASS: Olivier confirmed the full LOT-007 privacy, debug, diagnostic, and Full log behavior on the published candidate SHA-256 `2EBBCDCD4A554FAA8A6EAA0B88174315558370D8EAF4039AD05BBF0ED6FE989B`.
