# Project history

This record uses concise entries with date, actor, operation, affected artifacts, and outcome. Entries are organized in reverse chronological order by their recorded date; because no time is recorded, the existing relative order is retained within each day. It is not a substitute for `STATUS.md`, `LEDGER.md`, or gate evidence.

## 2026-09-30 — Batched UI translation generation and version 1.2.6

Actor: Olivier and Codex
Operation: Corrected UI translation generation to submit small, individually validated batches. The previous single request exceeded the effective output budget of a default local model, leaving the stale cache in place. The generated cache is replaced only after every batch succeeds.
Affected artifacts: `src/TextAid.App/`, `src/TextAid.Core/`, and `tests/TextAid.Core.Tests/`.
Outcome: Application version increased from 1.2.5 to 1.2.6. All 119 tests passed, and `publish.ps1` produced the Release executable.

## 2026-09-30 — UI locale generation correction and version 1.2.5

Actor: Olivier and Codex
Operation: Corrected the post-generation locale reload to use the language selected for generation, even when the Settings changes have not yet been saved. Added a regression test confirming that generation replaces a stale cache and its source fingerprint.
Affected artifacts: `src/TextAid.App/` and `tests/TextAid.Core.Tests/`.
Outcome: Application version increased from 1.2.4 to 1.2.5. All 118 tests passed, and `publish.ps1` produced the Release executable.

## 2026-09-30 — Code review corrections and version 1.2.4

Actor: Olivier and Codex
Operation: Olivier requested corrections for eight code review findings. Codex invalidated stale results when the input or action changes; required HTTPS for remote External endpoints; applied saved settings even when Windows startup registration fails; staged new DPAPI secrets so a failed configuration write preserves the previous credentials; resolved local settings by stable IDs; restricted action IDs to safe file names; validated connection providers, endpoints, categories, and profile links during configuration loading; and offered a configuration-file repair path when startup loading fails.
Affected artifacts: `src/TextAid.App/`, `src/TextAid.Core/`, `src/TextAid.AI/`, and `tests/TextAid.Core.Tests/`.
Outcome: Application version increased from 1.2.3 to 1.2.4. The complete test suite passed with 117 tests. Interactive Windows and live-provider checks were not run.

## 2026-09-29 — LOT-013 closed with total convergence

Actor: Olivier and Codex
Operation: Codex implemented and published the native MdXaml rendered Markdown preview, its raw/rendered selectors, dark inert rendering safeguards, fallback behavior, and deterministic WPF coverage. Olivier accepted the Windows preview walkthrough and authorized closure after the selector, Markdown-off, cache-deletion, and global English-reset corrections.
Affected artifacts: `src/TextAid.App/`, `src/TextAid.Core/`, `tests/`, `Specs/013-markdown-preview/`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: LOT-013 is Closed with TOTAL convergence on the published 1.1.0 EXE, SHA-256 `F3D9715551624D3A382DD351CFD5C1EF511F3A35BC87479DE2563D344A923E7A`. Both gates are PASS; the separate-machine portability check is deferred under R-012.

## 2026-09-28 — LOT-010 closed with accepted deferred compatibility checks

