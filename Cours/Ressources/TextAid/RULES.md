# Project rules

These rules apply to all V1 lots unless a rule names a narrower phase. They originate in the retained `docs/TextAid specification.md` and are initial rules, so no ledger decision is required. Later changes follow Pro-Spec section 12.

## R-001 — Product identity and scope

Status: ACTIVE
Source: Initial project rule; source sections 1–3, 91, 94, 96
Rule: The product MUST be named TextAid everywhere, use the exact subtitle “Local-first text transformer & translator”, and remain a one-text/one-transformation utility. Post-V1 features listed in source section 91 MUST NOT enter V1 lots.
Replaces: None
Replaced by: None

## R-002 — Platform and architecture

Status: ACTIVE
Source: Initial project rule; source sections 7–11, 94
Rule: The product MUST target .NET 10, C#, WPF, and Windows x64. The target solution has `TextAid.App`, `TextAid.Core`, `TextAid.AI`, `TextAid.Platform.Windows`, and the three matching test projects. Core MUST have no WPF, Win32, or OllamaSharp dependency; Windows integration MUST remain in Platform.Windows. The WPF UI MUST use MVVM with CommunityToolkit.Mvvm; code-behind is limited to view and Win32 concerns.
Replaces: None
Replaced by: None

## R-003 — Dependency discipline

Status: ACTIVE
Source: Initial project rule; source sections 8, 37, 56, 94
Rule: Dependencies MUST stay few. CommunityToolkit.Mvvm is the only MVVM framework; do not add a logging, localization, theming, configuration, mediator, event-bus, or prompt-template framework without demonstrated need. Do not create an internal framework for simple behavior.
Replaces: None
Replaced by: None

## R-004 — AI access boundary

Status: ACTIVE
Source: Initial project rule; source sections 4–6, 42, 47, 94
Rule: All application AI calls MUST pass through MAF and `Microsoft.Extensions.AI.IChatClient`. The default Ollama connection MUST use OllamaSharp, without a custom Ollama HTTP client. Functional code MUST NOT call providers directly or introduce a competing `ILlmProvider`. MAF MUST be used for a single transformation call, without agent tools, memory, or autonomous behavior.
Replaces: None
Replaced by: None

## R-005 — Deployment and privacy boundary

Status: ACTIVE
Source: Initial project rule; source sections 4, 48, 55–59, 90
Rule: The initial configuration MUST include a **This device only** connection and accept only `localhost`, `127.0.0.1`, and `::1` for that connection; its model traffic cannot leave the current machine. **On-premises** MAY use an endpoint explicitly configured by the user on an administered network; the application MUST clearly state that it cannot verify ownership, routing, or data handling of that endpoint. **External** is required for an Internet-hosted provider and requires deliberate user configuration. All three connection categories may coexist; an action's selected model profile determines the one used for an invocation. No category may use a cloud fallback or telemetry implicitly. API keys MUST NOT be stored in clear text in `config.json`. With Debug off, no log or persistent trace is created. Safe Debug never logs credentials, user text, result, or a prompt containing user text. A separately enabled persistent Full log may record that diagnostic text locally, but MUST never log authentication credentials of any kind, including API keys, Bearer tokens, passwords, or DPAPI-protected secrets; it is never transmitted automatically.
Replaces: None
Replaced by: None
Decision: D-010, D-030

## [OBSOLETE 2026-09-26] R-006 — Safe source replacement

Status: OBSOLETE
Source: Initial project rule; source sections 20–33, 90
Rule: A session MUST have only `Accept` or `Cancel`, with at most one active session. Cancel MUST leave the source unchanged. Before `SendInput(Ctrl+V)`, the captured source HWND MUST still be valid and confirmed restored, and modifier keys MUST be released. Failure MUST prevent paste to an arbitrary window and leave the generated result in the clipboard. Wrong-window paste is a release blocker.
Replaces: None
Replaced by: R-017
Decision: D-006

## R-007 — Visual and language foundation

