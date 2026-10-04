# 🖋️ anti-slop-fiction

> **Modular AI Agent Skills to Eliminate Story Slop, Purple Prose, and Moralizing Endings in Creative Writing.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Antigravity | Claude | Cursor | Windsurf](https://img.shields.io/badge/Platform-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Windsurf-brightgreen.svg)](#cara-pemasangan)
[![Language: Indonesian & English](https://img.shields.io/badge/Language-ID%20%26%20EN-orange.svg)](skills/references/anti-patterns.md)

`anti-slop-fiction` adalah rangkaian keahlian (*skills*) modular untuk **AI Coding/Storytelling Agents** (seperti Google Antigravity, Claude Code, Cursor, Windsurf, dan ChatGPT) yang dirancang untuk mencegah, mendiagnosis, dan memoles cerita fiksi agar terbebas dari klise murahan buatan AI dan memiliki kedalaman sastrawi layaknya karya pengarang manusia berpengalaman.

---

## 🧐 Masalah yang Diatasi (The AI Slop Problem)

Ketika Large Language Model (LLM) diminta menulis fiksi, mereka kerap menghasilkan pola teks yang seragam dan menjemukan:
- **Refleks Tubuh Klise**: Karakter selalu *"mengembuskan napas yang tidak disadari telah ia tahan"* (*breath they didn't know they were holding*), *"tersenyum miring/sinis"* (*smirk*), atau merasakan *"hawa dingin merayapi tulang belakang"*.
- **Dialog Psikoterapi**: Karakter berkonflik berbicara seperti konselor perkawinan di seminar psikologi modern (*"Perasaanmu valid, tapi kita perlu memproses trauma ini..."*).
- **Prosa Ungu & Metafora Basi**: Deskripsi abstrak seperti *"permadani waktu"* (*tapestry*), *"simfoni suara malam"* (*symphony*), dan *"bukti nyata"* (*testament to*).
- **Pacing Monoton**: Panjang kalimat yang seragam tanpa dinamika ketegangan.
- **Khotbah Moral di Akhir Cerita**: Kebiasaan kompulsif AI merangkum hikmah kehidupan dan arti persahabatan di paragraf terakhir.

---

## 🧩 Modul Keahlian (Modular Skills)

Repositori ini terbagi menjadi 3 modul independen yang dapat digunakan bersamaan atau terpisah:

### 1. [`skills/antislop-core/`](./skills/antislop-core/SKILL.md) — Inti Filter Diksi & Karakter
- **Larangan Klise Fisiologis**: Mengeliminasi 100% refleks fisik generik AI.
- **Eliminasi Kata Filter (Showing vs Telling)**: Mengganti kata perantara (*merasa, melihat, mendengar, tampak*) dengan interaksi sensorik fisik langsung.
- **Psikologi & Agensi Karakter**: Memastikan karakter memiliki keinginan egois (*selfish want*), cacat kepribadian nyata (*fatal flaw*), dan konsekuensi pilihan yang tidak bisa dibatalkan (*irreversible*).
- **Subteks Percakapan**: Melarang dialog terapi; menggantinya dengan pembelaan diri, kebohongan, dan defleksi manusiawi.
- **Eliminasi Penanda AI Formulaik**: Menghapus transisi klise (*Furthermore, In conclusion, It is important to note*), buzzwords (*Delve, Tapestry*), dan retorika simetris/netralitas palsu.
- **Ketidaksempurnaan Produktif (*Productive Imperfections*)**: Membolehkan patahan kalimat (*sentence fragments*), sentuhan kolokial membumi, dan suntikan suara/perspektif (*voice*) subjektif.
- **Preservasi Makna Inti (*Preserve Core Meaning*)**: Memastikan seluruh fakta asli dan titik plot tetap utuh saat merombak total gaya permukaan dan cara penyampaian.

### 2. [`skills/antislop-pacing/`](./skills/antislop-pacing/SKILL.md) — Ritme Adegan & Dialog
- **Variasi Struktur Kalimat & Ukuran Paragraf (The Rhythm Engine)**: Menggabungkan kalimat pendek bertenaga (*punchy staccato*) dan kalimat panjang kompleks (*legato*), menghindari paragraf seragam, serta mematahkan pola ritme terprediksi.
- **Geometri Adegan (Enter Late, Leave Early)**: Memulai adegan saat konflik sudah menyala dan memotongnya tepat setelah titik balik selesai.
- **Pergeseran Kekuasaan (*Power Shifts*)**: Memastikan setiap adegan mengubah keseimbangan kendali antar-tokoh.
- **Transisi Mulus**: Menghilangkan frasa perpindahan waktu malas (*"Keesokan harinya...", "Beberapa hari berlalu..."*).

### 3. [`skills/antislop-ending/`](./skills/antislop-ending/SKILL.md) — Pencegah Akhir Sok Moralis
- **Aturan Pemotongan 2 Kalimat Terakhir (The 2-Sentence Cut)**: Menghapus kesimpulan moral yang terdengar seperti kutipan media sosial.
- **Penolakan Resolusi Rapi (*No Tidy Endings*)**: Menolak perdamaian instan tanpa luka dan mukjizat tanpa petunjuk (*no deus ex machina*).
- **Menutup Cerita pada Objek Fisik**: Mengakhiri narasi pada benda konkret atau tindakan nyata, bukan renungan abstrak.

---

## 📚 Berkas Referensi (References)

- **[`skills/references/anti-patterns.md`](./skills/references/anti-patterns.md)** — Kamus hitam lengkap berisi frasa terlarang, metafora basi, dan dialog klise dalam Bahasa Indonesia dan Bahasa Inggris beserta alternatif solusinya.
- **[`skills/references/examples.md`](./skills/references/examples.md)** — Studi kasus perbandingan langsung antara draf mentah AI (*Slop*) versus versi polesan kriya (*Tajam*).

---

## 🚀 Cara Pemasangan (Installation)

### Opsi 1: Menggunakan NPX / Node.js (Rekomendasi)
Jalankan perintah berikut di terminal:
```bash
npx anti-slop-fiction
```
Skrip installer interaktif akan memandu Anda untuk memasang skill ke target yang diinginkan:
- **Antigravity Global**: `~/.gemini/config/skills/`
- **Workspace Proyek**: `.agents/skills/`
- **Claude Code**: `~/.claude/skills/`
- **Jalur Kustom**: Menentukan direktori target sendiri

Anda juga dapat menjalankannya langsung tanpa prompt:
```bash
# Pasang ke Antigravity Global
node scripts/installer.mjs --target global

# Pasang ke Workspace saat ini
node scripts/installer.mjs --target workspace

# Pasang ke Claude Code
node scripts/installer.mjs --target claude
```

---

### Opsi 2: Pemasangan Manual di Berbagai Agent

#### Google Antigravity IDE / CLI
Salin modul yang Anda butuhkan dari folder `skills/` ke salah satu lokasi berikut:
- **Global (Semua Proyek)**: `~/.gemini/config/skills/`
- **Workspace Lokal**: `<root-proyek>/.agents/skills/`

Agent Antigravity akan otomatis mendeteksi dan memuat skill ketika Anda mendiskusikan penulisan atau penyuntingan fiksi.

#### Claude Code
Salin folder skill ke `~/.claude/skills/` atau masukkan aturan dari `SKILL.md` ke dalam berkas `CLAUDE.md`.

#### Cursor / Windsurf
Salin isi dari `skills/antislop-core/SKILL.md`, `skills/antislop-pacing/SKILL.md`, atau `skills/antislop-ending/SKILL.md` ke dalam berkas konfigurasi proyek:
- `.cursorrules` (untuk Cursor)
- `.windsurfrules` (untuk Windsurf)
- `AGENTS.md` (untuk Copilot / Agent lainnya)

#### ChatGPT (Custom GPTs / Project Instructions)
Buka menu pengaturan Custom GPT atau Project Instructions, lalu tempelkan teks dari `skills/antislop-core/SKILL.md` dan `skills/references/anti-patterns.md` ke bagian **Instructions**.

---

## 💬 Contoh Pemanggilan di Chat AI

Setelah skill terpasang di agent Anda, Anda cukup memberikan prompt seperti:

### 1. Menulis Cerita Baru:
> *"Tulis adegan pembuka cerita kriminal di pelabuhan Tanjung Priok tahun 1998. Terapkan modul **antislop-core** dan **antislop-pacing**. Pastikan tidak ada dialog sok bijak dan karakter punya motif egois."*

### 2. Mengaudit & Memoles Naskah:
> *"Tolong periksa bagian penutup bab ini menggunakan **antislop-ending**. Hapus paragraf khotbah jika ada dan tutup cerita pada benda fisik konkret: [tempelkan teks cerita]"*

---

## 📁 Struktur Direktori Repositori

```text
anti-slop-fiction/
│
├── .github/
│   └── workflows/
│       └── test.yml          # Otomatisasi validasi file markdown
├── skills/
│   ├── antislop-core/
│   │   └── SKILL.md          # Inti aturan filter teks, diksi, dan psikologi karakter
│   ├── antislop-pacing/
│   │   └── SKILL.md          # Aturan ritme adegan, transisi, dan dialog
│   └── antislop-ending/
│   │   └── SKILL.md          # Pencegah resolusi murahan & akhir sok moralis
│   ├── references/
│   │   ├── anti-patterns.md  # Kamus hitam frasa AI & klise yang dilarang
│   │   └── examples.md       # Studi kasus: "Sebelum (Slop)" vs "Sesudah (Tajam)"
├── scripts/
│   └── installer.mjs         # Skrip otomatisasi setup npx (opsional)
├── package.json              # Konfigurasi package & command installer
├── LICENSE                   # Lisensi open source (MIT)
└── README.md                 # Dokumentasi utama repositori
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi open source [MIT](LICENSE).

Copyright (c) 2026 Muhammad Fadhil Zidan Marpaung.
