import { dealerScoreIncrease } from "./scoreIncrease.js";
import { score } from "./deck.js";
import { shuffledDeck } from "./firstDeal.js";
import selectors from "./selectors.js";

function checkPlayerScore() {
  if (score.playerScore > 21) {
    selectors.scoreBoard.info.innerHTML = `You went over 21 points you lose.`;
    gameOverReset();
  } else if (score.playerScore === 21) {
    selectors.scoreBoard.info.innerHTML = `You have 21 points you win.`;
    gameOverReset();
  } else {
    selectors.scoreBoard.info.innerHTML = `You have ${score.playerScore} points hit to get closer or hold.`;
  }
}

function checkDealerScore() {
  while (score.dealerScore < 17) {
    const current = shuffledDeck.shift();
    dealerScoreIncrease(current);
    const dealerCard = document.createElement("img");
    dealerCard.src = `images/card-deck-svg/${current.suit}.svg`;
    dealerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
    dealerCard.className = "playing-card";
    selectors.cards.dealer.appendChild(dealerCard);
  }

  if (score.dealerScore > 21) {
    selectors.scoreBoard.info.innerHTML = `Dealer went over 21, you win with ${score.playerScore} points`;
  } else if (score.playerScore >= score.dealerScore) {
    selectors.scoreBoard.info.innerHTML = `You won, you scored ${
      score.playerScore - score.dealerScore
    } more than the dealer.`;
  } else {
    selectors.scoreBoard.info.innerHTML = `You lost, the dealer scored ${
      score.dealerScore - score.playerScore
    } more than the you.`;
  }
  gameOverReset();
}

function gameOverReset() {
  // show dealers cards and score
  // show dealers first card
  const dealerCardBg = document.querySelector(".firstDealerCardBg");
  dealerCardBg.className = "playing-card firstDealerCardBg none";
  const dealerCard = document.querySelector(".firstDealerCard");
  dealerCard.className = "playing-card firstDealerCard";
  // disable hit / hold
  selectors.scoreBoard.dealer.hidden = false;
  selectors.btn.hit.disabled = !selectors.btn.hit.disabled;
  selectors.btn.hold.disabled = !selectors.btn.hold.disabled;
  // Reload page so new game can be played
  setTimeout(() => {
    location.reload();
  }, 6_000);
}

export { checkPlayerScore, checkDealerScore };
