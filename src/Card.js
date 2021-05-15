import './Card.css';

const IMG_BASE = "https://deckofcardsapi.com/static/img";

/** Card Component
 * 
 *  Props:
 *  - card is the text of the card value like "2C" for 2 of clubs
 * 
 *  Hand -> Card
 */
function Card({ card }){
  // console.log("Card component rendered");

  return (
      <img className="Card" src={`${IMG_BASE}/${card}.png`} alt={card} />
  )
}

export default Card;