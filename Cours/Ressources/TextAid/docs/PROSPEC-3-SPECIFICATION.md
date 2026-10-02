# SAW 3.2 — Pro-Spec 3 Protocol Specification

SAW (SDD Another Way) is a method created by Olivier Dahan © 2025–2026. SAW 3.2 carries forward Pro-Spec 3.

## 1. Document Status

This document defines the SAW 3.2 documentation protocol, which carries forward Pro-Spec 3.

Normative Revision: `2026-09-24.5`.

It describes:

- mandatory artifacts;
- their content;
- their mutation rules;
- the lifecycle of a batch;
- validations;
- closure;
- capitalization;
- the optional grouping of projects into an Application;
- the minimum compliance conditions of the method.

The manual protocol constitutes the reference.

A Pro-Spec project MUST remain usable without a special agent, without an IDE and without an imposed version control system.

This version does not authorize parallel execution of several batches in the same project. Distinct projects of the same Application MAY be executed simultaneously according to section 20 bis.

## 2. Normative Vocabulary

The following words have a stable normative meaning, regardless of the document language:

| Word | Meaning |
|---|---|
| `MUST` | Absolute obligation. |
| `MUST NOT` | Absolute prohibition. |
| `SHOULD` | Strong recommendation. Any deviation SHOULD be justified. |
| `SHOULD NOT` | Strongly discouraged practice. Any deviation SHOULD be justified. |
| `MAY` | Optional possibility. |

## 3. Object of Pro-Spec 3

Pro-Spec 3 is a delegation and continuity method based on a lightweight documentation protocol.

A « Pro-Spec project » is a documentation management unit. It MAY represent an entire application, a sub-function or another identifiable scope of work; it assumes neither a distinct project in the usual organizational sense nor a separate code repository. Each unit nevertheless retains its own documentation root and project artifacts.

The size of the team or project is not a criterion for applicability of Pro-Spec.

Pro-Spec distinguishes itself by the absence of material or software dependency specific to the method.

It notably imposes:

- no specific hardware;
- no script;
- no preset;
- no Python environment;
- no IDE;
- no version control system;
- no agent or LLM provider.

A system capable of storing and modifying Markdown files is sufficient to apply the method manually.

The human remains at the center of decisions.

No decision is automatic.

A deterministic verification or a documentation operation MAY be assisted by ordinary commands.

Such assistance MUST NOT substitute for a human decision required by the protocol.

It allows explicitly preserving:

- intention;
- scope;
- rules;
- decisions;
- work status;
- acquired knowledge;
- validations;
- gaps between intention and result.

Markdown artifacts constitute the protocol.

Ordinary editor commands and checks MAY facilitate its application, but the method is fully expressed by its Markdown artifacts.

## 4. Principles

### 4.1 Transparency

Any rule governing work MUST be readable in the artifacts.

An indispensable behavior MUST NOT reside solely in:

- a program;
- a plugin;
- a hidden prompt;
- an external runtime;
- a previous conversation.

### 4.2 Independence

Pro-Spec MUST NOT impose:

- Git;
- another version control system;
- an IDE;
- an agent;
- an LLM provider;
- a branch system;

### 4.3 Source of Truth

Markdown files are the source of truth.

A proprietary representation MUST NOT make authority in their place.

### 4.4 Separation of Responsibilities

Each artifact answers a distinct question.

Information SHOULD remain in the artifact to which it belongs.

Other artifacts SHOULD reference it without copying it.

### 4.5 Distribution of Processing

```text
deterministic operation   → program or command
semantic understanding    → LLM
lasting intention         → Markdown
business validation       → human
```

### 4.6 Proportionality

Any supporting practice SHOULD remove more complexity than it introduces.

## 5. Artifacts

Pro-Spec 3 defines nine required artifacts and one recommended global artifact: `HISTORY.md`.

### 5.1 Global Artifacts

| Artifact | Question |
|---|---|
| `README.md` | How to work in this project? |
| `PROJECT.md` | What is the project and why does it exist? |
| `RULES.md` | Which active rules govern the project? |
| `STATUS.md` | What is the current status of batches? |
| `LEDGER.md` | Which lasting decisions have been taken and why? |
| `HISTORY.md` | Which significant operations were performed, by whom and when? |

The first five global artifacts are required. `HISTORY.md` is strongly recommended, but a very small project MAY omit it without losing its compliance to Pro-Spec 3. Its presence and form SHOULD be indicated in `README.md` so that executors know where to record operations.

### 5.2 Batch Artifacts

| Artifact | Question |
|---|---|
| `SPEC-xxx.md` | What must the batch accomplish? |
| `FINDINGS-xxx.md` | What was learned during the batch? |
| `GATES-xxx.md` | Under what conditions can the batch be closed? |
| `CONVERGENCE-xxx.md` | What was obtained and why is the batch closed? |

## 6. Disk Organization

### 6.1 Main Batch

```text
/
├── README.md
├── PROJECT.md
├── RULES.md
├── STATUS.md
├── LEDGER.md
├── HISTORY.md
└── Specs/
    └── 001-export-pdf/
        ├── SPEC-001.md
        ├── FINDINGS-001.md
        ├── GATES-001.md
        └── CONVERGENCE-001.md
```

`CONVERGENCE-001.md` MAY be absent before preparation of closure.

`HISTORY.md` MAY be absent in a very small project according to section 14 bis.

### 6.2 Sub-batch

```text
Specs/
└── 001-export-pdf/
    └── 001-002-pdf-a/
        ├── SPEC-001-002.md
        ├── FINDINGS-001-002.md
        ├── GATES-001-002.md
        └── CONVERGENCE-001-002.md
```

The parent batch retains its identifier.

`LOT-001` MUST NOT become `LOT-001-000` after its creation.

### 6.3 Names

Normative file names are in English.

Folder names use:

```text
<numeric-identifier>-<short-name>
```

The short name SHOULD be:

- descriptive;
- stable;
- written in lowercase;
- separated by hyphens;
- independent of the active batch status.

## 7. Identifiers

### 7.1 General Rules

Any identifier MUST be unique in the project.

Any identifier MUST be immutable.

An identifier removed, cancelled or rendered obsolete MUST NOT be reused.

The identifier makes authority.

A Markdown link is optional.

### 7.2 Canonical Forms

| Element | Form | Example |
|---|---|---|
| Batch | `LOT-nnn` | `LOT-001` |
| Sub-batch | `LOT-nnn-nnn` | `LOT-001-002` |
| Requirement | `REQ-<lot>-nnn` | `REQ-001-003` |
| Sub-batch Requirement | `REQ-<lot>-<sub-lot>-nnn` | `REQ-001-002-003` |
| Finding | `F-<lot>-nnn` | `F-001-010` |
| Sub-batch Finding | `F-<lot>-<sub-lot>-nnn` | `F-001-002-010` |
| Gate | `G-<lot>-nnn` | `G-001-004` |
| Sub-batch Gate | `G-<lot>-<sub-lot>-nnn` | `G-001-002-004` |
| Decision | `D-nnn` | `D-023` |
| Rule | `R-nnn` | `R-012` |
| History Event | `EVT-nnnnnn` | `EVT-000042` |

