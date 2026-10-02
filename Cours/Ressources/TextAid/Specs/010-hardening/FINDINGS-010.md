# Findings — LOT-010

> Before working on this lot, read the repository root README.md.

## F-010-001 — Local-model cold-start feedback

Status: Verified by Olivier

Recorded at: 2026-09-28T18:44:00+02:00

Evidence: Olivier observed that a cold local LLM can make the application appear unresponsive before the normal transformation begins.

Impact: The existing indeterminate progress indicator covers the transformation call but does not distinguish model loading from normal generation. Cold starts therefore need explicit, localized preparation feedback.

Destination: REQ-010-007; automated regression and the LOT-010 Windows compatibility matrix.

Disposition: The implementation checks Ollama's running-model list and warms a missing This device only model through OllamaSharp with a localized, visible preparation state. Olivier confirmed the corrected local-model path in the final regression pass.

## F-010-002 — Neutral output-language selection is visually lost after an in-place locale change

Status: Verified by Olivier

Recorded at: 2026-09-28T19:00:00+02:00

Evidence: Olivier generated a French UI catalog. In the still-open main session, `Unchanged` was correctly localized, but the output-language ComboBox had no selected item until a different language was selected and then changed back. Opening a new session restored the selection.

Impact: The neutral output-language option remains valid but appears unavailable within the existing session after a locale change.

Disposition: `MainViewModel.RefreshLocalizedActionLabels` raises a selected-value notification after recreating the localized language list, causing WPF to resolve the existing `Unchanged` code against its new localized item. Olivier confirmed the corrected in-place locale path in the final regression pass.

## F-010-003 — Leading emoji may be omitted by local Rewrite and Correct generation

Status: Verified by Olivier

Recorded at: 2026-09-28T19:00:00+02:00

Evidence: Olivier verified that general emoji capture and display are preserved, but reported that an emoji in the first text position was systematically absent from local Rewrite and Correct output.

Impact: The existing declarative prompts request semantic preservation but do not explicitly retain emoji characters, allowing model output to omit a leading emoji even though TextAid preserves the Unicode input.

Disposition: Every transformation adds a concise default to keep emojis unchanged. Any explicit contrary directive in either the declarative action or the user's supplementary instructions takes priority, so an action may deliberately remove emojis. Olivier confirmed the corrected leading-emoji path in the final regression pass.

## F-010-004 — Local model echoed an action-style instruction after the initial emoji-preservation wording

Status: Verified by Olivier

Recorded at: 2026-09-28T19:35:00+02:00

Evidence: Olivier's captured session showed the local model returning “Please rewrite or correct…” rather than a transformed result after the initial long emoji-preservation instruction was added.

Impact: The underlying captured text is separate from the action prompt in the MAF request, but a verbose meta-instruction can make this local model produce an instruction-like response instead of the requested transformation.

Disposition: Replaced the long conditional preservation sentence with the concise default “Keep emojis unchanged by default. An explicit instruction to modify emojis takes priority.” Olivier confirmed the corrected local-model transformation path in the final regression pass.

## F-010-005 — Unchanged output language did not prevent a local model from translating

Status: Verified by Olivier

Recorded at: 2026-09-28T19:45:00+02:00

Evidence: Olivier selected the localized French `Unchanged` option in the main session and ran Rewrite. The French captured text was returned in English.

Impact: The neutral output-language value selected correctly in the UI, but it supplied no language constraint to the model. An English-language action prompt could therefore cause the local model to translate a French input to English.

Disposition: A selected `Unchanged` value explicitly directs the provider to preserve the input's language or languages and not translate. For a confidently detected supported language, TextAid declares `GENERATION LANGUAGE =` followed by that source language (for example, French) so an English action prompt cannot dominate a French source. Olivier confirmed the French Rewrite path with the localized `Unchanged` option.

## F-010-006 — Initial local Humanize prompt retained targeted rhetorical patterns

Status: Accepted limitation for local models

Recorded at: 2026-09-28T20:25:00+02:00

Evidence: Olivier's qwen3.5:9b results removed punctuation excess and preserved a concise factual meeting note, but changed a negative contrast into another balanced construction and retained unsupported hype and an adjective cluster.

Impact: A broad instruction to remove formulaic patterns leaves a local model room to replace the shape while preserving its rhetorical function.

Disposition: The Humanize prompt requires removal, not synonym substitution or another balanced formula; it names the observed contrast, hype, and adjective-cluster cases, lowers temperature to 0.2, and keeps the bounded factual-preservation rules. GPT 5.4 produced suitable results; qwen3.5:9b showed a provider-quality limitation accepted by Olivier for V0.9. Future action refinements are outside this closure.

## F-010-007 — Local Humanize still returned targeted input unchanged

Status: Accepted limitation for local models

Recorded at: 2026-09-28T20:40:00+02:00

Evidence: In the follow-up qwen3.5:9b run, the first two samples containing a negative contrast, unsupported hype, and adjective clusters were returned unchanged. The factual meeting note remained unchanged as intended.

Impact: The prior prompt still allowed the local model to treat preserving source phrasing as more important than applying the requested editorial change.

Disposition: The prompt makes rewriting mandatory whenever a target pattern is present, explicitly forbids returning the affected sentence unchanged, and provides short English examples of the desired transformation rule. GPT 5.4 validated the intended behavior; the remaining local-model variance is accepted by Olivier for V0.9 and is not a release blocker.
