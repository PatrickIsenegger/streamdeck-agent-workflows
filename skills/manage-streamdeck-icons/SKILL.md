---
name: manage-streamdeck-icons
description: Create, normalize, rename, and render Stream Deck icon systems from source SVGs and design tokens. Use when a user asks to make Stream Deck icons consistent, add a small icon family, update icon colors or stroke widths, render PNG exports, or review icon assets for a Stream Deck profile without editing live Stream Deck application data.
---

# Manage Stream Deck Icons

Use this skill for source-first icon work. Keep SVG sources reviewable and make
PNG exports reproducible.

## Workflow

1. Read `tokens/streamdeck-icons.json` before changing icon files.
2. Inspect existing icons in `icons/source/` and preserve the local visual
   language unless the user asks for a new style.
3. Keep artboards square and icons legible at Stream Deck size.
4. Avoid tiny readable text, third-party logos, and unclear licensing.
5. Edit source SVGs in `icons/source/`.
6. Render generated PNGs into `icons/png-144/` and `icons/png-288/` when the
   repo has a renderer available.
7. Keep file names lowercase, descriptive, and stable.
8. Update docs or inventories when an icon maps to a workflow or button.

## Style Checks

Prefer:

- consistent padding
- consistent stroke width
- simple silhouettes
- one accent color at most per icon
- clear contrast against the configured background

Avoid:

- dense shapes that disappear at 72 px
- screenshots or raster-only source art
- decorative gradients that make diffs hard to review
- unrelated bulk icon packs

## Verification

Run the available checks when dependencies are installed:

```bash
npm run render:icons
npm run audit:profile
```

If rendering is unavailable, inspect the SVG diff carefully and say that PNG
exports remain unverified.

## Output

Summarize:

- icons added or changed
- token values used
- PNG exports generated
- docs or inventory updates
- commands run
- anything unverified
