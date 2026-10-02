# Pro-Spec project protocol

## Purpose of this file

This is the entry point for the TextAid Pro-Spec project. Product intent is in `PROJECT.md`, lasting constraints in `RULES.md`, decisions in `LEDGER.md`, and the current plan in `STATUS.md`. The source specification is retained at `docs/TextAid specification.md` for traceability; the active project intent is in the Pro-Spec artifacts.

## Protocol reference

This project uses **Pro-Spec 3**, normative revision **`2026-09-24.5`**. The applicable full reference is [docs/PROSPEC-3-SPECIFICATION.md](docs/PROSPEC-3-SPECIFICATION.md), copied from `E:\Pro-Spec3\Docs\PROSPEC-3-SPECIFICATION.md` at project initialization. Read the relevant procedure there before changing a lot state, gate, rule, or decision. The Markdown artifacts remain usable without a Pro-Spec tool, an agent, or Git.

## Mandatory bootstrap

For any lot, read in this order: (1) this file; (2) `PROJECT.md`; (3) `RULES.md`; (4) **all active** decisions in `LEDGER.md` and any obsolete decision explicitly referenced; (5) `STATUS.md`; (6) its `SPEC`; (7) its `FINDINGS`; (8) its `GATES`; (9) its `CONVERGENCE`, if present. Consult `HISTORY.md` when chronology helps recovery or audit. The lot files link back here.

## Starting a lot

Use `STATUS.md` to select the next `Planned` lot and check its dependencies. Only one lot may be `In-progress`, `Ready-to-close`, or `Blocked` in this project at a time. Moving a lot to `In-progress` is a human decision. Keep `STATUS.md` as the sole authority for lot state.

## Working on a lot

Implement the active requirements of its `SPEC`; record new knowledge in its `FINDINGS`. Keep the result location, remaining work, blockers, and next action recoverable through `STATUS.md` and the lot artifacts. `HISTORY.md` records significant operations by append. Each V0.x should build and remain testable. For every `dotnet build` or `dotnet test`, pass `-m:1` explicitly.

## Release publishing

Run `./publish.ps1` from PowerShell. It publishes the self-contained win-x64 single-file Release build to `src/TextAid.App/bin/Publish/TextAid.exe` and verifies that this directory contains only the executable. This is the canonical final EXE location under D-001 and R-011.

For each final EXE, plan a separate clean Windows x64 launch check when a machine is available and record it in `PORTABILITY-CHECKS.md`. Under D-002 and R-012, an unavailable second machine leaves that check deferred without blocking lot closure by itself. The publication and single-file requirements remain active; never report an untested binary as empirically verified on a second machine.

## Builds in the restricted workspace

The default NuGet scratch directory in the Windows profile can report an inaccessible lock under the Codex filesystem sandbox. A normal-access `dotnet restore` succeeds, so the project uses a writable scratch directory for sandboxed commands. Set it **before** the first restore, build, or test in the PowerShell session:

```powershell
$env:NUGET_SCRATCH = Join-Path (Get-Location) 'src\TextAid.App\obj\NuGetScratch'
New-Item -ItemType Directory -Path $env:NUGET_SCRATCH -Force | Out-Null
dotnet build TextAid.sln -m:1 -p:NuGetAudit=false
dotnet test TextAid.sln -m:1 -p:NuGetAudit=false
```

Run `./publish.ps1` for Release; it sets and restores `NUGET_SCRATCH` automatically. See `AGENTS.md` for the agent workflow.

## Validating a lot

Evaluate each active gate on an identifiable result. `AUTO` uses a deterministic check, `LLM` a documented semantic evaluation, and `HUMAN` a named, dated human validation. A gate is `PASS`, `FAIL`, `TO TEST`, or human-declared `N/A` with a ledger decision. Preserve previous evaluations in `Test history` before replacing them. Re-examine validation applicability after changes as required by protocol section 17.10.

## Closing a lot

Follow normative sections 18, 22, and 23. Account for every active requirement and finding, identify the accepted result, and prepare `CONVERGENCE`. A lot may close only when every applicable active gate is validly `PASS` or `N/A`, and a human accepts closure. Write `STATUS.md` last. Never infer closure from a successful command alone.

## Mutation rules

Before `In-progress`, refine specs and gates while preserving their identifiers. After it, any meaning-changing requirement or gate modification needs a human decision in `LEDGER.md`; preserve superseded text and references. A changed rule needs a ledger decision and impact review. Resolve interrupted multi-file operations using normative section 22.8 without erasing history.

## Human-only decisions

The human decides significant project changes, rule evolution, meaning changes after a lot starts, HUMAN gates, `N/A`, accepted deviations, lots created from findings, closure, and exceptional transitions. The prepared artifacts may support those decisions but do not make them automatically.
