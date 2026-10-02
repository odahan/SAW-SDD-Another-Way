# Gates — LOT-009

> Before working on this lot, read the repository root README.md.

Both gates below are active and PASS. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-009-001 — Provider and policy tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Provider factory, DPAPI authentication, missing credentials, and deployment-mode classification tests pass without needing live remote credentials.

Method:
Run dotnet test -m:1 with a fake IChatClient or local test endpoint.

### Superseded condition — 2026-09-28 by D-036

Provider factory, environment authentication, missing credentials, and deployment-mode classification tests pass without needing live remote credentials.

Tested at: 2026-09-28T18:42:05+02:00
Evaluated result: V0.8 candidate, commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `D257D36FDD8E199F14120E8708438907C1AA982D4D0A68BAC494256F226D5B0C`.
Result: PASS
Evidence: Deterministic suites passed: Core 63/63, AI 12/12, and Windows 17/17. The AI tests cover protected API-key success, missing protected-credential rejection, anonymous External construction, external output budgeting, and streamed external responses. The Core suite covers deployment classification, profile resolution, and DPAPI-backed credential validation without live remote credentials.

### Test history

- 2026-09-28 — Automated regression: `TextAid.Core.Tests` passed (63/63), `TextAid.AI.Tests` passed (12/12), and `TextAid.Platform.Windows.Tests` passed (17/17). The provider factory and DPAPI credential paths were exercised only with fakes or protected local test storage; no live API key was required.

## G-009-002 — Remote choice walkthrough

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
A deliberately configured External profile works only in External mode, and the selected deployment mode is clear to the user.

Method:
Exercise with an authorized test account and inspect configuration for absence of clear-text secrets.

Validated at: 2026-09-28T18:42:05+02:00
Validated by: Olivier
Evaluated result: V0.8 candidate, commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `D257D36FDD8E199F14120E8708438907C1AA982D4D0A68BAC494256F226D5B0C`.
Comment: Olivier validated the deliberately configured OpenAI-compatible provider with a DPAPI-protected API key, external-mode indicator, model discovery and selection, normal transformations, long 70.2 KB Rewrite through GPT 5.4, and UI-catalog generation. The provider never appeared as an implicit fallback; local reactivation and a retry in the already open main window were also validated. Olivier confirmed the tests and gates and explicitly requested LOT-009 closure.

### Test history

- 2026-09-28 — Human walkthrough: External configuration and usage succeeded with an authorized account. Long external rewrite and UI translation completed; the local profile remained independently configurable and its active indicator was accurate. Olivier confirmed final validation and closure authorization.