Status: ACTIVE
Source: Initial project rule; source sections 12–16, 49–54, 72–73
Rule: Fix the palette, typography, layout dimensions, logo, and icon before visible V0.1 UI implementation. All windows, title bars, and controls MUST use a complete dark theme with centralized tokens and no hard-coded view colors. English is the source UI language; visible UI strings MUST use resources, and translated catalogs MUST fall back to English on failure.
Replaces: None
Replaced by: None

## [OBSOLETE 2026-09-27] R-008 — Single-file distribution

Status: OBSOLETE
Source: Initial project rule; source sections 9, 73, 90
Rule: Starting at V0.1, Release publishing MUST produce a self-contained single `TextAid.exe` for win-x64 with trimming disabled; no adjacent configuration or runtime file may be required for distribution. User configuration is created in the user profile at first run.
Replaces: None
Replaced by: R-025
Decision: D-018

## R-009 — Incremental quality

Status: ACTIVE
Source: Initial project rule; source sections 72–90, 93–94
Rule: Follow the source milestone order from design gate through V1. Each V0.x MUST compile, remain testable, and preserve validated behavior. Validate the Windows capture/Accept pipeline before adding MAF. Unit AI tests MUST use a fake `IChatClient`; live Ollama integration tests are optional. For any `dotnet build` or `dotnet test`, explicitly pass `-m:1`.
Replaces: None
Replaced by: None

## R-010 — Code conventions

Status: ACTIVE
Source: Initial project rule; project-wide AGENTS.md instruction
Rule: Application code and UI MUST be in English, formatted for human maintenance. Code comments MUST be in English and documentation comments MUST use XML style. Use MVVM Toolkit by default.
Replaces: None
Replaced by: None

## R-011 — Canonical Release output

Status: ACTIVE
Source: D-001; Olivier's 2026-09-26 decision
Scope: LOT-002 and all later TextAid releases; no retroactive change to closed LOT-001.
Rule: Release publishing MUST place the final single-file `TextAid.exe` in `src/TextAid.App/bin/Publish/`. The root `publish.ps1` MUST produce that executable there. This location is the canonical final build output.
Replaces: None
Replaced by: None

## R-012 — Separate-machine portability check

Status: ACTIVE
Source: D-002; Olivier's 2026-09-26 decision
Scope: LOT-002 and every later TextAid release candidate; no retroactive change to closed LOT-001.
Rule: For each final published executable, plan a launch and About check using that EXE alone on a separate clean Windows x64 machine when available. Record the tested EXE identity and outcome. If no such machine is available, record the check as deferred in `PORTABILITY-CHECKS.md` and revisit it at the next opportunity, including later releases; do not erase the untested history of a superseded binary. Lack of this separate-machine check alone MUST NOT block lot closure. Do not claim empirical portability validation for an EXE that was not tested. R-008's single-file distribution requirement and applicable build/publish gates remain in force.
Replaces: None
Replaced by: None

## [OBSOLETE 2026-09-26] R-013 — Invocation without a selection

Status: OBSOLETE
Source: D-003; Olivier's 2026-09-26 decision
Scope: LOT-002 and later TextAid versions; no retroactive change to closed LOT-001.
Rule: Ctrl+C+C MUST open an invocation session even when no text is selected or available to capture. The absence of selected text MUST NOT suppress the invocation. A manual-text-entry workflow MAY be added in a later lot; R-013 does not require it in V0.1 or change the current captured-text field into an editor.
Replaces: None
Replaced by: R-016
Decision: D-005

## [OBSOLETE 2026-09-26] R-014 — Quick translation invocation

Status: OBSOLETE
Source: D-004; Olivier's 2026-09-26 decision
Scope: Planned LOT-005 through LOT-011; the `Ctrl+C+T` entry point becomes active in LOT-008.
Rule: The quick-translation shortcut (default `Ctrl+C+T`) MUST start Translate immediately without an action or destination question. Detect the language of the original captured text: user language → preferred translation language; preferred translation language → user language; other or uncertain language → user language. The user MAY choose another destination in the session; this starts a new translation of the original text and supersedes any pending result. `Accept` MUST remain unavailable until the current translation succeeds, then offer the existing safe replacement action. The normal-action shortcut (default `Ctrl+C+C`) MUST retain its action-choice behavior. The two configured language preferences MUST be valid and distinct.
Replaces: None
Replaced by: R-018
Decision: D-006

