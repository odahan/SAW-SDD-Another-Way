# Project

## Purpose

TextAid is a resident Windows application that captures selected text from another application, applies one configurable AI transformation, previews the result, and optionally replaces the original selection. Its subtitle is **Local-first text transformer & translator**. The official product page is `https://www.e-naxos.com/textaid`.

## Problem

Users need quick rewriting, correction, translation, shortening, expansion, simplification, tone changes, and summarization in the application where they work, without switching to a chat workflow or sending text to a remote service by default.

## Users and actors

- A Windows user selects text and triggers TextAid with `Ctrl+C+C` (`Ctrl+C`, then `C` for Choose) for action choice or `Ctrl+C+T` (`Ctrl+C`, then `T` for Translate) for immediate translation.
- The source application owns the original selection and receives the accepted replacement.
- A local Ollama instance is the default model provider; the user may explicitly configure a remote provider.
- The user is the final authority for `Replace`, `Copy`, `Cancel`, configuration, and Pro-Spec human validations.

## Scope

The V1 flow has two entry points. `Ctrl+C+C` retains capture → choose transformation → model response → preview. `Ctrl+C+T` captures text and starts translation immediately, using the user language and preferred translation language from Settings to select the destination; the user can select another destination to translate again. For a third or uncertain source language, the destination is the user language. A completed result offers `Replace` to replace the original selection, `Copy` to leave the original unchanged and copy the result for pasting elsewhere, or `Cancel`. Both shortcut sequences are defaults that the user can reassign in Settings. V1 includes a dark WPF interface, tray access, Settings, nine built-in transformations, declarative custom actions, local-first policy, optional remote connection, English source UI with generated locale catalogs, optional debug logging, and a single self-contained Windows x64 executable that initializes its visible action definitions on first run.

## Out of scope

V1 excludes chat, autonomous agents, RAG, MCP, workflows, conversation memory, transformation history, rich-text preservation, OCR, voice, file processing, cloud synchronization, accounts, telemetry, automatic updates, and complex installers. Later possibilities in source section 92 are ideas, not planned V1 lots.

## Stable functional characteristics

- One editable session text, one selected action, one model invocation, one result. The text may originate from a selection, typing, or paste; the user starts Process explicitly.
- A destination change in the quick-translation session starts a new translation of the original captured text; only the latest successful result may be used for replacement.
- The main window is a short-lived transaction with `Replace`, `Copy`, and `Cancel` outcomes and at most one active session.
- Local model use works without a remote server. This device only allows loopback endpoints only; On-premises permits a user-configured administered-network endpoint, and External denotes Internet-hosted use.
- The user can create, edit, enable, or disable actions without recompiling the application. Action JSON lives in the visible `actions` folder beside the executable so it can be backed up with the application data.
- An action may require supplementary user instructions before Process; the user may also enter optional instructions for any action. These instructions apply to one invocation only.
- The product remains small enough to be explained as: “TextAid captures selected text, applies one configurable AI transformation through MAF, and optionally replaces the original text.”

## Glossary

- **Action:** declarative text transformation and its prompt template.
- **Connection:** provider type, endpoint, and authentication method.
- **Model profile:** connection, model, generation settings, and provider-specific options.
- **Invocation session:** captured text, source window, selected action, result, and transaction state.
- **This device only:** mode that forbids model traffic beyond the local machine.
- **On-premises:** a user-declared endpoint on an administered network; the application cannot independently verify its ownership or routing.
- **External:** an Internet-hosted endpoint deliberately enabled by the user.
- **MAF:** Microsoft Agent Framework, the sole application AI middleware.
