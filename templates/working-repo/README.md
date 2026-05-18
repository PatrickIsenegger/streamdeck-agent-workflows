# My Stream Deck Control Repo

This is a starter README for a private working repo where you manage your own Stream Deck exports.

## Workflow

1. Export from the Stream Deck app into `profiles/exported/`.
2. Keep exported originals unchanged.
3. Ask an agent for one narrow change.
4. Write proposed outputs to `profiles/reviewed/`.
5. Review the diff.
6. Import manually and test on the device.

## Local folders

```text
profiles/exported/   # original exports, read-only in normal agent work
profiles/reviewed/   # proposed outputs
icons/source/         # editable SVG source icons
inventory/            # button inventory and notes
```

## Safety note

Do not store secrets, private tokens, or sensitive action definitions here unless this repository is private and appropriately protected.
