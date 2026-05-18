#!/usr/bin/env bash
set -euo pipefail

# Copy this file to a private location and fill in your real webhook URL.
# Do not commit real webhook URLs or tokens to public repositories.

cd "$(dirname "$0")/../.."

export CAPTURE_WEBHOOK_URL="https://example.com/webhook"
# export CAPTURE_WEBHOOK_TOKEN="replace-me"
export CAPTURE_SOURCE="streamdeck"

node workflows/capture-text-webhook/capture-text-webhook.mjs
