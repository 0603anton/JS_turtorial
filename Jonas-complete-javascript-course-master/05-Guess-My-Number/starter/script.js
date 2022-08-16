'use strict';

let scoreScreen = document.querySelector(`.score`);
let score = 20;
let highscore = 0;
let SecretNumber = Math.trunc(Math.random() * 20 + 1);

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, () => {
  let guess = +document.querySelector(`.guess`).value;
  console.log(guess);

  if (!guess) {
    message.textContent = `⛔ No Number or Zero!`;
  } else if (guess === SecretNumber) {
    if (highscore < score) {
      highscore = score;
    }
    displayMessage(message`🎉 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = SecretNumber;
    document.querySelector(`.highscore`).textContent = highscore;
  } else if (guess !== SecretNumber) {
    score--;
    scoreScreen.textContent = score;
    guess > SecretNumber
      ? displayMessage(`📈 Too high!`)
      : displayMessage(`📉 Too low!`);
    if (score < 1) {
      displayMessage(`💥 You lost the game!`);
      score = 0;
      scoreScreen.textContent = score;
    }
  }
});

function resetGame() {
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing...`);
  scoreScreen.textContent = score;
}

document.querySelector(`.again`).addEventListener(`click`, resetGame);
