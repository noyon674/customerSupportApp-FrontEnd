import React, {useState} from 'react'
import './chatbody.scss';
import ChatBottom from '../chat-bottom/ChatBottom';
import Message from '../Message';

const texts = ['Hi', 'How are you', 'Are you facing any problem?'];
function ChatBody() {

  const [message, setMessage] = useState(texts);
  const handleNewText = (newtext) =>{
    setMessage([...message, newtext]);
  }

  return (
    <div className='chat-body'>
      {
        message.map((text, index)=> <Message key={index} text={text}/>)
      }
      <ChatBottom onGettingText = {handleNewText}/>
    </div>
  )
}

export default ChatBody