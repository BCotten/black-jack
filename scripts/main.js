console.log("Script Loading...");

import { score } from "./modules/deck.js";
import selectors from "./modules/selectors.js";
import { shuffledDeck, firstDeal } from "./modules/firstDeal.js";
import { playerHit, playerHold } from "./modules/playerButtons.js";

startGame();

function startGame() {
  selectors.btn.start.addEventListener("click", () => {

    // Initial functions
    firstDeal();
    firstBoardReset();

    //Player Event functions
    playerHit();
    // if player goes over 21 show statement that they lost and show dealers cards and score else they will hit hold and other factors will be decided after that
    playerHold();
    // if player wins display that in info section or if dealer won display that and point difference between the players.
    // after x seconds show enable reset game button and replace end game message with initial game message of Press reset game button to play again!

    // testing don`t need
    console.log("3: ");
    console.log(shuffledDeck);
    console.log(score.playerScore);
    console.log(score.dealerScore);
    // testing don`t need
  });
}

function firstBoardReset() {
  selectors.btn.hit.disabled = !selectors.btn.hit.disabled
  selectors.btn.hold.disabled = !selectors.btn.hold.disabled
  selectors.btn.start.disabled = true;
  selectors.btn.start.innerHTML = "Reset";
  selectors.scoreBoard.info.innerHTML = "Press hit to get another card or hold when satisfied with current points";
}
