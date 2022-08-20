'use strict';
// All elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const curScore0El = document.querySelector(`#current--0`);
const curScore1El = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);

const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting position
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Rolling dice functionality

btnRoll.addEventListener(`click`, rollDice);
btnHold.addEventListener(`click`, saveScore);

// Function for dice

function rollDice() {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNumber);
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
}
// Function for save score

function saveScore() {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    console.log(totalScore[activePlayer]);
    if (totalScore[activePlayer] >= 10) {
      diceEl.classList.add(`hidden`);
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      changePlayer();
    }
  }
}

// func to change player
function changePlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
}

// func to start over
function startOver() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--winner`);
  totalScore[0] = 0;
  totalScore[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
}
