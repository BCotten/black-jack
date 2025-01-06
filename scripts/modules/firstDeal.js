import { deck } from "./deck.js";
import shuffleDeck from "./shuffleDeck.js";
import { dealerScoreIncrease, playerScoreIncrease } from "./scoreIncrease.js";
import selectors from "./selectors.js";

const shuffledDeck = shuffleDeck(deck);

function firstDeal() {
  selectors.cards.dealer.innerHTML = ``;
  selectors.cards.player.innerHTML = ``;
  selectors.scoreBoard.dealer.hidden = true;
  const arrayEnd = shuffledDeck.length - 1;
  const secondCard = arrayEnd - 1;
  for (let i = arrayEnd; i > arrayEnd - 4; i--) {
    const current = shuffledDeck.shift();
    console.log(`${i}: `);
    console.log({ current });
    if (i % 2) {
      //players first and 2nd card score/placement
      playerScoreIncrease(current);
      const playerCard = document.createElement("img");
      playerCard.src = `images/card-deck-svg/${current.suit}.svg`;
      playerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
      playerCard.className = "playing-card";
      selectors.cards.player.appendChild(playerCard);
      // place card in html
    } else {
      console.log("HELLO ELSE");
      if (i === secondCard) {
        console.log("HELLO SECOND CARD");
        console.log({ arrayEnd });
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
        console.log("END OF ARRAY");
        const secondDealerCard = document.createElement("img");
        secondDealerCard.src = `images/card-deck-svg/${current.suit}.svg`;
        secondDealerCard.alt = `A playing card with suit number of ${current.suit} and a value of ${current.value}`;
        secondDealerCard.className = "playing-card";
        selectors.cards.dealer.appendChild(secondDealerCard);
      }
      dealerScoreIncrease(current);
    }
  }
}

export { shuffledDeck, firstDeal };
