#!/usr/bin/env node

/**
 * installer.mjs - Installer CLI interaktif & otomatis untuk anti-slop-fiction
 * 
 * Penggunaan:
 *   npx anti-slop-fiction
 *   node scripts/installer.mjs --target global
 *   node scripts/installer.mjs --target workspace
 *   node scripts/installer.mjs --target claude
 *   node scripts/installer.mjs --dry-run
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');

const SKILL_NAMES = ['antislop-core', 'antislop-pacing', 'antislop-ending'];

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    target: null,
    dest: null,
    dryRun: false,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--target' || arg === '-t') {
      options.target = args[++i];
    } else if (arg === '--dest' || arg === '-d') {
      options.dest = args[++i];
    }
  }

  return options;
}

function printBanner() {
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('\x1b[1m\x1b[32m%s\x1b[0m', '      🖋️  anti-slop-fiction Modular Skills Installer   ');
  console.log('\x1b[36m%s\x1b[0m', '=======================================================');
  console.log('Hilangkan AI story slop, klise murahan, dan dialog palsu.\n');
}

function printHelp() {
  printBanner();
  console.log(`Penggunaan:
  npx anti-slop-fiction [opsi]

Opsi:
  -t, --target <opsi>   Pilihan target instalasi:
                        - global    : Antigravity Global (~/.gemini/config/skills/)
                        - workspace : Proyek lokal saat ini (.agents/skills/)
                        - claude    : Claude Code (~/.claude/skills/)
                        - custom    : Tentukan path via --dest
  -d, --dest <path>     Path direktori kustom untuk instalasi
  --dry-run             Simulasikan pemasangan tanpa menyalin berkas
  -h, --help            Tampilkan bantuan ini
`);
}

function resolveDestination(target, customDest) {
  const home = os.homedir();
  const cwd = process.cwd();

  switch (target) {
    case 'global':
      return path.join(home, '.gemini', 'config', 'skills');
    case 'workspace':
      return path.join(cwd, '.agents', 'skills');
    case 'claude':
      return path.join(home, '.claude', 'skills');
    case 'custom':
      if (!customDest) {
        throw new Error('Opsi --dest wajib diisi jika target adalah custom.');
      }
      return path.resolve(cwd, customDest);
    default:
      return null;
  }
}

async function promptTarget() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    console.log('Pilih lokasi pemasangan skill:');
    console.log('1. [Rekomendasi] Antigravity Global (~/.gemini/config/skills/)');
    console.log('2. Workspace Proyek Saat Ini (.agents/skills/)');
    console.log('3. Claude Code (~/.claude/skills/)');
    console.log('4. Jalur Kustom (Custom Path)');
    console.log('5. Batal');

    rl.question('\nMasukkan pilihan [1-5] (default: 1): ', (answer) => {
      rl.close();
      const choice = answer.trim() || '1';
      switch (choice) {
        case '1':
          resolve('global');
          break;
        case '2':
          resolve('workspace');
          break;
        case '3':
          resolve('claude');
          break;
        case '4':
          resolve('custom');
          break;
        default:
          resolve(null);
          break;
      }
    });
  });
}

async function promptCustomPath() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Masukkan path folder tujuan: ', (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function run() {
  const options = parseArgs();

  if (options.help) {
    printHelp();
    process.exit(0);
  }

  printBanner();

  let target = options.target;
  let customDest = options.dest;

  // Jika tidak ada argumen dan stdin interaktif, tampilkan prompt
  if (!target && process.stdin.isTTY) {
    target = await promptTarget();
    if (!target) {
      console.log('\nPemasangan dibatalkan.');
      process.exit(0);
    }
    if (target === 'custom' && !customDest) {
      customDest = await promptCustomPath();
    }
  } else if (!target) {
    target = 'global';
  }

  const baseDest = resolveDestination(target, customDest);
  if (!baseDest) {
    console.error('\x1b[31m%s\x1b[0m', `Error: Target '${target}' tidak valid.`);
    process.exit(1);
  }

  console.log(`\x1b[33m[+] Memasang skill ke:\x1b[0m ${baseDest}\n`);

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('\x1b[31m%s\x1b[0m', `Error: Direktori sumber skill tidak ditemukan di ${SKILLS_DIR}`);
    process.exit(1);
  }

  if (options.dryRun) {
    console.log('\x1b[35m[DRY-RUN] Berkas yang akan disalin:\x1b[0m');
    for (const skill of SKILL_NAMES) {
      console.log(` - ${path.join(SKILLS_DIR, skill)} -> ${path.join(baseDest, skill)}`);
    }
    console.log(` - ${path.join(SKILLS_DIR, 'references')} -> ${path.join(baseDest, 'references')}`);
    console.log('\nDry-run selesai dengan sukses.');
    process.exit(0);
  }

  // 1. Salin setiap modul skill
  for (const skill of SKILL_NAMES) {
    const src = path.join(SKILLS_DIR, skill);
    const dest = path.join(baseDest, skill);

    if (fs.existsSync(src)) {
      fs.mkdirSync(dest, { recursive: true });
      fs.cpSync(src, dest, { recursive: true });
      console.log(`  \x1b[32m✓\x1b[0m Terpasang: \x1b[1m${skill}\x1b[0m`);
    }
  }

  // 2. Salin folder references jika ada
  const refSrc = path.join(SKILLS_DIR, 'references');
  const refDest = path.join(baseDest, 'references');
  if (fs.existsSync(refSrc)) {
    fs.mkdirSync(refDest, { recursive: true });
    fs.cpSync(refSrc, refDest, { recursive: true });
    console.log(`  \x1b[32m✓\x1b[0m Terpasang: \x1b[1mreferences\x1b[0m (anti-patterns & examples)`);
  }

  console.log('\n\x1b[32m%s\x1b[0m', '🎉 Pemasangan berhasil!');
  console.log('\nCara menggunakan di AI Agent Anda:');
  console.log('1. Di Antigravity / Claude Code: Agen akan otomatis mengenali skill saat Anda membahas naskah/cerita.');
  console.log('2. Contoh prompt:');
  console.log('   "Tulis cerita thriller dengan modul antislop-core dan antislop-pacing."');
  console.log('   "Audit akhir cerita ini dengan antislop-ending agar tidak ada khotbah moral."\n');
}

run().catch((err) => {
  console.error('\x1b[31m%s\x1b[0m', `\nTerjadi kesalahan: ${err.message}`);
  process.exit(1);
});
