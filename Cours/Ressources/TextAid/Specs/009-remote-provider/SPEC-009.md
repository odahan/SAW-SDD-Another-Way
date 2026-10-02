# LOT-009 — V0.8 — Optional remote provider

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Demonstrate an explicitly configured remote provider without weakening local defaults.

## Context

Source milestone: `docs/TextAid specification.md`, section 80; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-008.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-009-001 — Remote IChatClient

Integrate at least one remotely hosted provider through IChatClient and the same MAF path; no direct functional provider call or duplicate AI pipeline is allowed.

Source: `docs/TextAid specification.md`, sections 4–6, 47, 80.

### REQ-009-002 — Authentication

Support None and a user-entered API key protected with Windows DPAPI under `DataProtectionScope.CurrentUser`. Store only an opaque secret reference in `config.json`; do not ask ordinary users to create environment variables. A missing or unreadable protected secret invalidates the configured connection and follows the explicit R-027 downgrade path.

Source: D-036, R-028; retained source sections 48, 80.

#### Superseded requirement text — 2026-09-28 by D-036

Support None and BearerFromEnvironment, resolving the named environment variable at use time. Do not store an API key in clear text in config.json; Windows Credential Manager is outside V1.

### REQ-009-003 — External mode requirement

Reject an Internet-hosted endpoint unless External mode is selected deliberately. This device only accepts loopback endpoints. On-premises permits only a user-declared administered-network endpoint and must not claim that TextAid has verified the endpoint's ownership or routing.

Source: D-010, R-005; retained source sections 4, 47–48, 80.

### REQ-009-004 — OpenAI-compatible connection

Implement an explicitly configured OpenAI-compatible connection through IChatClient and the existing MAF path. Its endpoint, model, and DPAPI-protected API-key reference are configuration values; an action may select its ModelProfile through `profileId`. The remote profile must be visible to the user and must never be chosen as an implicit fallback.

Source: D-009, D-036, R-028.

#### Superseded requirement text — 2026-09-28 by D-036

Implement an explicitly configured OpenAI-compatible connection through IChatClient and the existing MAF path. Its endpoint, model, and named Bearer environment variable are configuration values; an action may select its ModelProfile through `profileId`. The remote profile must be visible to the user and must never be chosen as an implicit fallback.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-008 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, and R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

### Localization-maintenance warning

R-031 applies. Reuse an existing English source-catalog key for every visible string when possible. Otherwise add the English key first, reference it symbolically from views/code, and treat older-fingerprint translated caches as stale until explicitly regenerated or replaced.

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