Actor: Olivier and Codex
Operation: Olivier accepted the deferred VS Code and DPI/multi-monitor checks as N/A for the identified V0.9 candidate and explicitly authorized LOT-010 closure. Codex recorded D-041, finalized the convergence, and retained the deferred work as residual.
Affected artifacts: `LEDGER.md`, `Specs/010-hardening/GATES-010.md`, `Specs/010-hardening/FINDINGS-010.md`, `Specs/010-hardening/CONVERGENCE-010.md`, and `STATUS.md`.
Outcome: G-010-001 and G-010-003 are PASS; G-010-002 is N/A under D-041. LOT-010 closes with PARTIAL convergence on published executable SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`.

## 2026-09-28 — LOT-010 core human validation completed

Actor: Olivier
Operation: Validated the corrected local-model, locale, neutral-language, leading-emoji, invocation, translation, Replace/Copy/Cancel, and privacy/deployment-boundary paths on the published V0.9 candidate.
Affected artifacts: `Specs/010-hardening/GATES-010.md`.
Outcome: G-010-003 is PASS. G-010-002 retains the partial evidence but remains TO TEST for the unrecorded application and display matrix.

## 2026-09-28 — LOT-010 DPI and multi-monitor validation deferred

Actor: Olivier
Operation: Deferred the 100/125/150-percent DPI and multi-monitor portion of the V0.9 compatibility matrix because suitable displays are not currently available.
Affected artifacts: `Specs/010-hardening/GATES-010.md`.
Outcome: The deferred display checks remain visible and are not represented as a passing result; the application-specific compatibility cases also remain to be recorded.

## 2026-09-28 — LOT-010 application compatibility mostly validated

Actor: Olivier
Operation: Confirmed successful application-matrix validation in Visual Studio, Chromium, Word, and Outlook; deferred the VS Code check.
Affected artifacts: `Specs/010-hardening/GATES-010.md`.
Outcome: The application evidence is complete except for VS Code. Along with the deferred display checks, it keeps G-010-002 at TO TEST pending a human decision or later retest.

## 2026-09-28 — LOT-010 final automated candidate prepared

Actor: Codex
Operation: Built, tested, and published the current LOT-010 candidate after the final Humanize prompt adjustment. Rechecked the distributed action directive and the allowed publish-directory contents.
Affected artifacts: `Specs/010-hardening/GATES-010.md` and `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: G-010-001 is PASS on executable SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`, with 92 non-integration tests passing and 0 build warnings/errors. G-010-002 and G-010-003 remain human validation gates.

## 2026-09-28 — LOT-010 Humanize prompt tuned for local generation

Actor: Olivier and Codex
Operation: Olivier tested the first `Humanize` action with qwen3.5:9b. The model normalized punctuation and preserved direct factual prose, but retained the intended targets by substituting another balanced construction and keeping hype or adjective clusters. Codex made the prompt concrete about removing rather than rephrasing these patterns, and reduced its temperature from 0.35 to 0.2 for more stable local execution.
Affected artifacts: `assets/actions/humanize.json`, the initialized distributable `actions/humanize.json`, `tests/TextAid.Core.Tests/DeclarativeActionsTests.cs`, and LOT-010 traceability records.
Outcome: The action remains bounded, fact-preserving, editable, and not framed as detector evasion. A focused local retest of the three original samples is pending.

## 2026-09-28 — LOT-010 Humanize directive made mandatory for local tests

Actor: Olivier and Codex
Operation: The first two qwen3.5:9b follow-up samples were returned unchanged despite containing the targeted patterns. Olivier requested English examples. Codex replaced the optional phrasing with a mandatory rewrite directive and short English examples for contrast, hype, and adjective clusters.
Affected artifacts: `assets/actions/humanize.json`, the initialized distributable `actions/humanize.json`, `tests/TextAid.Core.Tests/DeclarativeActionsTests.cs`, and LOT-010 traceability records.
Outcome: The action now distinguishes an already concise factual input from an input that contains a target pattern, which must be changed. A focused local retest is pending.

## 2026-09-28 — LOT-010 opened; local-model warm-up feedback

Actor: Olivier and Codex
Operation: Olivier opened LOT-010 and added a narrow resilience requirement for local-model cold starts. TextAid now asks OllamaSharp whether the selected This device only model is loaded. If it is not, the existing indeterminate session progress bar remains visible while an empty Ollama generation loads the model with the configured context length; the session states, “Preparing the local model. This can take a moment…”. Loaded models and On-premises or External connections bypass this phase. Warm-up errors remain on the existing provider-failure path.
Affected artifacts: `STATUS.md`, `Specs/010-hardening/`, `src/TextAid.AI/OllamaChatClientFactory.cs`, `src/TextAid.App/App.xaml.cs`, and the English source catalog.
Outcome: The working-tree candidate based on `44d7b65` built with 0 warnings and 0 errors. All 92 non-integration tests passed: 12 AI, 63 Core, and 17 Windows-platform. G-010-001 is PASS; the cold-start UI walkthrough remains part of the human Windows compatibility matrix.

## 2026-09-28 — LOT-010 in-place locale and emoji regressions

Actor: Olivier and Codex
Operation: Olivier validated the local-model cold-start path by stopping Ollama; the next transformation resumed almost immediately. He also reported an unselected neutral output-language item in a still-open French-localized session and omission of a leading emoji by local Rewrite and Correct. Codex refreshed the selected output-language binding after rebuilding localized language options and made every transformation explicitly preserve input emojis, including boundary emojis, unless a declarative action or supplementary user instructions explicitly require otherwise.
Affected artifacts: `Specs/010-hardening/FINDINGS-010.md`, `Specs/010-hardening/GATES-010.md`, `src/TextAid.App/ViewModels/MainViewModel.cs`, and `src/TextAid.App/App.xaml.cs`.
Outcome: F-010-001 has partial human PASS evidence. F-010-002 and F-010-003 are implemented and await their focused Windows retests. The working-tree candidate based on `44d7b65` built with 0 warnings and 0 errors; its 92 non-integration tests passed.

## 2026-09-28 — LOT-010 concise emoji instruction

Actor: Olivier and Codex
Operation: Olivier reported that the local model returned an action-style prompt instead of a transformed result after the first long emoji-preservation instruction. Codex retained the default preservation behavior but reduced the instruction to a short, priority-aware sentence.
Affected artifacts: `Specs/010-hardening/FINDINGS-010.md`, `src/TextAid.App/App.xaml.cs`.
Outcome: The source text remains a distinct MAF user message; the concise wording avoids conflating the default fidelity rule with the action request. Focused local Rewrite and Correct validation is pending.

## 2026-09-28 — LOT-010 unchanged-language preservation

Actor: Olivier and Codex
Operation: Olivier reported that a French Rewrite with the localized `Unchanged` option selected returned English text. Codex added an explicit no-translation instruction for the neutral output-language choice; selected output languages retain their target-language instruction. After Olivier observed that the generic wording was still insufficient specifically for Rewrite, the neutral route was refined to name a confidently detected supported source language explicitly.
Affected artifacts: `Specs/010-hardening/FINDINGS-010.md`, `src/TextAid.App/App.xaml.cs`.
Outcome: The selection's semantics are now enforced at the model boundary. Focused French Rewrite validation is pending.

## 2026-09-28 — LOT-009 closed

Actor: Olivier and Codex
Operation: Olivier confirmed the final automated tests and External-provider walkthrough, including GPT 5.4 long-text Rewrite, UI translation generation, model selection, visible deployment indicator, and local-profile reactivation. Olivier explicitly authorized LOT-009 closure.
Affected artifacts: `Specs/009-remote-provider/GATES-009.md`, `Specs/009-remote-provider/CONVERGENCE-009.md`, `STATUS.md`.
Outcome: G-009-001 AUTO and G-009-002 HUMAN are PASS on V0.8 candidate commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `D257D36FDD8E199F14120E8708438907C1AA982D4D0A68BAC494256F226D5B0C`. LOT-009 is Closed with TOTAL convergence; LOT-010 is the next planned lot.

## 2026-09-28 — LOT-008 closed and LOT-009 opened

Actor: Olivier and Codex
Operation: Olivier confirmed complete validation of the V0.7 Settings, localization, direct-translation, result-safety, Copy, and shortcut walkthrough, explicitly authorized TOTAL closure of LOT-008, and authorized the opening of LOT-009 whose implementation work had already begun.
Affected artifacts: `Specs/008-settings-localization/GATES-008.md`, `Specs/008-settings-localization/CONVERGENCE-008.md`, `STATUS.md`.
Outcome: G-008-001 AUTO and G-008-002 HUMAN are PASS on V0.7 candidate commit `c61d5777f14a0baf5f841311ed8e5e79affc8cf1`, published as `TextAid.exe` SHA-256 `433F4AF73D29EF6E5B8C7E12AD3CE8746E12FB03BC6F50E2852AF0411774C310`. LOT-008 is Closed with TOTAL convergence; LOT-009 is In-progress.

## 2026-09-28 — LOT-011 opened

Actor: Olivier and Codex
Operation: Olivier authorized the start of LOT-011. Codex changed its authoritative status from Planned to In-progress after confirming that LOT-010 is closed and that no other lot occupies the active-work slot.
Affected artifacts: `STATUS.md`, `HISTORY.md`.
Outcome: LOT-011 is the active lot. Its current result includes the tested per-user Windows startup option; release evidence and human V1 acceptance remain pending.

## 2026-09-28 — LOT-013 planned for rendered Markdown preview

Actor: Olivier and Codex
Operation: Olivier requested a post-V1 rendered Markdown preview and required a package decision before specification. Codex compared WPF Markdown, HTML, and RTF routes, then recorded D-042 and created LOT-013 around native MdXaml FlowDocument rendering.
Affected artifacts: `LEDGER.md`, `Specs/013-markdown-preview/`, `STATUS.md`, `HISTORY.md`.
Outcome: LOT-013 is Planned after LOT-012. It preserves raw Markdown for Copy and Replace, excludes HTML/RTF rendering, and requires a dark, inert WPF preview.

## 2026-09-28 — LOT-011 V1 candidate accepted

Actor: Olivier and Codex
Operation: Codex published the V1 candidate, recorded the deterministic build/test/startup-registration evidence, and Olivier accepted the proportionate release qualification based on validation accumulated during development.
Affected artifacts: `publish.ps1` output, `Specs/011-v1-release/GATES-011.md`, `Specs/011-v1-release/CONVERGENCE-011.md`, `PORTABILITY-CHECKS.md`, `LEDGER.md`, `STATUS.md`, `HISTORY.md`.
Outcome: Both LOT-011 gates are PASS for EXE SHA-256 `48BDA1471C6971242A60FB2EA1D1DE04AF930D5A2CFAC7A4E9733D70C3D67F8E`; the separate-machine check remains deferred and visible.

## 2026-09-28 — LOT-012 opened

Actor: Olivier and Codex
Operation: Olivier authorized implementation of LOT-012 after LOT-011 closure. Codex changed its authoritative status from Planned to In-progress after confirming that LOT-011 is closed and that no other lot occupies the active-work slot.
Affected artifacts: `STATUS.md`, `HISTORY.md`.
Outcome: LOT-012 is the active lot. Its current scope is the personal translation-correction layer, portable language-pack import/export validation, translation-origin visibility, and the documented community-pack layout; no gate result is yet claimed.

## 2026-09-28 — LOT-012 correction and pack workflow implemented

Actor: Codex
Operation: Implemented isolated per-language personal corrections, restoration to a suggested value, validated portable pack import/export, persisted provenance, active-origin display, the themed translation-review editor, and a repository-ready community-pack document. Added deterministic Core coverage for correction precedence, restoration, compatible import/export, fingerprint mismatch, placeholder loss, invalid JSON, and cache preservation after rejected packs.
Affected artifacts: `src/TextAid.Core/`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`, `docs/language-packs.md`, `Specs/012-language-corrections-packs/`.
Outcome: G-012-001 is PASS after `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false` completed with 100 tests passing. G-012-002 remains TO TEST pending the required human Windows walkthrough.

## 2026-09-28 — Application version raised to 1.1.0

Actor: Olivier and Codex
Operation: Olivier requested the next application version. Codex changed the application version to `1.1.0` and published the canonical self-contained single-file Release executable.
Affected artifacts: `src/TextAid.App/TextAid.App.csproj`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: The published executable reports ProductVersion `1.1.0` and FileVersion `1.1.0.0`; SHA-256 `92EFEE0C75DE75015B63DA8AB833A8B95DD74C2E1F43B10F641F4295BAA7C96E`.

## 2026-09-28 — Translation-review persistence and dark theme corrected

Actor: Olivier and Codex
Operation: Olivier reported that unsaved review-grid corrections did not take effect when the window closed and that the editor used the system light DataGrid theme. Codex persists all pending valid corrections during window closure, keeps the window open for invalid values, reapplies the active locale after persistence, and adds explicit dark editor, grid, header, cell, and selection styling.
Affected artifacts: `src/TextAid.App/ViewModels/TranslationReviewViewModel.cs`, `src/TextAid.App/Views/TranslationReviewWindow.xaml`, `src/TextAid.App/Views/TranslationReviewWindow.xaml.cs`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false` passed with 100 tests. The 1.1.0 executable was republished for the required human visual verification.

## 2026-09-28 — LOT-012 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier confirmed that G-012-001 and G-012-002 had been verified successfully and authorized closure. Codex recorded the human validation, finalized the LOT-012 convergence, and closed the lot.
Affected artifacts: `Specs/012-language-corrections-packs/GATES-012.md`, `Specs/012-language-corrections-packs/FINDINGS-012.md`, `Specs/012-language-corrections-packs/CONVERGENCE-012.md`, `STATUS.md`, `HISTORY.md`.
Outcome: LOT-012 is Closed with TOTAL convergence on the published 1.1.0 EXE, SHA-256 `A8E313A196A4B09AE6990A7A59AF83AD9E0D8C87F87944DC0329B59FEE1E6C66`. Both gates are PASS; LOT-013 remains the next planned lot.

## 2026-09-27 — Locale-cache correction foundation and planned language packs

Actor: Olivier and Codex
Operation: Olivier extended active LOT-008 with a durable, non-destructive locale-cache foundation and directed creation of a later numeric specification for user corrections and exchangeable translated language packs. Codex recorded D-031, added REQ-008-013, and created planned LOT-012.
Affected artifacts: `LEDGER.md`, `STATUS.md`, `Specs/008-settings-localization/SPEC-008.md`, `Specs/012-language-corrections-packs/`, `src/TextAid.Core/LocalizationCatalog.cs`, `tests/TextAid.Core.Tests/LocalizationCatalogTests.cs`.
Outcome: LOT-008 remains limited to validated caches, English fallback, source fingerprinting, and future-compatible storage boundaries. Editing, import/export, and GitHub/community-pack workflows are explicitly deferred to post-V1 LOT-012.

## 2026-09-27 — Source-first localization rule for remaining work

Actor: Olivier and Codex
Operation: Olivier directed that all remaining lots reuse an existing symbolic English catalog key for visible text, or add a new English source entry before a view/code reference is added. Codex recorded D-033 and active R-031, then added the maintenance warning to LOT-008 through LOT-012.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/008-settings-localization/SPEC-008.md` through `Specs/012-language-corrections-packs/SPEC-012.md`, `HISTORY.md`.
Outcome: Source-catalog changes now explicitly make earlier-fingerprint translated caches stale, with safe English fallback until explicit regeneration or compatible replacement.

