'use strict';
const numInit = 1;
const numEnd = 20;
let initPoints = 20;
let highScore = 0;
let numberGuess;
const messageAlert = function (message) {
  document.querySelector('.message').textContent = message;
};
const startAgain = function () {
  initPoints = 20;
  highScore = 0;
  numberGuess = Math.trunc(Math.random() * numEnd + 1);
  console.log(numberGuess);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  messageAlert('Start guessing ...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
};

startAgain();
//GUESS NUMBER BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When user type no number or a outline number range
  if (guess > 20 || guess < 1 || !guess) {
    messageAlert(`Please type a number between ${numInit} and ${numEnd}`);
  } else if (initPoints > 0) {
    //When typed number is higher than the secret number
    if (guess > numberGuess) {
      messageAlert(`Number is less than ${guess}`);
      initPoints--;
    }

    //When typed number is lower than the secret number

    if (guess < numberGuess) {
      messageAlert(`Number is higher than ${guess}`);
      initPoints--;
    }
  }
  if (guess === numberGuess) {
    if (initPoints > highScore) {
      highScore = initPoints;
    }
    messageAlert('Number is correct');
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = numberGuess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  document.querySelector('.score').textContent = initPoints;

  // check if i lose the game
  if (initPoints < 1) {
    messageAlert('YOU LOSE THE GAME :(');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  startAgain();
});
