# LOT-011 — V1.0 — Release qualification

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Release the stabilized V0.9 candidate only when the complete V1 criteria are met.

## Context

Source milestone: `docs/TextAid specification.md`, section 89; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-010. This lot adds documentation and release evidence, not a final feature wave.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-011-001 — End-to-end function

Selection → Ctrl+C+C → one of eight actions → preview → Replace → correct replacement MUST work; Copy MUST place the result in the clipboard and leave the source unchanged; Cancel MUST leave the source unchanged.

Source: `docs/TextAid specification.md`, sections 89–90; D-006, R-017.

### REQ-011-002 — Interface and AI architecture

Verify complete dark non-minimizable transaction UI, dark chrome, correct centering, explicit Replace/Copy/Cancel outcomes, all model calls through MAF/IChatClient, OllamaSharp default, and declarative actions without rebuild.

### REQ-011-003 — Optional Windows startup

Settings MUST provide a persisted switch that lets the current Windows user choose whether TextAid starts when that user signs in. Enabling it MUST create or update only TextAid's current-user startup registration; disabling it MUST remove only that registration. The UI MUST reflect the effective persisted state and show a clear recoverable error if Windows startup registration cannot be updated. This feature MUST never require administrator privileges, create a machine-wide startup entry, launch a second TextAid instance, or change the application’s normal single-instance behavior.

Source: D-035.

Source: `docs/TextAid specification.md`, sections 89–90; D-006, R-017.

### REQ-011-003 — Provider, privacy, resilience

Verify optional External provider, This device only loopback enforcement, On-premises disclosure, no telemetry/log when Debug is off, no sensitive debug content when on, clean failure when Ollama is unavailable, and no paste on failed source restoration.

Source: `docs/TextAid specification.md`, sections 89–90.

### REQ-011-004 — Localization and distribution

Verify English without AI, translated-catalog failure fallback, documented product behavior, and standalone self-contained TextAid.exe as the official distribution.

Source: `docs/TextAid specification.md`, sections 89–90.

### REQ-011-005 — Scope integrity

Keep V1 inside the one-transformation product definition. Treat source section 92 ideas as uncommitted post-V1 possibilities.

Source: `docs/TextAid specification.md`, sections 91–96.

### REQ-011-006 — Quick translation and configurable shortcuts

The default `Ctrl+C+T` path MUST start translation immediately using the configured user and preferred translation languages, reverse direction when the source is in the preferred language, and use the user language for another or uncertain source language. Choosing another destination MUST translate the original text again. `Replace` and `Copy` MUST become available only for the latest successful translation and use their distinct safe actions. Both invocation shortcuts MUST be reassignable and persist; the normal-action shortcut MUST retain action choice. Document the default mnemonic as `Ctrl+C`, then `C` for Choose or `T` for Translate, and validate any Windows application limitations of configured gestures.

Source: D-004 through D-007, R-015, R-017, R-018; Olivier's later invocation and result-action decisions.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-010 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, and R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

### Localization-maintenance warning

R-031 applies. Reuse an existing English source-catalog key for every visible string when possible. Otherwise add the English key first, reference it symbolically from views/code, and treat older-fingerprint translated caches as stale until explicitly regenerated or replaced.

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
