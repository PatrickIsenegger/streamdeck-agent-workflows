# Prompt Library

These prompts are intentionally narrow. The goal is reviewable progress, not one-shot magic.

## Inventory first

```text
Audit this Stream Deck working repo. Build an inventory of all pages, buttons,
labels, icon files, plugin dependencies, and external file references. Do not
change profile files yet. Write findings to inventory/buttons.md.
```

## Icon consistency

```text
Create a consistent icon style for the meeting-control buttons in icons/source.
Use tokens/streamdeck-icons.json. Render PNG exports at 144 and 288 px. Do not
change unrelated icons.
```

## Profile variant

```text
Prepare a reviewed profile variant for my work Mac. Keep exported originals
unchanged, update only profiles/reviewed/, and summarize every shortcut or path
that differs from the base profile.
```

## Documentation cleanup

```text
Update README.md and inventory/buttons.md so a new maintainer can understand
what each Stream Deck page is for, which plugins are required, and which
buttons call external scripts. Do not change profile artifacts.
```

## Safety review

```text
Review the proposed profile changes for risky actions. Flag anything involving
locks, payments, production deploys, destructive file operations, secret stores,
or clinical workflows. Do not modify files; write findings to REVIEW.md.
```

## Good agent output

Ask agents to separate:

- visual changes
- behavior changes
- generated files
- commands run
- unverified assumptions

That structure makes human review faster.
