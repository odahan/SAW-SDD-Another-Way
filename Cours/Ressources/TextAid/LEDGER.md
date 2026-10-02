# Durable decisions

## D-001 — Canonical Release publish location and script

Date: 2026-09-26T03:23:39+02:00
Decided by: Olivier
Source: Olivier's instruction in the LOT-002 conversation
Related: R-008, R-011, LOT-002, REQ-002-007, REQ-002-008, G-002-001, G-002-004

Decision:
For LOT-002 and every future TextAid release, the final single-file executable MUST be placed in `E:\TextAid\src\TextAid.App\bin\Publish\TextAid.exe`. The project root MUST contain `publish.ps1`, which produces the self-contained single-file Release executable in that directory. The project must keep that directory as the canonical location for the final EXE.

Reason:
Olivier requested one stable location and a repeatable publication command for subsequent builds.

Consequences:
Add global rule R-011, LOT-002 requirement REQ-002-008, and AUTO gate G-002-004; retain the original requirements and gates. Update the project publish settings, script, walkthrough, findings, gate evidence, and recovery references. Reevaluate G-002-001 on the newly published result. G-002-002 remains valid because the keyboard detector and its tests are unchanged. G-002-003 has no prior human validation and remains TO TEST. LOT-001 is closed and its visual baseline is unaffected. Planned LOT-003 through LOT-011 will follow R-011 when they publish; no current gate result exists in those lots to invalidate.

Replaces: None
Replaced by: None

## D-002 — Separate-machine verification is deferred when unavailable

Date: 2026-09-26T04:32:06+02:00
Decided by: Olivier
Source: Olivier's instruction in the LOT-002 conversation
Related: R-008, R-012, LOT-002, REQ-002-007, G-002-003, LOT-003 through LOT-011

Decision:
For each final TextAid executable, verification on a separate clean Windows x64 machine should be performed when such a machine is available. Its temporary unavailability MUST NOT by itself block closing a lot. An unavailable check MUST be recorded as deferred, not cancelled, and revisited when a second machine becomes available, including during later releases. The actual outcome must be recorded against the executable tested. A later executable may satisfy the recurring verification, but its result must not be presented as a test of an earlier binary.

Reason:
Olivier currently has no second Windows x64 machine running and considers the check valuable but not always feasible for every lot.

Consequences:
Add R-012 and a durable portability-check register. Clarify G-002-003 and its walkthrough so separate-machine testing is tracked outside the blocking HUMAN condition, while REQ-002-007 and R-008 still require a self-contained single-file executable. Preserve the original gate condition and method in its definition history. The current G-002-003 remains TO TEST for its other human checks; G-002-001, G-002-002, and G-002-004 remain PASS because the binary and their conditions are unchanged. Apply R-012 to planned LOT-003 through LOT-011. No source code or published executable changes.

Replaces: None
Replaced by: None

## D-003 — Keep invocation without selected text

Date: 2026-09-26T04:51:52+02:00
Decided by: Olivier
Source: Olivier's validation in the LOT-002 conversation
Related: R-013, LOT-002, REQ-002-004, REQ-002-005, G-002-003, LOT-003 through LOT-011

Decision:
Ctrl+C+C MUST still open the TextAid session when no text is selected. This observed behavior is accepted and must be preserved in subsequent versions; lack of a selection is not a reason to suppress invocation. A later version may use the open session for manually entered text to transform or translate. This decision does not require manual text entry in V0.1, whose captured-text view remains read-only.

Reason:
Olivier wants TextAid to remain callable without first selecting source text, enabling a future direct-entry workflow.

Consequences:
Add R-013 and an explicit no-selection case to the LOT-002 walkthrough and human validation record. Apply R-013 to planned LOT-003 through LOT-011. REQ-002-004 and REQ-002-005 retain their current meanings; the existing V0.1 session already opens with empty captured text. No code or published EXE changes. Previous AUTO gate results remain applicable; G-002-003 remains TO TEST for window placement and instance behavior not yet accepted by Olivier on the current candidate.

Replaces: None
Replaced by: None

## D-004 — Immediate translation on Ctrl+C+T

Date: 2026-09-26T05:12:02+02:00
Decided by: Olivier
Source: Olivier's quick-translation instruction and follow-up answers after LOT-002 closure
Related: R-001, R-004, R-006, R-014, LOT-005, LOT-006, LOT-008, LOT-010, LOT-011

Decision:
Keep the existing `Ctrl+C+C` action-choice flow. Add `Ctrl+C+T` as a separate entry point that captures the source and starts Translate immediately, without asking the user to choose an action or destination first. If the detected source language is the configured user language, translate to the configured preferred translation language. If it is the preferred translation language, translate to the user language. If it is neither, or detection is uncertain, use the user language as the destination. The user may choose a different destination in the open session, which starts another translation of the original captured text. The safe replacement action becomes available after the current translation succeeds, under the existing `Accept` label. These preferences are distinct, valid BCP-47 languages in Settings.

Reason:
Olivier wants a direct translation gesture while retaining the flexible `Ctrl+C+C` workflow and the established safe source replacement behavior.

Consequences:
Add R-014. LOT-005 prepares the Translate action for explicit destination input; LOT-006 stores and validates the two language preferences; LOT-008 activates the shortcut, automatic direction, Settings controls, destination changes, and preview state; LOT-010 covers regression and compatibility; LOT-011 adds V1 acceptance. Each destination change supersedes any pending translation and only the latest successful result can be accepted. No existing Closed lot, V0.1 result, or published executable changes. LOT-003 and LOT-004 keep their planned milestone scope and inherit R-014 only as a future behavior constraint. No current gate result is invalidated because the affected later lots have not started.

