console.log("Script Loading...");

const deck = [
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

const score = {
  playerScore: 0,
  dealerScore: 0,
};

// class for the cards shuffle and place
//function to take card svg and make a array with black jack card value and the svg file path

//function to shuffle the cards and put in to shuffled array

//
for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

console.log(deck[22].suit, deck[22].value);
console.log(deck.length);

function shuffleDeck(deck) {
  const shuffledDeck = [];
  let length = deck.length;

  while (length > 0) {
    const randomCard = Math.floor(Math.random() * length);
    let current = deck.splice(randomCard, 1)[0];
    shuffledDeck.push(current);
    length--;
  }
  return shuffledDeck;
}

const shuffledDeck = shuffleDeck(deck);

console.log(shuffledDeck);

// one face up to player -- one face down to dealer
// one face up to player -- one face up to dealer
function firstDeal(shuffledDeck) {
  const arrayEnd = shuffledDeck.length - 1;
  for (let i = arrayEnd; i > arrayEnd - 4; i--) {
    let current = shuffledDeck[i];
    shuffledDeck.pop;
    if (i % 2) {
      score.playerScore = score.playerScore + current.value;
      playerScoreBoard.innerHTML = score.playerScore;
      // place card in html
    } else {
      if (i === 1) {
        //place dealer card with background on top
      }
      score.dealerScore = score.dealerScore + current.value;
      dealerScoreBoard.innerHTML = score.dealerScore;
      // place dealer card faceup
    }
  }
}

firstDeal(shuffledDeck);
console.log(score.playerScore);
console.log(score.dealerScore);

function playerHit(shuffledDeck) {
  // allow play to hit until at 21 (they won) or over 21 (they lost) or they hold
}

// class for the player information name, card backing{s}

// game class for the main game play track score, check score

// needs function to check score
// player gets two cards then current score should be shown with option to hold or get a card
// over 21 automatic loss
// Ace worth 1 or 11 Auto worth 1 if hand over 21
// king queen jack worth 10
// 2 to 10 worth their card number
