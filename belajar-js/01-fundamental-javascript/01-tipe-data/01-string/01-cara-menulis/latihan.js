// STRING → 1. CARA MENULIS (latihan)
// Jalankan: npm run latihan -- belajar-js/01-fundamental-javascript/01-tipe-data/01-string/01-cara-menulis/latihan.js
// Simpan file (Cmd + S) → nodemon otomatis run ulang.

// =====================================================================
// MAKSUD & TUJUAN
// ---------------------------------------------------------------------
// TAHAP 1 - SOAL BASIC - STRING - CARA MENULIS DAN PRINT
//           → CLUE + CONTOH KODE   (← kita kerjakan sekarang)
// TAHAP 2 - SOAL BASIC - STRING - CARA MENULIS DAN PRINT
//           → CLUE SAJA            (← nanti, setelah Tahap 1 beres)
//
// Susunan TAHAP 1:
//   Soal  1 –  6 → PEMANASAN (campuran)          ✅ sudah dikerjakan
//   Soal  7 – 26 → BAGIAN A: TANPA OOP (20 soal) → variabel + console.log
//   Soal 27 – 46 → BAGIAN B: CLASS     (20 soal) → class + constructor + method
//   Soal 47 – 66 → BAGIAN C: FUNCTION  (20 soal) → function yang return string
//   Materi tiap bagian sama urutannya, jadi bisa dibandingkan:
//   soal 7 ≈ soal 27 ≈ soal 47, soal 8 ≈ soal 28 ≈ soal 48, dst.
//
// Cara kerja:
//   - Baca CLUE & TARGET OUTPUT.
//   - Lihat CONTOH (datanya beda, polanya sama) → tulis versimu sendiri.
//   - Pakai NAMA yang disebut di soal. Semua soal ada di 1 file,
//     jadi nama variabel/class/function tidak boleh dobel.
//   - Simpan → cek output di terminal, cocokkan dengan TARGET OUTPUT.
// =====================================================================

// =====================================================================
//                     TAHAP 1 — CLUE + CONTOH KODE
// =====================================================================

// ---------------------------------------------------------------------
// SOAL 1 [TANPA OOP] — Petik tunggal '...'
// Clue   : buat variabel `namaLengkap` isinya nama kamu pakai petik tunggal,
//          lalu print.
// Target : Rizki Januari
// Contoh :
//   const hewan = 'Kucing Oren';
//   console.log(hewan);
// ---------------------------------------------------------------------
// tulis jawaban soal 1 di sini 👇
const namaLengkap = 'Rizki Januar';
console.log('Soal 1. ' + namaLengkap);

// ---------------------------------------------------------------------
// SOAL 2 [CLASS] — Petik ganda "..." + gabung pakai +
// Clue   : class `Hobby` (hobi). method `say()` → return "Hobi saya: " + hobi
//          buat object `myHobby` dengan hobi 'Ngoding', print say().
// Target : Hobi saya: Ngoding
// Contoh :
//   class Food {
//     constructor(food) {
//       this.food = food;
//     }
//     eat() {
//       return "Makanan favorit: " + this.food;
//     }
//   }
//   const fav = new Food('Nasi Goreng');
//   console.log(fav.eat());
// ---------------------------------------------------------------------
// tulis jawaban soal 2 di sini 👇
class Food {
  constructor(food) {
    this.food = food;
  }

  eat() {
    return 'Makanan Favorit gue adalah : ' + this.food;
  }
}
const favMakananGue = new Food('Mie Ayam');
console.log('Soal 2. ' + favMakananGue.eat());

// ---------------------------------------------------------------------
// SOAL 3 [FUNCTION] — Template literal `...${}`
// Clue   : function `sapaPagi(nama)` → return `Selamat pagi, ${nama}!`
//          print sapaPagi('Rizki').
// Target : Selamat pagi, Rizki!
// Contoh :
//   function sapaMalam(nama) {
//     return `Selamat malam, ${nama}!`;
//   }
//   console.log(sapaMalam('Budi'));
// ---------------------------------------------------------------------
// tulis jawaban soal 3 di sini 👇
function sapaSalam(nama) {
  return `Selamat malam, ${nama}!`;
}
console.log('Soal 3. ' + sapaSalam('Siti'));

// ---------------------------------------------------------------------
// SOAL 4 [TANPA OOP] — Apostrof (') di dalam petik ganda
// Clue   : variabel `jadwal` berisi teks yang ada tanda ' nya.
//          Bungkus pakai petik ganda supaya tidak error.
// Target : Sholat Jum'at jam 12
// Contoh :
//   const kalimat = "Hari Jum'at libur";
//   console.log(kalimat);
// ---------------------------------------------------------------------
// tulis jawaban soal 4 di sini 👇
const kalimat = "Sholat Jum'at jam 12";
console.log('Soal 4. ' + kalimat);

// ---------------------------------------------------------------------
// SOAL 5 [CLASS] — Escape \' di dalam petik tunggal
// Clue   : class `Weekend` (hari). method `info()` → pakai PETIK TUNGGAL,
//          tanda ' di dalam teks ditulis \'
//          object `besok` dengan hari 'Jum\'at', print info().
// Target : Besok hari Jum'at, jangan lupa ibadah
// Contoh :
//   class Note {
//     constructor(text) {
//       this.text = text;
//     }
//     show() {
//       return 'Catatan: ' + this.text + ', it\'s okay';
//     }
//   }
//   const n = new Note('Gagal itu biasa');
//   console.log(n.show());
// ---------------------------------------------------------------------
// tulis jawaban soal 5 di sini 👇
class Note {
  constructor(text) {
    this.text = text;
  }

  show() {
    return 'Catatan : ' + this.text + ", it's okay";
  }
}
const n = new Note('Gagal itu udah biasa bro');
console.log('Soal 5. ' + n.show());

// ---------------------------------------------------------------------
// SOAL 6 [FUNCTION] — Petik ganda di dalam petik tunggal
// Clue   : function `kutipan(tokoh, kata)` → hasil: Kata <tokoh>: "<kata>"
//          Bungkus pakai petik tunggal, petik ganda jadi bagian teks.
//          print kutipan('Soekarno', 'Gantungkan cita-citamu setinggi langit').
// Target : Kata Soekarno: "Gantungkan cita-citamu setinggi langit"
// Contoh :
//   function judulFilm(judul) {
//     return 'Film favorit: "' + judul + '"';
//   }
//   console.log(judulFilm('Laskar Pelangi'));
// ---------------------------------------------------------------------
// tulis jawaban soal 6 di sini 👇
function judulFilm(judul) {
  return 'Film Favorit gue adalah "' + judul + '"';
}
console.log(judulFilm('Sang Perantau'));