Replaces: None
Replaced by: D-006 for button label and result outcomes only; language routing remains active.

## D-005 — User-reassignable invocation shortcuts

Date: 2026-09-26T05:14:00+02:00
Decided by: Olivier
Source: Olivier's follow-up shortcut instruction after LOT-002 closure
Related: R-013, R-014, R-015, R-016, LOT-003 through LOT-011

Decision:
The normal-action and quick-translation shortcuts default to `Ctrl+C+C` and `Ctrl+C+T`; each sequence can be reassigned by the user in Settings to avoid conflicts with other applications. The complete gesture may be changed, including its `Ctrl+C` prefix. The two bindings must remain distinguishable and valid. The normal-action and quick-translation behavior follows the assigned gesture.

Reason:
Olivier expects shortcut conflicts with other applications and wants the user to resolve them without changing TextAid code.

Consequences:
Add R-015 and replace R-013 with R-016 for planned lots while preserving R-013's original text and its historical applicability to closed LOT-002. R-014 uses the configured quick-translation binding from LOT-008. LOT-003 through LOT-005 need no immediate shortcut implementation change; LOT-006 persists/validates the assignments; LOT-008 exposes Settings and switches the keyboard recognizer safely; LOT-010 and LOT-011 verify defaults, reassignment, conflicts, and persistence. Closed LOT-002 remains unchanged: its V0.1 shortcut is `Ctrl+C+C`, and no user reassignment is required for that closed candidate. No current gate result is invalidated; affected future lots remain Planned.

Replaces: None
Replaced by: None

## D-006 — Separate Replace and Copy outcomes

Date: 2026-09-26T05:20:00+02:00
Decided by: Olivier
Source: Olivier's clarification after the quick-translation specification, including the Copy-window answer
Related: D-004, R-006, R-014, R-017, R-018, LOT-003 through LOT-011

Decision:
The action previously labelled `Accept` is labelled `Replace` because it replaces the selected original text. A separate `Copy` action places the completed transformation or translation in the clipboard without pasting it into the source, allowing the user to paste elsewhere. `Copy` closes the TextAid session after successful clipboard copy. `Cancel` remains available and leaves the source unchanged. `Replace` and `Copy` become available only when the current result is complete and usable. This supersedes D-004's earlier button-label clarification but retains its quick-translation and language-routing decisions.

Reason:
`Accept` does not tell the user whether they are accepting the generated result or authorizing replacement of the original selection. Olivier wants the two intentions to be explicit.

Consequences:
Preserve and mark R-006 and R-014 obsolete; replace them with R-017 and R-018 for planned lots. R-009's historical phrase "capture/Accept pipeline" refers to the same safety work, now presented as Replace/Copy. LOT-003 introduces the distinct safe outcomes before AI; later transformation lots use them, and LOT-008 applies them to quick translation. LOT-010 and LOT-011 verify both operations, including unchanged source text after Copy. The closed LOT-002 V0.1 candidate retains its existing UI and evidence. No current gate result is invalidated; future lots remain Planned.

Replaces: D-004 for button label and result outcomes only
Replaced by: None

## D-007 — Shortcut mnemonic names

Date: 2026-09-26T05:22:34+02:00
Decided by: Olivier
Source: Olivier's clarification of the default shortcut mnemonics after D-005, including the spelling confirmation
Related: D-005, R-015, LOT-008, LOT-011

Decision:
Present the default `Ctrl+C+C` sequence as `Ctrl+C` followed by `C` for **Choose**, and `Ctrl+C+T` as `Ctrl+C` followed by `T` for **Translate**. These names describe the two functions and their default gestures; user-reassigned gestures remain permitted under D-005.

Reason:
The second key communicates which path will open and helps users remember the defaults.

Consequences:
Use Choose and Translate consistently in Settings shortcut labels, help/documentation, and V1 acceptance. The existing default sequences and behavior do not change. No code, published executable, closed lot, or gate result changes.

Replaces: None
Replaced by: None

## D-008 — Resizable split result review

Date: 2026-09-26T19:42:00+02:00
Decided by: Olivier
Source: Olivier's LOT-003 visual-review instruction
Related: LOT-003, REQ-003-006, G-003-002

Decision:
The LOT-003 session MUST present the captured text and transformed text in a 50/50 side-by-side layout. The window MUST be resizable, and the two panels MUST continue to divide the available width equally as it is resized. The status message MUST occupy its own non-overlapping row.

Reason:
The vertical layout mixes the preview and status content and does not provide enough usable space to compare source and transformed text.

Consequences:
Add REQ-003-006 and refine the active HUMAN walkthrough gate to include readable, elastic 50/50 review. Preserve the prior G-003-002 definition in its history. This decision applies only to the active LOT-003 result; no closed result or global rule changes.

Replaces: None
Replaced by: None

## D-009 — OpenAI-compatible profiles selected by action

Date: 2026-09-26T21:25:00+02:00
Decided by: Olivier
Source: Olivier's LOT-004 instruction
Related: R-004, R-005, R-019, LOT-005, LOT-006, LOT-009

Decision:
V1 must support an explicitly configured OpenAI-compatible remote AI connection in addition to local Ollama. Each declarative action selects the model profile it uses, so actions such as Translate can remain local while a long-form expansion action can explicitly select a remote OpenAI-compatible profile. Remote selection must remain visible in configuration and must never become a silent fallback.

Reason:
Olivier wants action-specific cost, latency, and capability choices while preserving a clear local-first default.

Consequences:
Add R-019. LOT-005 adds the action `profileId` reference; LOT-006 resolves and validates action profiles; LOT-009 implements the OpenAI-compatible provider, authentication, and Strict Local opt-in. LOT-004 remains local-Ollama only and is not expanded with a remote provider.

