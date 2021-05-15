import './Message.css';

/** Message Component
 *  
 *  Props:
 *  - 
 *  
 *  Game -> Message
 */
function Message({ msg }){
  return (
    <div className="Message">
      {msg}
    </div>
  )
}

export default Message;