
import { score } from "./deck.js";
import selectors from "./selectors.js";
// one face up to player -- one face down to dealer
// one face up to player -- one face up to dealer
function firstDeal(shuffledDeck) {
  const arrayEnd = shuffledDeck.length - 1;
  for (let i = arrayEnd; i > arrayEnd - 4; i--) {
    let current = shuffledDeck[i];
    shuffledDeck.pop;
    if (i % 2) {
      score.playerScore = score.playerScore + current.value;
      selectors.scoreBoard.player.innerHTML = score.playerScore;
      // place card in html
    } else {
      if (i === 1) {
        //place dealer card with background on top
      }
      score.dealerScore = score.dealerScore + current.value;
      selectors.scoreBoard.dealer.innerHTML = score.dealerScore;
      // place dealer card faceup
    }
  }
}

export default firstDeal;

