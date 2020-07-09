// Penulisan class inheritance 1
// inheritance = sifat dari sbuah class yang mempunyai sifat2 dari parent class
export class User {
  constructor(public name:string, public age:number){
  }

  setName(value: string): void{
    this.name = value;
  }
  getName(): string{
    return this.name;
  }
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri.

// setter = sebagai validasi ketika ingin mengubah properti yang ada pada class
// getter = untuk mengambil data pada sebuah class
// static property dan static method = sebuah property atau method yang bisa diakses langsung dalam class itu sendiri tanpa perlu di instansiasi terlebih dahulu.

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = ''; //tidak bisa diakses dari luar, jika ingin diambil maka harus dipaksa melalui getter, dan tidak bisa mengubah langsung, harus ada validator

  static getRoleName: string = "Admin Riventus";

  constructor(phone: string,name: string,age: number){
    super(name,age);  //berfungsi untuk memanggil constructor yang di parent class nya, jika parent class butuh 2 data maka 
    this.phone = phone;
  }

  static getNameRole(){
    return "Haii";
  }

  getRole(): {read: boolean, write: boolean} {
    return {
      read: this.read,
      write : this.write
    };
  };

  // set tidak bisa di set type data any atau void atau ada return nanti error
  set email(value: string){
    if(value.length < 5){
      this._email = "Email salah !";
    }else{
      this._email = value;
    }
  }

  get email(): string{
    return this._email;
  }
}

let admin = new Admin('0812341234','Riventus',22);
// admin.getName(); // Riventus
// admin.getRole(); // { read: true, write: true }
// admin.setName('HAHAH'); // undefined
// admin.getName(); // HAHAH
// admin.phone; // 0812341234
// validasi dan mengisi data
admin.email = 'Rivasdasa@mail.com';
// mengambil data variabel private dari class
// console.log(admin.email);

// static property 
let admin2 = Admin.getRoleName;
let admin3 = Admin.getNameRole();
console.log(admin2);
console.log(admin3);
