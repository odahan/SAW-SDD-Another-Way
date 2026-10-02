# LOT-003 — V0.2 — Safe result actions

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Prove explicit Replace and Copy outcomes without AI.

## Context

Source milestone: `docs/TextAid specification.md`, section 74; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Use a temporary uppercase transformation. MAF work waits for this lot's closure.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-003-001 — Transaction outcomes

The session MUST offer Replace, Copy, and Cancel for a completed result. X, Escape, and Alt+F4 mean Cancel. Cancel MUST leave the source unchanged and destroy the current session. Replace and Copy MUST be unavailable until the result is complete.

Source: `docs/TextAid specification.md`, sections 19–22, 74; D-006, R-017.

### REQ-003-002 — Captured target

Replace MUST use the source HWND captured at invocation, never a newly sampled foreground window. Verify IsWindow and confirmed restoration/focus before synthetic paste.

Source: `docs/TextAid specification.md`, sections 28–30, 74; D-006, R-017.

### REQ-003-003 — Clipboard and paste

Replace MUST place the complete result in the clipboard, wait briefly for all Ctrl/Alt/Shift/Win keys to be released, and send Ctrl+V via SendInput only when safe. Copy MUST place the complete result in the clipboard, leave the source unchanged, perform no focus restoration or paste, and then close the session. Never use SendKeys.SendWait.

Source: `docs/TextAid specification.md`, sections 29–32, 74; D-006, R-017.

### REQ-003-004 — Safe failure

If target validation, restoration, modifier release, or paste fails, do not paste into another window; retain the result in the clipboard and show an understandable error. Document elevated-application limitations.

Source: `docs/TextAid specification.md`, sections 30–33, 74.

### REQ-003-005 — Windows test target

Create the non-distributed WPF TextAid.TestTarget with single-line and multiline TextBox, RichTextBox, focus-change button, and event display for repeatable selection, focus, Unicode, and paste checks.

Source: `docs/TextAid specification.md`, sections 74, 82.

### REQ-003-006 — Elastic 50/50 review layout

The session MUST present captured text and transformed text side by side in equally sized panels. The window MUST be resizable while preserving the equal split, and its status message MUST have an independent, non-overlapping display row.

Source: D-008.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-002 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