Numeric segments use three digits padded with zeros, except `EVT`, which uses six.

`EVT` is used only if the project chooses the detailed format of `HISTORY.md`.

### 7.3 Archive References

An archived incarnation uses a reference of the form:

```text
LOT-001-OBSOLETE-001
```

This reference is not a new logical batch identifier.

The logical identifier remains `LOT-001`.

The suffix distinguishes preserved incarnations of the same logical batch.

An assigned archive reference MUST be unique and MUST NOT be reused.

### 7.4 References

Minimal reference:

```markdown
Source: F-001-010
```

Reference with optional link:

```markdown
Source: [F-001-010](../Specs/001-export-pdf/FINDINGS-001.md#f-001-010)
```

A broken link does not render the identifier invalid.

## 8. Dates and People

### 8.1 Default Format

The default format is:

```text
YYYY-MM-DDTHH:mm:ss
```

Example:

```text
2026-09-24T15:10:00
```

### 8.2 International Project

An international project SHOULD impose a UTC offset:

```text
YYYY-MM-DDTHH:mm:ss±HH:mm
```

Example:

```text
2026-09-24T15:10:00+02:00
```

The choice of format MUST be recorded in `RULES.md` when it differs from the default format.

### 8.3 Human Identity

Human validation requires a free name.

Pro-Spec imposes neither email address, nor account, nor cryptographic signature.

Several people MAY be indicated.

Pro-Spec does not determine if a person possesses the required authority.

## 9. Obsolescence and Replacement

### 9.1 Marking

An element that ceases to be active MUST remain present.

Its title MUST begin with:

```text
[OBSOLETE]
```

A date MAY be added:

```text
[OBSOLETE 2026-09-24]
```

A replaced element MUST contain:

```text
Replaced by: <identifier>
```

The replacer MUST contain:

```text
Replaces: <identifier>
```

The normative form is `Replaced by`.

### 9.2 Preservation

The content of an element marked `[OBSOLETE]` MUST be preserved.

It MUST NOT be rewritten after its obsolescence.

A typographical correction MAY be made if it does not change the meaning.

### 9.3 Complete Replacement of a Batch Document

The active document retains the canonical name:

```text
SPEC-001.md
```

The first fully replaced version becomes:

```text
SPEC-001-OBSOLETE-001.md
```

Subsequent replacements use:

```text
SPEC-001-OBSOLETE-002.md
SPEC-001-OBSOLETE-003.md
```

The suffix `OBSOLETE-nnn` identifies a documentation archive.

It does not create a new logical batch.

A genuinely different objective MUST receive a new batch identifier.

### 9.4 Complete Replacement of a Batch

An obsolete incarnation MAY be preserved in a suffixed folder:

```text
001-export-pdf-OBSOLETE-001/
```

Its files SHOULD use the same suffix.

The active replacement resumes the canonical path of the same logical batch.

`STATUS.md` MUST contain a line for the obsolete incarnation and a line for the active incarnation.

## 10. `README.md`

### 10.1 Responsibility

`README.md` defines the project work protocol.

It MUST remain the universal entry point.

It MUST NOT contain:

- detailed product definition;
- detailed technical rules;
- detailed batch status;
- history of decisions.

### 10.2 Minimal Sections

```markdown
# Pro-Spec project protocol

## Purpose of this file
## Protocol reference
## Mandatory bootstrap
## Starting a lot
## Working on a lot
## Validating a lot
## Closing a lot
## Mutation rules
## Human-only decisions
```

### 10.3 Mandatory Bootstrap

To work on a batch, the reading order is:

```text
1. README.md
2. PROJECT.md
3. RULES.md
4. All active decisions of LEDGER.md
5. Explicitly referenced obsolete decisions
6. STATUS.md
7. SPEC-xxx.md
8. FINDINGS-xxx.md
9. GATES-xxx.md
10. CONVERGENCE-xxx.md, if this file exists
```

Reading all active decisions is mandatory.

The ledger contains only lasting decisions. This reading prevents an applicable decision from being discarded by imperfect relevance detection.

An unreferenced obsolete decision MAY not be read in full.

`HISTORY.md`, when it exists, does not part of the usual bootstrap. It SHOULD be consulted when the chronology of an operation helps a resumption, reconciliation or audit. Its absence does not block these procedures.

### 10.4 Reference from a Batch

Batch artifacts MUST begin with a short reference to the root `README.md`.

Example:

```markdown
> Before working on this lot, read the repository root README.md.
```

Bootstrap instructions MUST NOT be copied into batch files.

### 10.5 Documentation Autonomy

From `README.md`, an executor MUST be able to find all rules necessary for applying the protocol in the project, without previous conversation or unwritten local convention.

The section `Protocol reference` MUST identify the version and revision of Pro-Spec applied, as well as the accessible location of the corresponding normative reference. A reference to an unidentified current version is not sufficient.

A transmission announced as autonomous MUST include this normative reference and documents necessary for bootstrap. The reference MAY be integrated into `README.md` or kept in a local document accessible from it; it does not constitute an eleventh type of project artifact.

Applicable procedures MUST be consulted before execution. It is not necessary to copy the entire method into each artifact.

Documentation autonomy assumes the necessary skills for the requested work. It MUST NOT assume knowledge of decisions or procedures specific to the project that are not written.

## 11. `PROJECT.md`

### 11.1 Responsibility

`PROJECT.md` defines what is built and why.

When the Pro-Spec project corresponds to a sub-function of an Application, this file defines its own scope and its contribution to the whole.

It is very stable.

### 11.2 Minimal Sections

```markdown
# Project

## Purpose
## Problem
## Users and actors
## Scope
## Out of scope
## Stable functional characteristics
## Glossary
```

### 11.3 Excluded Content

`PROJECT.md` MUST NOT contain:

- batch status;
- current tasks;
- detailed technical choices;
- history of decisions.

### 11.4 Identifiers

Elements of `PROJECT.md` do not receive a default identifier.

An identifier MAY be added if a stable reference is necessary.

## 12. `RULES.md`

### 12.1 Responsibility

`RULES.md` contains the active constraints of the project.

It may notably define:

- platforms;
- languages;
- runtimes;
- architecture;
- imposed or forbidden libraries;
- security;
- tests;
- conventions;
- date formats.

### 12.2 Form of an Initial Rule

A rule present at project creation does not require a ledger decision.

```markdown
## R-001 — Rule title

Status: ACTIVE
Source: Initial project rule

Rule:
The project MUST ...

Rationale:
...

Replaces: None
Replaced by: None
```

`Rationale` is optional.

### 12.3 Evolution of a Rule

Any rule added or modified after initialization MUST reference a ledger decision.

Old rule:

