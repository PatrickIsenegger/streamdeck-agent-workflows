---
name: audit-streamdeck-profile
description: Audit exported or reviewed Stream Deck profile artifacts and action inventories for labels, icons, plugin dependencies, external paths, secrets, and risky automations. Use when a user asks to inspect a Stream Deck profile, build or update a button inventory, review a profile diff before import, or classify Stream Deck actions by risk without changing the live Stream Deck setup.
---

# Audit Stream Deck Profile

Use this skill to turn exported Stream Deck artifacts into a reviewable human
inventory before editing or importing anything.

## Workflow

1. Identify the working repo layout. Prefer `profiles/exported/`,
   `profiles/reviewed/`, `examples/inventory/`, and `inventory/` when they
   exist.
2. Treat exported profile files as input. Do not modify originals.
3. Inspect profile notes, inventories, JSON-like exports, scripts, and icon
   references. If a binary export cannot be inspected directly, document that
   limitation and ask for an unpacked or exported action sample.
4. Build or update an inventory with:
   - page or folder
   - button position if known
   - label or title
   - action type
   - icon path
   - plugin dependency
   - external path, URL, script, or shortcut
   - risk level
   - notes
5. Flag missing icons, broken paths, duplicate labels, unclear titles,
   machine-specific paths, and plugin dependencies that are not documented.
6. Do not change behavior unless the user explicitly asks for a follow-up
   cleanup.

## Risk Levels

- `low`: local navigation, app launch, harmless UI shortcut, static note.
- `medium`: external script, webhook, file operation, network call, API call.
- `high`: locks, alarms, doors, payments, purchases, production deploys,
  destructive file actions, secrets, clinical, emergency, or safety-critical
  workflows.

Escalate high-risk items to the human and keep them unchanged unless the task
explicitly says to work on them.

## Output

Write findings to `inventory/buttons.md` or the path requested by the user.
Include a short summary with:

- files inspected
- inventory rows added or updated
- risks found
- assumptions and uninspectable artifacts
- recommended next narrow task
