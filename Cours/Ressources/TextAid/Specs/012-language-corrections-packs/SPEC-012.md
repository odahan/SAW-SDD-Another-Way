# LOT-012 — Post-V1 — Language corrections and packs

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-27T00:00:00+02:00

## Objective

Let users correct active UI translations without losing their work, and safely exchange reviewed language packs.

## Context

This post-V1 lot extends the durable locale-cache foundation supplied by LOT-008. It is deliberately optional and local-first: TextAid must work from its English source catalog with no network access.

## In scope

Depends on LOT-011 and the LOT-008 locale-cache foundation.

## Requirements

### REQ-012-001 — Personal correction layer

Provide a themed translation-review editor showing stable key, English source, active suggested translation, and the personal override. Save corrections in a separate per-language override file that takes precedence without modifying the English source or generated/reviewed cache. Provide a per-key Restore suggested translation command.

### REQ-012-002 — Portable language packs

Export and import a language pack containing BCP-47 language, source-catalog fingerprint, translated values, provenance, and review metadata. Before activation, reject mismatched fingerprints, invalid JSON, missing or extra keys, and altered placeholders. Import must leave the previously active cache and overrides unchanged on failure.

### REQ-012-003 — Community-pack interoperability

Document a repository-ready pack layout suitable for a future TextAid GitHub repository. The application may import a user-selected downloaded or shared pack; it MUST NOT require GitHub, download packages automatically, transmit user text, or overwrite personal overrides. Display the active translation origin: generated locally, imported pack, or personal override.

## Out of scope

### Localization-maintenance warning

R-031 applies. Reuse an existing English source-catalog key for every visible string when possible. Otherwise add the English key first, reference it symbolically from views/code, and treat older-fingerprint translated caches as stale until explicitly regenerated or replaced.

Automatic network updates, telemetry, accounts, contributor identity verification, social features, and automatic conflict resolution.

## Dependencies

LOT-011 must be closed. D-031 applies.