// #####################################################################
//              BAGIAN A — TANPA OOP (SOAL 7 – 26)
//              Gaya: variabel (const/let) + console.log langsung
// #####################################################################

// ---------------------------------------------------------------------
// SOAL 7 [TANPA OOP] — Petik tunggal '...'
// Clue   : variabel `kotaAsal` isi 'Jakarta' pakai petik tunggal, print.
// Target : Jakarta
// Contoh :
//   const warna = 'Biru Laut';
//   console.log(warna);
// ---------------------------------------------------------------------
// tulis jawaban soal 7 di sini 👇
const warnaLaut = 'Biru Laut';
console.log(warnaLaut);

// ---------------------------------------------------------------------
// SOAL 8 [TANPA OOP] — Petik ganda "..."
// Clue   : variabel `makananA` isi "Rendang" pakai petik ganda, print.
// Target : Rendang
// Contoh :
//   const minuman = "Es Teh Manis";
//   console.log(minuman);
// ---------------------------------------------------------------------
// tulis jawaban soal 8 di sini 👇
const minuman = 'Es Teh Manis';
console.log(minuman);

// ---------------------------------------------------------------------
// SOAL 9 [TANPA OOP] — Template literal `...${}`
// Clue   : `namaA` = 'Rizki', lalu `sapaA` = `Halo ${namaA}, apa kabar?`
// Target : Halo Rizki, apa kabar?
// Contoh :
//   const user = 'Budi';
//   const salam = `Hai ${user}, selamat datang!`;
//   console.log(salam);
// ---------------------------------------------------------------------
// tulis jawaban soal 9 di sini 👇
const user = 'Budi';
const salam = `Hai ${user}, selamat datang!`;
console.log(salam);

// ---------------------------------------------------------------------
// SOAL 10 [TANPA OOP] — Apostrof (') di dalam petik ganda
// Clue   : `hariA` berisi teks yang ada tanda ' → bungkus petik ganda.
// Target : Besok Jum'at berkah
// Contoh :
//   const info = "Rapat hari Jum'at pagi";
//   console.log(info);
// ---------------------------------------------------------------------
// tulis jawaban soal 10 di sini 👇
const info = "Rapat hari Jum'at pagi";
console.log(info);

// ---------------------------------------------------------------------
// SOAL 11 [TANPA OOP] — Escape \' di dalam petik tunggal
// Clue   : `pesanA` pakai PETIK TUNGGAL, tanda ' di dalam teks ditulis \'
// Target : Don't give up
// Contoh :
//   const teks = 'It\'s my life';
//   console.log(teks);
// ---------------------------------------------------------------------
// tulis jawaban soal 11 di sini 👇
const teks = "It's my life";
console.log(teks);

// ---------------------------------------------------------------------
// SOAL 12 [TANPA OOP] — Petik ganda di dalam petik tunggal
// Clue   : `ucapanA` dibungkus petik tunggal, petik ganda jadi bagian teks.
// Target : Dia bilang "Siap bos"
// Contoh :
//   const kata = 'Guru bilang "Kerjakan PR"';
//   console.log(kata);
// ---------------------------------------------------------------------
// tulis jawaban soal 12 di sini 👇
const kata = 'Guru bilang "Kerjakan PR"';
console.log(kata);

// ---------------------------------------------------------------------
// SOAL 13 [TANPA OOP] — Escape \" di dalam petik ganda
// Clue   : `judulA` pakai PETIK GANDA, tanda " di dalam teks ditulis \"
// Target : Novel "Bumi Manusia"
// Contoh :
//   const lagu = "Lagu \"Indonesia Raya\"";
//   console.log(lagu);
// ---------------------------------------------------------------------
// tulis jawaban soal 13 di sini 👇
const lagu = 'Lagu "Indonesia Raya"';
console.log(lagu);

// ---------------------------------------------------------------------
// SOAL 14 [TANPA OOP] — Gabung (concat) beberapa variabel pakai +
// Clue   : `namaDepanA`, `namaBelakangA`, lalu `namaFullA`
//          = namaDepanA + ' ' + namaBelakangA  (jangan lupa spasi)
// Target : Rizki Januari
// Contoh :
//   const kota = 'Bandung';
//   const provinsi = 'Jawa Barat';
//   const alamat = kota + ', ' + provinsi;
//   console.log(alamat);
// ---------------------------------------------------------------------
// tulis jawaban soal 14 di sini 👇
const kota = 'Bandung';
const provinsi = 'Jawa Barat';
const gabunginKata = `Kota : ${kota}, Provinsi : ${provinsi}`;
console.log(gabunginKata);

// ---------------------------------------------------------------------
// SOAL 15 [TANPA OOP] — Hitungan di dalam ${}
// Clue   : `hargaA` = 5000, `jumlahA` = 4,
//          `totalA` = `Total bayar: Rp${hargaA * jumlahA}`
// Target : Total bayar: Rp20000
// Contoh :
//   const panjang = 6;
//   const lebar = 3;
//   const luas = `Luas tanah: ${panjang * lebar} m2`;
//   console.log(luas);
// ---------------------------------------------------------------------
// tulis jawaban soal 15 di sini 👇
const panjang = 6;
const lebar = 3;
const result = `Panjang x Lebar hasilnya : ${panjang * lebar} m2 `;
console.log(result);

// ---------------------------------------------------------------------
// SOAL 16 [TANPA OOP] — Multi-line pakai backtick
// Clue   : `alamatA` pakai backtick 2 baris.
//          Baris ke-2 mulai dari pinggir kiri (spasi ikut ke-print!).
// Target :
//   Jalan : Merdeka 10
//   Kota  : Jakarta
// Contoh :
//   const kontak = `HP    : 0812-xxxx
// Email : budi@mail.com`;
//   console.log(kontak);
// ---------------------------------------------------------------------
// tulis jawaban soal 16 di sini 👇
const kontak = `HP      : 0812-xxxx`;
console.log(kontak);

// ---------------------------------------------------------------------
// SOAL 17 [TANPA OOP] — Baris baru pakai \n
// Clue   : `hariKerjaA` = satu string petik biasa (BUKAN backtick), pisah \n
// Target :
//   Senin
//   Selasa
//   Rabu
// Contoh :
//   const waktu = 'Pagi\nSiang\nMalam';
//   console.log(waktu);
// ---------------------------------------------------------------------
// tulis jawaban soal 17 di sini 👇
const waktu = 'Pagi\nSiang\nMalam';
console.log(waktu);

