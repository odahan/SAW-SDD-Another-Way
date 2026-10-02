# Findings — LOT-009

> Before working on this lot, read the repository root README.md.

## F-009-001 — Environment authentication conflicted with the user configuration model

Status: RESOLVED
Recorded: 2026-09-28T05:28:51+02:00
Evidence: REQ-009-002 retained a `BearerFromEnvironment` wording while active D-023 and R-028 already required a CurrentUser-DPAPI vault for connection secrets. The initial LOT-009 implementation followed the narrower requirement and exposed an environment-variable name in Settings.
Impact: Requiring a Windows user to create a system environment variable is unsuitable for TextAid's ordinary-user configuration flow and weakens the established DPAPI-first secret boundary.
Resolution: Olivier decided D-036. External Settings returns to password-style API-key entry; the value is stored only through `DpapiSecretVault`, while `config.json` retains `external-api-key` as an opaque reference. The superseded requirement and gate wording are preserved in place.
