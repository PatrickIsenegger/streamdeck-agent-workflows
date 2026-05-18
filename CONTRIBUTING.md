# Contributing

Thanks for considering a contribution. The goal of this project is to collect safe, practical patterns for managing Stream Deck profiles and icon systems with coding agents.

## Good first contributions

- Improve prompts in `docs/prompts.md`.
- Add checks to `scripts/audit-profile.mjs`.
- Add small, source-first SVG icon examples.
- Improve docs around exported profile workflows.
- Add templates for additional agent harnesses.

## Safety rules

Please do not contribute:

- real personal Stream Deck profile exports
- secrets, tokens, passwords, local machine paths, or private URLs
- screenshots containing personal information
- actions that operate locks, alarms, payments, production deploys, or clinical workflows
- tooling that edits live Stream Deck application folders by default

Use sanitized samples and documentation instead.

## Pull request expectations

A useful pull request should explain:

- what workflow problem it solves
- whether it touches code, docs, templates, or graphics
- how you tested it
- any safety trade-offs or assumptions

For scripts, keep dependencies modest and document any platform-specific behavior.

## Style

Prefer clear, boring, operational language. This repo should be helpful to people maintaining real control surfaces, not impressive in the abstract.
