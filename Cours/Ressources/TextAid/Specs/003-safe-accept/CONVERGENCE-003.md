# Convergence — LOT-003

> Before working on this lot, read the repository root README.md.

Status: CLOSED
Prepared at: 2026-09-26T19:55:07+02:00
Closed at: 2026-09-26T20:14:46+02:00
Closed by: Olivier
Decision: Olivier explicitly accepted ordinary TOTAL closure for LOT-003 in the conversation on 2026-09-26. No ledger entry is required under Pro-Spec section 18.4 because no deviation or N/A is accepted.
Convergence: TOTAL

## Result obtained

The V0.2 result is `src/TextAid.App/bin/Publish/TextAid.exe`, produced by root `publish.ps1`, SHA-256 `55D5C9C4E6C859204991AC20D2587A0CA6C3A0866765AD063FE742D8AA58A52D`. The canonical Publish directory contains only this 173,663,371-byte self-contained win-x64 executable.

## Differences from active requirements

- REQ-003-001: Satisfied. Completed results offer Replace, Copy, and Cancel; X, Escape, and Alt+F4 cancel without changing the source.
- REQ-003-002: Satisfied. Replace uses only the invocation-time HWND and verifies it exists, is restored, and is foreground before injection.
- REQ-003-003: Satisfied. Replace copies the complete result, waits for released modifiers, and uses `SendInput`; Copy writes only to the clipboard, makes no focus or paste call, then closes. No `SendKeys.SendWait` is used.
- REQ-003-004: Satisfied. Invalid target, focus, modifier, and paste failures retain the result in the clipboard, display an understandable error, and prevent arbitrary-window paste. The elevated-application limitation is documented in the walkthrough and session text.
- REQ-003-005: Satisfied. The non-distributed WPF TextAid.TestTarget supplies single-line and multiline TextBox controls, RichTextBox, focus-change button, and event display.
- REQ-003-006: Satisfied. The resizable session uses equal star-sized source/result panels and a separate status row.

No product deviation from an active LOT-003 requirement remains.

## Essential gate results

- G-003-001 AUTO: PASS on the identified EXE after a zero-warning build, 14 passing platform tests, and a single-file publish.
- G-003-002 HUMAN: PASS by Olivier on 2026-09-26 after the complete walkthrough, including Replace, Copy, cancellation, controlled failures, foreground appearance, and the elastic 50/50 layout.

## Findings disposition

- F-003-001: Resolved locally by replacing the insufficient Windows Forms target with the required WPF test target.
- F-003-002: Resolved locally by correcting the native x64 `INPUT` union layout; Olivier confirmed Replace in the application matrix.
- F-003-003: Resolved locally by separating status and preview into the resizable 50/50 layout; Olivier confirmed the result in the complete walkthrough.
- F-003-004: Resolved locally by activating the session and temporarily raising it to the foreground; Olivier confirmed the result in the complete walkthrough.

All four findings have terminal local dispositions.

## Residual work

The recurring clean-machine portability check under R-012 applies to this candidate when a separate Windows x64 machine is available. It does not represent an accepted deviation and does not block LOT-003 closure. MAF and declarative action work remains assigned to later planned lots.

## Closure decision

Olivier explicitly accepted the identified V0.2 EXE and this TOTAL convergence on 2026-09-26. Both active gates are PASS and all findings have terminal dispositions. LOT-003 is closed.

## Historical convergences

None.
