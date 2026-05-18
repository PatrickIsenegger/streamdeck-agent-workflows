# Agent Skills

Skills turn the repository's safety model into small reusable procedures for
agents. They are meant to be copied into an agent's local skills directory or
read directly from this repo when a tool does not support skills natively.

## Included skills

| Skill | Use it for |
| --- | --- |
| `audit-streamdeck-profile` | Build inventories, classify risk, and review exported profile artifacts before import. |
| `manage-streamdeck-icons` | Normalize source SVG icons, render PNG exports, and keep icon systems consistent. |
| `build-streamdeck-workflow` | Add safe workflow samples with scripts, icons, platform notes, and review checklists. |

## Using with Codex

Copy one or more skill folders into your Codex skills directory, or keep them
in a working repo and ask Codex to use the specific skill path.

Example:

```text
Use the skill at skills/audit-streamdeck-profile to audit this private Stream
Deck working repo. Write the inventory to inventory/buttons.md and do not
change profile files.
```

## Using with other agents

If an agent does not have a formal skills mechanism, treat each `SKILL.md` as a
compact task procedure. Paste the relevant skill into project instructions or
ask the agent to read the skill file before working.

## Contribution guidelines

Good new skills should be:

- narrow enough to trigger predictably
- safe by default
- useful without private context
- short enough to read in one pass
- aligned with exported artifacts and manual import

Avoid skills that automate live Stream Deck application folders directly.
