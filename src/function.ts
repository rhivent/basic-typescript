//  tipe data pada balikan function
// function biasa yang bukan void harus
// ada return value sesuai dengan deklarasi tipe data awal

function getName(): string {
  return "halo, my name Riventus";
}

// console.log(getName());

function getAge(): number {
  return 123;
}

// function void tidak boleh mereturn
function printName(): void {
  const hehe = 'asd';
  // console.log(`Print name : ${hehe}`);
}
printName();

///////////////////////============================

function multiply(x: number,y: number): number {
  return x * y;
}

const result = multiply(2,40);
console.log(result);

// function sebagai tipe data
type Age = number;
let age: Age = 20;

// membuat type utk dipakai pada functio utk tiap2 argumen and type data kembalian function
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

// default parameter/argument
const fullName = (fn: string, ln: string = "Riventus"): string => {
  return `${fn} ${ln}`;
};
// console.log(fullName('awalan'));

// optional parameter
const getData1 = (val1: string, val2?: string):string => {
  return val1 + val2;
  return `${val1} ${val2}`;
};
console.log(getData1('asd'));

// utk type data number pada optional params tidak disarankan krn value awal nunmber di tambah undefined nantinya NaN
// case 1 : jika kembalian string maka nantinya optional params akan dijadikan string
// case 2 : jika kembalian number maka otomatis nilainya NaN
const getData2 = (val1: number, val2: number):number => {
  return val1 + val2;
  // return `${val1} ${val2}`;
};
console.log(getData2(1,2));
// optional params cocok type string