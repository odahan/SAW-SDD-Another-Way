# LOT-008 — V0.7 — Settings and localization

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Make V1 configuration accessible in the UI and localize from an English source catalog.

## Context

Source milestone: `docs/TextAid specification.md`, section 79; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-007.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-008-001 — Settings sections

Provide dark-themed General, AI Connections, Models/Profiles, Language, and Debug Settings sections, plus a separate dedicated Actions page. AI Connections contains three independent tabs: This device only, On-premises, and External. Include enable/disable, double-copy delay, endpoint/authentication/test, model settings, language selection, and debug log controls. The tabs may all be configured simultaneously; an action profile selects the active connection for that action.

Source: `docs/TextAid specification.md`, sections 61–68, 79.

### REQ-008-002 — English source resources

Move every visible string in existing Views to an English source catalog; Views MUST reference resource keys rather than literal English text.

Source: `docs/TextAid specification.md`, sections 49, 79.

### REQ-008-003 — Language catalog and translation

Provide BCP-47 language entries, English/native names, and availability; reuse relevant languages for Translate. Generate non-English UI values through the current MAF provider, cache them locally, and allow user action or selection to initiate generation with progress. Resolve built-in action display names from the selected application/user language using their stable action IDs.

Source: `docs/TextAid specification.md`, sections 50–54, 79.

### REQ-008-004 — Catalog integrity and fallback

Validate translated JSON has exactly the source keys and preserved placeholders. On invalid catalog or provider failure, keep/revert to English without preventing the application from working. A user-defined display-name override takes precedence and need not be translated.

Source: `docs/TextAid specification.md`, sections 52–54, 79, 87.

### REQ-008-005 — Reload behavior

Provide explicit Reload configuration and Reload actions commands; validate completely and replace active state atomically, retaining the previous valid state on failure. A FileSystemWatcher is not required. The Actions page MUST provide an Open actions folder command for the persisted active action location. Valid saves from the Actions page MUST apply immediately to the active action set and main-session selector.

Source: `docs/TextAid specification.md`, sections 69, 79; D-019, R-026.

### REQ-008-006 — Immediate translation shortcut

The quick-translation binding, default `Ctrl+C+T`, MUST capture the original text and open one session with Translate selected and running immediately. It MUST NOT ask for an action or destination before starting. Determine the destination from the detected source language and the two Settings preferences: user language to preferred translation language; preferred translation language to user language; any other or uncertain detection to user language. Keep the normal-action binding, default `Ctrl+C+C`, on its existing action-choice path. Use the existing MAF/IChatClient transformation path and safe Replace/Copy transaction.

Source: D-004, D-006, R-017, R-018; Olivier's quick-translation instruction.

### REQ-008-007 — Translation destination and replacement state

Show the selected destination in the quick-translation session and allow the user to choose another available language. A destination change MUST start a new translation of the original captured text, cancel or supersede pending work, and prevent stale output from replacing or copying the newer result. `Replace` and `Copy` MUST be unavailable while translation is pending, after a destination change, or after failure; enable them only for the current successful translation. `Copy` leaves the source unchanged and closes the session. `Cancel` and window close retain their existing behavior.

Source: D-004, D-006, R-017, R-018; Olivier's quick-translation and result-action decisions.

### REQ-008-008 — Language and shortcut Settings

Expose the user language and preferred translation language as distinct, valid BCP-47 choices in Settings. Label the two shortcut controls Choose and Translate, explaining the defaults as `Ctrl+C`, then `C` for Choose, and `Ctrl+C`, then `T` for Translate. Let the user reassign either complete sequence, including its prefix, when it conflicts with another application. Apply valid changes to the keyboard recognizer safely and persist them. Reject unsupported or internally conflicting bindings with a clear explanation while retaining the active assignments. Settings MUST not misrepresent a shortcut as guaranteed to override a binding consumed by another application.

