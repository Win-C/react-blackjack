import { useState, useEffect } from 'react';

import { createDeck, getHandScore } from './blackjack';
import Hand from './Hand';
import Message from './Message';
import './Game.css';

/** Game Component
 *  
 *  Props:
 *  - 
 * 
 *  State:
 *  - 
 * 
 *  App -> Game -> Hand
 */
function Game() {
  const [deck, setDeck] = useState(() => createDeck());
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [msg, setMsg] = useState("");
  // console.debug("dealerHand = ", dealerHand);
  // console.debug("playerHand = ", playerHand);
  // console.debug("msg = ", msg);

  function startGame() {
    drawAndShowDealerCard();
    drawAndShowPlayerCard();
    drawAndShowPlayerCard();
  }

  function drawAndShowPlayerCard() {
    let card = deck.pop();
    setPlayerHand(hand => [...hand, card]);
    setDeck(deck);
  }

  function drawAndShowDealerCard() {
    let card = deck.pop();
    setDealerHand(hand => [...hand, card]);
    setDeck(deck);
  }

  function handleHit() {
    drawAndShowPlayerCard();
  }

  // TODO: Refactor code below - ideally show cards one at a time
  function handleStand() {
    let score = getHandScore(dealerHand);
    let newDealerCards = dealerHand.slice();
    while (score < 17) {
      let card = deck.pop();
      newDealerCards.push(card);
      score = getHandScore(newDealerCards);
    }

    setDealerHand(newDealerCards);
  }

  useEffect(function getScore() {
    let dealerSum = getHandScore(dealerHand);
    let playerSum = getHandScore(playerHand);

    if (dealerHand.length < 2) {
      if (playerSum === 21) setMsg("Player wins: " + playerSum);
      if (playerSum > 21) setMsg("Player busts: " + playerSum);
    } else {
      if (dealerSum > 21) {
        setMsg("Dealer busts");
      } else if (dealerSum > playerSum) {
        setMsg("Dealer wins");
      } else if (playerSum > dealerSum) {
        setMsg("Player wins");
      } else {
        setMsg("Tie");
      }
    }
  }, [dealerHand, playerHand])

  return (
    <div className="Game">
      {playerHand.length === 0
        ? <button id="start" onClick={startGame}>Start Game</button>
        : null}
      <Hand cards={dealerHand} />
      <Hand cards={playerHand} />
      {!msg && <p>
        <button id="hit" onClick={handleHit}>Hit</button>
        <button id="stand" onClick={handleStand}>Stand</button>
      </p>}
      {msg && <Message msg={msg} />}
    </div>
  )
}

export default Game;