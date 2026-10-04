# Berkontribusi

Terima kasih sudah mau membantu. Repo ini kecil dan isinya teks, jadi kontribusi paling berharga biasanya juga kecil: satu klise baru yang tercatat dengan baik lebih berguna daripada satu bab aturan baru.

## Cara paling mudah: laporkan pola slop

Lihat AI menulis frasa klise yang belum ada di [anti-patterns.md](skills/references/anti-patterns.md)? Buka issue dengan template **Laporan pola slop**. Sertakan:

1. Frasa persisnya, dalam bahasa aslinya.
2. Konteks: genre, model AI (kalau tahu), dan seberapa sering muncul.
3. Satu pengganti yang lebih baik, ditulis untuk adegan nyata, bukan dalam bentuk abstrak.

## Mengirim pull request

1. Fork, lalu buat branch dari `main`.
2. Ubah berkasnya. Aturan di bawah berlaku untuk semua teks di repo ini.
3. Jalankan pengecekan:
   ```bash
   npm test
   ```
4. Buka PR dan isi templatnya.

### Aturan menulis

Skill ini melarang slop, jadi teks skill-nya sendiri juga harus bebas slop.

- **Setiap larangan butuh pengganti.** "Jangan pakai X" saja tidak cukup; tunjukkan apa yang ditulis sebagai gantinya.
- **Contoh harus konkret.** Benda, tempat, dan bau yang spesifik. Bukan "tunjukkan emosi lewat tindakan", melainkan tindakannya.
- **Jangan menggeser plot.** Contoh "sesudah" harus menyampaikan kejadian yang sama dengan contoh "sebelum".
- **Bahasa Indonesia untuk aturan, dwibahasa untuk daftar frasa.** Frasa Inggris disertakan karena banyak model menulis klise terjemahan langsung dari bahasa Inggris.
- **Jangan gandakan.** Cek dulu apakah pola itu sudah tercakup di modul lain.

### Menambah skill baru

Satu folder per skill di `skills/<nama>/SKILL.md`, dengan frontmatter:

```yaml
---
name: <nama>            # harus sama dengan nama folder
description: "..."      # kapan agen harus memuat skill ini; maks. 1024 karakter
allowed-tools: Read Write Edit Glob Grep
---
```

Lalu tambahkan namanya ke `SKILL_NAMES` di `scripts/installer.mjs` dan ke tabel modul di README. `npm test` akan gagal kalau salah satunya terlewat.

## Yang dicek CI

`scripts/check-repo.mjs` memastikan:

- setiap `SKILL.md` punya frontmatter, `name` sama dengan nama folder, dan `description` terisi;
- daftar skill di installer sama dengan isi `skills/`;
- semua tautan relatif di berkas Markdown mengarah ke berkas yang ada;
- versi di `package.json` dan `.claude-plugin/plugin.json` sama.

## Rilis

Pengelola menaikkan versi di `package.json` dan `.claude-plugin/plugin.json`, menulis entri di [CHANGELOG.md](CHANGELOG.md), lalu membuat tag `vX.Y.Z` dan GitHub Release.
