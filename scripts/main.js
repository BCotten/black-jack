console.log("Script Loading...");

import selectors from "./modules/selectors.js";
import { firstDeal } from "./modules/firstDeal.js";
import { playerHit, playerHold } from "./modules/playerButtons.js";

startGame();

function startGame() {
  selectors.btn.start.addEventListener("click", () => {
    firstDeal();
    firstBoardReset();
    playerHit();
    playerHold();
  });
}

function firstBoardReset() {
  selectors.btn.hit.disabled = !selectors.btn.hit.disabled;
  selectors.btn.hold.disabled = !selectors.btn.hold.disabled;
  selectors.btn.start.disabled = true;
  selectors.scoreBoard.info.innerHTML =
    "Press hit to get another card or hold when satisfied with current points";
}
