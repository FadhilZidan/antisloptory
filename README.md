<p align="center">
  <img src="./assets/banner.jpg" alt="antisloptory: naskah ketikan dengan baris-baris klise dicoret tinta merah" width="100%" />
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f" alt="License: MIT"></a>
  <a href="https://github.com/FadhilZidan/antisloptory/actions/workflows/ci.yml"><img src="https://github.com/FadhilZidan/antisloptory/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/FadhilZidan/antisloptory/releases"><img src="https://img.shields.io/github/v/release/FadhilZidan/antisloptory?label=version&color=1f6feb" alt="Version"></a>
  <img src="https://img.shields.io/badge/bahasa-ID%20%2B%20EN-orange" alt="Bahasa: Indonesia dan Inggris">
</p>

<h1 align="center">antisloptory</h1>

<p align="center">
  Skill untuk agen AI yang membuang klise, prosa ungu, dialog terapi, dan khotbah moral dari fiksi.<br>
  Ini <strong>filter, bukan gaya</strong>: tidak ada suara pengarang yang dipaksakan. Plot dan suara tetap milik Anda.
</p>

## Lihat bedanya

Adegan yang sama, ditulis dua kali. Cuplikan dari [examples.md](skills/references/examples.md).

| Tanpa antisloptory | Dengan antisloptory |
|:--|:--|
| Rian mengembuskan napas yang tidak disadari telah ia tahan selama ini. Hawa dingin menjalar di tulang belakangnya saat pintu gudang tua itu berderit terbuka. Di sana berdiri Kevin. Senyum miring terukir di bibirnya. | Lampu merkuri di ujung gang padam sejak dua minggu lalu. Rian meraba dinding seng gudang untuk mencari pegangan; embun malam membuatnya licin dan berbau karat. Kevin duduk di atas peti kayu, menyalakan pemantik yang berderak tanpa api. Sekali. Dua kali. |
| *"Aku tahu trauma masa lalumu membuatmu merasa rentan, tapi balas dendam bukanlah jawabannya!"* | *"Kunci brankasnya nggak ada di rumah paman," kata Rian. Ujung sepatunya menendang serpihan botol sirup di lantai.* |
| Ia menyadari bahwa kemenangan sejati bukanlah tentang mengalahkan musuh, melainkan tentang berdamai dengan kegelapan di dalam diri kita sendiri. | Kevin mengeluarkan amplop cokelat tebal yang sudutnya sudah koyak, lalu melemparnya ke tumpukan karung semen di depan kaki Rian. |

Kolom kiri: napas tertahan, tulang belakang dingin, senyum miring, dialog konselor, dan paragraf hikmah. Kolom kanan: plotnya sama, tapi ketegangan datang dari benda, bau, dan apa yang tidak diucapkan.

## Modul

Sembilan skill modular yang bisa dipakai terpisah atau digabungkan sesuai kebutuhan naskah.

### 1. Modul Fondasi (Inti, Ritme, & Penutup)

| Skill | Tugasnya | Pakai saat |
|:--|:--|:--|
| [`antislop-core`](skills/antislop-core/SKILL.md) | Diksi, klise fisiologis, kata filter, psikologi karakter, subteks dialog, penanda AI formulaik | Selalu. Ini filter dasarnya. |
| [`antislop-pacing`](skills/antislop-pacing/SKILL.md) | Ritme kalimat dan paragraf, geometri adegan, pergeseran kuasa, transisi | Adegan terasa datar atau terlalu rata panjang kalimatnya. |
| [`antislop-ending`](skills/antislop-ending/SKILL.md) | Potong dua kalimat terakhir, tolak resolusi rapi, tutup pada benda fisik | Menulis atau mengaudit penutup bab dan cerita. |

### 2. Modul Spesifik Genre (Subgenre Populer, Niche, & Tropes)

