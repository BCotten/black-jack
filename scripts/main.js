console.log("Script Loading...");

import { deck, score } from "./modules/deck.js";
import selectors from "./modules/selectors.js";
import shuffleDeck from "./modules/shuffleDeck.js";
import firstDeal from "./modules/firstDeal.js";



// class for the cards shuffle and place
//function to take card svg and make a array with black jack card value and the svg file path

//function to shuffle the cards and put in to shuffled array

// testing don`t need
for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

console.log(deck[22].suit, deck[22].value);
console.log(deck.length);

const shuffledDeck = shuffleDeck(deck);
console.log(shuffledDeck);

firstDeal(shuffledDeck);
console.log(score.playerScore);
console.log(score.dealerScore);
// testing don`t need

function playerHit(shuffledDeck) {
  // allow play to hit until at 21 (they won) or over 21 (they lost) or they hold
}

function checkScore(boolean) {
  // if player... if true
  // if dealer... if false
}

// class for the player information name, card backing{s}

// game class for the main game play track score, check score

// needs function to check score
// player gets two cards then current score should be shown with option to hold or get a card
// over 21 automatic loss
// Ace worth 1 or 11 Auto worth 1 if hand over 21
// king queen jack worth 10
// 2 to 10 worth their card number
