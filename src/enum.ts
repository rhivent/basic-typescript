// enum = tipe data yang menyimpan sekumpulan data konstan
// seperti file .env yg bisa simpan data configuration

// numeric enums
// enum Month {
//   JAN = 1,
//   FEB = 100,
//   MAR,
//   APR,
//   MAY
// }

// console.log(Month.MAR);

// string enums ==> tidak bisa mengisi selain string
enum Month {
  JAN = "Januari",
  FEB = "Febuari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei"
}

console.log(Month.FEB);