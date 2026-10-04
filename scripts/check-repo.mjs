#!/usr/bin/env node

// Repo consistency checks. Run by CI and `npm test`. Exits 1 on any failure.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const errors = [];

const rel = (p) => path.relative(ROOT, p).replaceAll('\\', '/');
const read = (p) => fs.readFileSync(p, 'utf8');

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (kv) fields[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1').trim();
  }
  return fields;
}

// 1. Every skill folder has a valid SKILL.md whose name matches the folder.
const skillDirs = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(SKILLS_DIR, d.name, 'SKILL.md')))
  .map((d) => d.name);

if (skillDirs.length === 0) errors.push('No skills found in skills/.');

for (const name of skillDirs) {
  const file = path.join(SKILLS_DIR, name, 'SKILL.md');
  const fm = parseFrontmatter(read(file));
  if (!fm) {
    errors.push(`${rel(file)}: missing YAML frontmatter.`);
    continue;
  }
  if (fm.name !== name) errors.push(`${rel(file)}: name "${fm.name}" does not match folder "${name}".`);
  if (!fm.description) errors.push(`${rel(file)}: empty description.`);
  else if (fm.description.length > 1024) errors.push(`${rel(file)}: description over 1024 characters.`);
}

// 2. The installer ships exactly the skills that exist.
const installer = read(path.join(ROOT, 'scripts', 'installer.mjs'));
const listMatch = installer.match(/const SKILL_NAMES = \[([^\]]*)\]/);
if (!listMatch) {
  errors.push('scripts/installer.mjs: SKILL_NAMES not found.');
} else {
  const listed = [...listMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]).sort();
  const actual = [...skillDirs].sort();
  if (listed.join() !== actual.join()) {
    errors.push(`scripts/installer.mjs: SKILL_NAMES [${listed}] differs from skills/ [${actual}].`);
  }
}

// 3. Relative links in markdown files point at files that exist.
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.agents'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

for (const file of walk(ROOT)) {
  const text = read(file).replace(/```[\s\S]*?```/g, '');
  const links = [
    ...[...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]),
    ...[...text.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]),
  ];
  for (const link of links) {
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    const target = decodeURIComponent(link.split('#')[0]);
    if (!target) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), target))) {
      errors.push(`${rel(file)}: broken link "${link}".`);
    }
  }
}

// 4. Version numbers agree across manifests.
const pkgVersion = JSON.parse(read(path.join(ROOT, 'package.json'))).version;
const pluginFile = path.join(ROOT, '.claude-plugin', 'plugin.json');
if (fs.existsSync(pluginFile)) {
  const pluginVersion = JSON.parse(read(pluginFile)).version;
  if (pluginVersion !== pkgVersion) {
    errors.push(`.claude-plugin/plugin.json version ${pluginVersion} differs from package.json ${pkgVersion}.`);
  }
}

if (errors.length) {
  console.error(`check-repo: ${errors.length} problem(s)\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`check-repo: ok (${skillDirs.length} skills: ${skillDirs.join(', ')})`);
