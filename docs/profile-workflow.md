# Profile Workflow

This document describes a safe pattern for working with Stream Deck profiles and actions.

## 1. Export from the Stream Deck app

Use the Stream Deck app to export a profile or action. Keep the original export unchanged.

Recommended local layout in your private working repo:

```text
profiles/
  exported/
    work-mac-original.StreamDeckProfilesBackup
  reviewed/
    work-mac-meeting-controls-reviewed/
```

Do not put real personal exports in this public repository.

## 2. Create an inventory

Ask an agent to inspect the export and produce a human-readable inventory before changing anything.

Useful inventory fields:

- page or folder
- button position
- label
- icon file
- action type
- plugin dependency
- external path or URL
- risk level
- notes

## 3. Scope the change

Good scopes:

- one page
- one folder
- one icon family
- one machine-specific profile variant
- one broken-path cleanup

Avoid large one-shot rewrites.

## 4. Review before import

Review the diff like code:

- Did any shortcut or action behavior change?
- Did any external path change?
- Are plugin dependencies documented?
- Are generated images reproducible from source?
- Are risky actions unchanged unless explicitly intended?

## 5. Import manually and test

Import through the Stream Deck app. Test every changed key on the device.

A successful agent session ends with a reviewed artifact and a short summary, not with direct mutation of the live setup.