Replaces: None
Replaced by: None

## D-010 — Deployment-mode nomenclature and on-premises access

Date: 2026-09-26T21:40:00+02:00
Decided by: Olivier
Source: Olivier's confirmed deployment-boundary instruction during LOT-004
Related: R-005, R-019, LOT-004, LOT-006, LOT-007, LOT-008, LOT-009, LOT-010, LOT-011

Decision:
Replace the overloaded term “Strict Local” with three explicit deployment modes: **This device only**, **On-premises**, and **External**. This device only permits loopback endpoints and guarantees that model traffic does not leave the current machine. On-premises permits a user-declared endpoint on an administered network; TextAid must not claim that it can independently verify the endpoint's ownership, routing, or data handling. External denotes an Internet-hosted provider and requires deliberate configuration. A private-LAN address must not be automatically classified as trusted merely because it is private.

Reason:
Olivier wants to use an Ollama server on a network machine when appropriate, without conflating that controlled choice with either same-device execution or an Internet-hosted service.

Consequences:
Revise R-005, the project glossary, and the planned privacy, remote-provider, hardening, and release requirements. The active LOT-004 implementation continues to enforce the most restrictive This device only boundary; the On-premises and External configuration UX, persistence, disclosure, and validation are assigned to LOT-006 through LOT-009. Reevaluate G-004-001 after its visible terminology update; no human gate result is invalidated.

Replaces: None
Replaced by: None

## D-011 — Concurrent connection tabs and action-selected profile

Date: 2026-09-26T22:30:00+02:00
Decided by: Olivier
Source: Olivier's confirmed Settings architecture instruction during LOT-004
Related: R-005, R-019, LOT-005, LOT-006, LOT-008, LOT-009

Decision:
Settings will expose three independent tabs: **This device only**, **On-premises**, and **External**. Each connection category may be configured and retained at the same time. There is no global deployment-mode switch that changes every action. Instead, each action selects a model profile, and that profile selects the configured connection used for its invocation.

Reason:
Olivier needs local, network-managed, and external AI configurations to coexist, with an intentional provider choice tailored to each action.

Consequences:
Refine R-005. LOT-006 persists the three connection categories and profile resolution. LOT-008 delivers the three Settings tabs. LOT-005 action data and LOT-009 External provider implementation retain their `profileId` route. LOT-004 continues to expose only the This device only setup until the later configuration model is implemented.

Replaces: None
Replaced by: None

## D-012 — Built-in and user actions share one editable model

Date: 2026-09-26T22:38:00+02:00
Decided by: Olivier
Source: Olivier's Actions-page instruction during LOT-004
Related: R-019, LOT-005, LOT-006, LOT-008

Decision:
Actions supplied with TextAid are not special code paths: they use the same declarative action format as user-created actions. The future Actions Settings page lists all existing actions and lets the user create or edit them. Each action exposes a name, model profile (representing This device only, On-premises, or External and its selected model), temperature, and prompt template.

Reason:
Olivier wants users to inspect and tailor built-in behavior as readily as their own actions, while retaining a transparent per-action provider choice.

Consequences:
Refine R-019 and LOT-005 action data. LOT-006 resolves the action's profile and temperature override. LOT-008 supplies the Actions management page, including built-in actions. No special hard-coded transform path is permitted after LOT-005.

Replaces: None
Replaced by: None

## D-013 — Action output-language default and session override

Date: 2026-09-26T22:43:00+02:00
Decided by: Olivier
Source: Olivier's action-language instruction during LOT-004
Related: R-020, LOT-005, LOT-006, LOT-008

Decision:
Each action may define an output language as either a BCP-47 language or **Unchanged**. This setting supplies the initial generation-language choice for the action. The main TextAid session always exposes a language combo, allowing the user to select a different generation language for the current invocation. That selection overrides the action default without changing the saved action.

Reason:
Olivier wants predictable defaults for actions while retaining an immediate per-use language choice.

Consequences:
LOT-005 action data adds the output-language field; LOT-006 validates it against the language catalog; LOT-008 adds the main-session language combo and enforces the one-invocation override behavior. The existing quick-translation routing remains a specialized later invocation rule and must continue to create a fresh transformation from the original text when its destination changes.

Replaces: None
Replaced by: None

## D-014 — Per-action supplementary user instructions

Date: 2026-09-26T23:30:00+02:00
Decided by: Olivier
Source: Olivier's programmable-action and session-instructions instruction during LOT-004
Related: R-019, R-021, LOT-005, LOT-008

Decision:
Every declarative action gains an `askForUserInstructions` checkbox. When selected, Process first opens a modal, themed dialog in which the user supplies supplementary instructions; no model call occurs until that dialog is confirmed. The normal TextAid session also always offers an Instructions control so the user can provide optional guidance for any action. The user may edit the session text, choose an action, add or revise instructions, then explicitly select Process. All three values are snapshotted for one request only. This applies to the normal Choose flow (`Ctrl+C+C`) only: the quick Translate flow (`Ctrl+C+T`) starts translation immediately and must never be delayed by action choice or an instructions dialog. Its result remains editable/reconfigurable afterward, including destination-language changes.

Reason:
Olivier wants actions to request essential per-use context when needed, without preventing ad-hoc guidance for otherwise self-contained actions.

Consequences:
LOT-005 adds the flag, prompt composition, editable text, action selection, and explicit Process semantics for the normal action flow. LOT-008 exposes the checkbox in the Actions editor and the Instructions dialog/control in the normal session, while retaining R-018's immediate `Ctrl+C+T` translation route. The current LOT-004 Rewrite-only screen does not yet have declarative actions, so it remains an interim implementation.

