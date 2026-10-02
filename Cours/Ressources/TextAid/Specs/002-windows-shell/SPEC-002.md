# LOT-002 — V0.1 — Windows shell and foundations

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Create the buildable Windows shell and prove the trigger and capture experience.

## Context

Source milestone: `docs/TextAid specification.md`, section 73; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

No AI call; Accept may remain disabled. Depends on LOT-001 visual approval.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-002-001 — Solution boundaries

Create the specified .NET 10 solution and project boundaries, with CommunityToolkit.Mvvm in WPF ViewModels and all Win32 dependencies confined to Platform.Windows.

Source: `docs/TextAid specification.md`, sections 7–11, 73.

### REQ-002-002 — Theme and identity

Apply the approved dark token theme to every used WPF control and native title bar; embed logo and icon. About MUST show product name, exact subtitle, assembly-derived version, and a clickable official product URL.

Source: `docs/TextAid specification.md`, sections 12–16, 73.

### REQ-002-003 — Tray and lifecycle

Run resident with a tray menu containing Enable/Disable, Settings, About, and Exit. The main window appears only for an invocation session.

Source: `docs/TextAid specification.md`, sections 16–17, 68, 73.

### REQ-002-004 — Double copy trigger

Detect Ctrl+C+C with WH_KEYBOARD_LL without suppressing ordinary copy or triggering on key repeat; keep the hook callback minimal and dispatch subsequent work to WPF.

Source: `docs/TextAid specification.md`, sections 23–24, 73, 83.

### REQ-002-005 — Capture and source

Capture the foreground source HWND at trigger time, then read CF_UNICODETEXT from the clipboard with bounded cancellable retries. Only one session may be active; ignore a second trigger while it is visible.

Source: `docs/TextAid specification.md`, sections 18, 21, 25–28, 73.

### REQ-002-006 — Main window shell

Center a fixed-size, non-resizable, non-minimizable, taskbar-hidden session window in the source monitor work area with correct DPI handling. Establish explicit InvocationSession states and an Accept/Cancel shell.

Source: `docs/TextAid specification.md`, sections 17–19, 22, 73.

### REQ-002-007 — Portable distribution

Make a Release win-x64 self-contained single-file publish with trimming disabled. The executable MUST run without adjacent configuration or .NET runtime files; create user configuration on first launch.

Source: `docs/TextAid specification.md`, sections 9, 43–45, 73.

### REQ-002-008 — Canonical publish path and script

Decision: D-001
Replaces: None

Create the root `publish.ps1` and make it produce the Release win-x64 self-contained single-file `TextAid.exe` in `src/TextAid.App/bin/Publish/`. Keep that directory as the canonical final executable location for later releases.

Source: D-001 and R-011.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-001 must be closed before this lot starts. R-001 through R-013 apply throughout.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
