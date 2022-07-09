// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list =  array-like object
// index, lenght property but not array methods

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// // console.log(headings.length);

// const items = document.getElementsByTagName('li');

// // items.forEach(function(item) {
// //   console.log(item);
// // });
// items[2].style.color = 'orange';
// const betterItems = [...items];

// betterItems.forEach(function (item) {
//   // console.log(item);
// });

// console.log(items);
// console.log(betterItems);

// ??моё повторение

/*
Работа я с document, мы получаем node list, допустим используя св-во getEleemntByTagName например h2 если таких заголовков много, то мы получаем тот самый node list. Основной минус этого node list, то что к нему нельзя применять методы массивов. Это можно исправтиь с помозью spread оператора

const items = document.getElementsByTagName('li');

>>получаем node list всех элементов li

const betterItems = [...items];
>>присваиваем новой переменной с помощью spread …

*/

let qeryItems = document.querySelectorAll(`h2`);
console.log(qeryItems);
let betterQeryItems = [...qeryItems]
console.log(betterQeryItems);
betterQeryItems.forEach(element => {
  console.log(element)
  element.style.color = `red`;
});