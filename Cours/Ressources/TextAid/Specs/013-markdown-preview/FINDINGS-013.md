# Findings — LOT-013

> Before working on this lot, read the repository root README.md.

## F-013-001 — Renderer selection completed

Status: RESOLVED
Recorded: 2026-09-28T00:00:00+02:00

Observation: Package research compared a native WPF FlowDocument renderer with HTML and RTF conversion routes. `MdXaml` 1.27.0 supports Markdown-to-FlowDocument and is compatible with `net10.0-windows`. The direct `Markdig.Wpf` route is archived; the HTML-to-RTF route is unnecessary for preview and adds a large commercial conversion dependency.

Evidence: D-042; NuGet package pages for MdXaml, Markdig.Wpf, and SautinSoft.HtmlToRtf.

Impact: LOT-013 renders Markdown through MdXaml, keeps raw Markdown as the authoritative result, and excludes HTML and RTF rendering.

Destination: REQ-013-001 through REQ-013-004; D-042.

## F-013-002 — Markdown preview and locale-reset integration verified

Status: RESOLVED
Recorded: 2026-09-29T00:06:55+02:00

Observation: The initial rendered selector attempted to place a `TextBlock` directly in the application-wide button template, which displayed the object's type name. The selector now uses resource-backed string content with the button's font weight. Turning Markdown output off now immediately reveals the existing raw-text preview. The review editor can explicitly delete a generated cache; doing so selects and forces English globally, closes the editor, and keeps personal corrections dormant rather than applying them to English.

Evidence: G-013-001 deterministic suite; G-013-002 closure authorization.

Impact: REQ-013-001 through REQ-013-004 remain satisfied. The cache-reset correction protects the global English fallback without changing the raw Markdown transaction or result-action contract.

Destination: Closed with LOT-013 total convergence; future localization changes remain ordinary post-closure work.
