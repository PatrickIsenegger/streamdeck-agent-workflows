# Safety Model

This project assumes a Stream Deck can trigger real actions. Even a harmless-looking icon cleanup can become risky if it is mixed with behavior changes.

## The model

```text
Stream Deck app -> export -> Git repo -> agent edits -> human diff review -> manual import -> device test
```

The live Stream Deck setup stays outside the agent's writable scope.

## Non-negotiables

- Backup before larger changes.
- Keep exported originals unchanged.
- Review diffs before import.
- Import manually through the Stream Deck app.
- Test on the physical device.

## High-risk actions

Use extra caution or avoid agent-driven changes entirely for actions involving:

- locks, doors, alarms, garage doors, gates
- payments or purchases
- production deployments
- destructive file operations
- clinical, emergency, or safety-critical work
- secrets, tokens, password managers, or private infrastructure

## Separate visual and behavioral changes

Review is much easier when visual changes and action behavior changes are separate.

Good:

1. Normalize meeting-control icons.
2. Review and import.
3. In a later change, update one keyboard shortcut.

Bad:

1. Redesign the whole profile and change shortcuts at the same time.

## Agent permissions

A good agent session has a narrow writable surface:

- `icons/source/` for SVG source edits
- `icons/png-*` for generated images
- `profiles/reviewed/` for proposed profile output
- `inventory/` for documentation

The agent should not need access to live application folders.
