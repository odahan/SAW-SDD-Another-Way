# Convergence — LOT-009

> Before working on this lot, read the repository root README.md.

Status: CLOSED
Prepared at: 2026-09-28T18:42:05+02:00
Closed at: 2026-09-28T18:42:05+02:00
Closed by: Olivier
Convergence: TOTAL

## Result obtained

V0.8 is identified by commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1` and the published `TextAid.exe` SHA-256 `D257D36FDD8E199F14120E8708438907C1AA982D4D0A68BAC494256F226D5B0C`. It provides an explicitly configured OpenAI-compatible External provider through the existing MAF and `IChatClient` path, a CurrentUser-DPAPI protected API-key vault, model discovery and selection, independent activation for local, On-premises, and External connections, and visible provider-category indicators.

Long External requests use streamed responses and aligned ten-minute application and network budgets. The normal result workflow remains safe: complete output is required before it can be accepted.

## Differences from active requirements

None. REQ-009-001 through REQ-009-004 are satisfied. The superseded environment-variable wording is retained only for history; the active authentication route is user-entered API key protection with CurrentUser DPAPI.

## Essential gate results

- G-009-001 AUTO: PASS on the identified V0.8 candidate. Core passed 63/63, AI 12/12, and Windows 17/17, including protected credential and provider-factory tests without live remote credentials.
- G-009-002 HUMAN: PASS. Olivier validated External configuration and model selection, the red External indicator, successful transformations, a successful 70.2 KB Rewrite through GPT 5.4, UI-catalog generation, and local-profile reactivation behavior.

## Findings disposition

F-009-001 is resolved by D-036: External API keys are entered in Settings and stored only through `DpapiSecretVault`; `config.json` retains an opaque reference only.

## Residual work

LOT-010 remains responsible for hardening and compatibility. LOT-011 remains responsible for release qualification. No unaccepted LOT-009 work remains.

## Closure decision

Olivier confirmed the tests and both gates, then explicitly requested closure. Both active gates are PASS, no active requirement has an unaccepted deviation, and LOT-009 has TOTAL convergence.
