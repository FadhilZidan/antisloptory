---
name: antislop-core
description: "Inti aturan filter teks, diksi, dan psikologi karakter untuk fiksi bebas AI slop. Menghilangkan klise fisiologis (smirk, napas tertahan, tulang belakang dingin), kata filter (merasa, tampak), dan membangun karakter dengan agensi nyata serta cacat kepribadian autentik."
allowed-tools: Read Write Edit Glob Grep
---

# antislop-core

> **Inti Filter Teks, Diksi Konkret, dan Psikologi Karakter Otentik**
> Bagian dari rangkaian modular `anti-slop-fiction`.

Ketika model AI menulis prosa fiksi, ia cenderung mengandalkan pola bahasa yang seragam, steril, dan melodramatis. `antislop-core` menetapkan standar tanpa kompromi untuk teks, diksi fisik, dan psikologi karakter agar cerita terasa ditulis oleh pengarang manusia yang matang.

---

## 1. Filter Diksi & Larangan Klise Fisiologis (The Bodily Cliché Ban)

Model AI memiliki daftar refleks fisik terbatas saat mengekspresikan ketegangan atau emosi. **DILARANG KERAS** menggunakan pola-pola berikut:

### A. Larangan Mutlak (Hard Ban)
1. **Napas Tertahan**: *"Mengembuskan napas yang tidak disadari telah ia tahan"* / *"Released a breath they didn't know they were holding"*.
   - *Solusi*: Potong kalimat tersebut. Tunjukkan pelepasan ketegangan dengan perubahan ritme bicara, penurunan bahu secara wajar, atau kembali fokus pada benda fisik.
2. **Senyum Miring (Smirk)**: *"Tersenyum miring/sinis"* / *"A smirk played on their lips"*.
   - *Solusi*: Karakter tidak perlu tersenyum setiap kali merasa percaya diri atau sinis. Biarkan mereka mendengus, menatap dingin, atau membuang muka.
3. **Tulang Belakang Dingin**: *"Hawa dingin menjalar di tulang belakang / tengkuknya"* / *"A shiver ran down their spine"*.
   - *Solusi*: Tunjukkan sensasi lingkungan (misal: hembusan angin dari sela pintu gudang) atau reaksi otot nyata (mengepalkan jemari, rahang yang kaku).
4. **Jantung Genderang**: *"Jantung berdegup seperti genderang perang"* / *"Heart hammered against their ribs"*.
   - *Solusi*: Gunakan kalimat-kalimat pendek (*staccato*) untuk memacu denyut baca narasi, bukan sekadar memberitahu pembaca bahwa jantungnya berdetak cepat.
5. **Mata Menggelap**: *"Matanya menggelap"* / *"Their eyes darkened"*.
   - *Solusi*: Turunkan intonasi dialog, perlambat gerakan tubuh, atau diam sejenak.

---

## 2. Eliminasi Kata Filter (Showing vs. Telling)

Kata filter (*filter words*) adalah kata perantara kognitif yang memisahkan pembaca dari pengalaman indrawi langsung.

| Kata Filter Lemah (Telling) | Bentuk Kuat & Konkret (Showing) |
|---|---|
| *"Ia **merasa** udara malam sangat menusuk kulitnya."* | *"Angin malam membawa bau lumpur selokan; kain kemeja basahnya menempel dingin di punggung."* |
| *"Ia **melihat** seorang pria mencurigakan berdiri di sudut."* | *"Di bawah neon plang apotek, pria berjaket parasut robek itu belum memindahkan tatapannya sejak bus terakhir lewat."* |
| *"Ia **mendengar** suara pintu terbanting keras."* | *"Brak. Daun pintu jati terbanting, membuat foto keluarga di atas meja credenza bergetar."* |
| *"Wanita itu **tampak** gugup dan ragu-ragu."* | *"Wanita itu mencongkel ujung label botol sirupnya hingga kukunya sobek."* |

---

## 3. Psikologi Karakter & Agensi Nyata

Karakter AI slop biasanya adalah malaikat yang terlalu bijaksana, tidak punya ego, atau memiliki "kelemahan palsu" (*"kelemahanku adalah aku terlalu peduli"*).

### Karakter Berkualitas Memerlukan:
1. **Keinginan Egois (Selfish Want)**: Setiap karakter utama harus mengejar tujuan yang nyata dan menguntungkan dirinya (uang, pelarian, pembalasan dendam, menyelamatkan reputasi sendiri).
2. **Cacat Kepribadian Nyata (Real Fatal Flaw)**: Sikap keras kepala yang merusak, kebiasaan berbohong demi menghindari masalah, kecenderungan berburuk sangka, atau sikap pengecut saat situasi kritis.
3. **Pilihan Bertarif Mahal (High-Cost Trade-offs)**: Karakter harus dipaksa memilih di antara dua opsi buruk. Setiap keputusan harus memiliki konsekuensi yang nyata, membekas, dan **tidak bisa dibatalkan (*irreversible*)**.

---

## 4. Subteks vs. Dialog Psikoterapi

Karakter tidak boleh berbicara seperti terapis yang sedang memvalidasi trauma emosional saat situasi sedang tegang.

### ❌ Slop Dialog AI:
> *"Aku mengerti kamu merasa terancam, Rudi. Kemarahanmu beralasan karena trauma masa kecilmu, tapi kita perlu memproses emosi ini dengan kepala dingin."*

