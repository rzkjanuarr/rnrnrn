# STRING → 1. CARA MENULIS

String = **teks**. Di React Native, hampir semua yang tampil di `<Text>` itu string.

## 📖 Penjelasan

Ada 3 cara menulis string:

| Cara | Contoh | Kapan dipakai |
|---|---|---|
| Single quote | `'Halo'` | Default (style project RN pakai ini) |
| Double quote | `"Halo"` | Kalau isinya ada tanda `'` → `"Jum'at"` |
| Template literal (backtick) | `` `Halo ${nama}` `` | Kalau perlu **sisip variabel** atau **multi-baris** |

## 🧱 Sedikit OOP dulu

Semua latihan kita pakai **class**. Polanya:

```js
class NamaClass {
  constructor(param) {   // dipanggil saat `new NamaClass(...)`
    this.param = param;  // simpan data ke object
  }

  namaMethod() {         // aksi/perilaku object
    return this.param;
  }
}

const obj = new NamaClass('isi');
console.log(obj.namaMethod()); // isi
```

## 💡 Contoh

Lihat & jalankan [`contoh.js`](./contoh.js):

```bash
npm run latihan -- belajar-js/01-fundamental-javascript/01-tipe-data/01-string/01-cara-menulis/contoh.js
```

```js
class Greeting {
  constructor(name) {
    this.name = name;
  }

  single() {
    return 'Halo ' + this.name;
  }

  double() {
    return "Halo " + this.name + ", hari ini Jum'at";
  }

  template() {
    return `Halo ${this.name}, selamat datang!`;
  }

  multiLine() {
    return `Nama : ${this.name}
Status : Belajar JS`;
  }
}

const greet = new Greeting('Rizki');
console.log(greet.single());    // Halo Rizki
console.log(greet.double());    // Halo Rizki, hari ini Jum'at
console.log(greet.template());  // Halo Rizki, selamat datang!
console.log(greet.multiLine()); // 2 baris
```

**Kaitan ke React Native:**
```jsx
<Text>{`Halo ${user.name}, selamat datang!`}</Text>
```

---

## ✍️ Latihan

Kerjakan di [`latihan.js`](./latihan.js), lalu jalankan:

```bash
npm run latihan -- belajar-js/01-fundamental-javascript/01-tipe-data/01-string/01-cara-menulis/latihan.js
```

**Soal 1 (mudah)**
Bikin class `Profile` dengan constructor `(name, city)`.
Bikin method `bio()` yang return `"Saya <name> dari <city>"` **pakai template literal**.

**Soal 2 (mudah)**
Di class yang sama, bikin method `quote()` yang return kalimat yang mengandung tanda petik satu, contoh:
`Motto Rizki: "Jangan lupa ngopi"`. Bebas pakai cara apa, asal tidak error.

**Soal 3 (sedang)**
Bikin method `card()` yang return string **multi-baris**:
```
==========
Nama : Rizki
Kota : Jakarta
==========
```

**Soal 4 (sedang)**
Bikin class `ProductLabel` dengan constructor `(name, price)`.
Method `label()` return `"Kopi Susu - Rp15000"`.
Lalu bikin **2 object** berbeda dan print label keduanya.

<details><summary>▶ Kunci Jawaban (buka setelah nyoba sendiri!)</summary>

```js
class Profile {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  bio() {
    return `Saya ${this.name} dari ${this.city}`;
  }

  quote() {
    return `Motto ${this.name}: "Jangan lupa ngopi"`;
  }

  card() {
    return `==========
Nama : ${this.name}
Kota : ${this.city}
==========`;
  }
}

class ProductLabel {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  label() {
    return `${this.name} - Rp${this.price}`;
  }
}

const me = new Profile('Rizki', 'Jakarta');
console.log(me.bio());
console.log(me.quote());
console.log(me.card());

const kopi = new ProductLabel('Kopi Susu', 15000);
const teh = new ProductLabel('Teh Manis', 8000);
console.log(kopi.label());
console.log(teh.label());
```
</details>

---

✅ Udah selesai? Centang di [README roadmap](../../../../README.md), terus minta lanjut ke **CARA PRINT**.
