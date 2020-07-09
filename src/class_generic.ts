// T standar orang2 dinamis typing bisa juga U atau Type
class List<T>{
  private data: T[];
  constructor(...elements: T[] ){
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[] ): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// // case 1
// let numbers = new List<number>(1, 2, 3); 
// numbers.add(4);
// numbers.addMultiple(5,6,7);
// console.log(numbers.getAll());

let random = new List<number | string>(1,'a','b',2);
random.add(125123);
random.add('asdas');
random.addMultiple(5,'kls f a');
console.log(random.getAll());