// ---------------------------------------------------------------------
// SOAL 18 [TANPA OOP] — Tab pakai \t
// Clue   : `tabelA` = 'Nama\tKota\nRizki\tJakarta'  (\t = jarak tab)
// Target :
//   Nama	Kota
//   Rizki	Jakarta
// Contoh :
//   const harga = 'Item\tHarga\nKopi\t5000';
//   console.log(harga);
// ---------------------------------------------------------------------
// tulis jawaban soal 18 di sini 👇
const harga = 'Item\tHarga\nKopi\t5000';
console.log(harga);

// ---------------------------------------------------------------------
// SOAL 19 [TANPA OOP] — Backslash \\
// Clue   : `folderA` → satu \ di output ditulis \\ di kode.
// Target : C:\Projects\belajar-js
// Contoh :
//   const fotoku = 'D:\\Foto\\liburan';
//   console.log(fotoku);
// ---------------------------------------------------------------------
// tulis jawaban soal 19 di sini 👇
const fotoku = 'D:\\Foto\\Liburan';
console.log(fotoku);

// ---------------------------------------------------------------------
// SOAL 20 [TANPA OOP] — console.log banyak argumen (pakai koma)
// Clue   : `hobiA` = 'Ngoding', `jamA` = 3
//          console.log('Hobi:', hobiA, '| Jam/hari:', jamA)
//          (koma otomatis kasih spasi)
// Target : Hobi: Ngoding | Jam/hari: 3
// Contoh :
//   const produk = 'Laptop';
//   const stok = 7;
//   console.log('Produk:', produk, '| Stok:', stok);
// ---------------------------------------------------------------------
// tulis jawaban soal 20 di sini 👇
const produk = 'Laptop';
const stok = 7;
console.log('Produk : ' + produk + ' | Stock : ' + stok);

// ---------------------------------------------------------------------
// SOAL 21 [TANPA OOP] — typeof
// Clue   : `teksA` = '123' (pakai petik), `angkaA` = 123 (tanpa petik).
//          print typeof keduanya → lihat bedanya!
// Target :
//   string
//   number
// Contoh :
//   const a = 'true';
//   const b = true;
//   console.log(typeof a);
//   console.log(typeof b);
// ---------------------------------------------------------------------
// tulis jawaban soal 21 di sini 👇
const a = 'true';
const b = true;
console.log(typeof a);
console.log(typeof b);

// ---------------------------------------------------------------------
// SOAL 22 [TANPA OOP] — Ubah angka jadi string pakai String()
// Clue   : `tahunA` = String(2026). print tahunA + ' tahun ini',
//          lalu print typeof tahunA.
// Target :
//   2026 tahun ini
//   string
// Contoh :
//   const skor = String(99);
//   console.log(skor + ' poin');
//   console.log(typeof skor);
// ---------------------------------------------------------------------
// tulis jawaban soal 22 di sini 👇
const skor = String(99);
console.log(skor + ' skor');

// ---------------------------------------------------------------------
// SOAL 23 [TANPA OOP] — String kosong + nambah pakai +=
// Clue   : `let cerita = ''`, lalu += 3x sampai jadi target.
//          (pakai let, bukan const, karena nilainya berubah)
// Target : Aku suka kopi
// Contoh :
//   let pesan = '';
//   pesan += 'Hari ';
//   pesan += 'ini ';
//   pesan += 'cerah';
//   console.log(pesan);
// ---------------------------------------------------------------------
// tulis jawaban soal 23 di sini 👇
let pesan = '';
pesan += 'Hari ';
pesan += 'ini ';
pesan += 'cerah';
console.log(pesan);

// ---------------------------------------------------------------------
// SOAL 24 [TANPA OOP] — Emoji di dalam string
// Clue   : `statusA` → emoji juga string biasa.
// Target : Lagi belajar JS 🚀
// Contoh :
//   const lagiApa = 'Lagi makan 🍜';
//   console.log(lagiApa);
// ---------------------------------------------------------------------
// tulis jawaban soal 24 di sini 👇
const lagiApa = 'Lagi makan ';
console.log(lagiApa);

// ---------------------------------------------------------------------
// SOAL 25 [TANPA OOP] — Petik tunggal & ganda sekaligus pakai backtick
// Clue   : `obrolanA` pakai BACKTICK → bebas isi ' dan " tanpa escape.
// Target : Ayah bilang: "It's time to sleep"
// Contoh :
//   const chat = `Dia nanya: "What's up?"`;
//   console.log(chat);
// ---------------------------------------------------------------------
// tulis jawaban soal 25 di sini 👇
const chat = `Dia nanya: "What's up?"`;
console.log(chat);

// ---------------------------------------------------------------------
// SOAL 26 [TANPA OOP] — BOSS: gabungan semua
// Clue   : `namaBoss` = 'Rizki', `kotaBoss` = 'Jakarta'
//          `bioBoss`   → `Saya ${namaBoss} dari ${kotaBoss}`
//          `mottoBoss` → 'Motto ' + namaBoss + ': "Jangan lupa ngopi"'
//          `kartuBoss` → multi-baris pakai garis ===== (backtick)
//          print ketiganya.
// Target :
//   Saya Rizki dari Jakarta
//   Motto Rizki: "Jangan lupa ngopi"
//   ==========
//   Nama : Rizki
//   Kota : Jakarta
//   ==========
// Contoh :
//   const siswa = 'Budi';
//   const sekolah = 'SMA 1';
//   const intro = `Aku ${siswa}, sekolah di ${sekolah}`;
//   const prinsip = 'Prinsip ' + siswa + ': "Belajar tiap hari"';
//   const kartu = `**********
// Nama    : ${siswa}
// Sekolah : ${sekolah}
// **********`;
//   console.log(intro);
//   console.log(prinsip);
//   console.log(kartu);
// ---------------------------------------------------------------------
// tulis jawaban soal 26 di sini 👇
const siswa = 'Budi';
const sekolah = 'SMA 1';
const intro = `Aku ${siswa}` + ` sekolah di ${sekolah}`;
console.log(intro);

// #####################################################################
//              BAGIAN B — CLASS (SOAL 27 – 46)
//              Gaya: class + constructor + method + new
// #####################################################################

// ---------------------------------------------------------------------
// SOAL 27 [CLASS] — Petik tunggal '...'
// Clue   : class `City` (name). method `show()` → 'Kota: ' + name
//          object `kotaku` = new City('Surabaya'), print show().
// Target : Kota: Surabaya
// Contoh :
//   class Color {
//     constructor(name) {
//       this.name = name;
//     }
//     show() {
//       return 'Warna: ' + this.name;
//     }
//   }
//   const warnaku = new Color('Hijau');
//   console.log(warnaku.show());
// ---------------------------------------------------------------------
// tulis jawaban soal 27 di sini 👇
class Color {
  constructor(name) {
    this.name = name;
  }

  show() {
    return 'Warna: ' + this.name;
  }
}
const warnaku = new Color('Black');
console.log(warnaku.show());

