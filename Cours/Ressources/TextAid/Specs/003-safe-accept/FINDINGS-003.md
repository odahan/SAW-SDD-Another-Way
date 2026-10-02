# Findings — LOT-003

> Before working on this lot, read the repository root README.md.

## F-003-001 — Test target needed WPF controls

Status: RESOLVED LOCALLY
Found at: 2026-09-26T19:20:00+02:00

Finding:
The existing non-distributed test target was a Windows Forms application with one multiline TextBox, while REQ-003-005 requires a WPF target with single-line and multiline TextBox controls, a RichTextBox, focus-change control, and event display.

Evidence:
`tools/TextAid.TestTarget` contained `Form1` and `Program.cs`; it now uses WPF `App.xaml` and `MainWindow.xaml` with all required controls.

Impact:
The earlier target could not support the full repeatable replacement walkthrough.

Destination:
`tools/TextAid.TestTarget/`; validated by G-003-001 build evidence and the G-003-002 walkthrough.

## F-003-002 — Replace does not complete in the Windows walkthrough

Status: RESOLVED LOCALLY
Found at: 2026-09-26T19:40:00+02:00

Finding:
Olivier confirmed that the source text does not change after choosing Replace on the V0.2 candidate.

Evidence:
Partial G-003-002 validation by Olivier: Cancel, close, capture, and uppercase transformation work, while Replace does not.

Impact:
REQ-003-002 through REQ-003-004 are not validated; G-003-002 cannot pass.

Destination:
Investigate and correct `Win32ResultActions` before another Windows walkthrough.

Resolution:
The original native `INPUT` interop structure contained only the smaller keyboard union member, so `Marshal.SizeOf<INPUT>()` supplied a size smaller than the Win32 structure required by `SendInput` on x64. Adding the mouse union member restores the native layout and the correct structure size.

Validation:
Olivier confirmed on 2026-09-26 that Replace succeeds on the corrected EXE in Notepad, Visual Studio, Chrome, Edge, and TextAid.TestTarget.

## F-003-003 — Preview status overlays the transformed text

Status: RESOLVED LOCALLY
Found at: 2026-09-26T19:40:00+02:00

Finding:
The session status message is rendered in the same grid row as the transformed-text preview, making both texts unreadable.

Evidence:
Olivier's screenshot `C:/Users/odaha/AppData/Local/Temp/codex-clipboard-37284589-fbca-4ab5-8390-435544d5ebc7.png` shows the overlapping content.

Impact:
The transformed result and safe-failure message cannot be reliably inspected.

Destination:
Replace the vertical layout with equally sized, resizable source and transformed-text panels and an independent status row in `src/TextAid.App/MainWindow.xaml`.

Resolution:
The session now has a dedicated status row below two star-sized columns. The window uses `ResizeMode="CanResize"` with a 720 × 440 minimum, so the source and transformed-text panels retain a 50/50 split as its size changes. Human visual validation remains part of G-003-002.

## F-003-004 — Session can open behind other windows

Status: RESOLVED LOCALLY
Found at: 2026-09-26T19:50:00+02:00

Finding:
Olivier observed that the TextAid session may appear behind other windows when it opens from the keyboard gesture.

Evidence:
Olivier's LOT-003 retest report.

Impact:
The user may not see the available review and result actions.

Resolution:
After loading and source-monitor placement, the session temporarily becomes topmost, activates, receives focus, and then restores normal z-order. The caller also activates it immediately after `Show`.

Destination:
`src/TextAid.App/MainWindow.xaml.cs`, `src/TextAid.App/App.xaml.cs`; verify in G-003-002.