Replaces: None
Replaced by: None

## D-015 — Visible unversioned action store and focused action editing

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-005 planning clarifications
Related: R-019, R-020, R-021, R-022, R-023, LOT-005, LOT-006, LOT-008

Decision:
Action definitions are external, unversioned JSON user data in an `actions` subdirectory next to the executable, not versioned project artifacts or data hidden in the Windows user profile. Built-in and user actions use that same format. Each action has a unique stable ID; built-in display names are resolved in the selected application/user language, while an explicit user display-name override wins and is not translated. The V0.4 template system has no generic variables or parameters: it renders only the session text once. The explicit translation-destination value is deferred to the LOT-008 language-selector workflow, where it is the narrowly defined dynamic input. Prompt injection requires no dedicated protection or sophisticated mitigation because TextAid has no model tools; prompts may simply make the input-data boundary clear.

Actions are managed in LOT-008 through a dedicated Actions page available from the main-window gear menu and the tray-equivalent application menu. It has an action list on the left and the selected action's settings and prompt on the right. Valid changes immediately refresh the application's active actions and the main action selector.

Reason:
Olivier wants action data to be straightforward for end users to back up, action customization to be accessible without manual JSON editing, labels to follow the chosen language while retaining deliberate user wording, and V0.4 to avoid unused generic parameter and prompt-injection machinery.

Consequences:
R-019 is superseded by R-022; R-023 defines the later editing surface and immediate-refresh behavior. LOT-005 loads unversioned action files beside the executable, supplies the eight actions, removes generic parameter rendering, and keeps template handling to one non-reparsed text insertion. LOT-006 no longer creates standard action files in the user profile and does not validate action schema versions; its configuration remains independently versioned. LOT-008 supplies the Actions page, gear menu, translated built-in labels, user override behavior, immediate valid-save refresh, and the only dynamic translation-destination rendering. Closed LOT-001 through LOT-004 results are unaffected. No gate has yet been evaluated, so no acquired validation requires reevaluation.

Replaces: None
Replaced by: None

## D-016 — Reserved Translate action for the immediate shortcut

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's clarification of the `Ctrl+C+T` action behavior
Related: D-004, D-015, R-018, R-022, R-023, R-024, LOT-005, LOT-008

Decision:
`Ctrl+C+T` uses one reserved built-in Translate action rather than a user-selected action. The action remains declarative JSON and goes through the ordinary action loading and model-invocation path; its prompt is not a hard-coded C# transformation. However, its identity, enabled state, profile reference, prompt, and translation semantics are fixed and protected in the Actions page. It cannot be deleted, disabled, altered, or replaced by a user-created action.

Reason:
The immediate shortcut needs a stable, predictable translation behavior. Allowing a user to designate or reshape an arbitrary action would make the shortcut's meaning uncertain and could break direct translation.

Consequences:
LOT-005 supplies and validates the protected declarative Translate action alongside the other seven built-ins. LOT-008 shows the action in the Actions page but marks its protected fields unavailable for editing, and always routes `Ctrl+C+T` to it. The other built-in and user-created actions retain the common editable action format and may be tailored normally. No closed result or existing gate evaluation is affected.

Replaces: None
Replaced by: None

## D-017 — Built-in Answer this mail action

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-005 implementation instruction
Related: R-021, LOT-005, LOT-008

Decision:
TextAid supplies **Answer this mail** as a built-in declarative action. It is enabled by default and sets `askForUserInstructions` to true, so the normal session must collect supplementary reply context before its model request.

Reason:
Olivier considers replying to email a valuable common use case that should be immediately available rather than requiring the user to create an action.

Consequences:
LOT-005 increases the built-in action set to nine and validates the required supplementary-instructions path for this action. LOT-008 will show it in the editable Actions page using the ordinary action model. No closed result or existing gate evaluation is affected.

Replaces: None
Replaced by: None

## D-018 — Publish action definitions beside the executable

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-005 publishing instruction
Related: R-008, R-022, R-025, LOT-005, LOT-010, LOT-011

Decision:
The official published result contains `TextAid.exe` and its `actions` subdirectory. The built-in JSON action definitions are deployed with the executable rather than created only at first run. `publish.ps1` is the canonical and only final-executable production route and must verify this layout.

Reason:
The action folder is part of the visible user data that must be easy to inspect and back up, so it must be present in the published distribution.

Consequences:
R-008 is superseded by R-025 for LOT-005 and later releases. LOT-005 copies nine built-in action definitions to Publish and verifies them with the publisher. LOT-010 and LOT-011 test the executable-plus-actions distribution rather than an EXE alone. Closed releases and their historical portability results remain unchanged.

Replaces: None
Replaced by: D-019

## D-019 — Embed default actions with writable-location fallback

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's follow-up LOT-005 distribution decision
Related: D-018, R-025, R-026, LOT-005, LOT-008, LOT-010, LOT-011

Decision:
The official distribution returns to one self-contained `TextAid.exe`. Default JSON action definitions are embedded as application resources and are created without overwriting existing files on first run in `actions` beside the executable. If that location is unavailable, TextAid silently uses an `actions` subdirectory beside `config.json` and persists the selected location in settings. The future Actions page includes a command to open that persisted folder.

Reason:
Olivier wants the simplest possible distribution while keeping action data visible, backed up, and usable even from a protected installation directory.

Consequences:
D-018 and R-025 are superseded. LOT-005 embeds and initializes the actions while preserving a sole EXE in Publish. LOT-008 adds the Open actions folder command. LOT-010 and LOT-011 retain single-EXE distribution checks. Closed releases remain unchanged.

Replaces: D-018
Replaced by: None