// ---------------------------------------------------------------------
// SOAL 28 [CLASS] — Petik ganda "..."
// Clue   : class `Drink` (name). method `order()` → "Pesan " + name + " satu"
//          object `pesananku` = new Drink('Es Jeruk'), print order().
// Target : Pesan Es Jeruk satu
// Contoh :
//   class Snack {
//     constructor(name) {
//       this.name = name;
//     }
//     buy() {
//       return "Beli " + this.name + " dua";
//     }
//   }
//   const jajan = new Snack('Keripik');
//   console.log(jajan.buy());
// ---------------------------------------------------------------------
// tulis jawaban soal 28 di sini 👇
class Snack {
  constructor(name) {
    this.name = name;
  }

  buy() {
    return 'Gue beli : ' + this.name;
  }
}
const jajan = new Snack('Pillows');
console.log(jajan.buy());

// ---------------------------------------------------------------------
// SOAL 29 [CLASS] — Template literal `...${}`
// Clue   : class `Welcome` (name). method `greet()` → `Selamat datang, ${name}!`
//          object `tamu` = new Welcome('Rizki'), print greet().
// Target : Selamat datang, Rizki!
// Contoh :
//   class Bye {
//     constructor(name) {
//       this.name = name;
//     }
//     say() {
//       return `Sampai jumpa, ${this.name}!`;
//     }
//   }
//   const pamit = new Bye('Sari');
//   console.log(pamit.say());
// ---------------------------------------------------------------------
// tulis jawaban soal 29 di sini 👇
class Bye {
  constructor(name) {
    this.name = name;
  }
  sayGoodBye() {
    return `Sampai jumpa, ${this.name}!`;
  }
}

const addValue = new Bye('di lain hari');
console.log(addValue.sayGoodBye());

// ---------------------------------------------------------------------
// SOAL 30 [CLASS] — Apostrof (') di dalam petik ganda
// Clue   : class `Friday` (activity). method `plan()` →
//          "Jum'at ini aku mau " + activity
//          object `rencana` = new Friday('olahraga'), print plan().
// Target : Jum'at ini aku mau olahraga
// Contoh :
//   class Agenda {
//     constructor(event) {
//       this.event = event;
//     }
//     info() {
//       return "Hari Jum'at ada " + this.event;
//     }
//   }
//   const acara = new Agenda('kerja bakti');
//   console.log(acara.info());
// ---------------------------------------------------------------------
// tulis jawaban soal 30 di sini 👇
class Agenda {
  constructor(name) {
    this.name = name;
  }

  sayInfo() {
    return "Hari Jum'at ada " + this.name;
  }
}
const addEvent = new Agenda('Kerja Bakti');
console.log(addEvent.sayInfo());

// ---------------------------------------------------------------------
// SOAL 31 [CLASS] — Escape \' di dalam petik tunggal
// Clue   : class `English` (word). method `say()` → 'I\'m ' + word
//          object `kataku` = new English('happy'), print say().
// Target : I'm happy
// Contoh :
//   class Mood {
//     constructor(feel) {
//       this.feel = feel;
//     }
//     tell() {
//       return 'You\'re ' + this.feel;
//     }
//   }
//   const perasaan = new Mood('awesome');
//   console.log(perasaan.tell());
// ---------------------------------------------------------------------
// tulis jawaban soal 31 di sini 👇
class Mood {
  constructor(feel) {
    this.feel = feel;
  }

  showTell() {
    return 'Youre ' + this.feel;
  }
}

const addValueFeel = new Mood('Happy!');
console.log(addValueFeel.showTell());

// ---------------------------------------------------------------------
// SOAL 32 [CLASS] — Petik ganda di dalam petik tunggal
// Clue   : class `Speech` (who, text). method `quote()` →
//          who + ' berkata: "' + text + '"'
//          object `pidato` = new Speech('Pak RT', 'Jaga kebersihan'), print quote().
// Target : Pak RT berkata: "Jaga kebersihan"
// Contoh :
//   class Sign {
//     constructor(text) {
//       this.text = text;
//     }
//     show() {
//       return 'Tulisan: "' + this.text + '"';
//     }
//   }
//   const papan = new Sign('Dilarang parkir');
//   console.log(papan.show());
// ---------------------------------------------------------------------
// tulis jawaban soal 32 di sini 👇
class Sign {
  constructor(text) {
    this.text = text;
  }

  showFeel() {
    return 'Tulisan: ' + this.text;
  }
}
const papan = new Sign('Dilarang parkir!');
console.log(papan.showFeel());

// ---------------------------------------------------------------------
// SOAL 33 [CLASS] — Escape \" di dalam petik ganda
// Clue   : class `Book` (title). method `info()` →
//          "Buku \"" + title + "\" bagus"
//          object `bukuku` = new Book('Laskar Pelangi'), print info().
// Target : Buku "Laskar Pelangi" bagus
// Contoh :
//   class Song {
//     constructor(title) {
//       this.title = title;
//     }
//     play() {
//       return "Memutar \"" + this.title + "\"";
//     }
//   }
//   const musik = new Song('Kopi Dangdut');
//   console.log(musik.play());
// ---------------------------------------------------------------------
// tulis jawaban soal 33 di sini 👇
class Song {
  constructor(title) {
    this.title = title;
  }

  playMusic() {
    return 'Memutar Musik : ' + this.title;
  }
}
const addValueTitleMusic = new Song('Denny Caknan');
console.log(addValueTitleMusic.playMusic());

// ---------------------------------------------------------------------
// SOAL 34 [CLASS] — Gabung (concat) beberapa property pakai +
// Clue   : class `FullName` (first, last). method `get()` → first + ' ' + last
//          object `namaku` = new FullName('Rizki', 'Januari'), print get().
// Target : Rizki Januari
// Contoh :
//   class Place {
//     constructor(city, country) {
//       this.city = city;
//       this.country = country;
//     }
//     full() {
//       return this.city + ', ' + this.country;
//     }
//   }
//   const tempat = new Place('Bali', 'Indonesia');
//   console.log(tempat.full());
// ---------------------------------------------------------------------
// tulis jawaban soal 34 di sini 👇
class Place {
  constructor(city, country) {
    this.city = city;
    this.country = country;
  }

  showFull() {
    return this.city + ', ' + this.country;
  }
}
const addedValueTempat = new Place('Bali', 'Indonesia');
console.log(addedValueTempat.showFull());

