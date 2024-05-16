"use strict";

const h1El = document.querySelector("h1");
const p1 = document.querySelector(".player-1-dice");
const p2 = document.querySelector(".player-2-dice");

const roll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const play = function () {
  let num1 = roll();
  let num2 = roll();
  console.log(num1);
  console.log(num2);
  p1.src = `images/dice${num1}.png`;
  p2.src = `images/dice${num2}.png`;

  checkWin(num1, num2);
};

const checkWin = function (num1, num2) {
  if (num1 > num2) {
    console.log("1 wins");
    h1El.textContent = "Player 1 wins🏆";
  } else if (num1 < num2) {
    console.log("2 wins");
    h1El.textContent = "Player 2 wins🏆";
  } else {
    console.log("tie");
    h1El.textContent = "Tie⚖️";
  }
};

const reset = function () {
  p1.src = "images/dice6.png";
  p2.src = "images/dice6.png";
  h1El.textContent = "Let's Play🎲";
};