## R-015 — Configurable invocation shortcuts

Status: ACTIVE
Source: D-005; Olivier's 2026-09-26 decision
Scope: LOT-006 configuration and LOT-008 Settings onward; defaults do not change the closed V0.1 result.
Rule: The default normal-action and quick-translation shortcuts MUST be `Ctrl+C+C` and `Ctrl+C+T`, respectively. Settings MUST let the user reassign each full keyboard sequence independently when it conflicts with another application. Persist and validate the assignments; reject identical, invalid, or internally conflicting assignments without replacing active shortcuts. Invocation behavior MUST follow the configured assignments. The default sequences begin with `Ctrl+C`; a reassigned sequence need not keep that prefix.
Replaces: None
Replaced by: None

## R-016 — Normal-action invocation without a selection

Status: ACTIVE
Source: D-005; Olivier's 2026-09-26 decision
Scope: Planned LOT-003 through LOT-011; R-013 remains the historical rule for the closed LOT-002 result.
Rule: The normal-action shortcut (default `Ctrl+C+C`) MUST open an invocation session even when no text is selected or available to capture. The absence of selected text MUST NOT suppress the invocation. A manual-text-entry workflow MAY be added in a later lot; this rule does not require it in V0.1 or change the closed candidate's captured-text field into an editor. From LOT-008, the behavior follows the user's configured shortcut if they reassign the default.
Replaces: R-013
Replaced by: None

## R-017 — Explicit result outcomes and safe replacement

Status: ACTIVE
Source: D-006; Olivier's 2026-09-26 decision
Scope: Planned LOT-003 through LOT-011; R-006 remains the historical rule for closed LOT-002.
Rule: A session MUST offer `Replace`, `Copy`, and `Cancel` for a successful result, with at most one active session. `Replace` MUST copy the result to the clipboard and paste it only into the captured source HWND after confirming that window is valid and restored and all modifier keys are released. Failure MUST prevent paste to an arbitrary window and leave the result in the clipboard. `Copy` MUST copy the result to the clipboard without restoring/focusing the source or sending paste, then close the session. `Cancel` MUST leave the source unchanged. Window close, Escape, and Alt+F4 mean `Cancel`. Wrong-window paste is a release blocker.
Replaces: R-006
Replaced by: None

## R-018 — Quick translation invocation and result actions

Status: ACTIVE
Source: D-006; Olivier's 2026-09-26 decision, retaining D-004's language routing
Scope: Planned LOT-005 through LOT-011; the quick-translation entry point becomes active in LOT-008.
Rule: The quick-translation shortcut (default `Ctrl+C+T`) MUST start Translate immediately without an action or destination question. Detect the language of the original captured text: user language → preferred translation language; preferred translation language → user language; other or uncertain language → user language. The user MAY choose another destination in the session; this starts a new translation of the original text and supersedes any pending result. `Replace` and `Copy` MUST remain unavailable until the current translation succeeds, then perform their distinct R-017 actions. The normal-action shortcut (default `Ctrl+C+C`) MUST retain its action-choice behavior. The two configured language preferences MUST be valid and distinct.
Replaces: R-014
Replaced by: None

## [OBSOLETE 2026-09-27] R-019 — Action-selected AI profile

Status: OBSOLETE
Source: D-009; Olivier's 2026-09-26 decision
Scope: LOT-005, LOT-006, LOT-009, and later V1 lots
Rule: Every action, including a built-in action supplied by TextAid, MUST be a declarative editable action definition and MUST resolve to one configured model profile. An action definition includes its name, prompt template, optional temperature override, and profile reference. The selected profile may use This device only, On-premises, or an explicitly configured OpenAI-compatible External connection. An action must never cause a silent provider fallback; endpoint use remains subject to the explicit R-005 deployment category.
Replaces: None
Replaced by: R-022
Decision: D-015

## R-020 — Action output-language default with session override

Status: ACTIVE
Source: D-013; Olivier's 2026-09-26 decision
Scope: LOT-005, LOT-006, LOT-008, and later V1 lots
Rule: An action definition MAY specify an output-language default as a valid BCP-47 language or **Unchanged**. That value determines the initial generation language for its session. The main TextAid session MUST always let the user select a different available output language before generation; the user selection overrides the action default for that invocation without modifying the action definition.
Replaces: None
Replaced by: None

