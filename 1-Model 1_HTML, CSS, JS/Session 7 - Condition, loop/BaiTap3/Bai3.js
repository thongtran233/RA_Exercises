"use strict";

let calButton = document.querySelectorAll(".calButton");
let clearButton = document.querySelector(".clearButton");
let display = document.querySelector("#display");
let isEnd = false;

for (let i = 0; i < calButton.length; i++) {
  calButton[i].addEventListener("click", function () {
    if (calButton[i].value == "=") {
      if (display.innerHTML != "") {
        display.innerHTML = eval(display.innerHTML);
      } else {
        display.innerHTML = "";
      }
      isEnd = true;
    } else {
      if (isEnd) {
        display.innerHTML = "";
      }
      display.insertAdjacentText("beforeend", "" + calButton[i].value);
      isEnd = false;
    }
  });
}

clearButton.addEventListener("click", function () {
  display.innerHTML = "";
});
