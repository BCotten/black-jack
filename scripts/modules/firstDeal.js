import { deck } from "./deck.js";
import shuffleDeck from "./shuffleDeck.js";
import { dealerScoreIncrease, playerScoreIncrease } from "./scoreIncrease.js";
import selectors from "./selectors.js";
import { checkPlayerScore } from "./checkScore.js";

const shuffledDeck = shuffleDeck(deck);

function firstDeal() {
  // clear both the background cards
  selectors.cards.dealer.innerHTML = ``;
  selectors.cards.player.innerHTML = ``;
  // hide dealers score
  selectors.scoreBoard.dealer.hidden = true;
  const arrayEnd = shuffledDeck.length - 1;
  const secondCard = arrayEnd - 1;
  for (let i = arrayEnd; i > arrayEnd - 4; i--) {
    const current = shuffledDeck.shift();
    if (i % 2) {
      //players first and 2nd card score/placement
      playerScoreIncrease(current);
      const playerCard = document.createElement("img");
      playerCard.src = `images/card-deck-svg/${current.suit}.svg`;
      playerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
      playerCard.className = "playing-card";
      selectors.cards.player.appendChild(playerCard);
    } else {
      if (i === secondCard) {
        //place dealer card with background on top
        const dealerCardBg = document.createElement("img");
        dealerCardBg.src = "images/card-deck-svg/1B.svg";
        dealerCardBg.alt = "A black checkered background of a playing card";
        dealerCardBg.className = "playing-card firstDealerCardBg";
        //dealers first card currently display none till hold button clicked
        const dealerCard = document.createElement("img");
        dealerCard.src = `images/card-deck-svg/${current.suit}.svg`;
        dealerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
        dealerCard.className = "playing-card none firstDealerCard";
        selectors.cards.dealer.appendChild(dealerCardBg);
        selectors.cards.dealer.appendChild(dealerCard);
      }
      if (i === arrayEnd - 3) {
        //dealers 2nd card
        const secondDealerCard = document.createElement("img");
        secondDealerCard.src = `images/card-deck-svg/${current.suit}.svg`;
        secondDealerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
        secondDealerCard.className = "playing-card";
        selectors.cards.dealer.appendChild(secondDealerCard);
      }
      dealerScoreIncrease(current);
    }
  }
  checkPlayerScore();
}

export { shuffledDeck, firstDeal };
