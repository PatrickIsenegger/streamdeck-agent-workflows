#!/usr/bin/env node
import { readFile } from 'node:fs/promises';

const file = process.argv[2] ?? 'examples/inventory/buttons.sample.md';
const source = await readFile(file, 'utf8');
const lines = source.split('\n');
const tableRows = lines.filter((line) => line.startsWith('|') && !line.includes('---'));
const dataRows = tableRows.slice(1);
const riskyTerms = [
  'lock',
  'alarm',
  'payment',
  'purchase',
  'deploy',
  'delete',
  'secret',
  'token',
  'clinical',
];

const findings = [];

for (const [index, row] of dataRows.entries()) {
  const normalized = row.toLowerCase();
  for (const term of riskyTerms) {
    if (normalized.includes(term)) {
      findings.push(`row ${index + 1}: contains risk term "${term}"`);
    }
  }
}

if (findings.length > 0) {
  console.error('Potentially risky inventory entries found:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exitCode = 1;
} else {
  console.log(`Inventory audit passed: ${dataRows.length} rows checked in ${file}`);
}
