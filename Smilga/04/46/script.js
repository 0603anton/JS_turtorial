"use strict";

const names = ["anna", "susy", "bob"];
const lastName = "shakeandbake";
let newArray = [];

for (let elem of names) {
  let newName = `${elem} ${lastName}`;
  newArray.push(newName);
}
console.log(newArray);

const people = [
  { name: "Alex", age: 20, position: "developer" },
  { name: "John", age: 22, position: "designer" },
  { name: "Natasha", age: 32, position: "boss" },
];

// function showPerson(person) {
//   console.log(person);
// }

// people.forEach(showPerson);

people.forEach((element) => {
  console.log(element);
});
