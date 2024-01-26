"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    } else {
      displayMessage("👎 You lost the game!");
      score = 0;
    }
  } else {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (document.querySelector(".highscore").textContent < score)
      document.querySelector(".highscore").textContent = score;
  }

  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});