## 2026-09-27 — Optional Windows startup assigned to the final V1 lot

Actor: Olivier and Codex
Operation: Olivier assigned an optional per-user Windows-startup switch to final LOT-011 without creating another lot. Codex recorded D-035 and REQ-011-003.
Affected artifacts: `LEDGER.md`, `Specs/011-v1-release/SPEC-011.md`, `HISTORY.md`.
Outcome: LOT-008 remains free of Windows startup registration; LOT-011 will implement and validate the opt-in behavior.

## 2026-09-27 — LOT-006 opened: connections, profiles, and protected secrets

Actor: Codex
Operation: Olivier explicitly opened LOT-006. TextAid now persists typed This device only, On-premises, and External connection definitions with independent Active states and action-selected model profiles. The resolver applies visible automatic downgrade for absent or inactive categories and error-then-user-confirmed downgrade for invalid configured connections or provider failures. Settings accepts optional network/cloud API keys through password fields and stores supplied values separately under the user's TextAid application-data directory with Windows DPAPI `CurrentUser`; `config.json` retains only opaque references. The configuration migrates existing V1 schema-1 local settings by adding disabled network and External definitions without removing the existing local choice.
Affected artifacts: `LEDGER.md`, `RULES.md`, `STATUS.md`, `Specs/006-connections-profiles/`, `src/TextAid.Core/`, `src/TextAid.AI/`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`.
Outcome: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors. `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 15 Core, and 14 Windows tests. The human profile-selection gate remains TO TEST.

## 2026-09-27 — LOT-006 human-gate publication sequence clarified

Actor: Codex
Operation: Olivier identified that withholding an EXE until G-006-002 passes makes the required EXE walkthrough impossible. The gate procedure now requires publishing an identifiable Release candidate before the human test, while keeping candidate publication separate from gate pass and lot closure.
Affected artifacts: `Specs/006-connections-profiles/GATES-006.md`, `HISTORY.md`.
Outcome: Root `publish.ps1` produced the candidate at `src/TextAid.App/bin/Publish/TextAid.exe`: 178,433,455 bytes, SHA-256 `C7AFF2761FA016E6FBAD07ECB72FFF95269660093C057771B4124DB5DC074612`. It is available for Olivier's model-discovery and transformation walkthrough without claiming G-006-002 or lot closure.

## 2026-09-27 — LOT-006 Settings connection tabs corrected

Actor: Codex
Operation: Replaced the vertically concatenated connection controls with separate This device only, On-premises, and External Settings tabs. Added the shared dark-theme `PasswordBox` template for API-key fields. Recorded Olivier's successful local Ollama discovery and transformation walkthrough as G-006-002 PASS.
Affected artifacts: `src/TextAid.App/SettingsWindow.xaml`, `src/TextAid.App/Themes/Controls.xaml`, `Specs/006-connections-profiles/GATES-006.md`.
Outcome: Build completed with 0 warnings and 0 errors; 35 tests pass. Root `publish.ps1` produced a visual-review candidate at `src/TextAid.App/bin/Publish/TextAid.exe`: 178,433,455 bytes, SHA-256 `513D1FA6F513435EBE801E5890EABFC6E91C17536779593FB1209207ED70D99E`.

## 2026-09-27 — LOT-006 configurable action presets

Actor: Codex
Operation: Added four persisted one-click action presets to the normal session, defaulting to Correct, Rewrite, Summarize, and Translate. Each preset has an adjacent pencil button that opens the current action list and saves the selected replacement. The full action combo remains available; no use tracking, frequency ordering, or telemetry was added.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/006-connections-profiles/SPEC-006.md`, `src/TextAid.Core/UserConfiguration.cs`, `src/TextAid.App/MainWindow.xaml`, `src/TextAid.App/MainWindow.xaml.cs`, `src/TextAid.App/MainViewModel.cs`.
Outcome: Build completed with 0 warnings and 0 errors; 35 tests pass. A fresh Release candidate is required for human visual and interaction review.

## 2026-09-27 — LOT-006 accepted and closed

Actor: Olivier and Codex
Operation: Olivier confirmed the final LOT-006 candidate works and explicitly accepted the lot. The reported inconsistent action output-language behavior was recorded as F-006-002 and deferred to LOT-008, which owns language preferences, output-language selection, and quick translation.
Affected artifacts: `Specs/006-connections-profiles/GATES-006.md`, `Specs/006-connections-profiles/FINDINGS-006.md`, `Specs/006-connections-profiles/CONVERGENCE-006.md`, `LEDGER.md`, `STATUS.md`, `HISTORY.md`.
Outcome: G-006-001 AUTO and G-006-002 HUMAN are PASS. LOT-006 closed with TOTAL convergence on published candidate SHA-256 `965D3EECCC4B1A77508AE5849A325F66CFC7141EAB82A2E7D7C4CE6802F6CABA`.

## 2026-09-27 — LOT-006 contained reopening reclosed

Actor: Olivier and Codex
Operation: Olivier confirmed that the contained reopening work is complete, including the transform-session branding, status guidance, and shared-menu correction. Codex reran the deterministic build and test suite, recorded Olivier's renewed human validation, and restored LOT-006 to Closed.
Affected artifacts: `Specs/006-connections-profiles/GATES-006.md`, `Specs/006-connections-profiles/CONVERGENCE-006.md`, `STATUS.md`, `HISTORY.md`.
Outcome: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 6 AI, 15 Core, and 14 Windows tests. Both LOT-006 gates remain PASS, and Olivier authorized reclosure.

## 2026-09-27 — LOT-007 privacy and debug candidate prepared

Actor: Olivier and Codex
Operation: Olivier started LOT-007 and clarified that recoverable failures should use a short, model-generated suggestion when an eligible configured Ollama model is available, while always retaining deterministic recovery guidance. Codex added opt-in session logging with a privacy-first metadata boundary, debug Settings controls, explicit error mapping, and deterministic privacy tests.
Affected artifacts: `STATUS.md`, `Specs/007-privacy-debug/GATES-007.md`, `src/TextAid.Core/`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`.
Outcome: The automatic privacy gate passed after a zero-warning build and 50 passing tests. Root `publish.ps1` produced `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `996944993ED48AB158C3393E609B5A5EBB4976CDD8365B4212FB42E349D294A1`. G-007-002 remains TO TEST pending Olivier's visual privacy walkthrough.

## 2026-09-27 — Sole active configuration resolves every action

Actor: Olivier and Codex
Operation: Olivier clarified that an intentional one-provider setup resolves every action to its sole active valid eligible configuration, visibly naming any category promotion or downgrade. Multiple eligible configurations remain an explicit action-profile choice, and runtime failures retain the existing user-controlled downward fallback. Codex recorded D-029, revised R-027 and R-029, and added resolver coverage.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/007-privacy-debug/`, `src/TextAid.Core/ProfileResolver.cs`, `tests/TextAid.Core.Tests/`.
Outcome: Build completed with 0 warnings and 0 errors; 6 AI, 32 Core, and 14 Windows tests passed. Root `publish.ps1` produced the superseding LOT-007 candidate at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `83A93C84132E5778A8480FD8A4B22BE75DBBD46D985DA1DD69EEC064794C7D05`.

## 2026-09-27 — LOT-007 diagnostic trace made actionable