// ---------------------------------------------------------------------
// SOAL 35 [CLASS] — Hitungan di dalam ${}
// Clue   : class `Price` (item, price, qty). method `total()` →
//          `${item}: ${qty} x Rp${price} = Rp${price * qty}`
//          object `nota` = new Price('Roti', 8000, 2), print total().
// Target : Roti: 2 x Rp8000 = Rp16000
// Contoh :
//   class Rect {
//     constructor(w, h) {
//       this.w = w;
//       this.h = h;
//     }
//     area() {
//       return `Luas ${this.w}x${this.h} = ${this.w * this.h}`;
//     }
//   }
//   const kotak = new Rect(4, 5);
//   console.log(kotak.area());
// ---------------------------------------------------------------------
// tulis jawaban soal 35 di sini 👇
class Rect {
  constructor(x, z) {
    this.x = x;
    this.z = z;
  }

  showAreaCalculate() {
    return `Luas : ${this.x}x${this.z} = ${this.x * this.z}`;
  }
}

const valueKotak = new Rect(2, 2);
console.log(valueKotak.showAreaCalculate());

// ---------------------------------------------------------------------
// SOAL 36 [CLASS] — Multi-line pakai backtick
// Clue   : class `Address` (street, city). method `full()` → backtick 2 baris.
//          object `rumah` = new Address('Merdeka 10', 'Jakarta'), print full().
// Target :
//   Jalan : Merdeka 10
//   Kota  : Jakarta
// Contoh :
//   class Contact {
//     constructor(phone, email) {
//       this.phone = phone;
//       this.email = email;
//     }
//     show() {
//       return `HP    : ${this.phone}
// Email : ${this.email}`;
//     }
//   }
//   const kontakku = new Contact('0812-xxxx', 'budi@mail.com');
//   console.log(kontakku.show());
// ---------------------------------------------------------------------
// tulis jawaban soal 36 di sini 👇
class Contact {
  constructor(phone, email) {
    this.phone = phone;
    this.email = email;
  }

  showValueContact() {
    return `HP: ${this.phone}` + '\n' + `Email: ${this.email}`;
  }
}
const myContact = new Contact('0812-xxx', 'budi@gmail.com');
console.log(myContact.showValueContact());

// ---------------------------------------------------------------------
// SOAL 37 [CLASS] — Baris baru pakai \n
// Clue   : class `Days` (a, b, c). method `list()` → a + '\n' + b + '\n' + c
//          object `jadwalku` = new Days('Senin', 'Rabu', 'Jumat'), print list().
// Target :
//   Senin
//   Rabu
//   Jumat
// Contoh :
//   class Steps {
//     constructor(one, two) {
//       this.one = one;
//       this.two = two;
//     }
//     show() {
//       return '1. ' + this.one + '\n2. ' + this.two;
//     }
//   }
//   const langkah = new Steps('Cuci tangan', 'Makan');
//   console.log(langkah.show());
// ---------------------------------------------------------------------
// tulis jawaban soal 37 di sini 👇
class Steps {
  constructor(one, two) {
    this.one = one;
    this.two = two;
  }

  show() {
    return '1. ' + this.one + '\n2. ' + this.two;
  }
}
const langkah = new Steps('Cuci Tangan', 'Makan');
console.log(langkah.show());

// ---------------------------------------------------------------------
// SOAL 38 [CLASS] — Tab pakai \t
// Clue   : class `Table` (name, score). method `row()` → name + '\t' + score
//          object `baris1` = ('Rizki', 90) & `baris2` = ('Budi', 85), print keduanya.
// Target :
//   Rizki	90
//   Budi	85
// Contoh :
//   class Field {
//     constructor(key, val) {
//       this.key = key;
//       this.val = val;
//     }
//     show() {
//       return this.key + '\t= ' + this.val;
//     }
//   }
//   console.log(new Field('Hobi', 'Musik').show());
// ---------------------------------------------------------------------
// tulis jawaban soal 38 di sini 👇
class Field {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }

  show() {
    return this.key + '\t ' + this.val;
  }
}
const addedValueField = new Field('Hobi', 'Musik');
console.log(addedValueField.show());

// ---------------------------------------------------------------------
// SOAL 39 [CLASS] — Backslash \\
// Clue   : class `FolderPath` (drive, folder). method `path()` →
//          drive + ':\\' + folder
//          object `lokasi` = new FolderPath('C', 'Projects'), print path().
// Target : C:\Projects
// Contoh :
//   class FilePath {
//     constructor(name) {
//       this.name = name;
//     }
//     full() {
//       return 'D:\\Docs\\' + this.name + '.pdf';
//     }
//   }
//   const berkas = new FilePath('cv');
//   console.log(berkas.full());
// ---------------------------------------------------------------------
// tulis jawaban soal 39 di sini 👇
class FilePath {
  constructor(name) {
    this.name = name;
  }
  full() {
    return 'D:\\Docs\\' + this.name + '.pdf';
  }
}
const berkas = new FilePath('cv');
console.log(berkas.full());

// ---------------------------------------------------------------------
// SOAL 40 [CLASS] — console.log banyak argumen di dalam method
// Clue   : class `Hobby` (name, hours). method `print()` langsung
//          console.log('Hobi:', name, '| Jam:', hours)  (bukan return)
//          object `hobiku` = new Hobby('Gaming', 2), panggil hobiku.print().
// Target : Hobi: Gaming | Jam: 2
// Contoh :
//   class Item {
//     constructor(name, stock) {
//       this.name = name;
//       this.stock = stock;
//     }
//     print() {
//       console.log('Item:', this.name, '| Stok:', this.stock);
//     }
//   }
//   const barang = new Item('Mouse', 12);
//   barang.print();
// ---------------------------------------------------------------------
// tulis jawaban soal 40 di sini 👇
class Item {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
  }
  print() {
    console.log('Item:', this.name, '| Stock:', this.stock);
  }
}
const barang = new Item('Mouse', 12);
console.log(barang.print());

// ---------------------------------------------------------------------
// SOAL 41 [CLASS] — typeof di dalam template literal
// Clue   : class `TypeCheck` (value). method `check()` →
//          `${value} → ${typeof value}`
//          print untuk new TypeCheck('Halo') DAN new TypeCheck(42).
// Target :
//   Halo → string
//   42 → number
// Contoh :
//   class Inspect {
//     constructor(data) {
//       this.data = data;
//     }
//     describe() {
//       return `Data ${this.data} bertipe ${typeof this.data}`;
//     }
//   }
//   console.log(new Inspect('JS').describe());
//   console.log(new Inspect(true).describe());
// ---------------------------------------------------------------------
// tulis jawaban soal 41 di sini 👇
class Inspect {
  constructor(data) {
    this.data = data;
  }

  methodDescribe() {
    return `Nilai "${this.data}" bertipe: ${typeof this.data}`;
  }
}
const addedValueString = new Inspect('JS');
console.log(addedValueString.methodDescribe());

