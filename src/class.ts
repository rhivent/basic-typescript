// // Penulisan class 1
// export class User {
//   public name: string;

//   constructor(name:string){
//     // this.name mengacu pada variabel public name
//     // = name mengacu pada parameter di constructor
//     this.name = name;
//   }
// }

// let user = new User('Riventus');
// console.log(user);

// Penulisan class 2
export class User {
  constructor(public name:string, public age:number){
  }
}

let user = new User('Riventus',25);
console.log(user);