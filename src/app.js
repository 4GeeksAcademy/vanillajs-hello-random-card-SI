import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const valueNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["♦", "♥", "♠", "♣"];

  const topSuit = document.querySelector(".top-suit");
  const value = document.querySelector(".value-number");
  const bottomSuit = document.querySelector(".bottom-suit");
  const button = document.getElementById("generate");

  button.addEventListener("click", () => {
    const valueNumber =
      valueNumbers[Math.floor(Math.random() * valueNumbers.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];

    topSuit.textContent = suit;
    bottomSuit.textContent = suit;
    value.textContent = valueNumber;

    const color = suit === "♥" || suit === "♦" ? "red" : "black";
    topSuit.style.color = color;
    bottomSuit.style.color = color;
    value.style.color = color;
  });
  console.log("");
};
