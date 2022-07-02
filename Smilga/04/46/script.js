"use strict";

const names = ["anna", "susy", "bob"];
const lastName = "shakeandbake";
let newArray = [];

for (let elem of names) {
  let newName = `${elem} ${lastName}`;
  newArray.push(newName);
}
console.log(newArray);

for Each

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


MAP

const people = [
  { name: "Alex", age: 20, position: "developer" },
  { name: "John", age: 22, position: "designer" },
  { name: "Natasha", age: 32, position: "boss" },
];

const someObj = people.map((smth) =>{
  return {
    firstName:smth.name,
    newAge: smth.age + 20,
  }
});

console.log(someObj);

Filter!

!TO DO

const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const users = [{
    username: "lando12",
    jedi: false
}, {
    username: "kvaigon99",
    jedi: true
}, {
    username: "anakin skywalker",
    jedi: false // DARK SIDE ISN'T JEDI WAY!!!
}, {
    username: "littlegreenpug",
    jedi: true
}, {
    username: "ray",
    jedi: true
}, {
    username: "padmebestqueenever",
    jedi: false
}];

const documents = [{
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07"
}, {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11"
}, {
    content: "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56"
}];

// getAverage()
const getAverage = (numbers) => {
    const total = numbers.reduce((total, number) => {
        return total + number;
    }, 0);
    return total / numbers.length;
}
console.log(getAverage(numbers));

// countJedi()
const countJedi = (users) => {
    return users.reduce((count, user) => {
        if(user.jedi){
            count++;
        }
        return count;
    }, 0);
}
console.log(countJedi(users));

// getArrayOnlyJedi()
const getArrayOnlyJedi = (users) => {
    return users.reduce((names, user) => {
        if(user.jedi){
            names.push(user.username);
        }
        return names;
    }, []);
}
console.log(getArrayOnlyJedi(users));

// composeDocuments()
const composeDocuments = (documents) => {
    return documents.reduce((generalDocument, document) => {
        generalDocument.content = generalDocument.content + " " + document.content;
        generalDocument.authors.push(document.author);
        if(!generalDocument.date ||
            new Date(generalDocument.date) <= new Date(document.date)){
            generalDocument.date = document.date;
        }
        return generalDocument;
    }, {
        content: "",
        authors: [],
        date: null
    });
}
console.log(composeDocuments(documents));