```markdown
## [OBSOLETE 2026-09-24] R-001 — Rule title

Status: OBSOLETE
Replaced by: R-008
Decision: D-023

Rule:
The project MUST ...
```

New rule:

```markdown
## R-008 — New rule title

Status: ACTIVE
Source: D-023
Replaces: R-001

Rule:
The project MUST ...
```

The old rule retains its text.

### 12.4 Evolution Circuit

An evolution resulting from a finding follows this circuit:

```text
Finding
→ human decision
→ LEDGER.md
→ old rule marked [OBSOLETE], if necessary
→ new active rule
```

### 12.5 Scope of an Evolution

Any evolution of a rule MUST specify its scope in the rule or by reference to its decision: future work, current batch, already closed results designated, or set of affected results.

The decision MUST record the examination of potentially affected batches and retained follow-ups. The absence of necessary action MUST be indicated explicitly when it is the conclusion of this examination.

For a batch in progress, the effect on acquired validations MUST be treated according to section 17.10.

A new rule MUST NOT automatically reopen a closed batch. If a closed result becomes incompatible with an applicable rule, the decision MUST identify this result and the retained treatment. A possible resumption remains a human decision and follows sections 18.6 and 19.3.

Previous convergence remains unchanged until the batch is resumed. It attests closure in its original context, not compliance with all future rules.

## 13. `STATUS.md`

### 13.1 Responsibility

`STATUS.md` gives the current status of batches.

It does not constitute a detailed history.

It does not follow people or agents who worked on batches.

### 13.2 Minimal Form

```markdown
| Lot reference | Parent | Title | Status | Replaced by | Comment |
|---|---|---|---|---|---|
| LOT-001 | — | Export PDF | Closed | — | — |
| LOT-002-OBSOLETE-001 | — | Old import | Obsolete | LOT-004 | Replaced |
| LOT-003 | — | Mobile mode | Cancelled | — | No longer required |
```

`Lot reference` contains the canonical identifier or a reference to an archived incarnation.

A batch appears in `STATUS.md` from status `Planned`.

A draft MAY remain absent.

All recognized obsolete incarnations MUST appear.

### 13.3 Authority

`STATUS.md` is the sole authority on the current status of a batch.

Status MUST NOT be copied into `SPEC`, `FINDINGS`, `GATES` or `CONVERGENCE` as current authoritative status.

### 13.4 Resumption Information

Before transmitting or interrupting work on a batch, artifacts MUST allow identifying:

- the available result and its location, or absence of result;
- known remaining work;
- possible blockages and conditions for their lifting;
- next action or necessary decision.

`STATUS.md` MUST provide a current summary or references allowing to find this information. A complementary section per batch MAY be used if column `Comment` is not sufficient.

Knowledge at the origin of a blockage remains in `FINDINGS`, remaining validations in `GATES`, and intention as well as dependencies in `SPEC`. This information SHOULD be referenced rather than copied.

This minimum resumption does not constitute an activity log. A sentence MAY suffice if it provides all necessary information. It MUST be updated when the described situation changes.

## 14. `LEDGER.md`

### 14.1 Responsibility

`LEDGER.md` preserves lasting decisions.

It MUST NOT become:

- a logbook;
- a list of all problems;
- a copy of findings;
- a list of all commands executed.

### 14.2 Form of a Decision

```markdown
## D-023 — Decision title

Date: 2026-09-24T15:10:00
Decided by: Alice Martin
Source: F-001-010
Related: LOT-001, R-012

Decision:
...

Reason:
...

Consequences:
...

Replaces: None
Replaced by: None
```

Mandatory fields:

- `Date`;
- `Decided by`;
- `Decision`;
- `Reason`.

Optional fields:

- `Source`;
- `Related`;
- `Consequences`;
- `Replaces`;
- `Replaced by`.

An initial decision MAY use:

```text
Source: None
```

Several decision-makers MAY be listed if they possess the necessary authority.

The optional nature of a field does not exempt from preserving information required by another section. In particular, the scope and consequences of a rule evolution MUST be documented according to section 12.5.

### 14.3 Mutation

A validated decision is immutable.

A substantive correction produces a new decision.

The old decision becomes `[OBSOLETE]` and references the new one.

A typographical correction without change of meaning MAY be made.

## 14 bis. `HISTORY.md`

### 14 bis.1 Responsibility and Coverage

`HISTORY.md` is the chronological journal of significant operations performed on the documentation project. It describes acts executed; `LEDGER.md` preserves lasting decisions and their reasons, `STATUS.md` current status, and other artifacts their own content. A history entry does not replace any of these writings.

Its presence is strongly recommended: even a brief log facilitates understanding of chronology. A very small project MAY omit it. The choice to keep it manually, in a concise or detailed form, depends on project size and available means. The absence of the file or detailed format MUST NOT block planning, validation or closure of a batch.

When a history is kept, the human executor SHOULD record important operations modifying the documentation project: creation and transitions of a batch; evolution of a requirement, rule or gate; recording of a decision or finding; validation; convergence; resumption or reconciliation. Nearby operations MAY be grouped in the same intelligible entry. Readings, searches and commands without documentary effect MAY remain outside the journal. `HISTORY.md` does not constitute an exhaustive development log.

### 14 bis.2 Concise Form for Manual Keeping

A manual entry MAY fit on one line. It SHOULD indicate at least the date, executor, operation and useful references when they exist:

```text
2026-09-24T16:42:18+02:00 | Alex | Replaced REQ-001-002 with REQ-001-007 in SPEC-001.md | D-003
```

Date format follows section 8. The executor name does not constitute authentication nor the identity of the decision-maker. The decision and its reason remain in `LEDGER.md` when required there.

A person MAY summarize several related operations in one entry after verifying their result, for example at the end of a work session. They must not invent an execution schedule they do not know; the recording date can then be distinguished from the described period.

### 14 bis.3 Recommended Detailed Format

When the project has the necessary means, each operation MAY be described by an identified event and explicit fields, which facilitates filtering and reconciliation with other artifacts:

```markdown
## EVT-000042 — Requirement replaced

Date: 2026-09-24T16:42:18+02:00
Actor: Codex
Operation: Replace requirement
References: LOT-001, REQ-001-002, REQ-001-007
Documents: Specs/001-base64-cli/SPEC-001.md
Decision: D-003
Outcome: Applied

Summary:
REQ-001-002 was preserved as obsolete and replaced by REQ-001-007.
Reciprocal replacement references were added.
```

In this format, `Date` follows section 8; `Actor` names the executor; `References` identifies affected objects; `Documents` gives their paths relative to project root; `Decision` refers to a ledger decision, or is `None`; `Outcome` indicates observed result, for example `Started`, `Applied`, `Interrupted` or `Reconciled`. `Summary` MAY remain brief.

Identifiers `EVT-nnnnnn` are specific to the detailed format. If used, they MUST be unique and SHOULD be increasing; a correction or reconciliation SHOULD reference the concerned previous event. The fields remain optional and do not impose this format on manually kept projects.

