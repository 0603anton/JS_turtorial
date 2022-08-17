'use strict';
// All elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const diceEl = document.querySelector(`.dice`);

const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Functions
function rollDice() {
  const diceNumber = Math.round(Math.random() * 6 + 1);
  diceEl.classList.remove(`hidden`);
}

// Starting position
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

// Rolling dice functionality
