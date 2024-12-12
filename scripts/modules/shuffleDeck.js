function shuffleDeck(deck) {
  const shuffledDeck = [];
  let length = deck.length;

  while (length > 0) {
    const randomCard = Math.floor(Math.random() * length);
    let current = deck.splice(randomCard, 1)[0];
    shuffledDeck.push(current);
    length--;
  }
  return shuffledDeck;
}

export default shuffleDeck;
