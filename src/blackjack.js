const SUITS = ['C', 'S', 'D', 'H'];
const RANK_TO_VALUES = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "0": 10,
  "J": 10,
  "Q": 10,
  "K": 10,
  "A": 11,
}

/** Create and return a new shuffled deck of 52 cards
 *  Returns an array of 52 items like ["2C", "AD", ...]
*/
function createDeck(){
  const deck = [];

  for (let suit of SUITS){
    for (let rank of Object.keys(RANK_TO_VALUES)){
      deck.push(rank+suit);
    }
  }

  return _shuffleDeck(deck);
}

/** Shuffle array in-place and return shuffled array */
function _shuffleDeck(deck){
  for(let i = deck.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * i);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
}

/** Calculate and return the score for a given hand like ["2C", "AC"] */
function getHandScore(cards){
  let score = 0;
  let numAces = 0;

  for (let card of cards){
    const rank = card[0];
    score += RANK_TO_VALUES[rank];
    if (rank === "A") numAces++;
  }

  while (score > 21 && numAces > 0){
    score -= 10;
    numAces -= 1;
  }

  return score;
}

export {
  createDeck,
  getHandScore,
}