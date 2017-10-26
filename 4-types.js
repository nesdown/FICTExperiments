'use strict';

//Lets create some constants
//This one is integer
const int = 15;

//This one is float
const float = 15.4;

//Let's see the result of sum
console.log('Integer and Float');
console.log(int + float);

//This one is boolean
const bool = true;

//And this one is string
const str = 'This is text';

//And here we sum the values
console.log('String and Boolean');
console.log(str + bool);

//What if we change the sequence?
console.log('Boolean and String');
console.log(bool+str);

//Now, take a look at the objects
const hero = {
  name: 'Spider Man',
  age: 35,
  city: 'New York',
  postion: 'superhero'
};

//Take a look at output
console.log('Object');
console.log(hero);

//Let's change a field now
hero.name = 'Captain America';

//And print it out
console.log('Changed object');
console.log(hero);

//What if we create an array?
const array = ['Kyiv', 'London', 'Japan', 'Istanbul', 'China', 'Turkey'];
//Output it all
console.log('Array');
console.log(array);

//Use this functions and output results
array.push('Odessa');
console.log('Pushed array');
console.log(array);

console.log('Unshifted array');
array.unshift('Luleo');
console.log(array);

//And some new functions for arrays
console.log('shift: ' + array.shift());
console.log('pop: ' + array.pop());

//Now we are going to print types of variables
console.log('Typeof function');
console.log({ int }, typeof(int));
console.log({ float }, typeof(float));

//This one will be printed in another way
console.log(typeof(bool));

//All is ok with this one
console.log({ str }, typeof(str));

//Interesting, what is the type of hero object?
console.log({ hero }, typeof(hero));
//What if it is an array?
console.log('Is hero an array?');
console.log({ isArray : Array.isArray(hero) });

//Now we'll do the same for an array
console.log({ array }, typeof(array));
console.log({ isArray: Array.isArray(array) });

//And here is another way to check it all
console.log({ instanceofArray: array instanceof Array });