## D-020 — Accent-button contrast

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-005 visual-review instruction
Related: R-007, LOT-005 and later visible lots

Decision:
All accent-blue primary buttons use explicit black text through the shared button template and centralized `OnAccent` color token. The token applies across every current and future TextAid screen unless a later accessibility decision replaces it.

Reason:
White text on the light accent blue is difficult to read.

Consequences:
Update the central color and button templates only; no per-window color overrides are permitted. Existing visible screens inherit the correction immediately.

Replaces: None
Replaced by: None

## D-021 — New manual transformation command

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-005 UX instruction
Related: R-016, R-017, LOT-005

Decision:
The normal session provides a **New** command that resets the existing window to an empty manual-input session instead of requiring the user to close and reopen it. Reset removes all result and invocation-only instructions and clears the original captured source window, so a subsequent result cannot Replace text in the earlier source application.

Reason:
Users often want to begin a separate transformation immediately after completing another one; closing and reopening the session is unnecessary friction.

Consequences:
LOT-005 adds the New button and safe reset behavior. The reset session follows the existing no-selection path: Process remains explicit, and only Copy is available after a result until a new trusted source capture occurs.

Replaces: None
Replaced by: None

## D-022 — Explicit configuration downgrade boundaries

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 planning clarifications
Related: R-005, R-022, R-027, LOT-006, LOT-009, LOT-010, LOT-011

Decision:
TextAid performs a visible, downward-only configuration downgrade when the requested category does not exist or is not configured. An External request resolves External, then On-premises, then This device only. An On-premises request resolves On-premises, then This device only. An action with no requested remote category resolves This device only. The status message must state each automatic downgrade.

When a configured connection is invalid, including a malformed endpoint or a required credential that is absent, TextAid first displays the specific configuration error and then offers the user a downgrade to the next eligible lower category. Once an eligible provider has been selected, a provider or LLM non-response first displays the provider failure and then offers the same user-controlled downgrade. It never switches automatically in either case. A declined offer leaves the invocation failed; an accepted offer starts a new invocation on the chosen lower category and names it in the status.

Reason:
Olivier wants resilient local-first behavior when optional network or cloud configurations have not been set up, and guided recovery rather than a dead end when a configured provider is invalid or fails.

Consequences:
LOT-006 implements and tests the resolver, the error-then-offer contract, and invocation-status messages. LOT-009 uses the same contract when its External provider is added. R-005 and R-022 retain their prohibition on *silent* fallback; R-027 defines the explicit automatic and user-approved exceptions. No closed result changes.

Replaces: None
Replaced by: None

## D-023 — DPAPI-protected per-user LLM secrets

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 opening instruction
Related: R-005, R-028, LOT-006, LOT-009, LOT-010, LOT-011

Decision:
Secrets entered for On-premises or External LLM configurations are stored separately from `config.json` under the current user's TextAid application-data directory. Windows DPAPI with `DataProtectionScope.CurrentUser` protects each value. The versioned configuration stores an opaque reference only; no secret is stored beside the executable, in the visible action data, or in logs.

Reason:
Olivier requires encrypted per-user secret persistence rather than clear-text configuration or deployment-adjacent secret files.

Consequences:
LOT-006 implements the vault boundary and deterministic tests. LOT-009 consumes the boundary for remote authentication instead of requiring an environment-variable-only secret path. A missing or unreadable required secret is an invalid configured connection under D-022.

Replaces: None
Replaced by: None

## D-024 — Independent active state for each connection

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 implementation clarification
Related: R-027, R-029, LOT-006, LOT-008, LOT-009

Decision:
Each This device only, On-premises, and External connection exposes a persisted **Active** yes/no setting. Inactive configurations remain saved but are treated as not configured for resolution and automatic downgrade. A user may therefore choose a cloud-only, local-only, or mixed configuration without needing to configure every category.

Reason:
Olivier wants the downgrade model to represent deliberate provider availability rather than assuming every connection category is configured.

Consequences:
LOT-006 persists, exposes, and resolves the active state. LOT-008 retains the setting in its future fuller Settings design. No action without an explicit remote category may switch upward to cloud when This device only is inactive.

Replaces: None
Replaced by: None

## D-025 — Four configurable one-click action presets

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 UX instruction
Related: R-022, R-030, LOT-006, LOT-008

Decision:
The normal session retains its complete action combo box and adds four persisted one-click presets. Their defaults are Correct, Rewrite, Summarize, and Translate. Each preset has an adjacent, explicit edit icon that opens the available action list and assigns one action to that slot. TextAid does not record usage or reorder actions by inferred frequency.

Reason:
Olivier wants immediate access to the actions a user values most without delaying adoption until usage history exists or making the complete action list inaccessible.

Consequences:
LOT-006 persists and displays the presets. LOT-008 must retain the configuration in its future Actions experience. No action telemetry is added.

Replaces: None
Replaced by: None

## D-026 — Preset presentation and immediate invocation

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 preset refinement
Related: R-030, LOT-006

Decision:
Preset buttons show only their assigned action name, not a slot label. The adjacent pencil is a borderless visible icon that opens the action list. The Quick actions group is displayed on the alternate surface. Clicking a preset selects and immediately processes its assigned action; selecting an action from the ordinary combo box continues to select only.

Reason:
Olivier wants a visually light, direct-access path for the most-used actions while preserving deliberate Process behavior for the general selector.

Consequences:
LOT-006 updates the session controls and corrects the pencil menu invocation. No usage tracking or automatic action ordering is introduced.

Replaces: None
Replaced by: None

## D-027 — Defer action-language consistency to the language workflow

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-006 acceptance instruction
Related: R-020, LOT-006, LOT-008

