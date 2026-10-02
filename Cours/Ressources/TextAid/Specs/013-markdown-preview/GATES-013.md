# Gates — LOT-013

> Before working on this lot, read the repository root README.md.

## G-013-001 — Rendered-preview regression tests

Type: AUTO
Status: PASS

Condition:
Deterministic tests prove that the supported Markdown constructs produce a native readable document under the dark theme; plain-text output remains plain; raw HTML is inert; links cannot activate; a renderer failure falls back to raw plain text; and Copy/Replace retain the exact raw Markdown result with their existing safe state gates.

Method:
Run `dotnet test -m:1` for applicable projects and inspect the built WPF application.

Validated at: 2026-09-29T00:06:55+02:00
Validated by: Codex
Evaluated result: Published 1.1.0 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `F3D9715551624D3A382DD351CFD5C1EF511F3A35BC87479DE2563D344A923E7A`.
Comment: `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false` completed with 103 passing tests. The deterministic STA WPF tests cover native FlowDocument construction for headings, emphasis, strong emphasis, lists, quotation, code, thematic breaks, links, raw-HTML inertness, image removal, disabled hyperlinks, and renderer fallback. Existing result-action tests remain green; the view keeps `InvocationSession.OutputText` as the raw Copy/Replace source.

Test history:

- 2026-09-29 — PASS. First evaluation on the published candidate identified above.

## G-013-002 — Windows rendered-preview walkthrough

Type: HUMAN
Status: PASS

Condition:
On Windows, a user reviews a Markdown result containing headings, emphasis, lists, quotation, code, and a link in the dark preview; confirms keyboard accessibility and no external navigation; then confirms Copy and safe Replace still use the raw Markdown text.

Method:
Exercise the published self-contained TextAid.exe.

Validated at: 2026-09-29T00:06:55+02:00
Validated by: Olivier
Evaluated result: Published 1.1.0 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `F3D9715551624D3A382DD351CFD5C1EF511F3A35BC87479DE2563D344A923E7A`.
Comment: Olivier authorized LOT-013 closure after the Windows preview review and the targeted corrections: the `**bold**` raw selector and bold rendered selector no longer leak a WPF object; disabling Markdown returns immediately to raw text; rendering is dark and inert; and returning the UI to English is immediate and global. This closure authorization accepts the rendered-preview walkthrough, including raw Markdown retention for result actions and inactive preview links.

Test history:

No prior evaluations.
