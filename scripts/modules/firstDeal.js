import { deck } from "./deck.js";
import shuffleDeck from "./shuffleDeck.js";
import { dealerScoreIncrease, playerScoreIncrease } from "./scoreIncrease.js";
import selectors from "./selectors.js";
// one face up to player -- one face down to dealer
// one face up to player -- one face up to dealer
const shuffledDeck = shuffleDeck(deck);

function firstDeal() {
  selectors.scoreBoard.dealer.hidden = true;
  const arrayEnd = shuffledDeck.length - 1;
  for (let i = arrayEnd; i > arrayEnd - 4; i--) {
    const current = shuffledDeck.shift();
    console.log(`${i}: `);
    console.log({ current });
    if (i % 2) {
      playerScoreIncrease(current);
      // place card in html
    } else {
      if (i === 1) {
        //place dealer card with background on top
      }
      dealerScoreIncrease(current);
      // place dealer card faceup
    }
  }
}

export { shuffledDeck, firstDeal };
