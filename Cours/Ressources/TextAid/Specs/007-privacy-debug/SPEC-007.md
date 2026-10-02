# LOT-007 — V0.6 — Local-first privacy and debug

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Enforce explicit data boundaries and provide opt-in diagnostics.

## Context

Source milestone: `docs/TextAid specification.md`, section 78; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-006.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-007-001 — Deployment-mode enforcement

In This device only mode, accept only localhost, 127.0.0.1, or ::1 endpoints before any AI connection. On-premises accepts only a user-declared network endpoint and must explain that TextAid cannot verify its ownership or routing. External is required for Internet-hosted providers. When exactly one active valid eligible configuration exists, use it visibly for every action, naming any requested-to-selected downgrade or promotion; with multiple eligible choices, require the user to select an appropriate action profile. Never promote after provider or model runtime failure. No cloud fallback or telemetry is permitted in any mode.

Source: D-010, D-029, R-005, R-027.

Source: `docs/TextAid specification.md`, sections 4, 78, 85.

### REQ-007-002 — Optional debug file

Debug is off initially and creates no log or persistent buffer. When enabled, create one text log for the current work session, truncate it at the start of a new debug session, append events simply, and avoid a logging package. A separately persisted Full log option is available only while Debug is enabled; it records diagnostic text omitted by safe mode but remains local and is never sent automatically. The Debug UI explains that the user may obfuscate passages before manually sharing a log for support.

Source: `docs/TextAid specification.md`, sections 55–59, 78.

### REQ-007-003 — Log redaction

Safe Debug logs technical metadata and safe exception diagnostics only; it never logs credentials, complete clipboard contents, user input, generated output, or a prompt containing user input. Full log may include those diagnostic text fields and raw exception messages, but it MUST always redact all authentication credentials: API keys, Bearer tokens, passwords, and DPAPI-protected secrets. Full log has a visible red active indicator.

Source: `docs/TextAid specification.md`, sections 58–59, 78; D-030.

### REQ-007-004 — User-facing errors

Map clipboard, configuration, provider, model, cancellation, source-window, paste, and localization failures to explicit user-facing errors instead of raw HTTP, COM, or Win32 exception names.

Source: `docs/TextAid specification.md`, sections 60, 78. Always propose a solution, never let the user down alone when facing a problem.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-006 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, and R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
