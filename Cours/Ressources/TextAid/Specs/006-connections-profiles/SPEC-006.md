# LOT-006 — V0.5 — Connections and profiles

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Separate action choice from model configuration and provider connection.

## Context

Source milestone: `docs/TextAid specification.md`, section 77; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-005.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-006-001 — Typed configuration

Implement ConnectionDefinition, ModelProfile, AiClientFactory, and ProfileResolver. Resolve Action → ModelProfile → Connection → IChatClient → MAF; keep provider-specific options opaque to Core. Action `profileId` determines the selected ModelProfile.

Source: `docs/TextAid specification.md`, sections 39–43, 77.

### REQ-006-007 — Requested configuration and eligibility

Validate every action `profileId` and resolve its requested configuration before an invocation starts. Preserve a visible local default profile. A requested configuration that does not exist or is not configured is ineligible and MUST enter the configured automatic downgrade sequence. A present configuration that is invalid (for example, malformed endpoint or a required credential is missing) MUST first show an explicit configuration error, then offer the user a downgrade to the next eligible category; it MUST NOT downgrade automatically.

Source: D-009, D-015, R-022.

### REQ-006-008 — Concurrent connection categories

Persist independent This device only, On-premises, and External connection definitions concurrently. A ModelProfile chooses one connection; no global mode may replace the selected profile for unrelated actions.

Source: D-011, D-015, R-005, R-022.

### REQ-006-009 — Action generation overrides

Resolve an action's selected profile and optional temperature override for each invocation. An absent or unconfigured requested profile category follows REQ-006-011. Reject an invalid profile definition or an override outside the supported range. For an invalid configured connection, show the error and offer the user the downgrade described by REQ-006-011; never silently substitute a profile or temperature.

Source: D-012, D-015, R-022.

### REQ-006-010 — Action-language validation

Validate each action output-language default against the supported language catalog, permitting the explicit **Unchanged** value. Invalid action-language data must not replace the last valid configuration.

Source: D-013, R-020.

### REQ-006-002 — Default configuration

Create schemaVersion 1 configuration on first launch under the user profile. Standard action files are separately created and maintained in the unversioned `actions` subdirectory beside the executable. Default to This device only, Debug off, Ollama endpoint http://127.0.0.1:11434, and no arbitrary preselected model. Ollama absence MUST NOT prevent startup.

Source: `docs/TextAid specification.md`, sections 43–45, 77.

### REQ-006-003 — Model discovery

Query locally available Ollama models through OllamaSharp and allow the user to select a model; no selected model MUST block invocation with an explicit message.

Source: `docs/TextAid specification.md`, sections 46, 64, 77.

### REQ-006-004 — Configuration validation

Validate duplicate IDs, unknown action/profile/connection/provider, malformed endpoints, and missing models. Configuration reload MUST validate a new configuration completely before replacing the active one. Action JSON has no schema-version field; action validation remains LOT-005 work.

Source: `docs/TextAid specification.md`, sections 39–46, 69, 85.

### REQ-006-005 — Translation language preferences

Persist and validate a user language and a preferred translation language in versioned configuration, using distinct BCP-47 identifiers from the application language catalog. These values MUST be available to the later `Ctrl+C+T` direction decision and editable in LOT-008 Settings. Configuration reload MUST retain the previous valid values if the new language preferences are invalid. This lot does not yet activate the quick-translation shortcut.

Source: D-004, D-006, R-018; Olivier's quick-translation instruction.

### REQ-006-006 — Shortcut assignments

Persist separate normal-action and quick-translation shortcut assignments, defaulting to `Ctrl+C+C` and `Ctrl+C+T`. Validate that both complete sequences are supported by the keyboard recognizer and do not conflict with each other. Invalid reload MUST preserve the previous valid assignments. LOT-008 exposes reassignment in Settings and activates the quick-translation binding.

Source: D-005, R-015; Olivier's shortcut-reassignment instruction.

### REQ-006-011 — Explicit downgrade resolution and status

Resolve configurations in this order: Local actions use This device only. An On-premises request uses On-premises when it exists and is configured; otherwise it automatically downgrades to This device only. An External request uses External when it exists and is configured; otherwise it automatically downgrades to On-premises when it exists and is configured, then to This device only. Every automatic downgrade MUST be stated in the invocation status, naming both the unavailable requested category and the selected category.

A configured connection is eligible only after its structural validation and required credential validation succeed. If a requested configured connection is invalid, including a malformed endpoint or missing required secret, show an explicit configuration status and then offer the user the next eligible lower category. If the selected eligible provider or LLM later fails to respond, show that provider failure and then offer the same user-controlled downgrade. A declined offer leaves the current invocation failed; an accepted offer starts a new invocation using the selected lower category and states that selection in the status.

Source: D-022, R-027.

### REQ-006-012 — User-profile secret vault

Allow On-premises and External configurations that require a secret to receive it through the application configuration workflow. Store each secret separately from `config.json` under the current user's TextAid application-data directory, encrypted with Windows DPAPI using `DataProtectionScope.CurrentUser`. Configuration retains only an opaque secret reference and never the secret value. Secrets MUST NOT be created beside the executable, in action JSON, or in logs. Missing or unreadable required secrets make the corresponding configured connection invalid and follow REQ-006-011's error-then-user-offered downgrade path.

Source: D-023, R-028.

### REQ-006-013 — Independent connection activation

Every This device only, On-premises, and External connection has a persisted **Active** setting. Inactive connections are retained but treated as not configured by resolution and therefore participate in the automatic downgrade path. The user may activate only External and operate cloud-only, activate only This device only, or combine any categories. An action that requests no remote category still requests This device only; if that connection is inactive, the invocation reports that no eligible local configuration is available.

Source: D-024, R-029.

### REQ-006-014 — Configurable one-click action presets

Persist four ordered action-preset references in versioned configuration. Default them to Correct, Rewrite, Summarize, and Translate. The normal session displays all four as one-click action buttons while retaining the complete action combo box. A preset button displays only its assigned action name and immediately starts that action; choosing an action in the combo does not start processing. The Quick actions area and presets use the alternate surface. Each preset has an adjacent borderless pencil edit affordance that opens the current action list and saves the selected action for that preset. No action-use tracking, frequency ordering, or telemetry is permitted.

Source: D-025, D-026, R-030.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-005 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, R-015 through R-018, and R-020 through R-022 apply according to their stated scopes; obsolete R-006, R-013, R-014, and R-019 remain part of closed or superseded history.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
