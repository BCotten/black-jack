

import { playerScoreIncrease } from "./scoreIncrease.js";
import { checkPlayerScore, checkDealerScore } from "./checkScore.js";
import selectors from "./selectors.js";
import { shuffledDeck } from "./firstDeal.js";
import { score } from "./deck.js";

function playerHit() {
  selectors.btn.hit.addEventListener("click", () => {
    let current = shuffledDeck.shift();
    console.log({ current });
    playerScoreIncrease(current);
    console.log(score.playerScore);
    const message = checkPlayerScore();
    console.log(message);
  });
}

function playerHold() {
  selectors.btn.hold.addEventListener("click", () => {
    const message = checkDealerScore();
    console.log(message);
  });
}

export { playerHit, playerHold };