Decision:
The observed inconsistency where some actions retain the input language and others may generate English is not a blocking LOT-006 defect. It is deferred until LOT-008 delivers the user-language and preferred-translation-language Settings, output-language selection in the main session, and the related generation workflow.

Reason:
The application does not yet expose the language configuration or output-language controls needed to define and validate a coherent user-visible language policy.

Consequences:
Record F-006-002 as deferred to LOT-008. LOT-006 may close after its gates pass and Olivier accepts it. LOT-008 must address and validate the behavior.

Replaces: None
Replaced by: None

## D-028 — Transform-session branding, status guidance, and application menu

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's post-closure LOT-006 refinement instruction
Related: R-007, R-030, LOT-006, LOT-008

Decision:
The transform-session header displays the real `Logo-final.png` asset instead of a TextAid text title. Its guidance message explicitly tells the user to choose Process or use a preset. The header also exposes an application-menu icon that opens the same application menu available from the tray icon.

Reason:
Olivier wants the session to show the established brand, make the preset path discoverable, and offer application navigation without requiring tray access.

Consequences:
LOT-006 is reopened for this contained correction. The shared menu behavior must remain consistent between the header and tray; LOT-008 retains its later broader menu and Actions-page work.

Replaces: None
Replaced by: None

## D-029 — Single-configuration promotion for action profiles

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-007 privacy and UX clarification
Related: R-005, R-022, R-027, R-029, LOT-006, LOT-007, LOT-009, LOT-010, LOT-011

Decision:
At invocation resolution only, if exactly one active, valid, eligible connection configuration exists, TextAid automatically and visibly uses that sole configuration for every action whose requested configuration is absent, inactive, or otherwise not configured. An action whose requested category differs is automatically downgraded or promoted to that sole choice; the status names both the requested category and the selected sole category. This includes requests for This device only and On-premises when External is the sole active eligible configuration.

If two or more active eligible configurations exist, TextAid does not infer an upward route. It fails with clear guidance to select an appropriate active profile for the action. If no eligible configuration exists, it fails with configuration guidance. A malformed connection, unreadable secret, unavailable model, provider failure, timeout, or other runtime failure never triggers an upward switch; the existing explicit failure and user-controlled downward-downgrade behavior remains unchanged.

Reason:
An intentional cloud-only or network-only setup should operate every standard action without requiring the user to edit all action profiles that normally select This device only. Where multiple choices exist, silently selecting a more remote provider would obscure a meaningful privacy and cost choice.

Consequences:
R-027 and R-029 are revised. LOT-007 implements and tests the resolution outcome and visible status. LOT-009 applies the behavior once the External provider is executable. LOT-010 and LOT-011 cover cloud-only and network-only regression. The closed LOT-006 candidate remains historically accepted; this later behavior is delivered in LOT-007.

Replaces: None
Replaced by: None

## D-030 — User-controlled full diagnostic logging

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's LOT-007 diagnostic clarification
Related: R-005, LOT-007, LOT-010, LOT-011

Decision:
TextAid retains the existing safe Debug log as the default opt-in diagnostic mode. When Debug is enabled, the user may separately enable a persistent **Full log** mode. Full log records the diagnostic text that safe mode omits, including clipboard/input text, prompts, generated output, and raw exception messages, so that an IT professional or diagnostic AI can investigate a difficult failure. Full log remains a local file and is never transmitted automatically. The Debug page must explain that the user can manually obfuscate sensitive passages in a text editor before sharing the file for support.

No authentication credential may ever be written, including API keys, Bearer tokens, passwords, or DPAPI-protected secrets. Full log has a visible red **Full log** indicator while active. The Full log choice persists with Debug; disabling Debug prevents log creation regardless of the persisted Full log preference.

Reason:
Safe diagnostics are appropriate by default, but some hard failures require enough context for a qualified person or AI to determine their cause. The user deliberately controls this trade-off and decides whether to share the locally stored file.

Consequences:
R-005 and LOT-007 debug requirements are revised. LOT-007 adds the persisted mode, red indicator, credential redaction, explanatory disclosure, and deterministic redaction coverage. LOT-010 and LOT-011 validate the two modes and ensure no credential is logged.

Replaces: None
Replaced by: None

## D-031 — Durable translation-cache foundation and later language packs

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's localization-correction instruction
Related: R-007, LOT-008, LOT-012

Decision:
LOT-008 is extended with a narrowly scoped durable locale-cache foundation. English remains the immutable source catalog. Each generated translated cache is stored separately by BCP-47 language tag, validated against the exact English keys and placeholders, and associated with a deterministic source-catalog fingerprint. The format and storage layout must reserve room for a later distinct user-override layer and portable reviewed language packs. LOT-008 does not provide editing corrections, import/export, sharing, GitHub access, or automatic updates of language packs.

LOT-012 will provide user correction editing, restore-to-suggested behavior, import/export validation, pack provenance, and the documented path for community-reviewed language packs. It must preserve the local-first behavior: downloaded or shared packs are optional user actions, never a prerequisite for startup or normal transformations.

Reason:
Machine-generated translation may not reflect the wording a user or community prefers. Corrections need to remain durable across cache regeneration and future shared packs need compatibility boundaries.

Consequences:
LOT-008 gains only the compatibility and non-destructive storage foundation. The future UX and exchange workflow are deliberately deferred to LOT-012, avoiding an unreviewed expansion of the active lot.

Replaces: None
Replaced by: None

## D-032 — Independent English UI preference and explicit catalog-generation profile

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's language-settings instruction
Related: R-005, R-007, LOT-008