Actor: Olivier and Codex
Operation: Olivier confirmed Debug-file creation and persistence, then reported that an all-connections-inactive failure was not identifiable in the trace and requested direct folder access. Codex added categorized user-facing failure events, exception type/HRESULT/protocol/native-code/stack diagnostics, safe inner-exception structure, and an Open debug-log folder command. Untrusted exception messages and data remain excluded to prevent reflected secret or user-text logging.
Affected artifacts: `Specs/007-privacy-debug/`, `src/TextAid.Core/DebugSessionLog.cs`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`.
Outcome: Build completed with 0 warnings and 0 errors; 6 AI, 32 Core, and 14 Windows tests passed. Root `publish.ps1` produced the superseding LOT-007 candidate at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `7E9D8BDDB0AEC60BB4D87F49275C30ED53A003812F3B116B4AA38C4F2C7134D9`.

## 2026-09-27 — User-controlled Full log added

Actor: Olivier and Codex
Operation: Olivier decided that the persistent safe Debug mode needs a separately enabled persistent Full log for difficult diagnostics. Codex recorded D-030, added the conditional Full log setting and red status indicator, expanded the local log to include input, prompt, output, and exception message diagnostics only in that mode, and retained credential redaction in every mode. The Debug page explains that logs are never transmitted automatically and that the user may obfuscate passages before manually sharing one.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/007-privacy-debug/`, `src/TextAid.Core/`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`.
Outcome: Build completed with 0 warnings and 0 errors; 6 AI, 33 Core, and 14 Windows tests passed. Root `publish.ps1` produced the superseding LOT-007 candidate at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `1FCC13BC0B72CF8771A75EC9F23D909BBC47FF3F4B427737E783193056800E87`.

## 2026-09-27 — Full log warning made persistent in the main session

Actor: Olivier and Codex
Operation: Olivier requested that the Full log warning remain visible in the bottom-left corner of the main session instead of only on the Debug Settings page. Codex added the red indicator and live synchronization with the Debug/Full log editor; saving applies the persisted mode and cancelling restores the saved state.
Affected artifacts: `src/TextAid.App/MainWindow.xaml`, `src/TextAid.App/MainWindow.xaml.cs`, `src/TextAid.App/MainViewModel.cs`, `src/TextAid.App/SettingsWindow.xaml.cs`, `src/TextAid.App/App.xaml.cs`.
Outcome: Build completed with 0 warnings and 0 errors; 6 AI, 33 Core, and 14 Windows tests passed. Root `publish.ps1` produced the superseding LOT-007 candidate at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `2EBBCDCD4A554FAA8A6EAA0B88174315558370D8EAF4039AD05BBF0ED6FE989B`.

## 2026-09-27 — LOT-007 human validation completed

Actor: Olivier and Codex
Operation: Olivier confirmed that all LOT-007 behavior passes on the current published candidate, including safe Debug, persistent Full log, credential redaction, categorized diagnostics, folder access, and the main-session indicator synchronization.
Affected artifacts: `Specs/007-privacy-debug/GATES-007.md`, `Specs/007-privacy-debug/CONVERGENCE-007.md`, `STATUS.md`, `HISTORY.md`.
Outcome: Both active LOT-007 gates are PASS. TOTAL convergence is prepared and awaits Olivier's explicit closure decision.

## 2026-09-27 — LOT-007 accepted and closed

Actor: Olivier and Codex
Operation: Olivier explicitly accepted the prepared LOT-007 TOTAL convergence and authorized closure.
Affected artifacts: `Specs/007-privacy-debug/CONVERGENCE-007.md`, `STATUS.md`, `HISTORY.md`.
Outcome: LOT-007 is Closed. G-007-001 AUTO and G-007-002 HUMAN are PASS; F-007-001 is resolved.

## 2026-09-27 — LOT-004 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier explicitly validated and accepted LOT-004.
Affected artifacts: `Specs/004-ollama-maf/GATES-004.md`, `Specs/004-ollama-maf/CONVERGENCE-004.md`, `STATUS.md`, `HISTORY.md`.
Outcome: The V0.3 EXE SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72` has both active gates PASS. No LOT-004 finding was recorded. LOT-004 is Closed with TOTAL convergence; the separate clean-machine check remains deferred under R-012.

## 2026-09-27 — Declarative action storage and editing refined

Actor: Olivier and Codex
Operation: Olivier clarified that action JSON is visible unversioned user data beside the executable, that generic template variables are not useful in V0.4, and that editing belongs in a dedicated Actions page accessible from application menus. Codex recorded D-015, superseded R-019 with R-022, added R-023, and refined planned LOT-005, LOT-006, and LOT-008 requirements and LOT-005 gates.
Affected artifacts: `LEDGER.md`, `RULES.md`, `PROJECT.md`, `STATUS.md`, `Specs/005-declarative-actions/`, `Specs/006-connections-profiles/SPEC-006.md`, `Specs/008-settings-localization/SPEC-008.md`.
Outcome: No lot state, implementation, executable, or gate evaluation changed. LOT-005 remains Planned and awaits a separate human start decision.

## 2026-09-27 — Immediate translation action reserved

Actor: Olivier and Codex
Operation: Olivier clarified that the direct Translate shortcut must retain fixed behavior. Codex recorded D-016 and R-024, making the built-in declarative Translate action protected while retaining the shared action loading and execution path.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/005-declarative-actions/SPEC-005.md`, `Specs/008-settings-localization/SPEC-008.md`.
Outcome: Other built-in and user actions remain editable. No implementation, lot state, executable, or gate evaluation changed.

## 2026-09-27 — LOT-005 started

Actor: Olivier and Codex
Operation: Olivier explicitly authorized implementation of LOT-005 after the LOT-004 closure and the recorded action-model refinements.
Affected artifacts: `STATUS.md`, `HISTORY.md`.
Outcome: LOT-005 moved from Planned to In-progress. Its active work is the visible unversioned action store, declarative action execution, and normal-session action choice; no gate result is yet claimed.

## 2026-09-27 — Built-in email reply action added to LOT-005

Actor: Olivier and Codex
Operation: Olivier requested a built-in Answer this mail action that requires supplementary user context. Codex recorded D-017 and updated the active LOT-005 specification and gate.
Affected artifacts: `LEDGER.md`, `Specs/005-declarative-actions/SPEC-005.md`, `Specs/005-declarative-actions/GATES-005.md`, `HISTORY.md`.
Outcome: The active lot now supplies nine built-in actions. No gate is evaluated by this planning update.

## 2026-09-27 — LOT-005 declarative-actions candidate published

Actor: Codex
Operation: Implemented the unversioned action loader, validator, text-only template renderer, nine built-in actions, action selector, per-invocation Instructions dialog, action request snapshot, and protected declarative Translate action. Built and tested the solution, then ran the canonical publisher.
Affected artifacts: `src/TextAid.Core/`, `src/TextAid.App/`, `tests/TextAid.Core.Tests/`, `Specs/005-declarative-actions/GATES-005.md`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: G-005-001 is PASS. The only published V0.4 executable is 178,376,111 bytes, SHA-256 `461B21E646B03E9B5D3ABFE5900819E095BEC86B6D8FD28AD7053C77478B8F8A`. G-005-002 remains TO TEST pending Olivier's running-app extensibility walkthrough.

## 2026-09-27 — Single-EXE action initialization restored

Actor: Olivier and Codex
Operation: Olivier chose a single EXE with embedded default actions instead of publishing action files. He further chose a silent persisted fallback beside the settings file when the executable directory cannot accept action storage. Codex recorded D-019/R-026, embedded the action JSON files, and aligned the future Actions-page folder command.
Affected artifacts: `LEDGER.md`, `RULES.md`, `PROJECT.md`, `publish.ps1`, `src/TextAid.Core/`, `src/TextAid.App/`, `Specs/008-settings-localization/SPEC-008.md`, `Specs/010-hardening/SPEC-010.md`, `Specs/011-v1-release/`.
Outcome: The earlier direct-deployment decision is superseded before any final V0.4 publication under it. A new V0.4 EXE must be built and published through `publish.ps1`.

## 2026-09-27 — Combo interaction and accent contrast corrected

Actor: Olivier and Codex
Operation: Olivier reported a light combo scrollbar, a click target limited to the arrow, and unreadable light-button text. Codex made the full combo surface toggle its popup, added dark scrollbar templates, and recorded D-020 while applying explicit black text to every shared accent button.
Affected artifacts: `LEDGER.md`, `HISTORY.md`, `src/TextAid.App/Themes/Colors.xaml`, `src/TextAid.App/Themes/Controls.xaml`.
Outcome: The shared visual system is corrected; the updated release must be republished for desktop validation.

## 2026-09-27 — New session reset added

Actor: Olivier and Codex
Operation: Olivier requested an in-window reset for a separate manual transformation. Codex recorded D-021 and added a New command that clears the session while removing the original replacement target.
Affected artifacts: `LEDGER.md`, `HISTORY.md`, `Specs/005-declarative-actions/SPEC-005.md`, `src/TextAid.Core/InvocationSession.cs`, `src/TextAid.App/`.
Outcome: A New session is safe for manual input and cannot Replace into the source captured by the preceding session.

## 2026-09-27 — LOT-005 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier confirmed the completed action workflow and visual corrections, then authorized LOT-005 closure. Codex recorded G-005-002 PASS and finalized TOTAL convergence.
Affected artifacts: `Specs/005-declarative-actions/GATES-005.md`, `Specs/005-declarative-actions/CONVERGENCE-005.md`, `STATUS.md`, `HISTORY.md`.
Outcome: LOT-005 is Closed. Both active gates PASS; LOT-006 remains Planned.

## 2026-09-26 — LOT-001 visual candidate prepared

Actor: Codex
Operation: Started LOT-001 on the user's instruction; documented palette, typography, dimensions, control states, and native dark chrome; prepared a reference screen and application icon; evaluated AUTO gate G-001-002.
Affected artifacts: `STATUS.md`, `Specs/001-visual-baseline/`, `assets/TextAid-icon.svg`, `assets/TextAid-icon.png`, `assets/TextAid.ico`, `assets/render_icon.py`.
Outcome: Candidate 1 is available for review. G-001-002 is PASS; G-001-001 awaits named human validation. LOT-001 remains In-progress and no closure is claimed.

## 2026-09-26 — LOT-001 brand asset correction pending

Actor: User and Codex
Operation: The user reviewed candidate 1, accepted the rest of the visual baseline, and reported anomalies in the logo. The user will revise the SVG before PNG and ICO regeneration.
Affected artifacts: `Specs/001-visual-baseline/FINDINGS-001.md`, `Specs/001-visual-baseline/GATES-001.md`, `Specs/001-visual-baseline/CONVERGENCE-001.md`, `STATUS.md`.
Outcome: G-001-001 remains TO TEST. Candidate 1's AUTO evaluation remains recorded; the next result will be reevaluated after asset changes. LOT-001 remains In-progress.

## 2026-09-26 — LOT-001 icon regenerated from corrected source

Actor: User and Codex
Operation: The user corrected `TextAid-icon.svg` and `TextAid-icon.png`; Codex changed the icon exporter to preserve those sources, regenerated `TextAid.ico`, and reevaluated G-001-002.
Affected artifacts: `assets/TextAid-icon.svg`, `assets/TextAid-icon.png`, `assets/TextAid.ico`, `assets/render_icon.py`, `Specs/001-visual-baseline/FINDINGS-001.md`, `Specs/001-visual-baseline/GATES-001.md`, `Specs/001-visual-baseline/CONVERGENCE-001.md`, `STATUS.md`.
Outcome: Candidate 2 is available. The PNG checksum remained unchanged during ICO generation; G-001-002 is PASS on candidate 2. G-001-001 awaits human validation, and LOT-001 remains In-progress.

## 2026-09-26 — LOT-001 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier accepted candidate 2 and authorized lot closure; Codex recorded G-001-001 PASS, confirmed G-001-002 PASS and terminal findings, and finalized `CONVERGENCE-001.md`.
Affected artifacts: `Specs/001-visual-baseline/GATES-001.md`, `Specs/001-visual-baseline/FINDINGS-001.md`, `Specs/001-visual-baseline/CONVERGENCE-001.md`, `STATUS.md`.
Outcome: LOT-001 closed with TOTAL convergence. LOT-002 remains Planned and awaits a separate human start decision.

## 2026-09-26 — LOT-002 V0.1 candidate prepared

Actor: User and Codex
Operation: The user instructed Codex to perform the next lot. Codex started LOT-002, created the .NET 10 solution and project boundaries, implemented the Windows resident shell and dark WPF views, added deterministic keyboard tests, built the solution, and published a self-contained win-x64 single executable.
Affected artifacts: `STATUS.md`, `Specs/002-windows-shell/`, `TextAid.sln`, `Directory.Build.props`, `src/`, `tests/`, `tools/`, `.gitignore`, `artifacts/publish-v01-final/TextAid.exe`.
Outcome: G-002-001 and G-002-002 are PASS. The final EXE starts resident and creates user configuration in an authorized Windows run. G-002-003 remains TO TEST pending Olivier's desktop walkthrough; LOT-002 remains In-progress and no closure is claimed.

## 2026-09-26 — D-001 canonical publication applied

Actor: Olivier and Codex
Operation: Olivier decided that all future final EXEs belong in `src/TextAid.App/bin/Publish/` and requested a root `publish.ps1`. Codex recorded D-001 and R-011, added REQ-002-008 and G-002-004, configured the Release publish directory, and created and ran the script twice. G-002-001's previous evaluation was preserved before revalidation.
Affected artifacts: `LEDGER.md`, `RULES.md`, `README.md`, `Specs/002-windows-shell/SPEC-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `src/TextAid.App/TextAid.App.csproj`, `publish.ps1`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: The canonical Publish directory contains only `TextAid.exe`; G-002-001 and G-002-004 PASS on that result. G-002-002 retains its PASS after impact review. G-002-003 remains TO TEST and LOT-002 remains In-progress.

