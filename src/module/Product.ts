import Asus from './Asus';
import MacBook from './MacBook';

let asus = new Asus('ROG',true,true);
console.log(asus);

let mac = new MacBook(2020,false,false);
console.log(mac);
mac.a();
mac.b();