Decision:
LOT-008 exposes a separate preference to retain English for the TextAid UI. This preference does not modify the user's language or preferred translation language used by quick translation. When generating a translated locale cache, the user chooses one active connection profile explicitly; only active profiles appear. The selected profile is used only for catalog generation and does not change normal action routing or misrepresent the profile's connection category.

Reason:
Users may prefer reliable English UI wording over imperfect generated translations, and may prefer the quality of a particular active model for translation generation.

Consequences:
The setting is persisted, validates active-profile eligibility, and is available to the later explicit generation command. No background generation, provider promotion, or implicit cloud use is added.

Replaces: None
Replaced by: None

## D-033 — Source-first localization discipline for all remaining lots

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's visible-string localization instruction
Related: R-007, R-031, LOT-008 through LOT-012

Decision:
Every remaining lot must treat the English source catalog as the first destination for user-visible text. Before creating a string, implementation reuses a semantic existing key when possible; otherwise it adds a stable English key before wiring the view or code to that key. A source-catalog change invalidates translated caches for the prior source fingerprint, which must fall back to English until a compatible cache is explicitly generated or imported.

Reason:
TextAid must not accumulate duplicate literals or display mixed, stale, and inconsistent translations as the product evolves.

Consequences:
R-031 applies from LOT-008 onward. Every remaining specification now carries a localization-maintenance warning. LOT-008’s source fingerprint becomes the compatibility mechanism; LOT-012 will use it for reviewed packs and user corrections.

Replaces: None
Replaced by: None

## D-034 — Explain locale-cache fallback to the user

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's cache-fallback UX instruction
Related: R-007, R-031, LOT-008

Decision:
When TextAid rejects a selected locale cache because its fingerprint is stale, its content is invalid, or it cannot be read, it must visibly explain the English fallback. The message must say that TextAid remains usable and direct the user to generate or import a compatible translation. A missing cache is the normal pre-generation state and is not an error notification.

Reason:
Silent language regression would look like an application defect and obscure the corrective action.

Consequences:
LOT-008 publishes a tray notification at startup or after Settings reload for rejected caches. The source-first catalog discipline keeps the reason actionable.

Replaces: None
Replaced by: None

## D-035 — Optional per-user Windows startup in the final lot

Date: 2026-09-27T00:00:00+02:00
Decided by: Olivier
Source: Olivier's Windows-startup instruction
Related: LOT-011

Decision:
LOT-011, rather than a new lot, adds a Settings switch allowing the current user to opt into or out of launching TextAid at Windows sign-in. The implementation uses only a current-user registration and must never require elevation, add a machine-wide registration, or defeat the existing single-instance guard.

Reason:
Resident-text-assistance use benefits from optional availability after sign-in, but users retain control and should not receive a new installation-level side effect before the final qualification lot.

Consequences:
LOT-011 owns the persisted Settings control, startup registration lifecycle, error handling, and final human validation. No code or startup registration is added in LOT-008.

Replaces: None
Replaced by: None

## D-036 — DPAPI-first OpenAI-compatible authentication

Date: 2026-09-28T05:28:51+02:00
Decided by: Olivier
Source: Olivier's LOT-009 authentication clarification
Related: D-023, R-005, R-028, LOT-009, REQ-009-002, REQ-009-004, G-009-001

Decision:
For TextAid's OpenAI-compatible External connection, the ordinary configuration path is a user-entered API key stored with Windows DPAPI under `DataProtectionScope.CurrentUser`. Settings presents a password-style API-key field; `config.json` retains only the opaque `external-api-key` reference. `BearerFromEnvironment` is not offered to users and does not satisfy a configured External connection. None remains available when an OpenAI-compatible endpoint deliberately requires no authentication.

Reason:
TextAid targets ordinary Windows users, who should not need to create or manage environment variables. The prior CurrentUser-DPAPI vault is already the active project secret boundary and protects the user-entered key more appropriately.

Consequences:
Replace the active LOT-009 environment-authentication wording while preserving it as superseded text. Update G-009-001's condition, restore External Settings API-key entry, use `DpapiSecretVault` for the external secret, and test protected-key success, missing-secret failure, and migration rejection of the superseded environment configuration. R-028 remains the governing rule; no change to closed LOT-008 evidence is required.

Replaces: The environment-authentication portions of REQ-009-002 and REQ-009-004
Replaced by: None

## D-037 — Include the validated Synonymes action in the base catalog

Date: 2026-09-28T19:55:00+02:00
Decided by: Olivier
Source: Olivier's LOT-010 instruction
Related: R-022, R-023, R-031, LOT-010

Decision:
Add the current validated `Synonymes` declarative action to TextAid's embedded base action catalog. It keeps the existing identity, model profile, generation settings, prompt, and ordinary editable status. Initialization creates it only if absent, preserving any existing file with the same identity.

Reason:
The useful tested action should be available on a new installation without manual recreation, while existing user customization remains intact.

Consequences:
LOT-010 adds REQ-010-008, embeds the action, includes it in catalog validation, and adds its English source-catalog action label. A changed English catalog invalidates older locale caches under R-031 until regenerated or replaced.

Replaces: None
Replaced by: None

## D-038 — Add a bounded Humanize base action

Date: 2026-09-28T20:05:00+02:00
Decided by: Olivier
Source: Olivier's LOT-010 instruction, informed by Wikipedia: Signs of AI writing
Related: R-022, R-023, R-031, LOT-010

Decision:
Add an ordinary editable `Humanize` base action. It is a bounded editorial revision that removes selected formulaic AI-writing patterns while preserving facts, original language, intended voice, names, numbers, citations, and links. It must not claim to evade detectors, invent details or personal experience, or return commentary about its changes.

