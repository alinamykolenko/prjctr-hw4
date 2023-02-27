"use strict";

const button = document.querySelector(".button");
const background = document.querySelector(".content");
const outputText = document.querySelector(".content__text");

addEventListener("DOMContentLoaded", function () {
  if (
    localStorage.getItem("theme") === null ||
    localStorage.getItem("theme") === "light"
  ) {
    setLightTheme();
  } else if (localStorage.getItem("theme") === "dark") {
    setDarkTheme();
  }
});

function setLightTheme() {
  const date = localStorage.getItem("date");

  localStorage.setItem("theme", "light");
  button.textContent = "Turn off";
  background.style.backgroundColor = "pink";

  if (date) {
    outputText.innerHTML = `Last turn on: ${date}`;
  }
}

function setDarkTheme() {
  const date = localStorage.getItem("date");

  localStorage.setItem("theme", "dark");
  button.textContent = "Turn on";
  background.style.backgroundColor = "#333B51";

  if (date) {
    outputText.innerHTML = `Last turn off: ${date}`;
  }
}

function change() {
  localStorage.setItem("date", formatDate(new Date()));

  if (localStorage.getItem("theme") === "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

button.addEventListener("click", change);

// -------------------------------------------

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
// -------------------------------------------