### 14 bis.4 Writing, Correction and Resumption

The journal is kept by adding to the end of the file. Existing entries SHOULD be preserved; a correction SHOULD be made by a new entry specifying what changes. A simple operation SHOULD be noted after its application. For a composed operation, a start entry and a result entry are advised if the chosen detail level allows it. A brief manual keeping MAY only record the verified result.

An event `Started` without subsequent result signals an operation to verify. For any resumption, the executor MUST compare artifacts and apply section 22.8; they MUST NOT deduce the real status from the journal alone. If they notice unrecorded writing, they SHOULD add a reconciliation entry without inventing a date or historical actor.

The journal allows reconstructing chronology of recorded events, but does not guarantee capture of each manual edition nor exact restitution of old file versions. Archives, gate histories, convergences and possible versioning mechanisms preserve previous contents according to their own rules. The person recording a material change SHOULD feed `HISTORY.md` when the project keeps one.

## 15. `SPEC-xxx.md`

### 15.1 Responsibility

`SPEC` defines batch intention.

It does not contain:

- global rules;
- work log;
- findings;
- gate results;
- closure conclusion.

### 15.2 Minimal Sections

```markdown
# LOT-001 — Lot title

> Before working on this lot, read the repository root README.md.

Parent: None
Created: 2026-09-24T10:00:00

## Objective
## Context
## In scope
## Out of scope
## Requirements
## Important cases
## Dependencies
## Known constraints
```

`Parent` and `Created` are optional.

`Status` MUST NOT appear as authoritative status.

### 15.3 Active Requirement

```markdown
### REQ-001-001 — Requirement title

The system MUST ...
```

### 15.4 Replaced Requirement

```markdown
### [OBSOLETE 2026-09-25] REQ-001-001 — Requirement title

Replaced by: REQ-001-006
Decision: D-031

The system MUST ...
```

New requirement:

```markdown
### REQ-001-006 — New requirement title

Replaces: REQ-001-001
Decision: D-031

The system MUST ...
```

### 15.5 Mutation

Before `In-progress`, the spec MAY be completed without ledger decision.

After `In-progress`:

- a correction without change of meaning MAY be made without decision;
- an addition, removal or change of meaning of spec or gates MUST reference a ledger decision;
- replaced content MUST remain visible;
- replaced identifier MUST NOT be reused.

## 16. `FINDINGS-xxx.md`

### 16.1 Responsibility

`FINDINGS` preserves knowledge acquired during the batch.

A finding is not automatically a decision.

### 16.2 Form of a Finding

```markdown
# Findings — LOT-001

> Before working on this lot, read the repository root README.md.

## F-001-010 — Finding title

Status: OPEN
Found at: 2026-09-24T11:20:00

Finding:
...

Evidence:
...

Impact:
...

Destinations:
- Local
```

`Evidence` and `Impact` are optional.

The finding author is not required.

### 16.3 States

Possible states:

```text
OPEN
RESOLVED LOCALLY
PROMOTED TO LEDGER
PROMOTED TO RULE
DEFERRED TO LOT
DISCARDED
```

Several terminal states MAY be combined when a finding has multiple destinations.

`OPEN` does not combine with a terminal state.

`DISCARDED` does not combine with promotion.

A `DISCARDED` finding MUST contain a reason.

### 16.4 Destinations

Possible and cumulative destinations:

```text
Local
Ledger: D-xxx
Rule: R-xxx
New lot: LOT-xxx
Discarded
```

Creation of a batch from a finding is a human decision.

An `OPEN` finding does not automatically forbid `Ready-to-close`.

It MUST be examined before closure.

Its final destination MUST then be informed.

### 16.5 Required Processing at Closure

A finding MUST NOT remain `OPEN` at closure.

Each finding MUST possess one or several terminal states consistent with its destinations. Referenced decisions, rules and batches MUST exist; a recipient batch MUST be at least `Planned`.

Local resolution MUST explain sufficiently the processing performed to allow subsequent understanding. A rejection MUST retain its reason.

Finding processing MUST be completed, but work entrusted to a subsequent batch MAY remain to be realized. This report does not exempt from explicitly accepting any gap to active requirements of the closed batch.

## 17. `GATES-xxx.md`

### 17.1 Responsibility

`GATES` defines closure conditions.

It does not describe implementation.

It MUST NOT become a second spec.

### 17.2 Creation

`GATES` is created with the batch.

Gates MUST be defined before passing to `Planned`.

After `In-progress`, any addition, removal or change of meaning of a gate MUST reference a ledger decision.

### 17.3 Types

Allowed types:

```text
AUTO
LLM
HUMAN
```

`AUTO` produces a deterministic verdict.

`LLM` produces semantic analysis.

`HUMAN` reserves the verdict to a human.

An agent or LLM MAY launch an `AUTO` gate.

Type remains `AUTO` if verdict comes from a deterministic command.

Any business validation MUST be type `HUMAN`, except human decision demonstrating absence of business impact.

### 17.4 States

Allowed states:

```text
TO TEST
PASS
FAIL
N/A
```

Passing to `N/A` requires:

- a human decision;
- an entry in the ledger.

### 17.5 Gate AUTO

```markdown
## G-001-001 — Build succeeds

Type: AUTO
Status: TO TEST
Defined at: 2026-09-24T10:00:00

Condition:
The build completes successfully.

Method:
dotnet build -m:1

Tested at:
Evaluated result:
Result:
Evidence:
```

### 17.6 Gate LLM

```markdown
## G-001-002 — Rules consistency

Type: LLM
Status: TO TEST
Defined at: 2026-09-24T10:00:00

Condition:
No active requirement contradicts an active rule.

Evaluated at:
Evaluated result:
Evaluator:
Rationale:
```

An LLM gate MUST retain:

- a concise justification;
- model identification when available.

### 17.7 Gate HUMAN

```markdown
## G-001-003 — User journey validation

Type: HUMAN
Status: TO TEST
Defined at: 2026-09-24T10:00:00

Condition:
The user journey is accepted.

Validated at:
Validated by:
Evaluated result:
Comment:
```

To obtain `PASS`, a HUMAN gate MUST contain:

- a timestamp;
- human name.

Comment and proofs are optional.

An LLM MUST NOT declare a HUMAN gate satisfied.

### 17.8 Test History

A `FAIL` gate MAY become `TO TEST`, then `PASS`.

A `PASS` gate whose validation is no longer applicable MUST return to `TO TEST` according to section 17.10.

Previous attempts MUST be preserved in a section:

```markdown
### Test history
```

Before any reset or new evaluation, previous verdict, its date, identification of evaluated result, available proofs or justifications and identity of validator when required MUST be preserved in this history. This obligation applies also to successful attempts.

### 17.9 Active, Obsolete and Inapplicable Gates

An active gate is a closure condition that has not been removed or replaced by obsolescence. Only active gates participate in current verdict.

