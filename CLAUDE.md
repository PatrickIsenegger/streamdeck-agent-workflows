# Claude Code Instructions

You are working in a repository for safe Stream Deck profile and icon workflows.

## Core principle

Agents edit exported artifacts and source files. Humans import reviewed results into the Stream Deck app.

## Do

- Keep changes narrow and reviewable.
- Read the matching skill in `skills/` before profile audits, icon work, or
  workflow sample changes.
- Preserve exported inputs unless explicitly asked to create a sanitized fixture.
- Update docs when workflow behavior changes.
- Prefer SVG sources over editing generated PNGs.
- Summarize every behavior-affecting change separately from visual/icon changes.

## Do not

- Edit live Stream Deck application folders.
- Add real profile exports from a user's machine.
- Add secrets, personal paths, private URLs, or credentials.
- Combine visual redesign and action behavior changes unless explicitly requested.
- Recommend bypassing backups, Git review, or manual import.

## Useful commands

```bash
npm run check
npm run render:icons
```

If dependencies are missing, explain the intended verification command instead of pretending it ran.
