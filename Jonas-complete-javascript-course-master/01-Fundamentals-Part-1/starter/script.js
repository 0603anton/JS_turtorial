let js = "amazing";
if (js === "amazing") alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10);

let firstName = "Anton";

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "Russia";
let continent = "Eurasia";
let population = 149;

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

language = "Russia";

const weightMark = 78;
const weightMark1 = 78;
const tallMark = 1.69;
const tallMark1 = 1.95;

const weightJohn = 92;
const weightJohn1 = 92;
const tallJohn = 1.88;
const tallJohn1 = 1.76;

const bmiMark = weightMark / tallMark ** 2;
const bmiMark1 = weightMark1 / tallMark1 ** 2;

const bmiJohn = weightJohn / tallJohn ** 2;
const bmiJohn1 = weightJohn1 / tallJohn1 ** 2;

const markHigherBMI = bmiMark > bmiJohn;
const markHigherBMI1 = bmiMark1 > bmiJohn1;

if (markHigherBMI) {
  console.log(`Mark\`s BMI ${bmiMark} is higher than Jhon\`s ${bmiJohn}`);
} else {
  console.log(`Jhon\`s BMI ${bmiJohn} is higher than Marks\`s ${bmiMark}`);
}

if (markHigherBMI1) {
  console.log(`Mark\`s BMI ${bmiMark1} is higher than Jhon\`s ${bmiJohn1}`);
} else {
  console.log(`Jhon\`s BMI ${bmiJohn1} is higher than Marks\`s ${bmiMark1}`);
}
console.log(markHigherBMI);
console.log(markHigherBMI1);