| Situation | Effect on Closure |
|---|---|
| Active gate `PASS`, validation still applicable | Condition satisfied. |
| Active gate `N/A`, with applicable human decision | Condition declared inapplicable. |
| Active gate `TO TEST` or `FAIL` | Closure forbidden. |
| Obsolete gate | Preserved for history; excluded from current verdict. |

Removal or replacement of a gate MUST retain its definition and history, apply marking of section 9 and, after startup, reference the ledger decision. A replacement MUST use a new identifier and reciprocal references. A removal without replacement MUST indicate its reason.

Marking `[OBSOLETE]` is distinct from gate `Status` field; it does not constitute a fifth verdict.

A `N/A` gate remains active. Its decision MUST specify reason and non-applicability conditions. Removal of a gate and passing to `N/A` MUST NOT be confused.

### 17.10 Validity After Modification

Any modification of result, requirement, applicable rule or validation condition likely to affect an acquired validation MUST lead to examination of its impact.

This examination MUST be recorded briefly in `GATES`, directly or by reference to a decision documenting this impact. Affected gates MUST return to `TO TEST` after preservation of previous results. If impact cannot be determined, all active gates other than `N/A` gates whose decision remains applicable MUST be re-evaluated.

Maintaining a `PASS` following examined modification MUST be justified. An affected HUMAN validation MUST be obtained again from a human; technical justification cannot substitute for it.

Applicability of `N/A` decisions MUST also be re-examined. If their conditions are no longer met, concerned gates MUST return to `TO TEST`. A new passage to `N/A` requires a new human decision recorded in the ledger.

If these operations render an active gate `TO TEST` or `FAIL` while batch is `Ready-to-close`, batch MUST return to `In-progress` before continuing work.

### 17.11 Identification of Evaluated Result

Each evaluation MUST sufficiently identify examined result to determine what verdict concerns and if it remains applicable to result presented at closure.

This identification MUST be preserved in `GATES`, directly or by reference. Field `Evaluated result` MAY designate a document version, named delivery, preserved copy or revision when project uses a version control system. Several gates on same result MAY reference a common identification.

A path designating content likely to change is not sufficient alone to distinguish successive results.

This obligation imposes neither Git, nor cryptographic fingerprint, nor complete archiving at each attempt. Project chooses a proportional means allowing to distinguish effectively evaluated results.

## 18. `CONVERGENCE-xxx.md`

### 18.1 Responsibility

`CONVERGENCE` certifies closure of a batch.

It compares:

- active requirements of spec;
- real result;
- intention evolutions visible in spec;
- essential elements of findings;
- essential gate results.

It does not copy spec, findings or gates.

For each active requirement, convergence MUST allow establishing it is satisfied or a precisely identified gap was accepted by a referenced human decision.

Grouped identifiers with common conclusion MAY suffice. Exhaustive matrix and duplication of requirement text are not required. An active requirement MUST NOT be omitted from this examination.

Section `Result obtained` MUST identify finally accepted result and allow reconciling with results evaluated in `GATES` according to section 17.11.

### 18.2 Minimal Sections

```markdown
# Convergence — LOT-001

> Before working on this lot, read the repository root README.md.

Closed at: 2026-09-24T16:00:00
Closed by: Alice Martin
Decision: None
Convergence: TOTAL

## Result obtained
## Differences from active requirements
## Essential gate results
## Findings disposition
## Residual work
## Closure decision
## Historical convergences
```

### 18.3 Levels

Allowed values:

```text
TOTAL
PARTIAL
```

`TOTAL` means all active requirements are satisfied.

`PARTIAL` means at least one gap was accepted by human.

A partial convergence requires an entry in the ledger containing:

- decision;
- reason;
- date;
- identity of human.

An unaccepted divergence forbids closure.

Acceptance of a gap and `PARTIAL` convergence MUST NOT neutralize an active gate `FAIL` or `TO TEST`. Closure conditions of section 17.9 remain applicable.

### 18.4 Closure Decision

A total ordinary closure does not require ledger entry.

Other cases require a ledger entry.

This includes:

- partial convergence;
- gate declared `N/A`;
- gap accepted during closure;
- any exceptional closure decision.

### 18.5 Stability

After closure, current convergence is stable.

It MUST NOT be modified until batch is resumed.

If batch becomes `Obsolete` or `Abandoned` without resumption, its convergence MUST be preserved without modification.

### 18.6 Resumption

When a closed, obsolete or abandoned batch is resumed with modification:

1. any existing convergence MUST be read;
2. resumption MUST be decided by human and recorded in ledger, after verification of prerequisites of section 19.3;
3. if previous closure exists, sections of its current closure MUST be copied without loss into new entry of `Historical convergences`, then current sections MUST be reset;
4. previous gate results MUST be preserved in `Test history`;
5. all applicable active gates MUST return to `TO TEST`, and `N/A` decisions MUST be re-examined according to section 17.10;
6. batch returns to `In-progress` in `STATUS` after these preparations;
7. all applicable validations MUST be obtained again before new closure.

A batch becoming `Obsolete` before any closure MAY not possess convergence. In this case, a historical convergence MUST NOT be invented. A possible draft of convergence MUST be identified as such and preserved before reset; it does not constitute previous closure.

Each historical entry MUST retain at minimum:

- old convergence level;
- old closure date;
- old closure responsible;
- old result;
- old gaps;
- old closure decision.

Entries already present in `Historical convergences` MUST remain unchanged.

### 18.7 Reactivation Without Modification

A batch `Abandoned` MAY become valid again without new validation if:

- no modification is made to result;
- no new active rule invalidates it;
- human explicitly decides reactivation;
- ledger contains motivation, identity and date.

In this case:

- convergence is not reset;
- batch becomes `Closed` again;
- gates are not replayed.

## 19. Batch States

### 19.1 Allowed States

```text
Draft
Planned
In-progress
Blocked
Stand-by
Ready-to-close
Closed
Cancelled
Obsolete
Abandoned
```

### 19.2 Meaning

| State | Meaning |
|---|---|
| `Draft` | Files in preparation. Batch not yet recognized as planned. |
| `Planned` | Spec and gates defined. Batch may be started. |
| `In-progress` | Batch currently executed. |
| `Blocked` | Execution impossible until blockage is treated. |
| `Stand-by` | Parent batch suspended during execution of sub-batch. |
| `Ready-to-close` | Work finished, active gates `PASS` still valid or `N/A` allowed. Human closure pending. |
| `Closed` | Batch closed after convergence and human decision. |
| `Cancelled` | Batch stopped before closure and not replaced. |
| `Obsolete` | Batch replaced, closed or not. |
| `Abandoned` | Previously closed result, then abandoned without replacement. |

### 19.3 Normative Transition Table

This table defines allowed transitions. Any transition absent from table MUST NOT be performed. Detailed procedures referenced complete its prerequisites and effects; section 27 scenarios illustrate them.

