# Findings — LOT-007

> Before working on this lot, read the repository root README.md.

## F-007-001 — Initial debug events did not identify displayed configuration failures

Status: RESOLVED

Observation: Olivier confirmed that the opt-in debug log is created and persists across application restarts, but an all-connections-inactive invocation showed a user-facing configuration error without an identifiable failure-category event in the log. The Debug page also lacked a direct way to open the log directory.

Resolution: LOT-007 now writes `event=user-facing-failure category=Configuration` before presenting recovery guidance, including the all-inactive configuration path. The log additionally records operation, exception type, HRESULT, protocol/native error codes, safe stack traces, and inner-exception structure while excluding exception messages and data because they may reflect secrets or user content. The Debug page includes **Open debug-log folder**.

Evidence: Deterministic tests prove a user-facing failure category and exception stack event are logged, while API-key and clipboard-text sentinels remain absent. The current published candidate is `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `7E9D8BDDB0AEC60BB4D87F49275C30ED53A003812F3B116B4AA38C4F2C7134D9`.