## 2026-09-26 — D-001 aligned with planned lots

Actor: Codex
Operation: Updated the dependency sections of planned LOT-003 through LOT-011 to include new global rule R-011, preserving their existing planned requirements and gates.
Affected artifacts: `Specs/003-safe-accept/SPEC-003.md` through `Specs/011-v1-release/SPEC-011.md`.
Outcome: Later lots explicitly inherit the canonical Release publish location decided by Olivier in D-001.

## 2026-09-26 — NuGet sandbox procedure recorded

Actor: Olivier and Codex
Operation: At Olivier's request, Codex investigated recurring NuGet lock errors. The reported lock file was absent, normal-access restore succeeded, and the restricted-workspace restore, build, and tests succeeded using a project-local `NUGET_SCRATCH`. Codex documented that procedure for future work.
Affected artifacts: `AGENTS.md`, `README.md`, `Specs/002-windows-shell/FINDINGS-002.md`, `STATUS.md`.
Outcome: The working restore/build/test sequence is verified, including seven passing keyboard tests. The issue is restricted cache access in the sandbox; no product result or gate condition changed.

## 2026-09-26 — LOT-002 desktop validation corrections

Actor: Olivier and Codex
Operation: Olivier reported white tray separator gutters, a white About window, and no visible response to Ctrl+C+C. Codex preserved his failed evaluation, corrected the tray templates and explicit window backgrounds, tracked Ctrl transitions in the hook, and fixed the read-only session text binding that prevented the window from opening. The clipboard reader now waits for Unicode text during its bounded retries, and unexpected capture failures display tray feedback.
Affected artifacts: `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `src/TextAid.App/`, `src/TextAid.Platform.Windows/`, `tests/TextAid.Platform.Windows.Tests/`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: The solution builds with zero warnings/errors, nine keyboard tests pass, and `publish.ps1` leaves one corrected EXE (SHA-256 `61823D3AE5797606B356CB781490F532D8FC2FCB3807A3F96D6DD93102B453F0`). Render probes show dark tray and About surfaces; a Windows launch plus synthetic Ctrl+C+C opened a visible session. AUTO gates G-002-001, G-002-002, and G-002-004 are PASS. G-002-003 is TO TEST pending Olivier's complete walkthrough; LOT-002 stays In-progress.

## 2026-09-26 — LOT-002 corrected candidate partly validated

Actor: Olivier and Codex
Operation: Olivier validated the corrected tray menu, screens and theme, ordinary Ctrl+C, the Ctrl+C+C invocation, and the selected text displayed in TextAid. Codex recorded that human evidence against the corrected published EXE and updated the three reported findings.
Affected artifacts: `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `STATUS.md`.
Outcome: F-002-004 through F-002-006 are confirmed corrected by Olivier. The full G-002-003 walkthrough remains TO TEST for its other stated conditions; LOT-002 remains In-progress. No closure decision was made.

## 2026-09-26 — LOT-002 tray and About validation continued

Actor: Olivier and Codex
Operation: Olivier confirmed tray Enable/Disable and Exit, successful launch and stop of the EXE on his current Windows machine, and the About details except an unwanted version suffix. He stated that a second Windows x64 machine is not currently available for the standalone distribution test. Codex identified the suffix as .NET Git metadata in the assembly informational version, changed About to display only the product version, and republished the canonical EXE.
Affected artifacts: `src/TextAid.App/AboutWindow.xaml.cs`, `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: The solution builds without warnings/errors; `publish.ps1` leaves one EXE with SHA-256 `59204A2BCC32D46C7E37742FB818CA6FE3E3A20BC7641D4EC3B574001D224D0D`. The earlier keyboard test PASS remains valid because its code did not change. The full HUMAN gate G-002-003 remains TO TEST for the updated About display and outstanding walkthrough checks, including clean-machine distribution. LOT-002 remains In-progress.

## 2026-09-26 — LOT-002 About version display validated

Actor: Olivier and Codex
Operation: Olivier confirmed that the corrected About version display is right on the current published EXE. Codex recorded this validation in F-002-007 and G-002-003.
Affected artifacts: `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `STATUS.md`.
Outcome: The About version correction is accepted. G-002-003 remains TO TEST for other walkthrough conditions, including the deferred second-machine distribution check; LOT-002 remains In-progress.

## 2026-09-26 — D-002 separate-machine check made nonblocking