Any transition MUST respect sequencing of section 20. Entry into an active slot state requires that slot to be free or already occupied by same batch, except coordinated transfer from parent to sub-batch.

`Ledger not required` means transition alone does not require lasting decision; other possibly necessary decisions remain subject to protocol.

| Departure | Arrival | Prerequisites | Human Decision and Ledger | Mandatory Documentary Effects |
|---|---|---|---|---|
| `Draft` | `Planned` | Identifier assigned, spec and gates defined; section 21.2. | Ledger not required. | Record batch in `STATUS`. |
| `Planned` | `In-progress` | Bootstrap performed; slot available or parent/sub-batch transfer compliant with section 20.3. | Startup decided by human; ledger not required. | Update `STATUS` and, for sub-batch, suspend its parent. |
| `In-progress` | `Blocked` | A blockage prevents execution. | Ledger not required to note blockage. | Document blockage, lifting condition and resumption information; update `STATUS`. |
| `Blocked` | `In-progress` | Lifting condition satisfied; necessary decisions obtained. | Ledger not required for this transition alone. | Update resumption information, examine impact on validations and update `STATUS`. |
| `In-progress` | `Stand-by` | Startup of identified sub-batch authorized by human. | Ledger not required for transfer alone. | Preserve parent resumption information; coordinate both states in `STATUS` according to section 20.3. |
| `Stand-by` | `In-progress` | Sub-batch motivating suspension `Closed`, `Cancelled` or `Obsolete`; slot free. | Return decided by human; ledger not required for this transition alone. | Examine sub-batch result and its impact on parent validations; update resumption information and `STATUS`. |
| `In-progress` | `Ready-to-close` | Work finished; all active gates `PASS` still valid or `N/A` allowed. | Ledger not required, except decisions necessary for gates. | Verify gate results and decisions; update `STATUS`. |
| `Ready-to-close` | `In-progress` | Correction requested, closure refused or validation became invalid. | Correction decisions according to their nature; ledger not required for return alone. | Record reason in concerned artifacts, treat affected validations and update `STATUS`. |
| `Ready-to-close` | `Closed` | Closure procedure completed, no refusal cause. | Human acceptance; ledger in cases of section 18.4. | Finalize `CONVERGENCE`, complete approved updates, then update `STATUS`. |
| `Draft`, `Planned`, `In-progress`, `Blocked`, `Stand-by`, `Ready-to-close` | `Cancelled` | Stop before closure, without replacement, according to section 19.6. For suspended parent, exit from explicitly resolved sub-batch. | Human decision recorded in ledger. | Preserve files and record final state in `STATUS`, even for absent draft until then. |
| `Draft`, `Planned`, `In-progress`, `Blocked`, `Stand-by`, `Ready-to-close`, `Closed` | `Obsolete` | Replacer identified. For suspended parent, exit from explicitly resolved sub-batch. | Human decision recorded in ledger. | Preserve files and any convergence; establish replacement references and `STATUS` lines according to section 9. |
| `Closed` | `Abandoned` | Result not retained, without replacement. | Motivated human decision recorded in ledger. | Preserve unchanged convergence; update `STATUS`. |
| `Closed`, `Obsolete`, `Abandoned` | `In-progress` | Resumption with modification; slot available or parent/sub-batch transfer authorized. For `Obsolete`, exit from replacer explicitly resolved. | Human decision recorded in ledger before application. | Prepare resumption according to section 18.6, then update `STATUS`. |
| `Abandoned` | `Closed` | Result unchanged and no active rule applicable invalidates it; section 18.7. | Motivated, dated and named human decision in ledger. | Preserve convergence and gates; update `STATUS` without new validation. |

### 19.4 Application of Work Transitions

A requested correction during closure MUST make batch return to `In-progress`. If this correction reveals a blockage, transition `In-progress → Blocked` is then applied.

An interrupted operation between several writings MUST be treated according to section 22.8; it does not authorize additional transition.

### 19.5 Conditions of Exceptional Transitions

Any transition of cancellation, obsolescence, abandonment, resumption or reactivation requires a human decision recorded in the ledger.

Cancellation or replacement from `Ready-to-close` is direct when table prerequisites are satisfied; prior return to `In-progress` is not necessary.

Resumption of an `Obsolete` batch MUST explicitly resolve fate of its replacer and preserve immutable archives. It MUST remain only one active incarnation of logical batch.

### 19.6 Cancellation, Obsolescence and Abandonment

`Cancelled` means:

- batch was not closed;
- it will not be realized;
- it is not replaced.

`Obsolete` means:

- batch is replaced;
- its replacer is indicated;
- decision is in ledger.

`Abandoned` means:

- batch was closed;
- its result is no longer retained;
- no batch replaces it;
- reason is in ledger.

No existing file must be destroyed.

A batch cancelled or obsolete before closure MAY not have convergence.

An existing convergence MUST be preserved.

## 20. Sequencing

### 20.1 General Rule

In each Pro-Spec project, batches are executed one after another.

Only one batch MAY occupy active work slot of this project.

States occupying this slot are:

```text
In-progress
Blocked
Ready-to-close
```

It MUST therefore exist at most one batch of this project in set of these three states.

A parent `Stand-by` constitutes only normal suspension associated with this slot.

### 20.2 Blockage

A `Blocked` batch blocks execution of all other batches of same project.

Process resumes when this batch becomes:

- `In-progress`;
- `Cancelled`;
- `Obsolete`.

### 20.3 Sub-batch

Startup of sub-batch places parent in `Stand-by`.

Before this transfer, parent MUST be `In-progress` and sub-batch MUST satisfy prerequisites of its startup or resumption. Suspended parent and concerned sub-batch MUST be identifiable in `STATUS`.

Sub-batch becomes unique batch `In-progress`.

Passage from parent to `Stand-by` MUST be written before that of sub-batch to `In-progress`. An interruption between these writings falls under section 22.8.

After closure, cancellation or obsolescence of sub-batch, return of parent to `In-progress` is manual.

This return MUST wait until active slot is free and MUST include examination of effect of sub-batch result on work and validations of parent.

### 20.4 Scope of Sequencing

Active slot, blockage and transitions of sections 19 and 20 are specific to a project. Simultaneous execution of several batches of same project remains outside scope of this version.

## 20 bis. Application and Parallelism Between Projects

### 20 bis.1 Definition

English term `Application` designates a set of Pro-Spec projects contributing to same application. These projects MAY correspond to its sub-functions; they do not need to be organizational projects or distinct code bases. A project MAY also remain autonomous, without belonging to a documented Application.

An Application MAY be described by two Markdown files placed above project roots:

- `APPLICATION.md` describes nature, purpose and scope of Application;
- `PROJECTS.md` names and describes projects constituting it, as well as path of each.

When `PROJECTS.md` is used, it MUST list all member projects of Application. Each project name MUST be distinct in this list and each path MUST allow identifying without ambiguity root of corresponding project. A short description SHOULD specify scope of each.

Example organization:

