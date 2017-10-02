/** 
Dumb Encoder 1.0

Simple words encoder
No decoding function provided

Yet.
**/

'use strict';


const readline = require('readline');
let inp = "";
let encLength;
let encArray = [];
let encOutput;

//Is it possible to read from console easier?
//initialize new interface
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//get data to encode
reader.question('Enter text to encode: ', (inp) => {
  console.log(`This text will be encoded: ${inp}`);
  reader.close();
});

//this one generates a random symbol
function randSymbol() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let text = alphabet.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

//get length of string to encode
encLength = inp.length;

//generate set of random numbers
//with equal length of letters to encode
let i;
for (i = 0; i < encLength; i++) {
  encArray[i] = randSymbol();
}

//generate output
encOutput = encArray.toString();
console.dir(`Your output: {$encOutput}`);
