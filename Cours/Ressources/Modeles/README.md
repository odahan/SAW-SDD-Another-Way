# SAW project protocol

> Training template. Fill every placeholder and resolve the project intent before use.

## Purpose of this file
Describe the project workflow and point to authoritative artifacts.

## Protocol reference
This project follows S.A.W. 3.2, as described in [SAW-3.2-SPECIFICATION-EXEC.md](SAW-3.2-SPECIFICATION-EXEC.md).
Revision: `3.2.0-2026-09-27`. Distributed copy corrected on 2026-10-02 to remove section 14 bis.4.

## Mandatory bootstrap
Read README, PROJECT, RULES, all active LEDGER decisions, explicitly referenced obsolete decisions, STATUS, then the lot SPEC, FINDINGS, GATES and CONVERGENCE if present. Consult HISTORY when chronology helps recovery or audit.

## Starting a lot
The human authorizes the start. Verify dependencies and the available active slot. If the next lot is ambiguous, obtain a human choice. Record In-progress before execution.

## Working on a lot
Follow SPEC and active rules. Record findings, maintain resumption information and examine validation impact after changes. Ask for required human decisions before applying them.

## Validating a lot
Evaluate each active gate according to its type on an identifiable result. Preserve previous evaluations. Record HUMAN validators and dates. N/A requires a human decision in LEDGER.

## Closing a lot
Follow the distributed protocol sections on closure. Examine every active requirement and finish every finding disposition. Prepare convergence, obtain human acceptance, finalize approved updates, verify consistency, and write Closed in STATUS last among content/state artifacts. Record the operation in HISTORY.

## Mutation rules
Preserve replaced content and identifiers. After lot start, changes of meaning to SPEC/GATES require a ledger decision. Rule evolution after initialization requires a decision with scope and effects. Do not modify a closed convergence without the resumption procedure.

## Human-only decisions
See the protocol human responsibilities and transition table. The AI may prepare these operations and must obtain the required decisions before applying them.

## History format
Append significant documentary operations to HISTORY. Preserve existing entries and use a new reconciliation entry for a correction. Use date/time and actor when known; never invent missing historical facts. The detailed EVT format is optional. No history-control script is required by the method.
