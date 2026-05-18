# Agent Instructions

This repository models safe, reviewable workflows for managing Stream Deck exports and icon systems with coding agents.

## Operating rules

- Never edit files outside this repository.
- Never modify a live Stream Deck application support directory.
- Use the relevant skill in `skills/` when the task matches profile auditing,
  icon management, or workflow creation.
- Treat `profiles/exported/` and `examples/` as input unless a task explicitly asks for a template update.
- Write proposed profile artifacts to `profiles/reviewed/` or a user-provided review directory.
- Keep source icons in `icons/source/`; generated PNG output belongs in `icons/png-144/` or `icons/png-288/`.
- Prefer small changes: one workflow, one page, one icon family, one script, or one document at a time.
- Update documentation when changing workflow semantics.
- Do not add real profile exports, private paths, secrets, or machine-specific credentials.

## Safety boundaries

Escalate to the human before suggesting changes involving:

- locks, alarms, doors, gates, or physical access
- payments or purchasing
- production deploys
- clinical, emergency, or safety-critical workflows
- credentials, tokens, or secret stores

## Verification

When you change scripts, run the relevant command if dependencies are available:

```bash
npm run check
npm run render:icons
```

If you cannot run a check, say that plainly and explain what remains unverified.

## Local skills

- `skills/audit-streamdeck-profile`: use for inventories and risk reviews.
- `skills/manage-streamdeck-icons`: use for source SVG and PNG export work.
- `skills/build-streamdeck-workflow`: use for adding or revising workflow
  samples.
