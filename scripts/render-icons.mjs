#!/usr/bin/env node
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import sharp from 'sharp';

const tokenPath = 'tokens/streamdeck-icons.json';
const sourceDir = 'icons/source';
const tokens = JSON.parse(await readFile(tokenPath, 'utf8'));
const sizes = tokens.exportSizes ?? [144, 288];
const files = (await readdir(sourceDir)).filter((file) => file.endsWith('.svg'));

for (const size of sizes) {
  const outDir = `icons/png-${size}`;
  await mkdir(outDir, { recursive: true });

  for (const file of files) {
    const input = join(sourceDir, file);
    const output = join(outDir, `${basename(file, '.svg')}.png`);
    await sharp(input).resize(size, size).png().toFile(output);
    console.log(`rendered ${output}`);
  }
}
