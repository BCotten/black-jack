import { dealerScoreIncrease } from "./scoreIncrease.js";
import { score } from "./deck.js";

function checkPlayerScore() {
  if (score.playerScore > 21) {
    return `You went over 21 points you lose.`;
  } else if (score.playerScore === 21) {
    return `You have 21 points you win.`;
  } else {
    return `You have less than 21 points hit to get closer or hold.`;
  }
}

function checkDealerScore() {
  while (score.dealerScore < 17) {
    const current = shuffledDeck.shift();
    console.log({ current });
    dealerScoreIncrease(current);
    console.log(score.dealerScore);
  }

  if (score.dealerScore > 21) {
    return `Dealer went over 21, you win with ${score.playerScore} points`;
  }
  if (score.playerScore >= score.dealerScore) {
    return `You won, you scored ${
      score.playerScore - score.dealerScore
    } more than the dealer.`;
  } else {
    return `You lost, the dealer scored ${
      score.dealerScore - score.playerScore
    } more than the you.`;
  }
}

export { checkPlayerScore, checkDealerScore };