Source: D-004 through D-007, R-015, R-018; Olivier's language-routing and shortcut instructions.

### REQ-008-009 — Dedicated Actions page

Provide a dedicated Actions page, reachable from the main-window gear menu and the tray-equivalent application menu, that lists every action, including TextAid-supplied actions, and permits creation and editing. It MUST have an action ListBox on the left and the selected action's settings and prompt in the remaining area. The editor exposes stable ID, optional display-name override, enabled state, model profile, temperature, prompt template, and output-language default (Unchanged or a supported language). Profile choices visibly identify their This device only, On-premises, or External connection category. The reserved Translate action is shown but its identity, enabled state, profile, prompt, and translation behavior are visibly protected from editing, deletion, replacement, or reassignment. Validation errors must retain the last valid action configuration; every valid save applies immediately to the active action set and main-session selector.

Source: D-012, D-015, D-016, R-022, R-023, R-024.

### REQ-008-010 — Main-session output-language override

The main TextAid session MUST display a combo of available output languages for an action invocation. It initializes from the action default, but a user-selected language overrides that value for the current generation only. A changed language starts a new one-shot transformation from the original captured text and prevents an older result from being copied or replaced.

Source: D-013, R-020.

### REQ-008-011 — User-instructions editor and session control

The Actions editor MUST expose an English checkbox labelled **Ask for user instructions** bound to `askForUserInstructions`. To this checkbox is added a "Question to ask" free text that will be displayed in the "Ask for user instructions" dialog. The normal Choose session MUST include an **Instructions** control that opens the supplementary-instructions dialog for the currently selected action. If an action requires instructions and none were supplied through that control, Process MUST open the same dialog before that model request. The dialog is modal, themed, editable, and its value applies only to the current invocation. This control and requirement MUST NOT delay the immediate `Ctrl+C+T` quick Translate invocation.

Source: D-014, R-021.

### REQ-008-012 — Main-window application menu

Add a gear icon to the main TextAid session. It opens a local application menu equivalent to the tray application menu, including Exit, About, Actions, and Settings. Actions opens the dedicated Actions page without requiring the session to be recreated.

Source: D-015, R-023.

### REQ-008-013 — Durable locale-cache foundation

Keep English as the immutable source catalog and store each generated locale cache by BCP-47 tag in a distinct visible locale-cache location. A cache MUST be validated for exact keys and preserved placeholders before use, and MUST expose a deterministic fingerprint of the English source catalog for later compatibility checks. The cache format and location MUST allow a later feature to add separately stored user corrections and importable/exportable reviewed language packs without overwriting the generated cache or English source. LOT-008 does not expose correction editing, pack import/export, GitHub retrieval, or sharing.

Source: D-031.

### REQ-008-014 — English UI preference and catalog-generation profile

Language Settings MUST let the user keep the TextAid UI in English independently of the user language and preferred translation language. When a non-English catalog is explicitly generated, the user MUST choose the model profile used for that request from the active connection profiles only; the choice MUST be visible and MUST NOT alter ordinary action routing. The application must not claim that this setting makes a remote profile local or changes the privacy category selected by that profile.

Source: D-032.

### REQ-008-015 — Visible locale-cache fallback

When a selected non-English locale cache is stale, invalid, or unreadable, TextAid MUST revert to English and show a clear user-facing notification explaining why, that the application remains usable, and that generating or importing a compatible translation restores the localized UI. A missing cache alone need not be reported as an error.

Source: D-034.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-007 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, R-015 through R-018, and R-020 through R-024 apply according to their stated scopes; obsolete R-006, R-013, R-014, and R-019 remain part of closed or superseded history.

## Known constraints

### Localization-maintenance warning

R-031 applies. Reuse an existing English source-catalog key for every visible string when possible. Otherwise add the English key first, reference it symbolically from views/code, and treat older-fingerprint translated caches as stale until explicitly regenerated or replaced.

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
