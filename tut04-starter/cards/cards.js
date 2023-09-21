"use strict";
/**
 *  array of img srcs
 */ 
const cards = [
  "images/2C.png",
  "images/3D.png",
  "images/4H.png",
  "images/5S.png",
  "images/6C.png"
];
// accessing DOM
const cardContainer = document.querySelector(".card-container");
// flag
let enlargedCard = null;

// loop thr the array of cards
cards.forEach(card => {
  // creating imgs
  const img = document.createElement("img");
  // setting imgs' src
  img.src = card;
  // clicking on img 
  img.addEventListener("click", () => {
    // check if any img is clicked or not
    if (enlargedCard !== null) /* if a card is being enlarged */ {
      // stop enlarging that card
      enlargedCard.classList.remove("enlarged");
    }
    // if no card is being enlarged
    if (enlargedCard !== img) {
      // enlarge the clicked one
      img.classList.add("enlarged");
      // change the flag to the current card
      enlargedCard = img;
    } else {
      // change to null to state that no card is being enlarged
      enlargedCard = null;
    }
  });
  // add the img to the card container
  cardContainer.appendChild(img);
});