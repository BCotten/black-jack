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

console.log(deck);
/* deck[spot 0-51][0 -value] deck[spot 0-51][1 -cardType] */
console.log(deck[52])

function shuffleDeck(deck) {
  const shuffledDeck = [];
  let length = deck.length - 1;

  while (0 < length) {
    const randomCard = Math.floor(Math.random() * length + 1);
    console.log(randomCard);
    let current = deck.splice(randomCard, 1);
    console.log(current);
    shuffledDeck.push(current);
    length--;
  }
  return shuffledDeck;
}

const shuffledDeck = shuffleDeck(deck);


// class for the cards shuffle and place
//function to take card svg and make a array with black jack card value and the svg file path

//function to shuffle the cards and put in to shuffled array

//

// class for the player information name, card backing{s}

// game class for the main game play track score, check score

// needs function to check score
// player gets two cards then current score should be shown with option to hold or get a card
// over 21 automatic loss
// Ace worth 1 or 11 Auto worth 1 if hand over 21
// king queen jack worth 10
// 2 to 10 worth their card number