Actor: Olivier and Codex
Operation: Olivier decided that testing each final EXE on a separate clean Windows x64 machine remains a recurring verification but its temporary unavailability cannot alone block lot closure. Codex recorded D-002, added R-012 and `PORTABILITY-CHECKS.md`, preserved the former G-002-003 condition and method, clarified its active condition, updated the walkthrough, and applied the rule to planned LOT-003 through LOT-011.
Affected artifacts: `LEDGER.md`, `RULES.md`, `README.md`, `PORTABILITY-CHECKS.md`, `Specs/002-windows-shell/SPEC-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `Specs/003-safe-accept/SPEC-003.md` through `Specs/011-v1-release/SPEC-011.md`, `STATUS.md`.
Outcome: The current EXE's separate-machine check is DEFERRED, not cancelled. G-002-001, G-002-002, and G-002-004 retain PASS after impact review; G-002-003 stays TO TEST for current-machine walkthrough items that Olivier has not explicitly confirmed. No binary changed and LOT-002 remains In-progress.

## 2026-09-26 — LOT-002 instance and placement corrections

Actor: Olivier and Codex
Operation: Olivier reported that the session appeared in the upper-left area, repeated launches created multiple tray instances, and Ctrl+C+C later stopped responding, preventing Cancel/close testing. Codex recorded this failed walkthrough, added a named mutex before hook and tray initialization, reapplied placement after WPF window loading, rebuilt and republished the EXE, and ran an interactive Windows probe on the second monitor.
Affected artifacts: `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainWindow.xaml.cs`, `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `Specs/002-windows-shell/evidence/shell-integration-corrected.txt`, `PORTABILITY-CHECKS.md`, `STATUS.md`, `src/TextAid.App/bin/Publish/TextAid.exe`.
Outcome: The build passed with zero warnings/errors and nine keyboard tests passed. `publish.ps1` left one EXE, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`. The probe showed a second process exiting, one session centered with zero offset in the second monitor's work area, no duplicate session, successful window close, and a new session after retriggering. AUTO gates G-002-001, G-002-002, and G-002-004 are PASS; HUMAN G-002-003 is TO TEST on this candidate. The separate-machine portability check remains deferred under R-012.

## 2026-09-26 — D-003 no-selection invocation preserved

Actor: Olivier and Codex
Operation: Olivier validated that Ctrl+C+C opens the current EXE's session without selected text and that Cancel and the Windows close button close the window. He decided that no-selection invocation must remain available for future direct text entry. Codex recorded D-003, added R-013, updated the LOT-002 walkthrough and validation evidence, and applied the rule to planned LOT-003 through LOT-011.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/002-windows-shell/SPEC-002.md`, `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `Specs/003-safe-accept/SPEC-003.md` through `Specs/011-v1-release/SPEC-011.md`, `STATUS.md`.
Outcome: The current V0.1 EXE is unchanged; it continues to open on Ctrl+C+C without a selection. Manual input is a possible later workflow, not a V0.1 feature. The existing AUTO gate results remain valid. G-002-003 stays TO TEST pending Olivier's confirmation of placement, instance handling, and window constraints on the current EXE.

## 2026-09-26 — LOT-002 prepared for closure

Actor: Olivier and Codex
Operation: Olivier confirmed the current candidate's centering and second-instance tests. Codex recorded G-002-003 HUMAN PASS, confirmed the other three AUTO gates remain valid on the same EXE, reviewed all eight active requirements and ten terminal findings, and prepared `CONVERGENCE-002.md` as a TOTAL closure proposal.
Affected artifacts: `Specs/002-windows-shell/GATES-002.md`, `Specs/002-windows-shell/FINDINGS-002.md`, `Specs/002-windows-shell/WALKTHROUGH-002.md`, `Specs/002-windows-shell/CONVERGENCE-002.md`, `STATUS.md`.
Outcome: All four active gates are PASS for the V0.1 EXE, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`. No finding remains OPEN. The separate-machine check stays DEFERRED under D-002/R-012 and does not block closure. LOT-002 moves to Ready-to-close and awaits Olivier's explicit acceptance of the proposed convergence and closure.

## 2026-09-26 — LOT-002 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier explicitly accepted closure of LOT-002. Codex finalized `CONVERGENCE-002.md` for the identified V0.1 EXE, confirmed all four gates PASS and all ten findings terminal, and moved the lot from Ready-to-close to Closed.
Affected artifacts: `Specs/002-windows-shell/CONVERGENCE-002.md`, `STATUS.md`.
Outcome: LOT-002 is Closed with TOTAL convergence. The separate-machine Windows x64 check remains DEFERRED in `PORTABILITY-CHECKS.md` under D-002/R-012; it was neither performed nor cancelled. LOT-003 remains Planned until a separate human start decision.

## 2026-09-26 — Future quick translation and configurable shortcuts specified

Actor: Olivier and Codex
Operation: After LOT-002 closure, Olivier specified a direct translation path on `Ctrl+C+T`, automatic target selection from two language preferences, destination changes that rerun translation, safe replacement availability after completion, and Settings reassignment of the invocation shortcuts. He clarified the fallback to the user language for third or uncertain source languages and retained the `Accept` button label. Codex recorded D-004/D-005, added R-014/R-015/R-016, preserved R-013 as the historical rule for the closed V0.1 lot, and refined affected planned specs and gates.
Affected artifacts: `PROJECT.md`, `LEDGER.md`, `RULES.md`, `Specs/003-safe-accept/SPEC-003.md` through `Specs/011-v1-release/SPEC-011.md`, `Specs/005-declarative-actions/GATES-005.md`, `Specs/006-connections-profiles/GATES-006.md`, `Specs/008-settings-localization/GATES-008.md`, `Specs/010-hardening/GATES-010.md`, `Specs/011-v1-release/GATES-011.md`, `STATUS.md`.
Outcome: The default normal-action shortcut remains `Ctrl+C+C`; quick translation defaults to `Ctrl+C+T`. LOT-005 prepares Translate parameters, LOT-006 persists preferences and bindings, LOT-008 activates the quick workflow and Settings controls, and LOT-010/011 validate them. LOT-002 and its accepted EXE remain unchanged. All later lots remain Planned; no implementation or gate evaluation is claimed.

## 2026-09-26 — Result actions clarified as Replace and Copy

Actor: Olivier and Codex
Operation: Olivier replaced the earlier `Accept` label decision with an explicit `Replace` action and added `Copy` for placing the result in the clipboard without modifying the selected source. He confirmed that successful Copy closes the session. Codex recorded D-006, preserved and superseded R-006/R-014 with R-017/R-018, and refined planned lots and gates from LOT-003 through V1.
Affected artifacts: `PROJECT.md`, `LEDGER.md`, `RULES.md`, `Specs/003-safe-accept/SPEC-003.md`, `Specs/003-safe-accept/GATES-003.md`, `Specs/004-ollama-maf/SPEC-004.md`, `Specs/004-ollama-maf/GATES-004.md`, `Specs/005-declarative-actions/SPEC-005.md` through `Specs/011-v1-release/SPEC-011.md`, `Specs/008-settings-localization/GATES-008.md`, `Specs/011-v1-release/GATES-011.md`, `STATUS.md`.
Outcome: Planned LOT-003 now introduces Replace/Copy/Cancel before AI. Quick translation enables Replace and Copy only for its current successful result. Closed LOT-002 and its V0.1 executable remain unchanged. No planned lot was started or evaluated.

## 2026-09-26 — Default shortcut mnemonics named

Actor: Olivier and Codex
Operation: Olivier specified the memory aid for the default gestures and confirmed the English spelling **Choose**. Codex recorded D-007 and aligned the project description and planned Settings and V1 requirements with `Ctrl+C`, then `C` for Choose or `T` for Translate.
Affected artifacts: `LEDGER.md`, `PROJECT.md`, `Specs/008-settings-localization/SPEC-008.md`, `Specs/011-v1-release/SPEC-011.md`, `STATUS.md`.
Outcome: Shortcut behavior, reassignment rules, closed LOT-002, and the accepted executable remain unchanged. Later lots remain Planned; no gate result is claimed.

## 2026-09-26 — LOT-002 separate-machine check completed after closure

