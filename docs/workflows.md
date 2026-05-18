# Workflow Catalog

This catalog collects small, reviewable Stream Deck workflows that can be adapted to different agent setups.

The pattern is always the same:

```text
button press -> small local script/action -> reviewed external effect -> documented rollback
```

Avoid workflows where one button can silently trigger a high-risk action.

## Current workflows

| Workflow | Status | Platforms | Risk | Notes |
| --- | --- | --- | --- | --- |
| [Capture text to webhook](../workflows/capture-text-webhook/README.md) | sample | macOS tested first; Windows/Linux designed but needs verification | low-medium | Opens a small text prompt and sends JSON to a webhook. |
| Daily note capture | planned | macOS/Windows/Linux | low | Append timestamped text to a local Markdown file before syncing elsewhere. |
| Meeting control icon refresh | planned | macOS/Windows | low | Regenerate consistent meeting-control icons from SVG sources. |
| Profile inventory audit | planned | macOS/Windows/Linux | low | Parse a sanitized inventory and flag risky action terms. |
| Home Assistant safe scene trigger | planned | macOS/Windows/Linux | medium | Trigger only allowlisted webhook scenes with explicit labels. |

## Workflow acceptance checklist

A workflow should include:

- clear human-facing purpose
- required environment variables
- platform support notes
- failure behavior
- security considerations
- Stream Deck setup notes
- sample prompt for agents
- sanitized example only

## Contribution ideas

Good next contributions:

- verified Windows notes for `capture-text-webhook`
- Linux notes for Zenity/KDialog/OpenDeck
- a no-network local daily note capture workflow
- icon-only workflow variants
- sample profile inventory snippets
