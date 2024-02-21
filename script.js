'use strict'

const expandButton = document.getElementById('expand');
const buttonImage = expandButton.querySelector('img');

const minimizeButtonImage = "./assets/images/icon-minus.svg";
const expandButtonImage = "./assets/images/icon-plus.svg";


// Track button clicks
let clicked = false;

// Change expand and close icon
expandButton.addEventListener('click', function() {
    if (clicked) {                     
        buttonImage.src = expandButtonImage;
        clicked = false; 
    } else {        
        buttonImage.src = minimizeButtonImage;
        clicked = true; 
    }
});