Actor: Olivier and Codex
Operation: Olivier reported a successful test on a second Windows x64 machine and confirmed that the final LOT-002 EXE was copied alone, launched, and displayed About. Codex matched the still-published canonical EXE to SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B` and updated the recurring portability register.
Affected artifacts: `PORTABILITY-CHECKS.md`, `HISTORY.md`, `STATUS.md`.
Outcome: The previously deferred check is PASS for the final LOT-002 EXE. The superseded older candidate remains untested. LOT-002 remains Closed; its original convergence and gate evaluations remain historical records of the closure state. No product code, publication, or later lot state changed.

## 2026-09-26 — LOT-003 started

Actor: Olivier and Codex
Operation: Olivier instructed Codex to perform LOT-003 after the completed bootstrap and with no other active lot.
Affected artifacts: `STATUS.md`, `HISTORY.md`.
Outcome: LOT-003 moved from Planned to In-progress. Its active work is the explicit Replace, Copy, and Cancel transaction behavior, including safe use of the captured source window and the non-distributed Windows test target.

## 2026-09-26 — LOT-003 V0.2 candidate prepared

Actor: Codex
Operation: Implemented the temporary uppercase preview, Replace/Copy/Cancel result actions, guarded native replacement using the invocation-time HWND, and the WPF test target. Replaced the former Windows Forms test target with the specified single-line and multiline TextBox, RichTextBox, focus-change control, and visible focus event display.
Affected artifacts: `src/TextAid.App/`, `src/TextAid.Core/InvocationSession.cs`, `src/TextAid.Platform.Windows/ResultActions.cs`, `tests/TextAid.Platform.Windows.Tests/ResultActionsTests.cs`, `tools/TextAid.TestTarget/`, `Specs/003-safe-accept/`.
Outcome: `dotnet build TextAid.sln -m:1 --no-restore -p:NuGetAudit=false` passed with zero warnings/errors and `dotnet test TextAid.sln -m:1 --no-build -p:NuGetAudit=false` passed 13 platform tests. `publish.ps1` produced the sole V0.2 `TextAid.exe` (SHA-256 `0AFC77FACD4C50B002DC1AFF44A58EFE421F1B174B066CBF6C056CC9DB6765A0`) in the canonical directory. G-003-001 is PASS; the required Olivier Windows safety walkthrough, G-003-002, remains TO TEST.

## 2026-09-26 — LOT-003 modifier safety coverage strengthened

Actor: Codex
Operation: Added a deterministic pressed-modifier timeout test and expanded the Win32 modifier check to include generic Ctrl, Alt, and Shift virtual keys as well as their left/right variants and Windows keys. Rebuilt, retested, and republished the candidate.
Affected artifacts: `src/TextAid.Platform.Windows/ResultActions.cs`, `tests/TextAid.Platform.Windows.Tests/ResultActionsTests.cs`, `Specs/003-safe-accept/GATES-003.md`, `HISTORY.md`.
Outcome: The solution rebuilt with zero warnings/errors and all 14 platform tests passed. The superseding V0.2 EXE is the sole 173,662,859-byte file at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `A38B39129C90093E99AF5EE6AD89BD8B3F782B20CAB8A60C024BCDC38B3C0B6E`. G-003-001 remains PASS; G-003-002 remains TO TEST pending Olivier's Windows walkthrough.

## 2026-09-26 — LOT-003 corrections prepared from Olivier's walkthrough

Actor: Olivier and Codex
Operation: Olivier confirmed Cancel, close, capture, and uppercase transformation but reported failed Replace and an overlapping preview/status display. He decided on an elastic 50/50 review layout (D-008). Codex separated the status row, made the session resizable with equal-width panels, and strengthened native source-focus restoration before paste.
Affected artifacts: `LEDGER.md`, `Specs/003-safe-accept/`, `src/TextAid.App/MainWindow.xaml`, `src/TextAid.Platform.Windows/ResultActions.cs`.
Outcome: The corrected source builds with zero warnings/errors and the 14 platform tests pass. The prior published EXE is running (PID 43160), so it locks the canonical Publish file and prevents final publication. G-003-001 returns to TO TEST until the corrected EXE is published and identified; G-003-002 remains TO TEST.

## 2026-09-26 — LOT-003 corrected candidate published

Actor: Codex
Operation: After Olivier closed the resident previous candidate, published the focus-restoration and elastic-layout correction with the canonical root script.
Affected artifacts: `src/TextAid.App/bin/Publish/TextAid.exe`, `Specs/003-safe-accept/GATES-003.md`, `HISTORY.md`.
Outcome: The canonical directory contains exactly one 173,663,371-byte V0.2 EXE, SHA-256 `6DB09596045AD8824E3865F4DD7583E06285401DA51416B8FA7B0DBEE8E8F0A0`. G-003-001 is again PASS. F-003-002 and G-003-002 remain open for Olivier's retest of Replace; the visual correction is locally resolved and also awaits human review.

## 2026-09-26 — LOT-003 native paste and foreground correction prepared

Actor: Codex
Operation: Diagnosed Olivier's “could not paste safely” message as an undersized x64 native `INPUT` interop layout passed to `SendInput`. Added the full union layout and explicit session activation/temporary topmost behavior to prevent the session from opening behind other windows.
Affected artifacts: `src/TextAid.Platform.Windows/ResultActions.cs`, `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainWindow.xaml.cs`, `Specs/003-safe-accept/`.
Outcome: The corrected source builds with zero warnings/errors and the 14 platform tests pass. The prior EXE remains running (PID 12540) and locks the Publish output, so G-003-001 is TO TEST until the new EXE is published. F-003-002 is resolved locally and awaits Olivier's retest; G-003-002 remains TO TEST.

## 2026-09-26 — LOT-003 native paste correction published

Actor: Codex
Operation: Published the final native-interoperability and foreground correction after Olivier closed the previous resident EXE.
Affected artifacts: `src/TextAid.App/bin/Publish/TextAid.exe`, `Specs/003-safe-accept/GATES-003.md`, `HISTORY.md`.
Outcome: The canonical directory contains exactly one 173,663,371-byte V0.2 EXE, SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`. G-003-001 is PASS. Olivier's retest of Replace and session foreground visibility remains required for G-003-002.

## 2026-09-26 — LOT-003 ready for closure