### ✅ Percakapan Autentik Manusia:
> Rudi membanting obeng ke lantai bengkel. Besi berdentang memantul ke kolong mobil pikap.
> "Keluar dari sini, Lan."
> Alan tidak bergerak dari pintu. Tangannya menyentuh bungkus rokok di saku dada, mengecek apakah masih ada isinya.
> "Kunci gudang masih dipegang pamanmu."
> "Aku bilang keluar."

---

## 5. Tekstur Dunia Nyata & Rincian Sensorik (Sensory Grounding)

Jangan biarkan adegan berlangsung di ruang hampa yang serba bersih:
- **Aroma Spesifik**: Bau solar bercampur aspal basah, bau minyak angin cap kapak, bau kardus lembap, bau tembakau cengkeh murahan.
- **Benda Rusak / Cacat Fisik**: Remote TV yang tutup baterainya diikat karet gelang, piring melamin belang, engsel pintu yang berderit karena debu pasir.
- **Keterbatasan Fisik**: Keringat yang masuk ke pedih mata, kaki kesemutan karena jongkok terlalu lama, ponsel layar retak yang baterainya tinggal 4%.

---

## 6. Eliminasi Penanda Formulaik AI & Retorika Simetris (No Formulaic AI Markers)

Model AI gemar menyisipkan transisi mekanis dan frasa penghubung khas esai akademik/bisnis ke dalam narasi prosa:

### A. Larangan Transisi Klise & Kata Kunci AI (Buzzwords)
**HAPUS TOTAL** kata dan frasa penghubung template berikut:
- **Transisi Esai**: *"Furthermore"* (*"Lebih jauh lagi..."*), *"In conclusion"* (*"Sebagai kesimpulan / Kesimpulannya..."*), *"It is important to note"* (*"Perlu dicatat bahwa..."*), *"Moreover"*, *"Additionally"*, *"Tak dapat dipungkiri bahwa..."*.
- **Buzzwords / Prosa Ungu Abstrak**: *"Delve / Delve into"* (*"menyelami / mendalami"*), *"Tapestry"* (*"permadani cerita / jalinan waktu"*), *"Beacon of hope"*, *"Testament to"*, *"Symphony"*.

### B. Hindari Frasa Simetris & Netralitas Palsu (Avoid Overly Balanced Phrasing)
Model AI secara refleks suka "berada di tengah-tengah" dengan kalimat simetris yang membosankan:
- ❌ *"Meskipun rencana ini mengandung risiko besar, kita juga harus mengakui potensi keuntungan yang ditawarkannya."*
- ❌ *"Di satu sisi ia ingin lari, namun di sisi lain ada secercah tanggung jawab yang menahannya."*
- ✅ **Gunakan Pernyataan Langsung & Asimetris**: *"Rencana ini bunuh diri. Tapi tidak ada pintu lain."*

---

## 7. Ketidaksempurnaan Produktif & Suara Narasi (Productive Imperfections)

Prosa manusia yang hidup tidak selalu taat pada tata bahasa buku teks yang kaku dan steril. Sisipkan "ketidaksempurnaan produktif" untuk membangun tekstur narasi yang organik:

### A. Patahan Kalimat (Sentence Fragments)
Izinkan kalimat tanpa predikat lengkap atau klausa tunggal yang tajam saat menyorot persepsi spontan atau ketegangan tinggi:
- *"Hanya suara detik jam dinding di ruang tamu. Lalu derit anak tangga."*
- *"Bukan karena takut. Muak saja."*

### B. Sentuhan Kolokial & Diksi Membumi (Colloquial Touches)
Sesuaikan pilihan kosakata dengan latar sosial, usia, dan temperamen tokoh. Jangan gunakan bahasa baku kaku ala surat kabar untuk adegan jalanan atau percakapan santai.

### C. Suntikan Suara & Sudut Pandang Subjektif (Subtle Voice & Perspective)
Narasi tidak boleh terdengar seperti ensiklopedia netral tanpa jiwa:
- Berikan prasangka, sinisme, keletihan, atau kelembutan terselubung pada suara narator (*Free Indirect Discourse*).
- Biarkan narasi "terkontaminasi" oleh cara pandang karakter terhadap dunianya.

---

## 8. Preservasi Makna Inti dalam Perombakan Teks (Preserve Core Meaning)

Saat mengaudit naskah, memangkas slop, atau melakukan *surgical rewrite*:
1. **Fakta & Plot Points Tetap Utuh**: Jangan pernah mengubah urutan kejadian, informasi penting, motivasi dasar, atau petunjuk cerita (*clues/stakes*) yang sudah dirancang pengarang.
2. **Rombak Total Gaya Permukaan & Penyampaian**: Bongkar diksi klise, buang metafora usang, ubah ritme kalimat, dan ganti dialog psikoterapi dengan subteks fisik—tanpa menggeser substansi cerita satu inci pun.

---

## Referensi Terkait
- Kamus lengkap frasa terlarang: [anti-patterns.md](../references/anti-patterns.md)
- Contoh sebelum dan sesudah: [examples.md](../references/examples.md)
- Modul ritme dan adegan: [antislop-pacing](../antislop-pacing/SKILL.md)
- Modul penutup cerita: [antislop-ending](../antislop-ending/SKILL.md)
