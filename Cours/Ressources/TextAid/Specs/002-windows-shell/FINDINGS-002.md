# Findings — LOT-002

> Before working on this lot, read the repository root README.md.

## F-002-001 — WPF native files in single-file publish

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:05:00+02:00
Evidence: The first self-contained publish left native WPF DLLs beside `TextAid.exe`. With `IncludeNativeLibrariesForSelfExtract=true` and Release symbols disabled, the original publish directory contained only `TextAid.exe`; after D-001, `src/TextAid.App/bin/Publish/` also contains only `TextAid.exe` following repeated script runs.
Impact: Without this publish setting, the portable distribution requirement would fail.
Destination: `src/TextAid.App/TextAid.App.csproj` and `Directory.Build.props`; verified by G-002-001.

## F-002-002 — Restricted test sandbox prevents profile writes

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:10:00+02:00
Evidence: A sandboxed launch raised `UnauthorizedAccessException` for `%APPDATA%\TextAid`; an authorized Windows launch of the final EXE remained resident and found the generated `config.json`.
Impact: The sandboxed smoke result does not indicate a product startup failure.
Destination: G-002-001 evidence and Windows walkthrough instructions. No product change required.

## F-002-003 — NuGet scratch lock error in the restricted workspace

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:34:06+02:00
Evidence: A publish using the default `%TEMP%\NuGetScratch` failed with an inaccessible lock for the user NuGet configuration. The reported lock file was absent on inspection, and `dotnet restore TextAid.sln -m:1 -p:NuGetAudit=false` succeeded with normal profile access. Sandboxed publish and build succeed when `NUGET_SCRATCH` points to `src/TextAid.App/obj/NuGetScratch`.
Impact: This is a sandbox access issue, not a stale NuGet process or a source build failure. Retrying the default scratch path wastes time.
Destination: Root `AGENTS.md` and `README.md` give the working command sequence; `publish.ps1` sets the local scratch path automatically.

## F-002-004 — Tray menu renders white gutters at separators

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:40:53+02:00
Evidence: Olivier's Windows screenshot is preserved as `evidence/tray-menu-failed.png`. The default WPF MenuItem and Separator templates render light gutters despite dark brush setters.
Impact: REQ-002-002 and REQ-002-003 fail visual acceptance.
Resolution: Added explicit dark ContextMenu, MenuItem, and Separator templates. A WPF render probe shows thin muted separators without white gutters (`evidence/tray-menu-corrected.png`). Olivier confirmed the menu is correct on the published candidate on 2026-09-26.
Destination: `src/TextAid.App/Themes/Controls.xaml`, `src/TextAid.App/App.xaml.cs`, and G-002-003.

## F-002-005 — About window background remains white

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:40:53+02:00
Evidence: Olivier's desktop walkthrough reports a white About background. The window XAML relies on an implicit Window style and does not explicitly bind its root background to the approved token.
Impact: REQ-002-002 fails visual acceptance.
Resolution: Bound About, Settings, and session window roots explicitly to the dark brushes. A WPF render probe measured About background `#0D1117` and captured `evidence/about-corrected.png`. Olivier confirmed the screens and theme are correct on the published candidate on 2026-09-26.
Destination: `src/TextAid.App/AboutWindow.xaml`, `src/TextAid.App/SettingsWindow.xaml`, `src/TextAid.App/MainWindow.xaml`, and G-002-003.

## F-002-006 — Double-copy has no visible result while Enabled

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T03:40:53+02:00
Evidence: Olivier's desktop walkthrough reports no visible reaction to Ctrl+C+C in Enabled mode. The hook currently asks `GetAsyncKeyState(VK_CONTROL)` during a low-level callback, while detector unit tests bypass actual Ctrl transitions.
Impact: REQ-002-004 and REQ-002-005 are not demonstrably working; G-002-003 fails.
Resolution: The hook now tracks Ctrl key transitions internally. An integration probe found the trigger reached `CaptureAsync`, then opening the session failed because a TextBox defaulted to a TwoWay binding on read-only `InputText`. That binding is now OneWay. The clipboard reader retries until Unicode text appears, and unexpected capture exceptions display tray feedback. Nine detector tests pass. A Windows launch of the published EXE followed by synthetic Ctrl+C+C opened a visible `TextAid` session window without process error. Olivier confirmed on 2026-09-26 that ordinary Ctrl+C still works, Ctrl+C+C opens TextAid, and the selected text is displayed correctly.
Destination: `src/TextAid.Platform.Windows/`, `src/TextAid.App/MainWindow.xaml`, `src/TextAid.App/App.xaml.cs`, and G-002-003.

