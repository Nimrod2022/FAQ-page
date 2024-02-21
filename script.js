"use strict";

const expandButton = document.getElementById("expand");
const buttonImage = expandButton.querySelector("img");
const questionsClick = document.getElementById("question");
const minimizeButtonImage = "./assets/images/icon-minus.svg";
const expandButtonImage = "./assets/images/icon-plus.svg";

let clicked = false;


function handleClicks(clickElementId) {
  clickElementId.addEventListener("click", function () {
    if (clicked) {
      buttonImage.src = expandButtonImage;
      clicked = false;
    } else {
      buttonImage.src = minimizeButtonImage;
      clicked = true;
    }
  });
}

handleClicks(expandButton);
handleClicks(questionsClick);