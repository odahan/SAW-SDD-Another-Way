# Convergence — LOT-008

> Before working on this lot, read the repository root README.md.

Status: CLOSED
Prepared at: 2026-09-28T05:28:51+02:00
Closed at: 2026-09-28T05:28:51+02:00
Closed by: Olivier
Convergence: TOTAL

## Result obtained

V0.7 is identified by commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1` and the published `TextAid.exe` SHA-256 `433F4AF73D29EF6E5B8C7E12AD3CE8746E12FB03BC6F50E2852AF0411774C310`. It provides the dark Settings and dedicated Actions surfaces, source-first English resources with validated locale caches and English fallback, protected action editing, language and shortcut preferences, immediate quick translation with stale-result protection, per-session language and instruction controls, and the equivalent main-window application menu.

## Differences from active requirements

None. REQ-008-001 through REQ-008-015 are satisfied. The durable locale-cache foundation is intentionally limited to generated-cache validation, source fingerprinting, and future-compatible storage; corrections and language-pack exchange remain separately planned in LOT-012.

## Essential gate results

- G-008-001 AUTO: PASS on the identified V0.7 candidate. Core passed 59/59, AI 6/6, Windows 16/16, and the English resource keys matched `Strings.xaml` exactly (158/158).
- G-008-002 HUMAN: PASS. Olivier confirmed the complete Windows Settings, localization, shortcut, direct-translation, latest-result, Replace, and Copy walkthrough on 2026-09-28.

## Findings disposition

No LOT-008 finding was recorded. F-006-002, deferred to this lot, is resolved by the delivered language preferences, output-language selector, and one-invocation generation override.

## Residual work

The optional user-correction and reviewed language-pack workflow remains scoped to LOT-012. Optional remote-provider work continues in LOT-009 under its separate requirements and gates.

## Closure decision

Olivier confirmed complete validation and explicitly authorized closure. Both active gates are PASS, no active requirement has an unaccepted deviation, and no LOT-008 finding remains open.
