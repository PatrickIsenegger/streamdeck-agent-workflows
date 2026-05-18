# Security Policy

This repository is about workflows around Stream Deck profile artifacts. It should never require secrets or access to a live Stream Deck application data folder.

## Reporting a vulnerability

Please open a GitHub security advisory or contact the maintainer privately if you find a problem that could expose secrets, private paths, or unsafe automation patterns.

## Scope

In scope:

- scripts that mishandle paths or file contents
- documentation that encourages unsafe agent permissions
- templates that could accidentally expose secrets
- workflow examples that bypass review gates for sensitive actions

Out of scope:

- vulnerabilities in Stream Deck itself
- vulnerabilities in third-party plugins
- vulnerabilities in Codex, Claude, Cursor, or other agent products

## Safety stance

Agents should work on exported artifacts in a repository. Humans should review diffs and import manually. This project should not normalize live edits to Stream Deck application support folders.
