# LOT-003 Windows replacement-safety walkthrough

Result: `src/TextAid.App/bin/Publish/TextAid.exe` (SHA-256 in `GATES-003.md`). Run `publish.ps1`, then run the EXE on a Windows desktop. `TextAid.TestTarget` is non-distributed and can be launched from `tools/TextAid.TestTarget/bin/Debug/net10.0-windows/TextAid.TestTarget.exe`.

The temporary V0.2 transformation is uppercase. TextAid copies the preview before either result action. **Copy** never restores or focuses the source window and never emits Ctrl+V. **Replace** only sends Ctrl+V after it validates the captured source HWND, restores it, confirms it is foreground, and observes all Ctrl/Alt/Shift/Windows keys released. If any condition fails, the result remains in the clipboard and only Cancel remains available. A normally started TextAid may be unable to replace text in an elevated application; do not try to bypass that Windows integrity restriction—use Copy or run both applications at the same integrity level.

1. Launch TextAid and `TextAid.TestTarget`. In the target, select text in each of the single-line TextBox, multiline TextBox, and RichTextBox. Trigger `Ctrl+C+C`; verify the captured text and uppercase preview. Choose **Replace** and verify only the original selection changes. Repeat with Unicode and multiline selections.
2. Select text in each target control, invoke TextAid, and choose **Copy**. Verify that the source text is unchanged, the TextAid session closes, and pasting manually elsewhere produces the uppercase preview. Verify that focus was not restored to the source as part of Copy.
3. Invoke TextAid and use **Cancel**, Escape, Alt+F4, and the window close button in separate runs. Verify each closes the session without changing the source.
4. Invoke TextAid, then close the source application before selecting Replace. Verify no paste occurs, the result stays in the clipboard, TextAid displays the safe error, and Cancel closes the session.
5. Invoke TextAid and intentionally keep Ctrl, Alt, Shift, or a Windows key held while choosing Replace. Verify TextAid does not paste and reports the modifier-key safety error. Release the keys and start a new session for the next test.
6. Use Notepad, a Chromium browser text field, and Visual Studio or VS Code in addition to TestTarget. Repeat successful Replace and Copy. Record any application-specific focus or integrity limitation as a finding.
7. Resize the TextAid session wider, narrower, taller, and shorter (down to its minimum size). Verify that captured and transformed text remain in separate readable panels, each occupying half of the available width, and that the status message does not overlap either panel.

Record the date, validator name, candidate SHA-256, acceptance or corrections in G-003-002. The HUMAN gate remains `TO TEST` until Olivier accepts this matrix.