```text
my-application/
├── APPLICATION.md
├── PROJECTS.md
├── api/
│   ├── README.md
│   ├── PROJECT.md
│   └── ...
└── client/
    ├── README.md
    ├── PROJECT.md
    └── ...
```

In this example, `PROJECTS.md` could contain:

```markdown
| Project | Path | Scope |
|---|---|---|
| API | api/ | Application service and public interface |
| Client | client/ | User interface |
```

`APPLICATION.md` and `PROJECTS.md` are not additional project artifacts. They do not replace `README.md` of a project, nor its rules, decisions, validations or states. Bootstrap and compliance criteria remain applicable to each project separately.

### 20 bis.2 Simultaneous Execution

Splitting an Application into several Pro-Spec projects allows executing simultaneously batches belonging to different projects. Each possesses its own batches, identifiers, `STATUS.md`, decisions and active slot. Uniqueness of identifiers is assessed in each project; a reference between projects SHOULD therefore specify name of source project and that of target project.

Presence of batch `In-progress`, `Blocked` or `Ready-to-close` in a project does not occupy slot of another project. A blockage in a project does not automatically block batches of other projects. In each of them, rule of single active batch of sections 19 and 20 continues to apply.

Dependencies, decisions and shared resources touching several projects SHOULD be made explicit in artifacts of concerned projects. Application documents MAY help locate them, but do not make authority on status of a batch or decision specific to a project.

Organization SHOULD avoid that several projects modify same product files simultaneously. If this sharing is necessary, organizers MUST define and apply a coordination mechanism for writings and conflict resolution before launching these works in parallel. They may, for example, use Git, compare differences and merge modifications, or organize writings in time. This need results from their split and shared resources; choice of mechanism belongs to them. Pro-Spec imposes neither Git nor effective simultaneous execution.

## 21. Creation of a Batch

### 21.1 Physical Draft

Physical creation MAY produce:

```text
SPEC-xxx.md
FINDINGS-xxx.md
GATES-xxx.md
```

`CONVERGENCE-xxx.md` is not necessary at this stage.

### 21.2 Recognized Batch

Batch becomes `Planned` when:

- its identifier is assigned;
- its spec is sufficiently defined;
- its gates are defined;
- it is recorded in `STATUS.md`.

Before this, it remains `Draft`.

### 21.3 Modification After Startup

After `In-progress`:

- a correction without change of meaning does not require decision;
- any change of meaning of spec or gates requires ledger decision;
- replaced information remains preserved.

## 22. Lifecycle

### 22.1 Bootstrap

Context is reconstructed according to order defined in `README.md`.

Before continuing work, inconsistencies likely to affect intention, validations or batch status MUST be resolved according to section 22.8. Resumption information defined in section 13.4 MUST be consulted when they exist.

### 22.2 Intention

`SPEC` defines expected result.

`GATES` defines closure conditions.

### 22.3 Execution

Batch passes to `In-progress` by human decision.

New knowledge is added to `FINDINGS`.

Intention changes are historized in `SPEC`.

Effect of modifications on acquired validations MUST be examined according to section 17.10. Information necessary for interruption or transmission MUST be preserved according to section 13.4.

### 22.4 Validation

Each active applicable gate is evaluated according to its type and on identified result.

A batch cannot become or remain `Ready-to-close` unless all its active gates are:

- `PASS` with validation still applicable to presented result;
- or `N/A` with recorded human decision whose conditions remain met.

### 22.5 Convergence

Convergence compares active intention to real result.

It indicates `TOTAL` or `PARTIAL`.

It establishes treatment of each active requirement, identifies accepted result and summarizes gates as well as destination of findings according to section 18.1.

### 22.6 Capitalization

Before closure:

- all findings are examined and possess terminal processing compliant with section 16.5;
- lasting decisions are recorded in ledger;
- approved rules are updated;
- decided new batches are created or planned;
- residual work is recorded.

### 22.7 Closure

Closure is always decided by human.

After acceptance:

- `CONVERGENCE` is finalized;
- approved cross updates are written;
- `STATUS` passes batch to `Closed`.

Any modification performed during closure preparation MUST be subject to same gate validity rules as during execution. Human acceptance MUST concern result and gaps effectively presented in finalized convergence.

### 22.8 Interrupted Documentary Operations

A recorded decision does not prove, by itself, that all its documentary consequences were applied.

For an operation comprising several writings:

1. required human decision MUST be obtained and, when protocol requires, recorded in ledger before application;
2. contents and previous results to preserve MUST be preserved before replacement or reset;
3. governed artifacts, references and affected validations MUST be updated;
4. their consistency MUST be verified;
5. state change noting completion of operation MUST be written in `STATUS` last among status and content artifacts; when a journal is kept, its result entry follows this verification.

A state allowing resumption of work, such as `In-progress`, is recorded after required documentary preparations and before result modifications. Parent/sub-batch transfers follow particular order of section 20.3.

When an operation was interrupted, executor MUST compare writings realized to recorded decision and identify those remaining to be performed. If decision determines sequence without ambiguity, operation MUST be completed according to this decision, without inventing a new one or requesting acceptance already documented.

If required decision is absent, ambiguous or incompatible with other artifacts, human clarification MUST be obtained before continuing operations dependent on it. A new lasting decision MUST be recorded in ledger when necessary. When no decision is required, an incomplete documentary writing MAY be completed from preserved facts and applicable rules, without inventing information.

`STATUS` remains authority on recorded state. An inconsistency with convergence or decision MUST NOT be resolved by erasing a validation, decision or previous closure. Repair MUST preserve existing traces and respect allowed transitions.

This procedure requires manual reconciliation of information, without imposing a transactional mechanism. When a journal is kept, corresponding events SHOULD be recorded there according to section 14 bis; journal does not replace comparison of artifacts.

## 23. Manual Closure Procedure

Normative procedure is:

```text
1. Read artifacts according to bootstrap and resolve blocking inconsistencies.
2. Identify presented result and active gates; verify removals and replacements.
3. Verify verdicts of active applicable AUTO gates.
4. Verify evaluations of active applicable LLM gates.
5. Verify validations of active applicable HUMAN gates.
6. Verify that validations concern presented result and remain valid; redo those which are necessary.
7. Refuse closure if an active gate remains TO TEST or FAIL.
8. Verify decisions and non-applicability conditions of active N/A gates.
9. Establish, for each active requirement, its satisfaction or gap to be accepted.
10. Examine obsolete requirements and their replacements.
11. Examine each finding and prepare terminal processing as well as destinations.
12. Prepare CONVERGENCE and qualify convergence TOTAL or PARTIAL.
13. Obtain required human decisions and record them in ledger.
14. Update RULES with scope and consequences of approved evolutions.
15. Create or plan subsequent batches decided by human.
16. Complete processing of findings; re-examine effect of modifications on validations and gaps, then return to concerned controls if necessary.
17. Verify absence of refusal cause and record Ready-to-close if not already current state.
18. Present to human identified result, convergence and associated decisions for closure acceptance.
19. After acceptance, finalize CONVERGENCE and complete approved updates; verify their consistency.
20. Pass batch to Closed in STATUS last.
```

