#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import os from 'node:os';

const webhookUrl = process.env.CAPTURE_WEBHOOK_URL;
const webhookToken = process.env.CAPTURE_WEBHOOK_TOKEN;
const source = process.env.CAPTURE_SOURCE ?? 'streamdeck-agent-workflows';

if (!webhookUrl) {
  console.error('CAPTURE_WEBHOOK_URL is required. Refusing to capture without a destination.');
  process.exit(2);
}

function run(command, args) {
  return execFileSync(command, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function captureWithAppleScript() {
  const script = `
    set dialogResult to display dialog "Capture text to webhook:" default answer "" buttons {"Cancel", "Send"} default button "Send" cancel button "Cancel"
    return text returned of dialogResult
  `;
  return run('osascript', ['-e', script]);
}

function captureWithPowerShell() {
  const script = `
    Add-Type -AssemblyName Microsoft.VisualBasic;
    [Microsoft.VisualBasic.Interaction]::InputBox('Capture text to webhook:', 'Stream Deck Capture', '')
  `;
  return run('powershell.exe', ['-NoProfile', '-Command', script]);
}

function captureWithLinuxDialog() {
  try {
    return run('zenity', ['--entry', '--title=Stream Deck Capture', '--text=Capture text to webhook:']);
  } catch {
    return run('kdialog', ['--inputbox', 'Capture text to webhook:']);
  }
}

async function captureWithTerminal() {
  const rl = createInterface({ input, output });
  try {
    return await rl.question('Capture text to webhook: ');
  } finally {
    rl.close();
  }
}

async function captureText() {
  try {
    if (process.platform === 'darwin') return captureWithAppleScript();
    if (process.platform === 'win32') return captureWithPowerShell();
    if (process.platform === 'linux') return captureWithLinuxDialog();
  } catch (error) {
    if (process.env.CAPTURE_DEBUG === '1') {
      console.error(`Dialog backend failed: ${error.message}`);
    }
  }

  return captureWithTerminal();
}

const text = (await captureText()).trim();

if (!text) {
  console.log('No text captured. Nothing sent.');
  process.exit(0);
}

const payload = {
  text,
  source,
  workflow: 'capture-text-webhook',
  timestamp: new Date().toISOString(),
  platform: process.platform,
  hostname: os.hostname(),
};

const headers = {
  'content-type': 'application/json',
  'user-agent': 'streamdeck-agent-workflows/capture-text-webhook',
};

if (webhookToken) {
  headers.authorization = `Bearer ${webhookToken}`;
}

const response = await fetch(webhookUrl, {
  method: 'POST',
  headers,
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const body = await response.text().catch(() => '');
  console.error(`Webhook failed: ${response.status} ${response.statusText}`);
  if (body) console.error(body.slice(0, 500));
  process.exit(1);
}

console.log('Capture sent.');
