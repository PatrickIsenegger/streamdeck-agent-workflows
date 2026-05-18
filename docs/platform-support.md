# Platform Support

This repository is developed and initially tested on macOS. The workflow is designed to be useful on Windows too, and partially useful on Linux with important caveats.

## Summary

| Platform | Official Stream Deck app | Repo scripts | Notes |
| --- | --- | --- | --- |
| macOS | Yes | Expected to work | Primary tested platform for this repo. |
| Windows | Yes | Expected to work | Needs contributor testing for path and shell details. |
| Linux | No official Elgato app | Expected to work for repo tooling | Stream Deck use depends on third-party software such as OpenDeck or other community tools. |

## macOS

The author can test this path directly.

Expected workflow:

1. Export from the official Stream Deck app.
2. Work on exported artifacts in a Git repo.
3. Review changes.
4. Import manually through the Stream Deck app.
5. Test on the physical device.

## Windows

Elgato officially supports Stream Deck software on Windows 10/11 64-bit. The artifact workflow should transfer well, but Windows contributors should verify:

- path handling in profile inventories
- shell commands in scripts and documentation
- icon rendering dependencies
- import/export behavior in current Stream Deck versions

## Linux

Elgato does not currently offer the official Stream Deck app for Linux. That means this repo cannot honestly claim full Linux support for official Stream Deck profile import/export.

The repo can still help Linux users with:

- icon source management
- prompt templates
- safety documentation
- inventory patterns
- generic Stream Deck control workflows

Linux device control depends on community tooling. OpenDeck is one promising option because it targets Linux, Windows, and macOS and aims to support many original Stream Deck plugins. Other Linux tools may work for simpler setups but can have feature gaps.

## Contribution request

Windows and Linux contributors are especially welcome. Useful contributions:

- verified setup notes
- script compatibility fixes
- path handling improvements
- screenshots or sanitized inventories
- notes for OpenDeck or other Linux Stream Deck tools

Please keep all examples sanitized and avoid private profile exports.

## Sources

- Elgato Stream Deck Software system requirements: https://help.elgato.com/hc/en-us/articles/34512594204049-Elgato-Stream-Deck-Software-System-Requirements
- Elgato Stream Deck profile guidance: https://docs.elgato.com/stream-deck/profiles/getting-started
- OpenDeck: https://github.com/nekename/OpenDeck
- OpenDeck on Flathub: https://flathub.org/en/apps/me.amankhanna.opendeck
