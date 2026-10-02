# LOT-001 — Pre-V0.1 — Visual baseline

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Approve the visual foundation before visible WPF work begins.

## Context

Source milestone: `docs/TextAid specification.md`, section 72; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Prototype or reference screen; no AI, action system, full Settings, or dynamic translation.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-001-001 — Dark palette

Fix exact dark palette and theme tokens Background, Surface, SurfaceAlt, Foreground, ForegroundMuted, Border, Accent, AccentHover, AccentPressed, Success, Warning, Error, Disabled, and Selection before V0.1 UI work. Views MUST reference tokens, not literal colors.

Source: `docs/TextAid specification.md`, sections 12–14, 72.

### REQ-001-002 — Visual system

Fix typography, principal window dimensions, and styles for all controls used by V0.1; produce a reference screen or prototype sufficient to guide implementation.

Source: `docs/TextAid specification.md`, sections 13, 72.

### REQ-001-003 — Brand assets

Approve the TextAid logo with visually emphasized AI and the application icon. The logo MUST be embeddable in the executable and usable in About, README, and product material.

Source: `docs/TextAid specification.md`, sections 1, 15–16, 72.

### REQ-001-004 — Dark native chrome

Define a dark title-bar treatment that prefers native Windows DWM chrome and preserves normal window movement, system menus, accessibility, and DPI behavior.

Source: `docs/TextAid specification.md`, sections 14, 72.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

None; this is the first lot.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
