'use strict';

//Some ways of creating an object

const obj1 = {};
obj1.name = "Kyiv";
obj1.age = 150000;
obj1.alive  = true;

const obj2 = new Object();
obj2.name = "Odesa";
obj2.age = 40000;
obj2.alive = true;

//NOTATION - WE USE COMMAS HERE!
const obj3 = {
  name: "Harkiv",
  age: 12000,
  alive: false
};

//let's output them.
console.log({obj1, obj2, obj3});
console.dir({obj1, obj2, obj3});
