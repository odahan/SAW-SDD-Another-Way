# Gates — LOT-012

## G-012-001 — Locale-pack safety tests

Type: AUTO
Status: PASS

Condition: Tests cover override precedence and restoration; valid import/export; fingerprint mismatch; missing/extra keys; placeholder loss; invalid JSON; and preservation of the previous active cache after every rejected import.

Method: Run `dotnet test -m:1` for Core and App-related tests using deterministic temporary directories.

Test history:

- 2026-09-28 — PASS. `dotnet test TextAid.sln -m:1 -p:NuGetAudit=false` completed with 100 passing tests. `LocalizationCatalogTests` covers override precedence and restoration, compatible export/import, fingerprint mismatch, placeholder loss, invalid JSON, and rejected-import preservation; its catalog validation coverage includes missing and extra keys.

## G-012-002 — Translation correction walkthrough

Type: HUMAN
Status: PASS

Condition: A user corrects one translation, confirms it survives a suggested-cache replacement, restores the suggested value, exports a pack, and imports a compatible pack without any network access.

Method: Exercise the themed review editor on Windows.

Validated at: 2026-09-28T23:29:30+02:00
Validated by: Olivier
Evaluated result: Published 1.1.0 candidate `src/TextAid.App/bin/Publish/TextAid.exe`, SHA-256 `A8E313A196A4B09AE6990A7A59AF83AD9E0D8C87F87944DC0329B59FEE1E6C66`.
Comment: Olivier confirmed that the complete offline walkthrough passed: a personal correction survived a suggested-cache replacement, restoring it returned the suggested value, and a compatible language pack exported and imported successfully. The reviewed editor's dark theme and centered opening behavior were also accepted.

### Test history

No prior evaluations.