Actor: Olivier and Codex
Operation: Olivier confirmed all remaining Windows walkthrough cases. Codex recorded G-003-002 HUMAN PASS, reviewed all six active requirements and four terminal findings, prepared the proposed TOTAL convergence, and moved LOT-003 to Ready-to-close.
Affected artifacts: `Specs/003-safe-accept/GATES-003.md`, `Specs/003-safe-accept/FINDINGS-003.md`, `Specs/003-safe-accept/CONVERGENCE-003.md`, `STATUS.md`, `HISTORY.md`.
Outcome: G-003-001 and G-003-002 PASS on V0.2 EXE SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`; no active requirement has an unresolved deviation and no finding remains OPEN. LOT-003 awaits Olivier's explicit acceptance or refusal of the proposed TOTAL convergence and closure.

## 2026-09-26 — LOT-003 closed with total convergence

Actor: Olivier and Codex
Operation: Olivier explicitly accepted the proposed TOTAL convergence and closure of LOT-003.
Affected artifacts: `Specs/003-safe-accept/CONVERGENCE-003.md`, `STATUS.md`, `HISTORY.md`.
Outcome: LOT-003 is Closed. The identified V0.2 EXE has both active gates PASS, all six active requirements satisfied, and all four findings resolved locally. LOT-004 remains Planned and requires a separate human start decision.

## 2026-09-26 — LOT-004 started

Operation: Olivier explicitly started LOT-004, V0.3 — MAF and local Ollama.

Outcome: `STATUS.md` records LOT-004 as In-progress. Implementation and gate evaluation are pending; no acceptance or closure is implied.

## 2026-09-26 — First LOT-004 implementation candidate

Operation: Added the non-streaming Rewrite path through `MafTextTransformationService`, Microsoft Agent Framework's `ChatClientAgent`, the `IChatClient` boundary, and an `OllamaSharp.OllamaApiClient` factory. The app reads the configured local endpoint, model, temperature, and timeout; it displays explicit no-model, timeout, and provider-failure messages. A visible indeterminate local-model progress bar is present while the call is pending and result actions stay disabled. Added five deterministic fake-client tests for request/response, cancellation, provider error, empty output, and timeout.

Outcome: G-004-001 is PASS for the working-tree candidate: the solution builds without warnings or errors and all 19 discovered AI and Windows tests pass. G-004-002 remains TO TEST because it requires Olivier's live local-Ollama walkthrough, including stopped-provider behavior. LOT-004 remains In-progress.

## 2026-09-26 — Local Ollama settings and action-profile direction

Operation: Replaced the placeholder Settings page with a local Ollama configuration page. It discovers installed models through OllamaSharp, stores the selected model, endpoint, temperature, context size, and timeout in the existing local profile, and validates the Strict Local loopback boundary. The transformation path passes the configured context size as Ollama's `num_ctx` option. Olivier also decided that later declarative actions select a model profile and that V1 includes an explicit OpenAI-compatible remote provider.

Outcome: The current LOT-004 candidate builds with 0 warnings and 0 errors; the five AI fake-client tests and fourteen Windows tests pass. G-004-001 remains PASS after reevaluation. D-009/R-019 refine the planned LOT-005, LOT-006, and LOT-009 work without changing LOT-004's local-only scope. G-004-002 remains TO TEST.

## 2026-09-26 — Deployment modes clarified

Operation: Olivier confirmed the replacement of “Strict Local” by This device only, On-premises, and External. Codex recorded D-010, revised R-005 and future-lot requirements, and aligned the current local Settings terminology with This device only.

Outcome: The active LOT-004 candidate retains its loopback-only behavior, now accurately labelled This device only. On-premises and External implementation is deliberately deferred to the planned profiles, privacy, settings, and remote-provider lots. No human gate result is invalidated.

## 2026-09-26 — LOT-004 published for local validation

Operation: Ran the root `publish.ps1` to create the current V0.3 candidate at the canonical single-file path.

Outcome: `src/TextAid.App/bin/Publish/` contains only `TextAid.exe`, SHA-256 `53F6B2A89464EE4979BB39EEA5A62E4E52B5A4299409633A380A5CCA74B3F383`. The separate-machine check is recorded as deferred; Olivier will perform the local Ollama human walkthrough next.

## 2026-09-26 — Concurrent provider configuration decided

Operation: Olivier decided that This device only, On-premises, and External connections are retained concurrently in separate Settings tabs. Codex recorded D-011 and aligned the privacy, profiles, and Settings specifications.

Outcome: The selected model profile remains the sole action-specific route to a provider. The new V0.3 candidate is published at the canonical path; provider-tab implementation remains assigned to LOT-006 and LOT-008.

## 2026-09-26 — Unified editable action model decided

Operation: Olivier decided that TextAid-supplied actions and user-created actions share one editable declarative schema. Codex recorded D-012 and refined the actions, profiles, and Settings requirements.

Outcome: LOT-005 will eliminate special built-in execution paths; LOT-006 resolves an action's profile and temperature override; LOT-008 supplies the management UI for all actions. LOT-004 remains focused on its first Rewrite path.

## 2026-09-26 — Action output-language default decided

Operation: Olivier decided that actions carry an Unchanged or BCP-47 output-language default, while the main session always permits a per-invocation language override. Codex recorded D-013 and refined the affected action, profile, and Settings requirements.

Outcome: The action definition supplies the initial generation language; the later main-session combo overrides it without mutating saved action data. LOT-004 remains unchanged.

## 2026-09-26 — LOT-004 local walkthrough substantially validated

Actor: Olivier and Codex
Operation: Olivier validated the configured local transformation, its displayed result, Copy, Replace, and the graceful stopped-Ollama path on the published V0.3 candidate. Olivier deferred the separate no-Ollama-machine launch check. He also reported mismatched preview typography, non-exclusive Settings/About dialogs, and a likely ineffective thinking switch.
Affected artifacts: `Specs/004-ollama-maf/GATES-004.md`, `PORTABILITY-CHECKS.md`.
Outcome: The prior V0.3 EXE SHA-256 `871F31EE5D3B8782BE1127FB1B2DF3B4462F6A9EBE3D49DF7D56A04464A06C33` has a successful core local walkthrough. A follow-up candidate corrects the reported UI and thinking issues; it awaits publication and a focused human retest.

## 2026-09-26 — LOT-004 typography, modality, and thinking correction published

Actor: Codex
Operation: Set an explicit identical 14-point text size for captured and generated text, made Settings, About, and the missing-provider notice mutually exclusive modal dialogs, and mapped the stored thinking choice to MAF's `ReasoningOptions` (`Off` maps to `None`). Added fake-client assertions for Off and High reasoning choices.
Affected artifacts: `src/TextAid.AI/MafTextTransformationService.cs`, `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainWindow.xaml`, `src/TextAid.App/StartupNoticeWindow.xaml.cs`, `tests/TextAid.AI.Tests/MafTextTransformationServiceTests.cs`, `Specs/004-ollama-maf/GATES-004.md`, `PORTABILITY-CHECKS.md`.
Outcome: The solution built with 0 warnings and 0 errors; 6 AI fake-client tests and 14 Platform.Windows tests passed. `publish.ps1` produced the sole 178,355,119-byte V0.3 EXE at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `81720DC9AF212B625B45052674A3D53A5503C0CB5C00B696D1B2DDA213820FFC`. Focused human retest remains required for this distinct binary; the clean no-Ollama-machine portability case remains deferred.

## 2026-09-26 — LOT-004 thinking correction validated

Actor: Olivier
Operation: Olivier validated the typography and modal-dialog corrections and exercised a local transformation with thinking Off.
Affected artifacts: `Specs/004-ollama-maf/GATES-004.md`, `HISTORY.md`.
Outcome: Olivier reports an instantaneous response with thinking Off, providing live confirmation that the setting is now reaching the configured Ollama model. The no-Ollama-machine startup check remains deferred.

## 2026-09-26 — LOT-004 tray Open fallback published

Actor: Codex
Operation: Added Open to the tray menu. It starts a transformation from clipboard text without requiring Ctrl+C+C, while deliberately disabling Replace because no trustworthy source window exists; Copy stays available.
Affected artifacts: `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainViewModel.cs`, `src/TextAid.App/Strings.xaml`, `Specs/004-ollama-maf/GATES-004.md`, `PORTABILITY-CHECKS.md`.
Outcome: The solution built with 0 warnings and 0 errors; 6 AI fake-client tests and 14 Platform.Windows tests passed. `publish.ps1` produced the sole 178,355,119-byte V0.3 EXE at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `EB801C88B5BFCB930E0920B8167FE04117462A545F1D47E6E4AE86F14F9F8DBF`.

## 2026-09-26 — Per-action supplementary instructions decided

Operation: Olivier decided that declarative actions may require supplementary user instructions, while every normal session also exposes an optional Instructions control. Text remains editable, the user selects an action and optional instructions, then starts Process explicitly.
Affected artifacts: `LEDGER.md`, `RULES.md`, `PROJECT.md`, `Specs/005-declarative-actions/SPEC-005.md`, `Specs/008-settings-localization/SPEC-008.md`.
Outcome: D-014 and R-021 assign action data/runtime semantics to LOT-005 and Actions editor/session controls to LOT-008. LOT-004 remains the interim Rewrite-only implementation.

## 2026-09-26 — LOT-004 manual-entry candidate published

Actor: Codex
Operation: Revised tray Open and double-copy-without-selection to open the same focused, editable empty session rather than consume prior clipboard text. Added the Process control; its request snapshots the current editable text.
Affected artifacts: `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainViewModel.cs`, `src/TextAid.App/MainWindow.xaml`, `src/TextAid.App/MainWindow.xaml.cs`, `src/TextAid.App/Strings.xaml`, `src/TextAid.Core/InvocationSession.cs`, `src/TextAid.Platform.Windows/KeyboardHook.cs`, `Specs/004-ollama-maf/GATES-004.md`, `PORTABILITY-CHECKS.md`.
Outcome: The solution built with 0 warnings and 0 errors; 6 AI fake-client tests and 14 Platform.Windows tests passed. `publish.ps1` produced the sole 178,355,631-byte V0.3 EXE at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `7D71903867D39B77A0E94A94EF3C8A98FEE3C154840F24139F859CB08DE0AA3E`.

## 2026-09-26 — LOT-004 explicit Process flow published

Actor: Codex
Operation: Aligned valid-selection entry with the manual-entry path: every session now waits for the user to review or edit text and choose Process before a model request. This leaves a single session flow ready for upcoming action selection and supplementary-instructions controls.
Affected artifacts: `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/Strings.xaml`, `Specs/004-ollama-maf/GATES-004.md`, `PORTABILITY-CHECKS.md`.
Outcome: The solution built with 0 warnings and 0 errors; 6 AI fake-client tests and 14 Platform.Windows tests passed. `publish.ps1` produced the sole 178,355,631-byte V0.3 EXE at `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72`.

## 2026-09-26 — Quick Translate immediacy reaffirmed

Operation: Olivier clarified that the explicit editable Process flow applies to normal `Ctrl+C+C` actions only. `Ctrl+C+T` must retain its immediate Translate behavior, with later optional corrections and destination-language changes.
Affected artifacts: `LEDGER.md`, `RULES.md`, `Specs/008-settings-localization/SPEC-008.md`, `HISTORY.md`.
Outcome: D-014/R-021 are constrained by the existing R-018 quick-translation rule; no LOT-004 code or published executable changes.

## 2026-09-26 — LOT-003 Replace retest passed in common applications

Actor: Olivier and Codex
Operation: Olivier retested the final corrected V0.2 EXE in Notepad, Visual Studio, Chrome, and Edge.
Affected artifacts: `Specs/003-safe-accept/GATES-003.md`, `Specs/003-safe-accept/FINDINGS-003.md`, `HISTORY.md`.
Outcome: Replace succeeds in all four reported applications, confirming the corrected `SendInput` path. G-003-002 remains TO TEST for the unreported TestTarget, Copy, controlled-failure, and layout/foreground conditions.

## 2026-09-25 — Pro-Spec project initialized

Actor: Codex
Operation: Decomposed the retained TextAid V1 source specification into planned Pro-Spec lots; initialized the global artifacts and copied the normative Pro-Spec 3 reference locally.
Affected artifacts: `README.md`, `PROJECT.md`, `RULES.md`, `STATUS.md`, `LEDGER.md`, `HISTORY.md`, `Specs/`, `docs/PROSPEC-3-SPECIFICATION.md`.
Outcome: Planning baseline created. No implementation, gate validation, lot start, or human closure is claimed.
