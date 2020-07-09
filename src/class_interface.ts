/*
Kita akan buat sebuah class Laptop yang mengimplementasikan interface Laptop
Misalkan laptop bnyak jenis dan beda2,misal 
laptop khusus gaming, ketik2 biasa, dll. Laptop masing2 punya spek berbeda2
tetapi ada beberapa kesamaan dari laptop : ada keyboard, touchpad,
layar, bisa ada tombol on and off
*/
// blueprint dari bnyak laptop
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop{
  name: string;
  isGaming: boolean;

  constructor(name : string, isGaming: boolean){
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log('nyala');
  }
  off(): void {
    console.log('mati');
  }
}

class MacBook implements Laptop{
  name: string;
  isKeyboardLight : boolean;
  constructor(name : string, isKeyboardLight: boolean){
    this.name = name;
    this.isKeyboardLight = isKeyboardLight;
  }

  on(): void {
    console.log('nyala');
  }
  off(): void {
    console.log('mati');
  }
}

let asus = new Asus('ROG',true);
console.log(asus.on());
console.log(asus.off());
let mac = new MacBook('PRO',true);
console.log(asus.on());
console.log(asus.off());
