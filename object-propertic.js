var computer = {
    price: 20000,
    storage: '256gb',
    processor: 'i5',

};
// read object property 
console.log(computer);
console.log(computer.price);
var totalStroge = computer.storage;
console.log(totalStroge);


// set propertics 
computer.price = 22000;
console.log(computer);
//  different way to set a value of an object property 
// 1
computer.price = 2200;
console.log(computer.price);

// 2
computer['price'] = 23000;
console.log(computer.price);
// 3 
var Newprice = 'price';
computer[Newprice] = 2400;
console.log(computer.price);




computer.storage = '560gb';
console.log(computer.storage);
computer['storage'] = '1T';
console.log(computer.storage);
var newStorage = 'storage';
computer[newStorage] = '2tb';
console.log(computer.storage);