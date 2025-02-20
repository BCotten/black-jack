const selectors = {
  btn: {
    start: document.querySelector(".startBtn"),
    hit: document.querySelector(".hitBtn"),
    hold: document.querySelector(".holdBtn"),
  },
  scoreBoard: {
    player: document.querySelector(".playerScore"),
    dealer: document.querySelector(".dealerScore"),
    info: document.querySelector(".info"),
  },
  cards: {
    player: document.querySelector(".player-cards"),
    dealer: document.querySelector(".dealer-cards"),
  }
};

export default selectors;
