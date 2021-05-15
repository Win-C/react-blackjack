import Card from './Card';
import './Hand.css';

/** Hand Component
 * 
 *  Props:
 *  - cards is an array of cards like ["2C", "AH"]
 *  
 *  Game -> Hand -> Card
 */
function Hand({ cards }) {
  return (
    <div className="Hand">
      {cards.map(card =>
        <Card key={card} card={card} />
      )}
    </div>
  )
}

export default Hand;