/* 
Generic = Tipe data yang dinamis.
*/
function getData(value: any){
  return value;
}

// console.log(getData('Riventus'));
// console.log(getData(1234123));

// generic
function myData<T>(value: T){
  return value;
}
// baca fungsi Ketika menggunakan function ini kasih tau saya typenya apa
console.log(myData('Riventus').length);
console.log(myData(1234123));

// menggunakan arrow function dengan TS biasa
const myData2 = <T>(value: T) => {
  return value;
}
// // menggunakan arrow function dengan JSX biasa
// // option 1
// const myData3 = <T, >(value: T) => {
//   return value;
// }
// const myData4 = <T extends unknown>(value: T) => {
//   return value;
// }
// const myData5 = <T extends {}>(value: T) => {
//   return value;
// }