---
name: antislop-pacing
description: "Aturan ritme adegan, transisi, dan dialog untuk fiksi bebas AI slop. Mengatur tempo narasi (Enter Late, Leave Early), variasi panjang kalimat, dinamika kekuasaan (power shifts), dan subteks percakapan tanpa eksposisi murahan."
allowed-tools: Read Write Edit Glob Grep
---

# antislop-pacing

> **Aturan Ritme Adegan, Transisi Narasi, dan Irama Dialog**
> Bagian dari rangkaian modular `anti-slop-fiction`.

Model AI memiliki kelemahan mendasar dalam pacing narasi: AI cenderung menyamaratakan panjang kalimat (sekitar 15-20 kata per kalimat), menjelaskan perpindahan waktu dengan frasa malas (*"Keesokan harinya...", "Beberapa saat kemudian..."*), dan membiarkan adegan berputar-putar tanpa pergeseran tensi nyata. 

`antislop-pacing` bertugas mengatur detak jantung dan dinamika cerita.

---

## 1. Variasi Struktur Kalimat & Panjang Paragraf (The Rhythm Engine)

Kalimat dan paragraf yang seragam membuat pembaca mati rasa. Model AI secara bawaan cenderung menghasilkan blok-blok paragraf berukuran serupa (3-4 baris) dengan panjang kalimat rata-rata (15-20 kata). Patahkan pola metronomik ini:

### A. Kombinasi Kalimat Pendek Bertenaga & Kalimat Kompleks Panjang (Sentence Mix)
Campurkan kalimat-kalimat sangat pendek (*punchy*) dengan kalimat majemuk panjang yang berliku:
- **Pola Staccato (Sangat Pendek / Punchy)**: Gunakan saat tensi memuncak, bahaya mendekat, atau karakter terhentak:
  > *"Lampu padam. Bunyi kaca pecah. Bau mesiu pekat."*
- **Pola Legato (Kompleks & Mengalir)**: Gunakan saat adegan hening, kontemplatif, atau membangun tekstur spasial:
  > *"Dari jendela lantai empat, gerimis sore membubuhkan selaput buram pada kaca berdebu, mengaburkan deretan kios buah yang mulai menutup terpal plastiknya di bawah sorot lampu jalan merkuri yang baru menyala setengah daya."*
- **Harmoni Kontras**: Letakkan kalimat satu kata atau satu frasa tepat setelah kalimat panjang yang padat untuk menciptakan hantaman emosional.

### B. Hindari Ukuran Paragraf yang Seragam (Avoid Uniform Paragraph Sizes)
**DILARANG KERAS** membiarkan seluruh halaman tersusun dari paragraf-paragraf "bata" berukuran sama:
- Sisipkan **paragraf satu kalimat** untuk poin krusial, ancaman mendadak, atau punchline.
- Gunakan **paragraf aksi ringkas** (1-2 baris) saat fisik beradu atau tempo dialog melaju cepat.
- Berikan **paragraf deskriptif berlapis** hanya saat karakter mengamati lingkungan baru atau mencerna fakta mengejutkan.

### C. Patahkan Pola Ritme yang Terprediksi (Break Predictable Rhythmic Patterns)
Hancurkan formula sekuensial yang sering diulang AI (Aksi $\rightarrow$ Reaksi fisiologis $\rightarrow$ Dialog $\rightarrow$ Renungan batin):
- Jangan biarkan tiga kalimat berturut-turut memiliki pola tata bahasa yang identik (Subjek-Predikat-Objek-Keterangan).
- Patahkan ekspektasi ritmis pembaca dengan jeda mendadak, fragmen kalimat, atau pergantian fokus dari visual makro langsung ke detail mikroskopis objek fisik.

---

## 2. Geometri Adegan: Masuk Terlambat, Keluar Cepat (Enter Late, Leave Early)

Kebiasaan buruk AI adalah memulai adegan terlalu dini (deskripsi bangun tidur, minum kopi, menyetir ke lokasi) dan mengakhirinya terlalu lambat (merenungkan apa yang baru saja terjadi).

### Aturan Eksekusi:
1. **Enter Late**: Buka adegan tepat saat konflik sudah mulai menyala. Jangan jelaskan perjalanan karakter menuju lokasi kecuali ada insiden penting di jalan.
2. **Leave Early**: Begitu titik balik atau pengungkapan penting (*revelation*) selesai, langsung potong adegan. Biarkan pembaca mencerna guncangan tersebut di transisi bab.

---

## 3. Dinamika Kekuasaan dalam Adegan (Power Shifts)

Setiap adegan yang bernilai harus memiliki **pergeseran kekuasaan (*power dynamic*)**:
- Di awal adegan, tentukan: Siapa yang merasa memegang kendali? Siapa yang sedang terdesak?
- Di akhir adegan: Keseimbangan harus bergeser. Orang yang tadinya percaya diri harus kehilangan pijakan, atau orang yang terdesak berhasil menemukan kartu as baru.
- **DILARANG**: Adegan di mana dua karakter hanya mengobrol santai bertukar informasi tanpa ada yang dipertaruhkan atau dimenangkan.

---

## 4. Subteks Dialog & Pembelokan (Deflection & Weaponized Silence)

Dalam kehidupan nyata, orang jarang menjawab pertanyaan secara lurus saat berada di bawah tekanan emosional.

### Teknik Subteks:
1. **Defleksi (Menjawab dengan Mengalihkan)**:
   - Tokoh A: *"Kamu yang membocorkan nomor rekening itu ke polisi?"*
   - Tokoh B: *"Kopimu sudah dingin. Mau kubuatkan yang baru?"* (Bukan: *"Tidak, aku tidak pernah melakukan hal itu kepadamu karena persahabatan kita sangat berharga"*).
2. **Keheningan Bersyarat (Weaponized Silence)**:
   - Gunakan jeda fisik alih-alih kata-kata untuk mengekspresikan penolakan atau ancaman: menghisap rokok sampai habis, memutar cincin di jari manis, mengamati noda di ujung sepatu.
3. **Pangkas Dialog Tag yang Berlebihan**:
   - Ganti frasa seperti *"serunya dengan nada penuh ancaman"* atau *"bisiknya dengan nada lirih penuh keputusasaan"* dengan aksi fisik konkret (*action beat*).

---

## 5. Transisi Waktu yang Mulus (Seamless Transitions)

Hindari frasa transisi malas yang sering dipakai AI:
- ❌ *"Beberapa hari pun berlalu tanpa ada kepastian..."*
- ❌ *"Keesokan paginya, matahari bersinar hangat menyinari bumi..."*
- ❌ *"Waktu terasa berhenti berputar ketika..."*

### Gunakan Benda Fisik sebagai Penanda Waktu:
- ✅ *"Pada hari keempat, sisa kopi di cangkir plastik sudah ditumbuhi jamur kelabu."*
- ✅ *"Hujan baru reda saat azan subuh pertama berkumandang dari musala seberang rel."*

---

## Referensi Terkait
- Kamus lengkap frasa terlarang: [anti-patterns.md](../references/anti-patterns.md)
- Contoh sebelum dan sesudah: [examples.md](../references/examples.md)
- Modul inti filter teks & diksi: [antislop-core](../antislop-core/SKILL.md)
- Modul penutup cerita: [antislop-ending](../antislop-ending/SKILL.md)
