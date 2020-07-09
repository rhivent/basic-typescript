// blueprint pada smua class laptop 
// yg mengimplementasi interface ini
export default interface ILaptop<T> {
  name: string;
  type: T,
  withNumeric : boolean
  withTouchButton: boolean
}