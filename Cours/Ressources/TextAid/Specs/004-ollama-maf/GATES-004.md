# Gates — LOT-004

> Before working on this lot, read the repository root README.md.

All gates below are active and unevaluated. Identify each evaluated result precisely. Preserve prior evaluations in each gate's `Test history` before reevaluation.

## G-004-001 — Build and fake-client tests

Type: AUTO
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
Solution builds; AI unit tests pass without Ollama running.

Method:
Run dotnet build -m:1 and dotnet test -m:1 with live integration tests excluded.

Tested at: 2026-09-26T23:45:00+02:00
Evaluated result: published V0.3 candidate `TextAid.exe`, SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72`.
Result: PASS
Evidence: `publish.ps1` produced the sole canonical 178,355,119-byte `TextAid.exe`. The immediately preceding `dotnet build TextAid.sln -m:1 -p:NuGetAudit=false --no-restore` completed with 0 warnings and 0 errors; `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false --no-build` passed 6 AI fake-client tests and 14 Platform.Windows tests with no failures. The added fake-client assertions cover both disabled and High thinking requests.

### Test history

- 2026-09-26T21:13:00+02:00 — PASS on the preceding LOT-004 working-tree candidate after initial MAF/OllamaSharp integration: 5 AI fake-client tests and 14 Platform.Windows tests passed; solution build had 0 warnings and 0 errors.
- 2026-09-26T21:31:00+02:00 — PASS on the preceding candidate with local Ollama Settings controls: build had 0 warnings and 0 errors; 5 AI fake-client tests and 14 Platform.Windows tests passed.
- 2026-09-26T22:20:00+02:00 — Partial human validation by Olivier on published EXE SHA-256 `53F6B2A89464EE4979BB39EEA5A62E4E52B5A4299409633A380A5CCA74B3F383`: configured local Ollama transformation produced a result successfully. Copy/Replace and stopped-Ollama behavior remain unvalidated; gate remains TO TEST.
- 2026-09-26T21:42:00+02:00 — PASS on the preceding working-tree candidate using This device only terminology: build had 0 warnings and 0 errors; 5 AI fake-client tests and 14 Platform.Windows tests passed.
- 2026-09-26T22:55:00+02:00 — PASS on the corrected working-tree candidate: build had 0 warnings and 0 errors; 6 AI fake-client tests and 14 Platform.Windows tests passed.
- 2026-09-26T23:00:00+02:00 — PASS on published V0.3 EXE SHA-256 `81720DC9AF212B625B45052674A3D53A5503C0CB5C00B696D1B2DDA213820FFC`: canonical `publish.ps1` output contains exactly one non-empty `TextAid.exe`.
- 2026-09-26T23:15:00+02:00 — PASS on published V0.3 EXE SHA-256 `EB801C88B5BFCB930E0920B8167FE04117462A545F1D47E6E4AE86F14F9F8DBF`: the tray Open fallback was added after a 0-warning build and 6 AI plus 14 Platform.Windows passing tests; canonical output contains exactly one non-empty `TextAid.exe`.
- 2026-09-26T23:35:00+02:00 — PASS on published V0.3 EXE SHA-256 `7D71903867D39B77A0E94A94EF3C8A98FEE3C154840F24139F859CB08DE0AA3E`: manual-entry behavior was added after a 0-warning build and 6 AI plus 14 Platform.Windows passing tests; canonical output contains exactly one non-empty `TextAid.exe`.
- 2026-09-26T23:45:00+02:00 — PASS on published V0.3 EXE SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72`: all entry paths now wait for explicit Process after a 0-warning build and 6 AI plus 14 Platform.Windows passing tests; canonical output contains exactly one non-empty `TextAid.exe`.

## G-004-002 — Local transformation walkthrough

Type: HUMAN
Status: PASS
Defined at: 2026-09-25T23:53:23

Condition:
The local Ollama Rewrite result appears and can be safely replaced into the source or copied without replacing it; stopped Ollama produces a usable error without crashing.

Method:
Run on Windows with a configured local model, then stop Ollama.

Validated at: 2026-09-27T00:00:00+02:00
Validated by: Olivier
Evaluated result: V0.3 candidate `TextAid.exe`, SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72`.
Comment: Olivier explicitly validated LOT-004. The local configuration, transformation, Copy, Replace, stopped-Ollama usable-error path, matching typography, modal dialogs, thinking-Off performance, and explicit Process flow are accepted. The separate no-Ollama-machine startup check remains deferred under R-012 and does not block closure.

### Test history

- 2026-09-26T22:45:00+02:00 — Olivier validated local configuration, transformation display, Copy, Replace, and stopped-Ollama behavior on V0.3 EXE SHA-256 `871F31EE5D3B8782BE1127FB1B2DF3B4462F6A9EBE3D49DF7D56A04464A06C33`. The no-Ollama-machine startup notice remains deferred.
- 2026-09-26T23:10:00+02:00 — Olivier validated matching input/output typography and modal dialog behavior on V0.3 EXE SHA-256 `81720DC9AF212B625B45052674A3D53A5503C0CB5C00B696D1B2DDA213820FFC`. The live model response was instantaneous with thinking Off, confirming the setting reaches the provider. The no-Ollama-machine startup notice remains deferred.
- 2026-09-27T00:00:00+02:00 — PASS. Olivier explicitly validated LOT-004 and accepted the final V0.3 EXE SHA-256 `2280762B84063F78B89AAED76CB1E9D3752EB237C2B8D26300CF4A40F3295A72`, including the unified explicit Process flow. The no-Ollama-machine startup check remains deferred under R-012.
