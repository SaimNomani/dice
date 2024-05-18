"use strict";

// selection h1 element
const h1El = document.querySelector("h1");

// selecting player1 and player2 dice image elemnt
const p1 = document.querySelector(".player-1-dice");
const p2 = document.querySelector(".player-2-dice");

// function to generate random number
const generatingRandomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// function to roll the dice and add relevant dice image
const roll = function () {
  p1.classList.remove("dice-roll");
  p2.classList.remove("dice-roll");
  setTimeout(function () {
    p1.classList.add("dice-roll");
    p2.classList.add("dice-roll");
  }, 100);
};

// function to implement game logic
const play = function () {
  let num1 = generatingRandomNumber();
  let num2 = generatingRandomNumber();
  roll();
  // console.log(num1);
  // console.log(num2);
  p1.src = `images/dice${num1}.png`;
  p2.src = `images/dice${num2}.png`;

  checkWin(num1, num2);
};

// function to decide the winner
const checkWin = function (num1, num2) {
  if (num1 > num2) {
    // console.log("1 wins");
    h1El.textContent = "Player 1 wins🏆";
  } else if (num1 < num2) {
    // console.log("2 wins");
    h1El.textContent = "Player 2 wins🏆";
  } else {
    // console.log("tie");
    h1El.textContent = "Tie⚖️";
  }
};

// function to reset the game to its default state
const reset = function () {
  roll();
  p1.src = "images/dice6.png";
  p2.src = "images/dice6.png";
  h1El.textContent = "Let's Play🎲";
};
