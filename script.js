"use strict";
// Exand minimize image src

const expandImage = "./assets/images/icon-plus.svg";
const minimizeImage = "./assets/images/icon-minus.svg";

// All clickable elements for toggling
const toggleElements = document.querySelectorAll(".expand > img, .expand > h5");

toggleElements.forEach((toggle) => {
  toggle.addEventListener("click", function () {

    const content = toggle.parentNode.nextElementSibling;
    // Ccheck hidden status
    const isShown = !content.classList.contains("hidden");
    // change toggle image
    toggle.src = isShown ? expandImage : minimizeImage;
    content.classList.toggle("hidden");
  });
});