| Skill | Cakupan Subgenre & Tropes | Pakai saat |
|:--|:--|:--|
| [`antislop-romance`](skills/antislop-romance/SKILL.md) | *Contemporary, Historical, Rom-Com, Dark Romance, Romantasy, Paranormal, Omegaverse, Alien/Monster, Amish, Time-Slip* + tropes (*Enemies to Lovers, Slow Burn*, dll.) | Menulis romansa tanpa klise sengatan listrik, bau pinus/kayu manis generik, dan miskomunikasi bodoh. |
| [`antislop-fantasy`](skills/antislop-fantasy/SKILL.md) | *High/Epic, Low, Urban, Grimdark, LitRPG/Progression, Cozy, Dark, Mythic, Sword & Planet, Gaslamp, Flintlock, Bizarro* + tropes (*Chosen One, Magic Comes with a Price*, dll.) | Menulis fantasi tanpa nama "Eldoria" generik, bola energi ungu gratis, dan *lore-dump* sejarah. |
| [`antislop-scifi`](skills/antislop-scifi/SKILL.md) | *Hard Sci-Fi, Space Opera, Cyberpunk, Dystopian, Time Travel, Military, Solarpunk, Biopunk, Steampunk, Mundane, Social Sci-Fi, Weird West* + tropes (*Rogue AI, First Contact*, dll.) | Menulis fiksi ilmiah tanpa *technobabble* kosong, kota "Neo-Veridia", dan khotbah jiwa manusia vs mesin. |
| [`antislop-thriller`](skills/antislop-thriller/SKILL.md) | *Psychological Thriller, Whodunit/Cozy, Police Procedural, Noir, Legal/Political, Domestic Suspense, Honkaku, Giallo, Medical, Financial* + tropes (*Unreliable Narrator, Locked-Room*, dll.) | Menulis misteri/kriminal dengan petunjuk *fair-play* konkret tanpa monolog pengakuan penjahat klise. |
| [`antislop-horror`](skills/antislop-horror/SKILL.md) | *Psychological, Cosmic/Lovecraftian, Gothic, Body Horror, Survival, Slasher, Folk, Splatterpunk, Quiet Horror, Eco-Horror, Analogue/Found Footage* + tropes (*Final Girl, Eldritch*, dll.) | Menulis horor tanpa klise bau tembaga, senyum robek sampai pipi, dan eksposisi monster berlebihan. |
| [`antislop-literary`](skills/antislop-literary/SKILL.md) | *Domestic Drama, Bildungsroman, Satire, Urban Drama, Historical Fiction, Dark Academia, Magical Realism, Kafkaesque, Autofiction, Picaresque, Epistolary* + tropes (*Generational Trauma*, dll.) | Menulis drama sastrawi dan urban lewat detail kelas sosial konkret tanpa melodrama puitis palsu. |

### 3. Berkas Referensi Pendukung

Dipakai bersama oleh seluruh modul skill:

