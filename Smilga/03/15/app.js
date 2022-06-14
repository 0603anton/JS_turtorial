"use strict";
// function greeting(name) {
//   console.log(`Hello ${name}`);
// }

// //greet bob
// greeting("bob");
// greeting("anna");
// greeting("susy");
let wallHeight = 80;

function calculate(value) {
  console.log(`The value in cm ${value * 2.54} cm`);
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
