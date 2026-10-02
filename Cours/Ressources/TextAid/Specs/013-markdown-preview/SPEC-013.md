# LOT-013 — Post-V1 — Rendered Markdown preview

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-28T00:00:00+02:00

## Objective

Make Markdown-mode results easy to review by rendering them natively in TextAid's dark WPF preview, while retaining the safe raw-Markdown Copy and Replace behavior.

## Context

The existing Markdown output option asks the model for Markdown but the preview displays its syntax as plain text. D-042 selects `MdXaml` version 1.27.0 to generate a WPF `FlowDocument`; HTML and RTF are not preview formats.

## In scope

Depends on LOT-012. The implementation uses `MdXaml` 1.27.0 in `TextAid.App` and renders only when the invocation requests Markdown output.

## Requirements

### REQ-013-001 — Native rendered Markdown preview

When Markdown output is enabled for an invocation, the completed result preview MUST render the Markdown in a read-only WPF `FlowDocument`. At minimum, headings, paragraphs, emphasis, strong emphasis, ordered and unordered lists, block quotes, inline code, fenced code blocks, thematic breaks, and ordinary links MUST be visibly distinguished. A non-Markdown invocation MUST retain the existing plain-text preview.

### REQ-013-002 — Dark theme and safe content boundary

The rendered preview MUST use TextAid's dark palette, remain readable with keyboard and screen-reader access, and scroll without changing the transaction layout. Model output is untrusted: raw HTML and HTML blocks MUST not be interpreted; no external image, stylesheet, script, browser surface, process launch, or network request may result from rendering Markdown. Links may be displayed but must not be activated by the preview.

### REQ-013-003 — Preserve result actions

Rendering is presentation-only. The original Markdown string remains the authoritative result. Copy and Replace MUST continue to copy and use that exact raw string, preserving the existing safe source-window transaction. The rendered control is read-only and cannot cause a new model call, alter the result, or enable actions before the latest result is successful.

### REQ-013-004 — Dependency and fallback behavior

Use exactly `MdXaml` version 1.27.0 for the WPF Markdown-to-`FlowDocument` conversion unless a later human decision supersedes D-042. A rendering exception or unsupported Markdown construct MUST leave the raw result available in the plain-text preview and MUST preserve Copy, Replace, and Cancel. The final self-contained EXE must include the renderer without a separate installation.

## Out of scope

Generating HTML or RTF; rich-text clipboard formats; editable Markdown; a browser control; active hyperlinks; remote images or resources; syntax-highlight themes beyond the readable dark preview; and changing model prompts, result-action semantics, or the one-transformation product scope.

## Dependencies

LOT-012 must be closed. D-042 and active R-002, R-003, R-007, and R-017 apply.