## F-002-007 — About shows a commit hash after the version

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T04:23:27+02:00
Evidence: Olivier confirmed the About details except for a long numeric suffix after the version. The generated assembly informational version is `0.1.0+f8d350fc0544b4f60879d1a0e18f75c1e684d41f`; the suffix is Git commit metadata supplied by the .NET build.
Impact: About does not present the concise product version required by REQ-002-002.
Resolution: Display the informational version before `+`, preserving a future prerelease label while omitting build metadata. The fallback assembly version displays three components. `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false -v quiet` passed with zero warnings/errors, and `publish.ps1` produced the corrected single EXE. Olivier confirmed the About version display is correct on this EXE on 2026-09-26.
Destination: `src/TextAid.App/AboutWindow.xaml.cs` and G-002-003.

## F-002-008 — Session window appears in the upper-left area

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T04:41:13+02:00
Evidence: Olivier reported the session in the upper-left quarter instead of centered on the monitor containing the focused source control. The original native placement ran at `SourceInitialized`; the resulting displayed position showed that this early call was insufficient.
Impact: REQ-002-006 and G-002-003 fail on the preceding EXE.
Resolution: Reapply source-monitor placement at `Loaded`, after WPF has initialized window geometry. An interactive Windows probe on the second monitor reported source work area `1920,0,3840,1080`, window rectangle `2540,280,3220,800`, and zero center delta on both axes (`evidence/shell-integration-corrected.txt`). Olivier confirmed the centering tests pass on the current EXE on 2026-09-26.
Destination: `src/TextAid.App/MainWindow.xaml.cs` and G-002-003.

## F-002-009 — Multiple resident processes create duplicate tray icons and hooks

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T04:41:13+02:00
Evidence: Olivier launched several instances and saw one tray icon per process. The application had no process-level single-instance guard.
Impact: REQ-002-003 and the reliability of REQ-002-004 fail; overlapping keyboard hooks can make trigger behavior confusing.
Resolution: Acquire a session-local named mutex before creating configuration, the hook, or tray icon. A second launch exits immediately. An interactive Windows probe confirmed the first process remained running, the second exited, and the trigger opened one visible session (`evidence/shell-integration-corrected.txt`). Olivier confirmed the second-instance test passes on the current EXE on 2026-09-26.
Destination: `src/TextAid.App/App.xaml.cs` and G-002-003.

## F-002-010 — Ctrl+C+C stopped working after repeated launches

Status: RESOLVED LOCALLY
Observed at: 2026-09-26T04:41:13+02:00
Evidence: Olivier reported that after closing multiple instances and relaunching, Ctrl+C+C no longer opened a window. The exact previous process state was not available for inspection.
Impact: REQ-002-004 and G-002-003 fail on the preceding EXE; Cancel and other session-close paths could not be validated by Olivier.
Resolution: The single-instance guard removes overlapping resident hooks. On the new EXE, an interactive Windows probe showed a visible session after Ctrl+C+C, exactly one session after a repeat gesture, successful window close, and one new session after retriggering (`evidence/shell-integration-corrected.txt`). Olivier confirmed that Ctrl+C+C opens the session even without selected text, Cancel and the window close button work, and the second-instance test passes. This confirms the trigger and close path on the new candidate but does not reconstruct the prior intermittent state.
Destination: `src/TextAid.App/App.xaml.cs`, `src/TextAid.App/MainWindow.xaml.cs`, and G-002-003.
