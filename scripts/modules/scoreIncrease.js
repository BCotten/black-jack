import { score } from "./deck.js";
import selectors from "./selectors.js";

function playerScoreIncrease(current) {
  if (current.value === 11 && score.playerScore > 10) {
    score.playerScore += 1;
  } else {
    score.playerScore = score.playerScore + current.value;
  }
  selectors.scoreBoard.player.innerHTML = score.playerScore;
}

function dealerScoreIncrease(current) {
  if (current.value === 11 && score.dealerScore > 10) {
    score.dealerScore += 1;
  } else {
    score.dealerScore = score.dealerScore + current.value;
  }
  selectors.scoreBoard.dealer.innerHTML = score.dealerScore;
}

export { playerScoreIncrease, dealerScoreIncrease };
