# Findings — LOT-006

## F-006-001 — Planned remote authentication did not meet the required secret-storage model

Status: RESOLVED BY D-023

Observation: The prior LOT-009 plan supported a named bearer environment variable and did not define encrypted user-entered secret persistence. It did not satisfy the LOT-006 opening requirement for a per-user encrypted secret outside `config.json` and the executable directory.

Resolution: D-023 and R-028 require a separate CurrentUser-DPAPI vault. LOT-006 implements the vault boundary; LOT-009 consumes it for remote authentication.

## F-006-002 — Action generation-language behavior awaits the language workflow

Status: DEFERRED TO LOT-008 BY D-027

Observation: Before user-language and preferred-translation-language Settings, output-language selection, and the quick-translation workflow are implemented, individual action prompts can produce inconsistent output languages (for example, Correct retains the input language while Rewrite returns English).

Resolution: Olivier accepted LOT-006 without treating this as a blocking defect. LOT-008 owns the language Settings and generation-language selection workflow; it must validate this behavior once those capabilities exist.
