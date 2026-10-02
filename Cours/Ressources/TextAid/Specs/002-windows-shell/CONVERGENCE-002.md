# Convergence — LOT-002

> Before working on this lot, read the repository root README.md.

Status: CLOSED
Prepared at: 2026-09-26T04:57:02+02:00
Closed at: 2026-09-26T05:00:44+02:00
Closed by: Olivier
Decision: Olivier explicitly accepted ordinary TOTAL closure for LOT-002 in the conversation on 2026-09-26. No ledger entry is required under Pro-Spec section 18.4 because no deviation or N/A is accepted.
Convergence: TOTAL

## Result obtained

The V0.1 result is `src/TextAid.App/bin/Publish/TextAid.exe`, produced by root `publish.ps1`, SHA-256 `D9B7890D45B4CA458DEF74A533D940909586062EACF4477C7F4D6FC20DD19A4B`. The canonical Publish directory contains only this self-contained win-x64 executable. This identity matches G-002-001, G-002-003, and G-002-004; G-002-002 evaluates the detector test code used by the candidate.

## Differences from active requirements

- REQ-002-001: Satisfied. The .NET 10 solution contains the named application, core, AI, Windows platform, test, and test-target projects. The WPF ViewModel uses CommunityToolkit.Mvvm; Win32 calls live in Platform.Windows.
- REQ-002-002: Satisfied. The approved dark tokens, logo, icon, native captions, and About identity are implemented. Olivier accepted the theme and the corrected About version display.
- REQ-002-003: Satisfied. One process owns the tray icon and keyboard hook. The menu exposes Enable/Disable, Settings, About, and Exit; Olivier accepted the tray behavior and second-instance test.
- REQ-002-004: Satisfied. The low-level hook preserves source input and detects the physical Ctrl+C+C sequence. Nine deterministic tests pass; Olivier accepted normal Ctrl+C and the special trigger. D-003/R-013 preserve invocation without a selection.
- REQ-002-005: Satisfied. The hook captures the foreground HWND; Unicode clipboard reading uses bounded cancellable retries. Only one invocation session opens, as confirmed by the Windows integration probe. Empty text still opens the session under D-003.
- REQ-002-006: Satisfied. The 680 × 520 DIP window has no resize/minimize or taskbar entry, and its native placement uses the source monitor work area and DPI. The probe measured exact centering on the second monitor; Olivier accepted centering, Cancel, and window-close behavior. Accept remains disabled in V0.1 as permitted by scope.
- REQ-002-007: Satisfied by the self-contained, untrimmed single-file publish and successful Windows launch with user configuration creation. A separate-machine check has not been performed; D-002/R-012 keep that empirical check deferred without weakening the distribution requirement.
- REQ-002-008: Satisfied. Root `publish.ps1` creates the sole final EXE in `src/TextAid.App/bin/Publish/`.

No product deviation from an active LOT-002 requirement remains.

## Essential gate results

- G-002-001 AUTO: PASS on the identified EXE after a zero-warning build and single-file publish.
- G-002-002 AUTO: PASS with nine keyboard event-sequence tests.
- G-002-003 HUMAN: PASS by Olivier on 2026-09-26, combining his current-candidate centering, instance, no-selection trigger, and close checks with still-applicable earlier acceptance of capture, theme, tray, About, and launch behavior. The prior failed evaluations remain in its history.
- G-002-004 AUTO: PASS; the canonical Publish directory contains only `TextAid.exe`.

## Findings disposition

- F-002-001 through F-002-003: Resolved locally through publish configuration and the documented restricted-workspace NuGet procedure.
- F-002-004 through F-002-007: Resolved locally through the dark tray/About corrections, trigger and binding fix, and concise About version; Olivier confirmed the visible results.
- F-002-008 through F-002-010: Resolved locally through post-load centering and a single-instance mutex. The integration probe and Olivier's current-candidate validation confirm placement, instance handling, and restored trigger/close behavior.

All ten findings have terminal local dispositions.

## Residual work

The separate clean Windows x64 launch check is DEFERRED, not cancelled, in `PORTABILITY-CHECKS.md` under D-002/R-012. It will be performed when a second machine is available, or on a later published candidate with the untested identity retained in the register. Manual text entry is a possible later workflow under D-003/R-013 and is not part of V0.1. LOT-003 contains the next planned Safe Accept work. These items do not represent an accepted deviation from LOT-002 requirements.

## Closure decision

Olivier explicitly accepted the identified V0.1 EXE and this TOTAL convergence on 2026-09-26. All four gates are PASS and all findings have terminal dispositions. LOT-002 is closed. The separate-machine portability check remains deferred under D-002/R-012 and is not a closure blocker.

## Historical convergences

None.
