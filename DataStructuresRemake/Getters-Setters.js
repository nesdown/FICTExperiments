'use strict';

//This object is also known as Hash

const car = {
  name: 'Audi',
  model: 1520,
  owner: 'Peter'
}

//let's print some fields
console.log('Car\'s model is: ' + car.model);
console.log('Car\'s name is: ' + car['name']);

//now we'll delete something
delete car.owner;
console.dir({ car });

//we can make a deletion like this
delete car['model'];
console.log({ car });

const car2 = {
  name: 'Tavriya',
  model: 6230,
  owner: 'Petya',

  //we can add getter and setter here

  get owner() {
    return 'Petya';
  },

  set owner(value) {
    console.log('The great owner of the car is PETER.');
  }
}

//I strongly recommend to comment the next line
//Incapsulation, mf!
car2.owner = 'John';

console.dir(car2['owner']);
console.dir({ car2 });
