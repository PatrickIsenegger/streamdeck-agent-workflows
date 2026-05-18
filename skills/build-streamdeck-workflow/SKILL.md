---
name: build-streamdeck-workflow
description: Design and document safe, reviewable Stream Deck workflow samples with scripts, icons, prompts, platform notes, and manual-test checklists. Use when a user asks to add a new Stream Deck workflow, extend an existing workflow, create a webhook/script/modal/button example, or prepare a contributor-friendly workflow pattern for macOS, Windows, or Linux.
---

# Build Stream Deck Workflow

Use this skill to add workflow samples that contributors can understand,
review, test, and adapt.

## Workflow Shape

Each workflow should live under `workflows/<workflow-name>/` and include:

- `README.md` with purpose, setup, Stream Deck setup, platform notes, security
  notes, and review checklist
- script or config files needed for the sample
- example wrapper scripts only when secrets or local paths are required
- icon reference from `icons/source/` when useful
- optional graphic or prompt source under `graphics/`

Keep workflow names lowercase and descriptive, for example
`capture-text-webhook`.

## Safety Rules

- Never hardcode real webhook URLs, tokens, private paths, or credentials.
- Prefer environment variables and private wrapper scripts for local secrets.
- Keep generated examples harmless by default.
- Add explicit warnings for workflows that call APIs, webhooks, scripts, or
  file operations.
- Do not include examples for locks, payments, production deploys, clinical
  workflows, or physical access unless the user explicitly asks and the safety
  model is documented first.

## Platform Notes

Document the tested platform and expected support separately:

- macOS: note whether AppleScript, shell, or Shortcuts are used.
- Windows: note PowerShell, AutoHotkey, or Stream Deck plugin assumptions.
- Linux: note that official Elgato Stream Deck software is unavailable; mention
  community tools only when the workflow is designed for them.

Use `needs verification` when the maintainer cannot test a platform.

## Checklist

Before finishing, verify or document:

- script runs manually or the reason it was not run
- secrets are not committed
- README explains setup and cancel/failure behavior
- icon or graphic paths resolve
- workflow catalog is updated if the workflow is public
- risk level is clear

## Output

Summarize:

- workflow added or changed
- files created
- platforms covered
- manual test steps
- risks and remaining verification gaps