Human MAY accept a gap during closure.

This decision MUST be recorded in ledger.

If gap requires modification of result, a `Ready-to-close` batch MUST return to `In-progress` before this modification. Affected gates MUST be treated according to section 17.10.

Human retains last word on acceptance of result. This acceptance MUST NOT bypass normative closure conditions.

## 24. Rejection of Closure

Closure MUST be refused if:

- an active gate is `TO TEST` or `FAIL`;
- an active applicable HUMAN gate has no identified and dated human validation;
- an active gate `N/A` does not possess its decision or conditions thereof are no longer met;
- a gate removal or replacement does not respect mutation rules;
- an acquired validation is no longer applicable to presented result;
- presented result or its relation to evaluated results cannot be identified;
- an active requirement was not examined;
- a gap is neither corrected nor accepted;
- a finding remains `OPEN`, was not examined or does not possess terminal processing and destinations compliant;
- a mandatory decision is missing;
- a documentary inconsistency affecting intention, validations or batch status remains unresolved;
- convergence cannot be established.

After refusal, a `Ready-to-close` batch returns to `In-progress`. A batch already `In-progress` remains there, or becomes `Blocked` if execution is impossible; a batch already `Blocked` remains so until lifting condition is satisfied. These operations follow table of section 19.3.

## 25. Role of Human

Following operations are reserved to human:

- significantly modify `PROJECT.md`;
- approve evolution of `RULES.md`;
- decide change of meaning after startup of a batch;
- validate a HUMAN gate;
- declare a gate `N/A`;
- accept a gap;
- accept partial convergence;
- create a batch from a finding;
- close a batch;
- cancel, replace, abandon or resume a batch.

Supporting checks MAY prepare these operations, but a human decision is required before they become effective.

## 27. Reference Scenarios

These scenarios illustrate normative table of section 19.3 and associated procedures. Their abbreviated presentation does not exempt from validity, traceability and consistency controls required by protocol.

### 27.1 Nominal Batch

```text
1. Create SPEC, FINDINGS and GATES.
2. Complete SPEC and GATES.
3. Record batch Planned.
4. Pass batch In-progress.
5. Execute work.
6. Record findings.
7. Pass all active gates on identified result.
8. Pass batch Ready-to-close.
9. Prepare TOTAL convergence.
10. Obtain human acceptance.
11. Finalize CONVERGENCE.
12. Pass batch Closed.
```

No closure entry in ledger is mandatory.

### 27.2 Finding Producing a Rule

```text
1. Create F-001-010.
2. Confirm finding.
3. Obtain human decision D-023 specifying rule scope and affected batches.
4. Mark old rule [OBSOLETE], if necessary.
5. Create new rule.
6. Reference D-023 in RULES.
7. Mark finding PROMOTED TO LEDGER and PROMOTED TO RULE.
8. Summarize this destination in CONVERGENCE.
9. Apply to concerned batches the decided follow-ups, notably revalidation of affected gates.
```

### 27.3 Partial Closure

```text
1. All active gates are PASS still valid or N/A allowed.
2. A gap remains.
3. Human accepts gap.
4. Ledger receives decision, reason, date and identity.
5. CONVERGENCE indicates PARTIAL.
6. Residual work is described.
7. Human closes batch.
```

### 27.4 Sub-batch

```text
1. LOT-001 is In-progress.
2. Human creates LOT-001-002.
3. LOT-001 passes Stand-by.
4. LOT-001-002 becomes unique batch In-progress.
5. LOT-001-002 is closed, cancelled or rendered obsolete.
6. After examination of sub-batch result and its impact on parent validations, human replaces LOT-001 in In-progress if slot is free.
```

### 27.5 Replaced Batch

```text
1. Human decides replacement.
2. Ledger receives decision.
3. Existing files and any convergence are preserved.
4. Reciprocal replacement references are added.
5. Active replacement uses appropriate canonical path.
6. Consistency of artifacts and references is verified.
7. STATUS records old batch Obsolete and new documentary state of replacement.
```

### 27.6 Resumption of a Closed Batch

```text
1. Read old convergence.
2. Decide resumption in ledger.
3. Move previous convergence into Historical convergences.
4. Reset current convergence.
5. Preserve gate results in Test history, return active applicable gates to TO TEST and re-examine N/A decisions.
6. Pass batch In-progress when preparations are completed and slot available.
7. Realize modifications.
8. Redo validations.
9. Produce new convergence.
10. Obtain new human closure.
```

### 27.7 Reactivation Without Modification

```text
1. LOT-001 is Abandoned.
2. Human confirms no modification is necessary.
3. Active rules are verified.
4. Ledger receives motivated, dated and nominally signed decision.
5. Existing convergence remains unchanged.
6. LOT-001 becomes Closed again.
```

## 28. Compliance Criteria of a Project

Compliance to Pro-Spec 3 requires respect of all applicable normative obligations.

Following list constitutes synthetic control and does not replace these obligations:

- nine types of required artifacts are defined;
- five required global artifacts exist;
- `HISTORY.md` is recommended; its absence in a very small project does not constitute non-compliance;
- each recognized batch possesses a spec, findings and gates;
- each closed batch possesses a convergence;
- bootstrap is explicit;
- version and revision of protocol are identified and its normative reference is accessible from entry point;
- an autonomous transmission contains references and information necessary for resumption;
- identifiers are unique;
- obsolete information is preserved;
- lasting decisions are in ledger;
- if `HISTORY.md` is kept, significant operations are recorded there by addition according to chosen detail level;
- human validations are identified and dated;
- evaluated and accepted results are identifiable and validations remain applicable;
- only active gates participate in current verdict, with applicable `N/A` decisions when used;
- each active requirement is examined and each finding possesses terminal processing at closure;
- scope of rule evolutions and their effects on existing are documented;
- no batch is closed automatically;
- allowed transitions and sequencing are respected in each project, even when it belongs to an Application;
- interrupted documentary operations are reconciled before continuing work dependent on them;
- project remains usable through its Markdown artifacts alone.

## 29. Out of Scope of This Version

This version does not define:

- parallel execution of batches within same Pro-Spec project;
- management of human rights and authorities;
- authentication;
- cryptographic signature;
- a version control system;
- an LLM provider;
- software architecture of utility;
- graphical interface;
- a proprietary format.

## 30. Protocol Summary

```text
Read before acting.
Define intention and gates.
Execute one batch at a time per Pro-Spec project.
Preserve findings.
Historize changes of meaning.
Validate according to nature of each gate.
Identify evaluated result and re-examine validations after modification.
Compare intention to result.
Make human decide.
Capitalize lasting decisions.
Keep a history proportional to project means if possible.
Preserve information necessary for resumption.
Reconcile interrupted writings before continuing.
Destroy nothing silently.
```
