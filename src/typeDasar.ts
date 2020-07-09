//  string 
let nama: string = "Riventus";
nama = "string";

// number 
let umur: number = 5;
umur = 10;
umur = 13;

// boolean
let isMarried: boolean = false;
isMarried = true;
isMarried = false;

// any => tipe data apa saja
let heroes: any = 'Iron Man';
heroes = 20;
heroes = [];
heroes = {};
heroes = true || false || 'string';
heroes = () => {};

// union type => suatu variabel bisa memiliki type data lebih dari 1
let phone: number | string;
phone = 6281232134;
phone = '081232134';