import { playerScoreIncrease } from "./scoreIncrease.js";
import { checkPlayerScore, checkDealerScore } from "./checkScore.js";
import selectors from "./selectors.js";
import { shuffledDeck } from "./firstDeal.js";


function playerHit() {
  selectors.btn.hit.addEventListener("click", () => {
    let current = shuffledDeck.shift();
    playerScoreIncrease(current);
    // show card on board
    const playerCard = document.createElement("img");
    playerCard.src = `images/card-deck-svg/${current.suit}.svg`;
    playerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
    playerCard.className = "playing-card";
    selectors.cards.player.appendChild(playerCard);
    checkPlayerScore();
  });
}

function playerHold() {
  selectors.btn.hold.addEventListener("click", () => {
    checkDealerScore();
    // show dealers first card
    const dealerCardBg = document.querySelector(".firstDealerCardBg")
    dealerCardBg.className = "playing-card firstDealerCardBg none";
    const dealerCard = document.querySelector(".firstDealerCard");
    dealerCard.className = "playing-card firstDealerCard"
    // show dealers score and disable hit / hold buttons
    selectors.scoreBoard.dealer.hidden = false;
    selectors.btn.hit.disabled = true;
    selectors.btn.hold.disabled = true;
  });
}

export { playerHit, playerHold };