## R-021 — Supplementary user instructions per invocation

Status: ACTIVE
Source: D-014; Olivier's 2026-09-26 decision
Scope: LOT-005, LOT-008, and later V1 lots
Rule: Every declarative action definition MUST contain an `askForUserInstructions` flag. When the flag is set, TextAid MUST require a themed modal supplementary-instructions dialog before issuing the normal-action model request. The normal session MUST always offer an Instructions control, allowing optional supplementary instructions for any selected action. The instruction text is scoped to one invocation, is combined with the action prompt only at Process time, and MUST NOT persist into the action definition or a later session. Cancelling the dialog MUST not invoke the model. This rule MUST NOT delay the R-018 quick Translate route: `Ctrl+C+T` starts translation immediately without action selection or an instructions dialog.
Replaces: None
Replaced by: None

## R-022 — Declarative action store and action-selected profile

Status: ACTIVE
Source: D-015
Scope: LOT-005 and later V1 lots; no retroactive change to closed results.
Rule: Every TextAid-supplied or user-created action MUST use the same editable JSON definition in the `actions` subdirectory beside the running `TextAid.exe`. This external user data MUST NOT carry a schema-version field. The user is responsible for backing up this visible action folder. Each action has a unique stable `id`, a profile reference, prompt template, optional temperature override, output-language default, and `askForUserInstructions` flag. A built-in action's display name is resolved from the selected application/user language by its stable ID; a user-provided display-name override takes precedence and is not automatically translated. No action may cause a silent provider fallback.
Replaces: R-019
Replaced by: None

## R-023 — Actions page and immediate action refresh

Status: ACTIVE
Source: D-015
Scope: LOT-008 and later V1 lots; no retroactive change to closed results.
Rule: TextAid MUST expose a dedicated Actions page from both the local main-window gear menu and the tray-equivalent application menu. The page MUST show actions in a left-hand list and the selected action's editable details and prompt on the remaining area. A valid create, edit, enable, disable, or deletion operation MUST immediately replace the active action set and update the main-session action selector without requiring an application restart or recompilation.
Replaces: None
Replaced by: None

## R-024 — Reserved quick-translation action

Status: ACTIVE
Source: D-016
Scope: LOT-005, LOT-008, and later V1 lots; no retroactive change to closed results.
Rule: The `Ctrl+C+T` route MUST use TextAid's reserved built-in Translate action. That action remains declarative JSON and uses the standard action execution path, but its identity, enabled state, profile reference, prompt template, and translation behavior MUST be protected from editing, replacement, or reassignment in the Actions page. No user-created or user-modified action may be designated as the quick-translation action.
Replaces: None
Replaced by: None

## [OBSOLETE 2026-09-27] R-025 — Self-contained executable with deployed action data

Status: OBSOLETE
Source: D-018
Scope: LOT-005 and later releases; no retroactive change to closed results.
Rule: Release publishing MUST produce a self-contained single `TextAid.exe` for win-x64 with trimming disabled, together with an `actions` subdirectory containing the built-in JSON action definitions. No .NET runtime, installer, or hidden user-profile action data is required for the distributed result. The root `publish.ps1` MUST verify and report this exact release layout.
Replaces: R-008
Replaced by: R-026
Decision: D-019

## R-026 — Single-executable distribution with initialized action storage

Status: ACTIVE
Source: D-019
Scope: LOT-005 and later releases; no retroactive change to closed results.
Rule: Release publishing MUST produce a self-contained single `TextAid.exe` for win-x64 with trimming disabled. The executable MUST embed the default action definitions as resources. On first run it MUST create the visible `actions` directory beside the executable without overwriting existing files; if that directory cannot be created or written, it MUST silently create and persist an `actions` subdirectory beside `config.json` instead. The future Actions page opens the persisted directory. No .NET runtime, installer, or pre-deployed sidecar action data is required for distribution.
Replaces: R-025
Replaced by: None

