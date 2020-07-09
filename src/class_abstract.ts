// misal ada class Kendaraan dengan anak class mobil dan motor
abstract class Vehicle {

  abstract wheels: number;

  start(): void {
    console.log('rhmmmm');
  }
}

// mobil ini adalah sebuah kendaraan
class Car extends Vehicle{
  wheels: number = 4;
}
let car = new Car();
console.log(car.wheels);
car.start();


// motor ini adalah sebuah kendaraan
class Motor extends Vehicle{
  wheels: number = 2;
}
let bike = new Motor();
console.log(bike.wheels);
bike.start();