- [`anti-patterns.md`](skills/references/anti-patterns.md): daftar frasa terlarang, metafora basi, dan dialog klise (ID dan EN) beserta penggantinya.
- [`structural-tropes.md`](skills/references/structural-tropes.md): katalog tropes struktural lintas genre (dinamika karakter, ritme plot seperti *Chekhov's Gun* & *Midpoint Shift*, serta *Hard vs. Soft Magic*).
- [`examples.md`](skills/references/examples.md): studi kasus sebelum dan sesudah.

## Pasang

### Installer (rekomendasi)

Butuh Node.js 18 atau lebih baru. Satu perintah, lalu pilih lokasi:

```bash
npx github:FadhilZidan/antisloptory
```

Installer menyalin seluruh modul skill beserta `references/` ke lokasi yang Anda pilih:

| Target | Lokasi |
|:--|:--|
| `global` | `~/.gemini/config/skills/` (Antigravity, semua proyek) |
| `workspace` | `.agents/skills/` (proyek saat ini) |
| `claude` | `~/.claude/skills/` (Claude Code) |
| `custom` | path pilihan Anda lewat `--dest` |

Tanpa prompt, misalnya untuk skrip:

```bash
npx github:FadhilZidan/antisloptory --target workspace
npx github:FadhilZidan/antisloptory --target custom --dest ./my-skills
npx github:FadhilZidan/antisloptory --dry-run   # lihat apa yang akan disalin
```

### Claude Code (plugin)

```text
/plugin marketplace add FadhilZidan/antisloptory
/plugin install antisloptory@antisloptory
```

### Manual

Clone repo ini, lalu salin folder yang dibutuhkan. Salin `skills/references/` juga, karena setiap skill merujuk ke sana.

| Agen | Caranya |
|:--|:--|
| Google Antigravity | Salin `skills/*` ke `~/.gemini/config/skills/` atau `<proyek>/.agents/skills/`. |
| Claude Code | Salin `skills/*` ke `~/.claude/skills/`. |
| Cursor | Tempel isi `SKILL.md` ke `.cursor/rules/antislop-fiction.mdc` atau `.cursorrules`. |
| Windsurf | Tempel isi `SKILL.md` ke `.windsurfrules`. |
| Copilot dan agen lain | Tempel isi `SKILL.md` ke `AGENTS.md`. |
| ChatGPT (Custom GPT / Project) | Tempel `antislop-core/SKILL.md`, modul genre pilihan, dan `references/anti-patterns.md` ke kolom *Instructions*. |

### Perbarui dan hapus

Jalankan installer lagi untuk memperbarui; berkas lama ditimpa. Untuk menghapus, buang folder `antislop-*` dan `references` dari lokasi pemasangan.

## Pakai

Agen yang mendukung skill akan memuatnya sendiri saat percakapan menyentuh penulisan fiksi. Menyebut nama modul membuatnya lebih pasti:

> Tulis adegan pembuka cerita kriminal di pelabuhan Tanjung Priok, 1998. Pakai **antislop-core**, **antislop-pacing**, dan **antislop-thriller**. Tokoh utamanya punya motif egois.

> Buat adegan *slow burn* dengan trope *Enemies to Lovers* berlatar kantor hukum Jakarta. Pakai **antislop-romance** dan **antislop-core**.

> Periksa penutup bab horor ini dengan **antislop-horror** dan **antislop-ending**. Kalau ada paragraf khotbah atau klise bau tembaga, hapus, dan tutup pada benda fisik: [tempel teks]

## Struktur repo

```text
antisloptory/
├── skills/
│   ├── antislop-core/SKILL.md      # filter dasar: diksi, karakter, dialog
│   ├── antislop-pacing/SKILL.md    # ritme, adegan, transisi
│   ├── antislop-ending/SKILL.md    # penutup tanpa khotbah
│   ├── antislop-romance/SKILL.md   # genre Romance, subgenre & tropes
│   ├── antislop-fantasy/SKILL.md   # genre Fantasy, subgenre & worldbuilding
│   ├── antislop-scifi/SKILL.md     # genre Sci-Fi, subgenre & ekstrapolasi
│   ├── antislop-thriller/SKILL.md  # genre Thriller, Mystery & Crime
│   ├── antislop-horror/SKILL.md    # genre Horror, subgenre & uncanny
│   ├── antislop-literary/SKILL.md  # genre Literary & Urban Drama
│   └── references/
│       ├── anti-patterns.md        # daftar frasa terlarang + pengganti
│       ├── structural-tropes.md    # katalog tropes struktural lintas genre
│       └── examples.md             # sebelum vs sesudah
├── scripts/
│   ├── installer.mjs               # installer npx
│   └── check-repo.mjs              # validasi yang dijalankan CI
├── .claude-plugin/                 # manifest plugin Claude Code
├── .github/                        # CI, template issue dan PR
└── assets/                         # gambar README
```

## Kontribusi

Menemukan klise AI yang belum tercatat? Itu kontribusi paling berguna. Buka issue dengan template **Laporan pola slop**, atau baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk mengirim PR. Riwayat perubahan ada di [CHANGELOG.md](CHANGELOG.md).

Proyek ini mengikuti [Kode Etik](CODE_OF_CONDUCT.md). Untuk masalah keamanan, lihat [SECURITY.md](SECURITY.md).

## Lisensi

[MIT](LICENSE) © 2026 Muhammad Fadhil Zidan Marpaung