## R-027 — Explicit configuration fallback and sole-configuration promotion

Status: ACTIVE
Source: D-022, D-029
Scope: LOT-006 and later V1 lots; no retroactive change to closed results.
Rule: If exactly one active, valid, eligible connection configuration exists at initial resolution, TextAid MUST automatically and visibly use that sole configuration for every action whose requested configuration is absent, inactive, or otherwise not configured. Where the requested category differs, the status MUST name both the requested category and the selected sole category; this is an automatic downgrade or promotion. Otherwise, an action whose requested On-premises or External configuration category does not exist or is not configured MUST downgrade automatically and visibly: External → On-premises → This device only, and On-premises → This device only. Every automatic downgrade MUST name the unavailable requested category and the selected category in the user-facing status. If two or more active eligible configurations exist, TextAid MUST not infer an upward route and MUST direct the user to select an appropriate profile for the action. A configured connection that is invalid, including a malformed endpoint or missing required credential, MUST first show an explicit configuration error and then offer the user a downgrade to the next eligible lower category. After an eligible provider or LLM later fails to respond, TextAid MUST first show that provider failure and then offer the same user-controlled downgrade; it MUST NOT promote upward. Declining the offer leaves the invocation failed; accepting it starts a new invocation using the selected lower category and states that selection in the status. These explicit automatic and user-approved behaviors are the only exceptions to R-005 and R-022's ban on silent fallback.
Replaces: None
Replaced by: None

## R-028 — Per-user DPAPI secret storage

Status: ACTIVE
Source: D-023
Scope: LOT-006 and later V1 lots; no retroactive change to closed results.
Rule: A secret required by an On-premises or External LLM connection MUST be stored separately from `config.json` under the current user's TextAid application-data directory and protected by Windows DPAPI with `DataProtectionScope.CurrentUser`. Versioned configuration MUST retain only an opaque secret reference. A secret MUST NOT be stored beside the executable, in the `actions` directory, in action JSON, or in logs. Missing or unreadable required secrets make that configured connection invalid and follow R-027's error-then-user-offered downgrade path.
Replaces: None
Replaced by: None

## R-029 — Independent connection activation

Status: ACTIVE
Source: D-024, D-029
Scope: LOT-006 and later V1 lots; no retroactive change to closed results.
Rule: Each This device only, On-premises, and External connection MUST have a persisted Active yes/no state. An inactive connection remains retained but is treated as not configured for R-027 resolution. Users MAY activate any subset of the three categories, including External alone. An action with no requested remote category initially requests This device only; if that category is unavailable and one active valid eligible configuration is the sole choice, R-027 promotes visibly to it. Multiple active eligible configurations require the user to select an appropriate action profile.
Replaces: None
Replaced by: None

## R-030 — One-click action presets without usage tracking

Status: ACTIVE
Source: D-025
Scope: LOT-006 and later V1 lots; no retroactive change to closed results.
Rule: The normal session MUST expose four persisted one-click action presets, defaulting in order to Correct, Rewrite, Summarize, and Translate, while retaining the complete action combo box. A preset displays only its assigned action name and immediately selects and processes that action; the ordinary combo box selects only. The Quick actions group uses the alternate surface. Each preset MUST have an adjacent borderless pencil affordance for selecting its action from the current action list. Preset assignments are user configuration and MUST NOT cause action-use tracking, frequency ordering, telemetry, or automatic reordering.
Replaces: None
Replaced by: None

## R-031 — Source-first visible-string localization discipline

Status: ACTIVE
Source: D-033; Olivier's localization-maintenance instruction
Scope: LOT-008 and every later lot, including post-V1 lots; no retroactive change to closed results.
Rule: Before adding or changing any user-visible text, implementation MUST first reuse an existing English source-catalog key when its meaning matches. Views and code MUST reference that key rather than duplicate a literal string. When no suitable key exists, the English source catalog MUST be extended first; translated caches whose source fingerprint no longer matches MUST be treated as stale and fall back to English until explicitly regenerated or replaced by a compatible reviewed pack. New visible text MUST NOT be added directly to a view as an untracked literal. Catalog edits must preserve key stability and placeholder semantics.
Replaces: None
Replaced by: None
