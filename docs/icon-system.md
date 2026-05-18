# Icon System

The icon workflow is source-first.

```text
tokens/streamdeck-icons.json -> icons/source/*.svg -> icons/png-144/*.png + icons/png-288/*.png
```

## Why source-first?

Generated PNG files are hard to review. SVG source files and design tokens make changes visible in Git.

## Suggested constraints

- Use square artboards.
- Keep icons legible at small sizes.
- Avoid tiny text in icons.
- Use a consistent stroke width and padding.
- Keep generated PNGs reproducible.

## Token file

The sample token file lives at `tokens/streamdeck-icons.json`.

It defines:

- background color
- foreground color
- accent colors
- default stroke width
- export sizes
- padding guidance

Agents should read the token file before creating or editing icon sources.

## Rendering

Use:

```bash
npm install
npm run render:icons
```

The renderer uses `sharp` to convert SVG files from `icons/source/` into PNG outputs.

## Contributing icons

Prefer a small set of useful, generic icons over a large pack. Good candidates:

- microphone
- camera
- terminal
- home
- browser
- focus
- recording
- automation

Do not include third-party logos unless licensing is clear.
