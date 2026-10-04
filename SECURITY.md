# Kebijakan Keamanan

## Versi yang didukung

Hanya rilis terbaru yang menerima perbaikan.

## Apa yang relevan di repo ini

Repo ini berisi teks instruksi untuk agen AI dan satu installer Node.js. Dua hal yang perlu diperhatikan:

- **`SKILL.md` adalah instruksi yang akan dipatuhi agen.** Perubahan yang menyisipkan perintah di luar urusan menulis fiksi (misalnya menyuruh agen membaca berkas lain, menjalankan perintah, atau mengakses jaringan) diperlakukan sebagai masalah keamanan, bukan sekadar masalah isi.
- **`scripts/installer.mjs` menyalin berkas ke disk Anda.** Installer hanya menulis ke folder target yang Anda pilih, tidak mengakses jaringan, dan tidak menjalankan perintah lain. Perilaku di luar itu adalah bug keamanan.

Selalu pasang dari repo resmi: `github.com/FadhilZidan/antisloptory`.

## Melaporkan kerentanan

Jangan buka issue publik untuk kerentanan. Gunakan salah satu:

1. [Laporan privat lewat GitHub](https://github.com/FadhilZidan/antisloptory/security/advisories/new) (rekomendasi).
2. Email ke **redhairshanks891@gmail.com** dengan subjek `[SECURITY] antisloptory`.

Sertakan versi, langkah reproduksi, dan dampaknya. Laporan akan dibalas dalam 7 hari.
