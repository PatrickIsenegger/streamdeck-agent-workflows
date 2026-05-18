# Sample Button Inventory

This is a sanitized example inventory. Do not add private profile exports or machine-specific secrets.

| Page | Position | Label | Icon | Action type | Dependency | Risk | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Meetings | 1,1 | Mute | icons/source/microphone.svg | Hotkey | Built-in | low | Toggles microphone mute in meeting app. |
| Meetings | 1,2 | Camera | icons/source/camera.svg | Hotkey | Built-in | low | Toggles camera. |
| Workbench | 1,1 | Terminal | icons/source/terminal.svg | Open | Built-in | low | Opens terminal app. |
| Workbench | 1,2 | Browser | icons/source/browser.svg | Open | Built-in | low | Opens default browser. |
| Home | 1,1 | Lights | icons/source/home.svg | Plugin action | Home Assistant plugin | medium | Review entity target before import. |

## Review notes

- No destructive actions in this sample.
- No private paths.
- No live profile export is included.
