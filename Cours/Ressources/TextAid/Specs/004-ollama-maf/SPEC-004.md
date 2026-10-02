# LOT-004 — V0.3 — MAF and local Ollama

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-25T23:53:23

## Objective

Deliver the first real local AI transformation through the required middleware.

## Context

Source milestone: `docs/TextAid specification.md`, section 75; source-to-lot mapping: `docs/SOURCE-MAP.md`. This lot is part of the ordered V1 plan.

## In scope

Depends on LOT-003. Rewrite may be temporarily coded; no remote provider.

## Out of scope

Post-V1 capabilities in source section 91, except where a narrower exclusion is stated above. Do not add features beyond this lot's requirements.

## Requirements

### REQ-004-001 — Single AI path

Implement ITextTransformationService and its MAF implementation; the only provider boundary MUST be IChatClient, with OllamaApiClient from OllamaSharp. No functional code may call Ollama directly.

Source: `docs/TextAid specification.md`, sections 4–6, 75.

### REQ-004-002 — First transformation

Complete Ctrl+C+C → Rewrite → local model → preview → Replace or Copy using one input, one instruction, one model call, and one result; do not add agent tools, memory, workflows, or streaming.

Source: `docs/TextAid specification.md`, sections 5, 75.

### REQ-004-003 — Execution controls

Support configurable Ollama endpoint, model, temperature, timeout, CancellationToken, and graceful provider failure. With no model selected, show an explicit message and allow Settings/About without a transformation.

Source: `docs/TextAid specification.md`, sections 46, 60, 71, 75.

### REQ-004-004 — AI tests

Unit tests MUST use a fake IChatClient for request, response, timeout, cancellation, provider error, and empty result. Live Ollama tests remain optional integration tests.

Source: `docs/TextAid specification.md`, sections 75, 86.

## Important cases

Validate success and failure paths described in the active requirements; use the source specification for examples and exact user-facing messages where given.

## Dependencies

LOT-003 must be closed before this lot starts. Active R-001 through R-005, R-007 through R-012, and R-015 through R-018 apply according to their stated scopes; obsolete R-006, R-013, and R-014 remain part of closed or superseded history.

## Known constraints

The source document is retained for traceability. If it conflicts with an active Pro-Spec requirement or rule, record a finding and obtain the required human decision before changing active intent.