Reason:
TextAid should offer a practical, user-controllable mini humanizer without converting it into a separate skill, detection workflow, or autonomous editing system.

Consequences:
LOT-010 adds REQ-010-009, embeds `humanize.json`, initializes it only if missing, and adds its English source-catalog label. The catalog change invalidates prior locale caches under R-031 until regeneration or replacement.

Replaces: None
Replaced by: None

## D-039 — Optimize the Humanize action for local generation

Date: 2026-09-28T20:25:00+02:00
Decided by: Olivier
Source: Olivier's local qwen3.5:9b test feedback
Related: D-038, R-022, R-023, LOT-010

Decision:
Strengthen the editable `Humanize` action with concrete removal rules suitable for a capable but non-frontier local model, and set its temperature to 0.2. The prompt must direct the model to remove rhetorical patterns rather than substitute an equivalent formulation, including balanced contrast patterns, unsupported hype, and adjective clusters. Its factual-preservation and bounded-editorial limits remain unchanged.

Reason:
The first local results correctly normalized punctuation but retained or merely restated several targeted patterns. A more explicit, lower-variance instruction is more reliable for the local model in use.

Consequences:
The embedded action and the already initialized distributable action are updated together. The action remains ordinary and editable; it neither claims detector evasion nor expands into a detection or autonomous editing feature.

Replaces: None
Replaced by: None

## D-040 — Make local Humanize target-pattern rewrites mandatory

Date: 2026-09-28T20:40:00+02:00
Decided by: Olivier
Source: Olivier's qwen3.5:9b follow-up test and English-example instruction
Related: D-038, D-039, R-022, R-023, LOT-010

Decision:
When a targeted pattern is present, the local `Humanize` prompt must require rewriting its affected sentence and must forbid returning it unchanged merely to preserve source wording. Use short English examples for the contrast, unsupported-hype, and adjective-cluster rules. An input without a target pattern remains eligible for minimal change.

Reason:
The strengthened initial prompt still allowed the local model to return targeted French source text unchanged. English examples and an explicit mandatory instruction reduce ambiguity for the locally executed model.

Consequences:
The embedded and already initialized action are updated together, and catalog validation checks the mandatory directive. The action's preservation guarantees and bounded editorial purpose remain unchanged.

Replaces: None
Replaced by: None

## D-041 — Accept deferred LOT-010 compatibility checks as N/A for closure

Date: 2026-09-28T20:39:17+02:00
Decided by: Olivier
Source: Olivier's LOT-010 closure authorization
Related: R-009, R-012, LOT-010, G-010-002

Decision:
For the published V0.9 candidate SHA-256 `1FBB9C060A723212EDD40DE9A7D5DDA833225A968BAFA1B419DEA8AA3FB025BB`, accept the unperformed Visual Studio Code and 100/125/150-percent DPI/multi-monitor checks as N/A for LOT-010 closure. Close LOT-010 with a PARTIAL convergence. The checks are deferred rather than represented as passing and must remain visible for a later compatibility pass.

Reason:
Suitable DPI/multi-monitor displays are not currently available, and Olivier deferred the VS Code check. The remaining application matrix, the core user journeys, security and deployment boundaries, automated regression, and the published candidate have been validated.

Consequences:
G-010-002 becomes N/A only under these stated conditions. LOT-010 can close without concealing the deferred checks. A later lot or compatibility pass must reintroduce them as actual tests before claiming their results.

Replaces: None
Replaced by: None

## D-042 — Render Markdown previews natively in WPF

Date: 2026-09-28T00:00:00+02:00
Decided by: Olivier
Source: Olivier's post-V1 Markdown-preview instruction, following package research
Related: R-002, R-003, R-007, LOT-013

Decision:
Create post-V1 LOT-013 to render Markdown-mode results in TextAid's WPF preview through `MdXaml` version 1.27.0 and its native `FlowDocument` output. The application retains the original Markdown string as the authoritative result for Replace and Copy. It does not embed a browser, render raw HTML, or generate RTF for the preview.

Reason:
The current Markdown option produces a formatted response but displays its syntax as plain text. Native `FlowDocument` rendering improves review without changing the safe transaction contract. MdXaml is compatible with `net10.0-windows`, while the direct Markdig WPF renderer is archived. RTF conversion does not improve an in-application preview and would introduce a disproportionate conversion dependency.

Consequences:
LOT-013 owns the package integration, dark-theme adaptation, safe rendering rules, and tests. Raw HTML, external images or resources, executable content, and rich-text clipboard replacement are excluded. R-003's dependency discipline remains applicable.

Replaces: None
Replaced by: None

## D-043 — Accept V1 release qualification with proportionate evidence

Date: 2026-09-28T22:07:56+02:00
Decided by: Olivier
Source: Olivier's LOT-011 closure authorization
Related: LOT-011, G-011-001, G-011-002, R-009, R-011, R-012

Decision:
Accept the published V1 candidate SHA-256 `48BDA1471C6971242A60FB2EA1D1DE04AF930D5A2CFAC7A4E9733D70C3D67F8E` and close LOT-011 with TOTAL convergence. Use the automated build, test, publication, startup-registration evidence, and the completed validation accumulated throughout development. Do not extend the release with duplicate test campaigns solely to seek an unattainable absolute defect guarantee.

Reason:
Olivier confirmed that the software has been tested throughout construction and that its functions work. The remaining benefit of broader duplicate coverage is disproportionate to its cost; future defects are handled through normal corrective work.

Consequences:
G-011-001 and G-011-002 are PASS for the identified candidate. The separate-machine check remains explicitly DEFERRED under R-012 and is not represented as a portability PASS. LOT-012 and LOT-013 remain planned post-V1 work.

Replaces: None
Replaced by: None