const addedValueBoolean = new Inspect(true);
console.log(addedValueBoolean.methodDescribe());

// ---------------------------------------------------------------------
// SOAL 42 [CLASS] — Ubah angka jadi string pakai String()
// Clue   : class `YearText` (year). method `toText()` → String(year)
//          object `tahunku` = new YearText(2026),
//          `hasilTahun` = tahunku.toText(), print hasilTahun & typeof hasilTahun.
// Target :
//   2026
//   string
// Contoh :
//   class ScoreText {
//     constructor(score) {
//       this.score = score;
//     }
//     toText() {
//       return String(this.score);
//     }
//   }
//   const nilaiku = new ScoreText(99).toText();
//   console.log(nilaiku);
//   console.log(typeof nilaiku);
// ---------------------------------------------------------------------
// tulis jawaban soal 42 di sini 👇
class ScoreText {
  constructor(score) {
    this.score = score;
  }

  toText() {
    return String(this.score);
  }
}
const nilaiku = new ScoreText(99).toText();
console.log(nilaiku);
console.log(typeof nilaiku);

// ---------------------------------------------------------------------
// SOAL 43 [CLASS] — String kosong + nambah pakai += di dalam method
// Clue   : class `Sentence` (w1, w2, w3). method `build()`:
//          let result = ''; lalu += tiap kata (pakai spasi), return result.
//          object `kalimatku` = new Sentence('Aku', 'suka', 'JS'), print build().
// Target : Aku suka JS
// Contoh :
//   class Words {
//     constructor(a, b) {
//       this.a = a;
//       this.b = b;
//     }
//     join() {
//       let hasil = '';
//       hasil += this.a + ' ';
//       hasil += this.b;
//       return hasil;
//     }
//   }
//   console.log(new Words('Halo', 'dunia').join());
// ---------------------------------------------------------------------
// tulis jawaban soal 43 di sini 👇
class Words {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// ---------------------------------------------------------------------
// SOAL 44 [CLASS] — Emoji di dalam string
// Clue   : class `Status` (name, emoji). method `show()` →
//          `${name} lagi semangat ${emoji}`
//          object `statusku` = new Status('Rizki', '💪'), print show().
// Target : Rizki lagi semangat 💪
// Contoh :
//   class Weather {
//     constructor(city, icon) {
//       this.city = city;
//       this.icon = icon;
//     }
//     show() {
//       return `Cuaca ${this.city}: ${this.icon}`;
//     }
//   }
//   console.log(new Weather('Bogor', '🌧️').show());
// ---------------------------------------------------------------------
// tulis jawaban soal 44 di sini 👇
class Weather {
  constructor(city, icon) {
    this.city = city;
    this.icon = icon;
  }
  show() {
    return `Cuaca: ${this.city}: ${this.icon}`;
  }
}
const addedValueCuaca = new Weather('Hujan', '🌧️');
console.log(addedValueCuaca.show());

// ---------------------------------------------------------------------
// SOAL 45 [CLASS] — Petik tunggal & ganda sekaligus pakai backtick
// Clue   : class `Dialog` (who). method `talk()` →
//          `${who} bilang: "Don't forget Jum'at-an!"`
//          object `obrolan` = new Dialog('Ibu'), print talk().
// Target : Ibu bilang: "Don't forget Jum'at-an!"
// Contoh :
//   class Chat {
//     constructor(who) {
//       this.who = who;
//     }
//     ask() {
//       return `${this.who} nanya: "What's up?"`;
//     }
//   }
//   console.log(new Chat('Doni').ask());
// ---------------------------------------------------------------------
// tulis jawaban soal 45 di sini 👇
class Chat {
  constructor(who) {
    this.who = who;
  }
  ask() {
    return `${this.who} nanya: "What's up?"`;
  }
}
const addedNameValue = new Chat('Jhon');
console.log(addedNameValue.ask());

// ---------------------------------------------------------------------
// SOAL 46 [CLASS] — BOSS: gabungan semua (3 method)
// Clue   : class `Profile` (name, city)
//          bio()   → `Saya ${name} dari ${city}`              (template literal)
//          quote() → 'Motto ' + name + ': "Jangan lupa ngopi"' (petik ganda di dalam)
//          card()  → multi-baris pakai garis =====             (backtick)
//          object `me` = new Profile('Rizki', 'Jakarta'), print ketiganya.
// Target :
//   Saya Rizki dari Jakarta
//   Motto Rizki: "Jangan lupa ngopi"
//   ==========
//   Nama : Rizki
//   Kota : Jakarta
//   ==========
// Contoh :
//   class Student {
//     constructor(name, school) {
//       this.name = name;
//       this.school = school;
//     }
//     intro() {
//       return `Aku ${this.name}, sekolah di ${this.school}`;
//     }
//     motto() {
//       return 'Prinsip ' + this.name + ': "Belajar tiap hari"';
//     }
//     card() {
//       return `**********
// Nama    : ${this.name}
// Sekolah : ${this.school}
// **********`;
//     }
//   }
//   const s = new Student('Budi', 'SMA 1');
//   console.log(s.intro());
//   console.log(s.motto());
//   console.log(s.card());
// ---------------------------------------------------------------------
// tulis jawaban soal 46 di sini 👇
class Student {
  constructor(name, school) {
    this.name = name;
    this.school = school;
  }

