# LOT-010 — V0.9 — Hardening and compatibility

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Stabilize the feature set through repeatable tests and Windows application checks.

## Context

Source milestone: `docs/TextAid specification.md`, section 81; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-009. The scope is limited to validation and narrowly targeted resilience or compatibility corrections discovered while exercising the matrix.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-010-001 — Resilience matrix

Test busy clipboard, stopped Ollama, missing model, timeout, cancellation, invalid configuration/JSON, unreachable provider, closed/elevated source window, empty/long text, repeated trigger, Escape/Alt+F4, Debug on/off, and invalid locale.

Source: `docs/TextAid specification.md`, sections 81, 85–87.

### REQ-010-002 — Text and display matrix

Test Unicode, emoji, CRLF/LF, very long text, and DPI at 100/125/150 percent across multiple monitors. If maxInputCharacters is configured, show actual and permitted counts and do not split input automatically.

Source: `docs/TextAid specification.md`, sections 27, 70, 81.

### REQ-010-003 — Application matrix

Validate capture/window/Replace/Copy in Notepad, Chromium textarea, Visual Studio, and VS Code; validate capture/window/Replace/Copy in Chromium contenteditable, Word, and Outlook, documenting replacement behavior. Elevated process injection is not guaranteed. Document app-specific behavior before special handling.

Source: `docs/TextAid specification.md`, sections 74, 81–82, 88.

### REQ-010-004 — Test layers

Run keyboard, template, configuration, fake-IChatClient, localization, and Windows platform tests. Keep live Ollama tests optional under an Integration category.

Source: `docs/TextAid specification.md`, sections 83–87.

### REQ-010-005 — Distribution rehearsal

Repeat a clean single-file self-contained win-x64 publish and installation-free run; verify no required sidecar file or .NET runtime.

Source: `docs/TextAid specification.md`, sections 9, 81, 90.

### REQ-010-006 — Invocation and translation regression

Exercise both configured invocation paths, including default `Ctrl+C+C` action choice and default `Ctrl+C+T` immediate translation, across the compatibility matrix. Cover both preferred-language directions, a third or uncertain source language, manual destination change, pending and failed translations, stale completion after a destination change, Replace safety, Copy without source modification, shortcut reassignment, persistence, and internally conflicting bindings.

Source: D-004, D-005, D-006, R-015, R-017, R-018; Olivier's later invocation and result-action decisions.

### REQ-010-007 — Local-model warm-up feedback

Before a This device only Ollama transformation, check through OllamaSharp whether the selected model is already loaded. When it is not loaded, load it before the transformation while the existing session progress indicator remains visible and the user sees a clear localized message that the local model is being prepared. Do not show this preparation state for a model already loaded or for an On-premises or External connection. A warm-up failure follows the existing provider-failure flow; it must not leave the session appearing blocked.

Source: Olivier's LOT-010 startup instruction, 2026-09-28.

### REQ-010-008 — Built-in Synonymes action

Add Olivier's validated `Synonymes` action to the embedded base action catalog with its current declarative prompt, local-default profile, 0.2 temperature, Unchanged output-language default, and ordinary editable-action status. It must be initialized only when missing, so an existing user action of the same identity is retained.

Source: D-037.

### REQ-010-009 — Built-in Humanize action

Add an editable `Humanize` base action that produces a more direct, natural revision while preserving factual content, names, numbers, citations, links, language, and intended voice. Its prompt removes selected formulaic AI-writing patterns and ordinary punctuation excess without claiming to evade detection, inventing details, or producing explanatory metadata. Initialize it only when missing.

Source: D-038, D-039, D-040; Wikipedia: Signs of AI writing, consulted 2026-09-28.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-009 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, and R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

### Localization-maintenance warning

R-031 applies. Reuse an existing English source-catalog key for every visible string when possible. Otherwise add the English key first, reference it symbolically from views/code, and treat older-fingerprint translated caches as stale until explicitly regenerated or replaced.

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
