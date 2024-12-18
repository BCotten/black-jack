console.log("Script Loading...");

import { score } from "./modules/deck.js";
import selectors from "./modules/selectors.js";
import { shuffledDeck, firstDeal } from "./modules/firstDeal.js";
import { playerHit, playerHold } from "./modules/playerButtons.js";

startGame();

function startGame() {
  selectors.btn.start.addEventListener("click", () => {
    // on screen load hit / hold / ace options should be disabled
    // on click start game btn should be disabled and hit / hold options enabled
    // hide dealer score until player holds
    firstDeal();
    playerHit();
    playerHold();

    // testing don`t need
    console.log("3: ");
    console.log(shuffledDeck);
    console.log(score.playerScore);
    console.log(score.dealerScore);
    // testing don`t need
  });
}
