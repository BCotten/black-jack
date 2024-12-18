
function shuffleDeck(deck) {
  const shuffledDeck = [...deck];

  shuffledDeck.sort(() => {
    return Math.random() + (Math.random()) - 1;
  });

  return shuffledDeck;
}

export default shuffleDeck;
