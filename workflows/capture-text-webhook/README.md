# Capture Text to Webhook

This sample workflow turns a Stream Deck button into a small capture tool:

```text
Stream Deck key -> local script -> text entry dialog -> webhook POST
```

Use it for low-risk capture flows such as:

- quick notes
- inbox capture
- homelab task ideas
- writing prompts
- snippets for a personal knowledge system

Do not use it for secrets, passwords, patient data, payment actions, or anything that should not leave the machine.

## What it does

The sample script:

1. Opens a small text input prompt.
2. Lets the user cancel safely.
3. Sends the entered text to a webhook as JSON.
4. Fails closed if no webhook URL is configured.

Payload shape:

```json
{
  "text": "example note",
  "source": "streamdeck-agent-workflows",
  "workflow": "capture-text-webhook",
  "timestamp": "2026-05-18T15:00:00.000Z",
  "platform": "darwin"
}
```

## Setup

Copy the script into your private Stream Deck working repo or reference it directly from this repository.

Set the webhook URL as an environment variable:

```bash
export CAPTURE_WEBHOOK_URL="https://example.com/webhook"
```

Optional bearer token:

```bash
export CAPTURE_WEBHOOK_TOKEN="replace-me"
```

Run manually first:

```bash
node workflows/capture-text-webhook/capture-text-webhook.mjs
```

## Stream Deck setup

In the Stream Deck app, create a key that runs the script.

Suggested title:

```text
Capture
```

Suggested icon source:

```text
icons/source/capture-text.svg
```

On macOS, a shell wrapper is usually easiest:

```bash
#!/usr/bin/env bash
cd /path/to/your/streamdeck-agent-workflows
CAPTURE_WEBHOOK_URL="https://example.com/webhook" \
  node workflows/capture-text-webhook/capture-text-webhook.mjs
```

Keep the real webhook URL in your private setup, not in a public profile export.

## Platform notes

| Platform | Dialog backend | Status |
| --- | --- | --- |
| macOS | AppleScript `display dialog` | Primary path; maintainer can test. |
| Windows | PowerShell + VisualBasic InputBox | Designed, needs verification. |
| Linux | Zenity, KDialog, or terminal fallback | Designed, needs verification. |

The Linux path depends on desktop tooling. Headless environments fall back to terminal input, which is not useful from a Stream Deck button unless a terminal is attached.

## Security notes

- Treat webhook URLs as secrets if they can trigger private automation.
- Prefer HTTPS.
- Do not capture sensitive personal, clinical, or credential material.
- Keep logs minimal.
- Consider making the receiving webhook idempotent and rate-limited.

## Agent prompt

```text
Add the capture-text-webhook workflow to my private Stream Deck control repo.
Keep the webhook URL out of committed files. Use an environment variable or a
private local wrapper script. Add a Stream Deck inventory entry for the Capture
button and document how to test the script manually before assigning it to a key.
```

## Review checklist

- [ ] Script works manually.
- [ ] Webhook URL is not committed.
- [ ] Button inventory documents the action.
- [ ] Captured data is non-sensitive.
- [ ] Failure/cancel behavior is acceptable.
