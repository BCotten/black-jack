console.log("Script Loading...");

const deck = [
  [2, "2S"],
  [3, "3S"],
  [4, "4S"],
  [5, "5S"],
  [6, "6S"],
  [7, "7S"],
  [8, "8S"],
  [9, "9S"],
  [10, "TS"],
  [10, "JS"],
  [10, "QS"],
  [10, "KS"],
  [11, "AS"],
  [2, "2C"],
  [3, "3C"],
  [4, "4C"],
  [5, "5C"],
  [6, "6C"],
  [7, "7C"],
  [8, "8C"],
  [9, "9C"],
  [10, "TC"],
  [10, "JC"],
  [10, "QC"],
  [10, "KC"],
  [11, "AC"],
  [2, "2D"],
  [3, "3D"],
  [4, "4D"],
  [5, "5D"],
  [6, "6D"],
  [7, "7D"],
  [8, "8D"],
  [9, "9D"],
  [10, "TD"],
  [10, "JD"],
  [10, "QD"],
  [10, "KD"],
  [11, "AD"],
  [2, "2H"],
  [3, "3H"],
  [4, "4H"],
  [5, "5H"],
  [6, "6H"],
  [7, "7H"],
  [8, "8H"],
  [9, "9H"],
  [10, "TH"],
  [10, "JH"],
  [10, "QH"],
  [10, "KH"],
  [11, "AH"],
];

const deckObject = [
  { suit: "2H", value: 2 },
  { suit: "3H", value: 3 },
  { suit: "4H", value: 4 },
  { suit: "5H", value: 5 },
  { suit: "6H", value: 6 },
  { suit: "7H", value: 7 },
  { suit: "8H", value: 8 },
  { suit: "9H", value: 9 },
  { suit: "TH", value: 10 },
  { suit: "JH", value: 10 },
  { suit: "QH", value: 10 },
  { suit: "KH", value: 10 },
  { suit: "AH", value: 11 },

  { suit: "2D", value: 2 },
  { suit: "3D", value: 3 },
  { suit: "4D", value: 4 },
  { suit: "5D", value: 5 },
  { suit: "6D", value: 6 },
  { suit: "7D", value: 7 },
  { suit: "8D", value: 8 },
  { suit: "9D", value: 9 },
  { suit: "TD", value: 10 },
  { suit: "JD", value: 10 },
  { suit: "QD", value: 10 },
  { suit: "KD", value: 10 },
  { suit: "AD", value: 11 },

  { suit: "2C", value: 2 },
  { suit: "3C", value: 3 },
  { suit: "4C", value: 4 },
  { suit: "5C", value: 5 },
  { suit: "6C", value: 6 },
  { suit: "7C", value: 7 },
  { suit: "8C", value: 8 },
  { suit: "9C", value: 9 },
  { suit: "TC", value: 10 },
  { suit: "JC", value: 10 },
  { suit: "QC", value: 10 },
  { suit: "KC", value: 10 },
  { suit: "AC", value: 11 },

  { suit: "2S", value: 2 },
  { suit: "3S", value: 3 },
  { suit: "4S", value: 4 },
  { suit: "5S", value: 5 },
  { suit: "6S", value: 6 },
  { suit: "7S", value: 7 },
  { suit: "8S", value: 8 },
  { suit: "9S", value: 9 },
  { suit: "TS", value: 10 },
  { suit: "JS", value: 10 },
  { suit: "QS", value: 10 },
  { suit: "KS", value: 10 },
  { suit: "AS", value: 11 },
];

const startBtn = document.querySelector(".startBtn");
const hitBtn = document.querySelector(".hitBtn");
const holdBtn = document.querySelector(".holdBtn");
const aceBtn = document.querySelector(".aceBtn");

const playerScoreBoard = document.querySelector(".playerScore");
const dealerScoreBoard = document.querySelector(".dealerScore");

let playerScore = 0;
let dealerScore = 0;

// class for the cards shuffle and place
//function to take card svg and make a array with black jack card value and the svg file path

//function to shuffle the cards and put in to shuffled array

//
for (let i = 0; i < deckObject.length; i++) {
  console.log(deckObject[i]);
}

console.log(deckObject[22].suit, deckObject[22].value)

function shuffleDeck(deck) {
  const deckShuffled = {};
  const length = deck.length;

}

/* function shuffleDeck(deck) {
  const shuffledDeck = []; have insert arrays into this empty array;
  let length = deck.length - 1;
  let count = 0;

  while (0 <= length) {
    const randomCard = Math.floor(Math.random() * length + 1);
    let current = deck.splice(randomCard, 1);
    change this to input into array shuffledDeck.push(current);
    shuffledDeck.splice([count], 0, current);
    length--;
    count++;
  }
  return shuffledDeck;
} */

// one face up to player -- one face down to dealer
// one face up to player -- one face up to dealer
function firstDeal(shuffledDeck) {
  console.log(shuffledDeck);
  for (let i = 0; i < 4; i++) {
    const arrayEnd = shuffledDeck.length - 1;
    let current = shuffleDeck[arrayEnd];
    shuffleDeck.pop;
    if (i % 2) {
      playerScore = playerScore + current[0];
      // place card in html
    } else {
      if (i === 1) {
        //place dealer card with background on top
      }
      dealerScore = dealerScore + current[0];
      // place dealer card faceup
    }
  }
}

// class for the player information name, card backing{s}

// game class for the main game play track score, check score

// needs function to check score
// player gets two cards then current score should be shown with option to hold or get a card
// over 21 automatic loss
// Ace worth 1 or 11 Auto worth 1 if hand over 21
// king queen jack worth 10
// 2 to 10 worth their card number
