import React, {useState} from 'react';
import InputField from '../../common/InputField';
import { GrAttachment } from "react-icons/gr";
import {FiSend} from 'react-icons/fi'
import './chatbottom.scss';

function ChatBottom({onGettingText}) {
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e)=>{
    e.preventDefault();
    onGettingText(newMessage);
    setNewMessage('')
  };

  return (
    <div className='chat-bottom fixed-bottom'>
      <InputField
      type='text'
      name='message'
      placeholder='Type your message' 
      value={newMessage}
      onChange={(e)=>setNewMessage(e.target.value)}
      />
      <div className="icon" onClick={sendMessage}>
        <FiSend />
      </div>
      <div className="icon">
        <GrAttachment />
      </div>
    </div>
  )
}

export default ChatBottom