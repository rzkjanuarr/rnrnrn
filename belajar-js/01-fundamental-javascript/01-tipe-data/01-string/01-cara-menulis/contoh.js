// STRING → 1. CARA MENULIS (contoh)

// =====================================================================
// APA ITU CLASS?
// Class = CETAKAN (blueprint). Dari satu cetakan bisa dibuat banyak OBJEK.
// Ibarat cetakan kue: class-nya cetakan, objeknya kue yang jadi.
// Class membungkus DATA (di sini: name) + PERILAKU (method) jadi satu.
// =====================================================================

class Greeting {
  // constructor otomatis jalan saat kita tulis `new Greeting(...)`.
  // Tugasnya menyimpan data awal ke dalam objek lewat `this`.
  constructor(name) {
    this.name = name; // data disimpan SEKALI di objek, bisa dipakai semua method
  }

  // Method = function yang "nempel" di objek.
  // Cukup baca this.name, tidak perlu kirim nama lagi tiap dipanggil.

  // Cara 1: petik tunggal '...'
  single() {
    return 'Halo ' + this.name;
  }

  // Cara 2: petik ganda "..."
  // Dipakai karena teksnya mengandung petik tunggal (Jum'at).
  // Kalau pakai petik tunggal harus di-escape: 'hari ini Jum\'at'
  double() {
    return 'Halo ' + this.name + ", hari ini Jum'at";
  }

  // Cara 3: template literal `...` (backtick)
  // Bisa sisipkan variabel/ekspresi langsung pakai ${...}, tanpa tanda +
  template() {
    return `Halo ${this.name}, selamat datang!`;
  }

  // Cara 4: multi-line, juga pakai backtick
  // Enter di dalam backtick ikut jadi baris baru (spasi di awal baris juga ikut!)
  multiLine() {
    return `Nama : ${this.name}
Status : Belajar JS`;
  }
}

// `new` = bikin objek baru dari cetakan Greeting, dengan name = 'Rizki'
const greet = new Greeting('Rizki');
console.log(greet.single());
console.log(greet.double());
console.log(greet.template());
console.log(greet.multiLine());
console.log(typeof greet.name); // string

// =====================================================================
// VERSI TANPA OOP (cuma contoh, di-comment, tidak dijalankan)
// =====================================================================
//
// --- Gaya A: variabel langsung ---
// const name = 'Rizki';
// const single = 'Halo ' + name;
// const double = 'Halo ' + name + ", hari ini Jum'at";
// const template = `Halo ${name}, selamat datang!`;
// const multiLine = `Nama : ${name}
// Status : Belajar JS`;
//
// console.log(single);
// console.log(double);
// console.log(template);
// console.log(multiLine);
//
// --- Gaya B: function biasa ---
// function template(name) {
//   return `Halo ${name}, selamat datang!`;
// }
// console.log(template('Rizki'));
// console.log(template('Budi')); // nama harus dikirim terus tiap panggil
//
// =====================================================================
// BEDANYA & KEGUNAAN CLASS
// =====================================================================
//
// TANPA OOP:
// + Lebih singkat & langsung, cocok untuk hal kecil / sekali pakai.
// - Data (name) harus dikirim manual ke tiap function,
//   atau jadi variabel lepas yang bisa ketimpa / bentrok nama.
// - Kalau butuh banyak orang: name1, name2, name3... cepat berantakan.
//
// DENGAN CLASS:
// + Data + perilaku jadi satu paket (greet.name & greet.template()).
// + Bisa bikin banyak objek, masing-masing punya data sendiri:
//     const a = new Greeting('Budi');
//     const b = new Greeting('Sari');
//     a.template(); // Halo Budi, ...
//     b.template(); // Halo Sari, ...
//   Tidak saling tabrakan.
// + Lebih rapi saat program membesar (mudah dicari, dirawat, dikembangkan).
// + Jadi dasar fitur lanjutan: inheritance (extends), dll.
//
// KESIMPULAN JUJUR:
// Untuk materi string sesederhana ini, class sebenarnya "berlebihan".
// Di sini dipakai untuk latihan membiasakan gaya OOP. Di dunia nyata,
// pakai class kalau ada DATA yang dipakai berulang oleh beberapa function
// atau butuh banyak objek sejenis (user, produk, dll).
//
// LATIHAN:
// Coba tulis ulang versi tanpa OOP sendiri di latihan.js,
// lalu bandingkan output-nya dengan file ini — harusnya sama persis.
