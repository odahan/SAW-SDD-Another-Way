# Gates — LOT-008

> Before working on this lot, read the repository root README.md.

Both gates below are active and PASS. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-008-001 — Localization tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Tests cover complete, missing/extra-key, invalid JSON, placeholder loss, unavailable provider, valid/stale cache, English fallback, all quick-translation routing cases (including third/uncertain language), destination-change result supersession for both Replace and Copy, and shortcut defaults/reassignment/conflicts.

Method:
Run dotnet test -m:1 for Core, AI, and Windows keyboard tests; use fake IChatClient results for deterministic routing and supersession cases.

Tested at: 2026-09-28T05:15:30+02:00
Evaluated result: V0.7 candidate, commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `433F4AF73D29EF6E5B8C7E12AD3CE8746E12FB03BC6F50E2852AF0411774C310`.
Result: PASS
Evidence: The recorded deterministic suites passed: Core 59/59, AI 6/6, and Windows 16/16. The English source catalog and `Strings.xaml` key sets were compared exactly (158/158).

### Test history

- 2026-09-28 — Automated regression: `TextAid.Core.Tests` passed (59/59), `TextAid.AI.Tests` passed (6/6), and `TextAid.Platform.Windows.Tests` passed (16/16). The English source catalog and `Strings.xaml` key sets were also compared exactly (158/158). The Core suite proves that a stale generation cannot publish output, so it cannot enable either `Copy` or `Replace`; it also covers unavailable catalog-generation providers, invalid generated catalogs that retain the prior validated cache, and a locked unreadable cache that returns English. The remaining evidence for G-008-001 is the existing binding behavior exercised through the Windows walkthrough in G-008-002.

## G-008-002 — Settings and locale walkthrough

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The six Settings sections work in the dark theme, changes apply safely, progress is visible, and an unavailable translation returns to English. The user validates both default shortcuts, direct `Ctrl+C+T` translation without a prior choice, language direction in both configured directions, a different destination restarting translation, `Replace` and `Copy` availability only for the latest completed result, Copy leaving the source unchanged, and shortcut reassignment and persistence.

Method:
Exercise Settings and language switching on Windows.

Validated at: 2026-09-28T05:28:51+02:00
Validated by: Olivier
Evaluated result: V0.7 candidate, commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `433F4AF73D29EF6E5B8C7E12AD3CE8746E12FB03BC6F50E2852AF0411774C310`.
Comment: Olivier confirmed complete validation of the Settings, localization, quick-translation, latest-result, Copy, and shortcut scenarios specified by this gate, and authorized LOT-008 closure.

### Test history

No prior evaluation.