  intro() {
    return `Aku ${this.name}, sekolah di ${this.school}`;
  }
}
const addedValueStudent = new Student('Jhon Doe', 'SMA NEGERI 1 FIRDAUS');
console.log(addedValueStudent.intro());

// #####################################################################
//              BAGIAN C — FUNCTION (SOAL 47 – 66)
//              Gaya: function biasa yang return string, lalu dipanggil
// #####################################################################

// ---------------------------------------------------------------------
// SOAL 47 [FUNCTION] — Petik tunggal '...'
// Clue   : function `tampilNegara(negara)` → 'Negara: ' + negara
//          print tampilNegara('Indonesia').
// Target : Negara: Indonesia
// Contoh :
//   function tampilBuah(buah) {
//     return 'Buah: ' + buah;
//   }
//   console.log(tampilBuah('Mangga'));
// ---------------------------------------------------------------------
// tulis jawaban soal 47 di sini 👇
function fnDisplayName(buah) {
  return 'Buah: ' + buah;
}
const addNamaBuah = 'Alpukat';
console.log(fnDisplayName(addNamaBuah));

// ---------------------------------------------------------------------
// SOAL 48 [FUNCTION] — Petik ganda "..."
// Clue   : function `pesanKopi(jenis)` → "Saya pesan kopi " + jenis
//          print pesanKopi('Latte').
// Target : Saya pesan kopi Latte
// Contoh :
//   function pesanTeh(jenis) {
//     return "Saya pesan teh " + jenis;
//   }
//   console.log(pesanTeh('Tarik'));
// ---------------------------------------------------------------------
// tulis jawaban soal 48 di sini 👇
function pesanTeh(jenis) {
  return 'Saya pesan ' + jenis;
}
const addPesananMinuman = 'TEH';
console.log(pesanTeh(addPesananMinuman));

// ---------------------------------------------------------------------
// SOAL 49 [FUNCTION] — Template literal `...${}`
// Clue   : function `ucapUlangTahun(nama, umur)` →
//          `Selamat ulang tahun ${nama} yang ke-${umur}!`
//          print ucapUlangTahun('Rizki', 25).
// Target : Selamat ulang tahun Rizki yang ke-25!
// Contoh :
//   function ucapSelamat(nama, lomba) {
//     return `Selamat ${nama}, juara ${lomba}!`;
//   }
//   console.log(ucapSelamat('Sari', 'catur'));
// ---------------------------------------------------------------------
// tulis jawaban soal 49 di sini 👇
function sayToCongrats(nama, umur) {
  return `Selamat untuk ${nama}, atas bertambahnya umur yang ke ${umur}!`;
}
const addValueCongrats = sayToCongrats('Jon', 20);
console.log(addValueCongrats);

// ---------------------------------------------------------------------
// SOAL 50 [FUNCTION] — Apostrof (') di dalam petik ganda
// Clue   : function `infoJumat(kegiatan)` → "Setiap Jum'at aku " + kegiatan
//          print infoJumat('futsal').
// Target : Setiap Jum'at aku futsal
// Contoh :
//   function infoLibur(tempat) {
//     return "Libur Jum'at nanti ke " + tempat;
//   }
//   console.log(infoLibur('pantai'));
// ---------------------------------------------------------------------
// tulis jawaban soal 50 di sini 👇
function infoLibur(tempat) {
  return "Libur jum'at nanti kita ke " + tempat;
}
console.log(infoLibur('PANTAI'));

// ---------------------------------------------------------------------
// SOAL 51 [FUNCTION] — Escape \' di dalam petik tunggal
// Clue   : function `ajakan(kata)` → 'Let\'s ' + kata
//          print ajakan('go').
// Target : Let's go
// Contoh :
//   function katakan(x) {
//     return 'That\'s ' + x;
//   }
//   console.log(katakan('cool'));
// ---------------------------------------------------------------------
// tulis jawaban soal 51 di sini 👇
function katakan(x) {
  return 'Thats ' + x;
}
console.log(katakan('cool'));

// ---------------------------------------------------------------------
// SOAL 52 [FUNCTION] — Petik ganda di dalam petik tunggal
// Clue   : function `slogan(merek, isi)` → merek + ': "' + isi + '"'
//          print slogan('Kopiku', 'Ngopi dulu biar waras').
// Target : Kopiku: "Ngopi dulu biar waras"
// Contoh :
//   function papanInfo(teks) {
//     return 'Papan: "' + teks + '"';
//   }
//   console.log(papanInfo('Awas anjing galak'));
// ---------------------------------------------------------------------
// tulis jawaban soal 52 di sini 👇
function papanInfo(text) {
  return 'Papan: "' + text + '"';
}
console.log(papanInfo('Awas ada anjing di seberang jalan!'));

// ---------------------------------------------------------------------
// SOAL 53 [FUNCTION] — Escape \" di dalam petik ganda
// Clue   : function `judulLagu(judul)` → "Lagu \"" + judul + "\" enak"
//          print judulLagu('Bento').
// Target : Lagu "Bento" enak
// Contoh :
//   function judulNovel(judul) {
//     return "Novel \"" + judul + "\" seru";
//   }
//   console.log(judulNovel('Dilan'));
// ---------------------------------------------------------------------
// tulis jawaban soal 53 di sini 👇
function judulNovel(judul) {
  return 'Novel: ' + judul + ' seru';
}
console.log(judulNovel('Dilan'));

// ---------------------------------------------------------------------
// SOAL 54 [FUNCTION] — Gabung (concat) parameter pakai +
// Clue   : function `gabungNama(depan, belakang)` → depan + ' ' + belakang
//          print gabungNama('Rizki', 'Januari').
// Target : Rizki Januari
// Contoh :
//   function gabungAlamat(jalan, kota) {
//     return jalan + ', ' + kota;
//   }
//   console.log(gabungAlamat('Jl. Mawar 5', 'Depok'));
// ---------------------------------------------------------------------
// tulis jawaban soal 54 di sini 👇
function gabungAlamat(jalan, kota) {
  return jalan + ', ' + kota;
}
console.log(gabungAlamat('Jl. Mawar 99', 'USA'));

// ---------------------------------------------------------------------
// SOAL 55 [FUNCTION] — Hitungan di dalam ${}
// Clue   : function `hitungDiskon(harga, diskon)` →
//          `Harga Rp${harga} diskon ${diskon}% jadi Rp${harga - (harga * diskon) / 100}`
//          print hitungDiskon(100000, 20).
// Target : Harga Rp100000 diskon 20% jadi Rp80000
// Contoh :
//   function hitungKeliling(sisi) {
//     return `Keliling persegi sisi ${sisi} = ${4 * sisi}`;
//   }
//   console.log(hitungKeliling(7));
// ---------------------------------------------------------------------
// tulis jawaban soal 55 di sini 👇
function hitungKeliling(sisi) {
  return `Keliling persegi sisi ${sisi} = ${4 * sisi}`;
}
console.log(hitungKeliling(7));

// ---------------------------------------------------------------------
// SOAL 56 [FUNCTION] — Multi-line pakai backtick
// Clue   : function `biodata(nama, umur)` → backtick 2 baris.
//          print biodata('Rizki', 25).
// Target :
//   Nama : Rizki
//   Umur : 25
// Contoh :
//   function infoHewan(nama, jenis) {
//     return `Nama  : ${nama}
// Jenis : ${jenis}`;
//   }
//   console.log(infoHewan('Mochi', 'Kucing'));
// ---------------------------------------------------------------------
// tulis jawaban soal 56 di sini 👇
function infoHewan(nama, jenis) {
  return `Nama : ${nama}, Jenis : ${jenis} `;
}
console.log(infoHewan('Harimau', 'Darat'));

// ---------------------------------------------------------------------
// SOAL 57 [FUNCTION] — Baris baru pakai \n
// Clue   : function `daftarBelanja(a, b, c)` →
//          '- ' + a + '\n- ' + b + '\n- ' + c
//          print daftarBelanja('Beras', 'Telur', 'Minyak').
// Target :
//   - Beras
//   - Telur
//   - Minyak
// Contoh :
//   function daftarTugas(a, b) {
//     return '1. ' + a + '\n2. ' + b;
//   }
//   console.log(daftarTugas('Nyapu', 'Ngepel'));
// ---------------------------------------------------------------------
// tulis jawaban soal 57 di sini 👇

// ---------------------------------------------------------------------
// SOAL 58 [FUNCTION] — Tab pakai \t
// Clue   : function `barisNilai(mapel, nilai)` → mapel + '\t: ' + nilai
//          print barisNilai('MTK', 90) & barisNilai('IPA', 85).
// Target :
//   MTK	: 90
//   IPA	: 85
// Contoh :
//   function barisStok(barang, jumlah) {
//     return barang + '\t= ' + jumlah;
//   }
//   console.log(barisStok('Pensil', 30));
// ---------------------------------------------------------------------
// tulis jawaban soal 58 di sini 👇

// ---------------------------------------------------------------------
// SOAL 59 [FUNCTION] — Backslash \\
// Clue   : function `pathGambar(nama)` → 'C:\\Gambar\\' + nama + '.png'
//          print pathGambar('logo').
// Target : C:\Gambar\logo.png
// Contoh :
//   function pathDokumen(nama) {
//     return 'D:\\Dokumen\\' + nama + '.docx';
//   }
//   console.log(pathDokumen('surat'));
// ---------------------------------------------------------------------
// tulis jawaban soal 59 di sini 👇

// ---------------------------------------------------------------------
// SOAL 60 [FUNCTION] — console.log banyak argumen di dalam function
// Clue   : function `cetakInfo(nama, umur)` langsung
//          console.log('Nama:', nama, '| Umur:', umur)  (bukan return)
//          panggil cetakInfo('Rizki', 25).
// Target : Nama: Rizki | Umur: 25
// Contoh :
//   function cetakProduk(produk, harga) {
//     console.log('Produk:', produk, '| Harga:', harga);
//   }
//   cetakProduk('Buku', 15000);
// ---------------------------------------------------------------------
// tulis jawaban soal 60 di sini 👇

// ---------------------------------------------------------------------
// SOAL 61 [FUNCTION] — typeof di dalam template literal
// Clue   : function `cekTipe(nilai)` → `${nilai} bertipe ${typeof nilai}`
//          print cekTipe('JS') & cekTipe(true).
// Target :
//   JS bertipe string
//   true bertipe boolean
// Contoh :
//   function lihatTipe(x) {
//     return `Isi: ${x} | Tipe: ${typeof x}`;
//   }
//   console.log(lihatTipe(3.14));
// ---------------------------------------------------------------------
// tulis jawaban soal 61 di sini 👇

// ---------------------------------------------------------------------
// SOAL 62 [FUNCTION] — Ubah angka jadi string pakai String()
// Clue   : function `angkaKeTeks(angka)` → return String(angka)
//          `hasilTeks` = angkaKeTeks(100).
//          print hasilTeks + ' persen', lalu typeof hasilTeks.
// Target :
//   100 persen
//   string
// Contoh :
//   function jadiTeks(n) {
//     return String(n);
//   }
//   const umurTeks = jadiTeks(17);
//   console.log(umurTeks + ' tahun');
//   console.log(typeof umurTeks);
// ---------------------------------------------------------------------
// tulis jawaban soal 62 di sini 👇

// ---------------------------------------------------------------------
// SOAL 63 [FUNCTION] — String kosong + nambah pakai += di dalam function
// Clue   : function `susunKalimat(a, b, c)`:
//          let hasil = ''; += tiap kata (pakai spasi), return hasil.
//          print susunKalimat('Hari', 'ini', 'belajar').
// Target : Hari ini belajar
// Contoh :
//   function susunKata(x, y) {
//     let teks = '';
//     teks += x + ' ';
//     teks += y;
//     return teks;
//   }
//   console.log(susunKata('Selamat', 'pagi'));
// ---------------------------------------------------------------------
// tulis jawaban soal 63 di sini 👇

// ---------------------------------------------------------------------
// SOAL 64 [FUNCTION] — Emoji di dalam string
// Clue   : function `ekspresi(nama, emoji)` → `${nama} lagi happy ${emoji}`
//          print ekspresi('Rizki', '😄').
// Target : Rizki lagi happy 😄
// Contoh :
//   function cuaca(kota) {
//     return `${kota} lagi hujan 🌧️`;
//   }
//   console.log(cuaca('Bogor'));
// ---------------------------------------------------------------------
// tulis jawaban soal 64 di sini 👇

// ---------------------------------------------------------------------
// SOAL 65 [FUNCTION] — Petik tunggal & ganda sekaligus pakai backtick
// Clue   : function `kutipanTeman(nama)` →
//          `${nama} bilang: "Let's ngopi, it's Jum'at!"`
//          print kutipanTeman('Budi').
// Target : Budi bilang: "Let's ngopi, it's Jum'at!"
// Contoh :
//   function chatGuru(nama) {
//     return `${nama} bilang: "Don't be late"`;
//   }
//   console.log(chatGuru('Bu Ani'));
// ---------------------------------------------------------------------
// tulis jawaban soal 65 di sini 👇

// ---------------------------------------------------------------------
// SOAL 66 [FUNCTION] — BOSS: gabungan semua (3 function)
// Clue   : bioProfil(nama, kota)   → `Saya ${nama} dari ${kota}`
//          mottoProfil(nama)       → 'Motto ' + nama + ': "Jangan lupa ngopi"'
//          kartuProfil(nama, kota) → multi-baris pakai garis ===== (backtick)
//          print ketiganya dengan ('Rizki', 'Jakarta').
// Target :
//   Saya Rizki dari Jakarta
//   Motto Rizki: "Jangan lupa ngopi"
//   ==========
//   Nama : Rizki
//   Kota : Jakarta
//   ==========
// Contoh :
//   function introSiswa(nama, sekolah) {
//     return `Aku ${nama}, sekolah di ${sekolah}`;
//   }
//   function prinsipSiswa(nama) {
//     return 'Prinsip ' + nama + ': "Belajar tiap hari"';
//   }
//   function kartuSiswa(nama, sekolah) {
//     return `**********
// Nama    : ${nama}
// Sekolah : ${sekolah}
// **********`;
//   }
//   console.log(introSiswa('Budi', 'SMA 1'));
//   console.log(prinsipSiswa('Budi'));
//   console.log(kartuSiswa('Budi', 'SMA 1'));
// ---------------------------------------------------------------------
// tulis jawaban soal 66 di sini 👇

// =====================================================================
// ✅ TAHAP 1 SELESAI → lanjut TAHAP 2 (CLUE SAJA, tanpa contoh)
// =====================================================================
