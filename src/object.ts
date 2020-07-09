// Object
type User = {
  name: string, 
  age: number
};
// diatas telah dijelaskan bahwa yg menggunakan tipe User
// yang dibutuhkan adalah variabel yang berisi object dan
// key adalah name dengan tipe string dan age dengan tipe number
// jika ada tamhaan key lain selain 2 td maka akan ada error 
let user: User = {
  name : "Riventus",
  age : 15
};

user = {
  name : "Riventus",
  age : 15
}