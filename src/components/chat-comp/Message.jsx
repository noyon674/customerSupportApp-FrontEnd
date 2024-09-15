import React from 'react';
import './message.scss'

function NewMessage({text}) {
  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes()
  const day = weekday[date.getDay()];

  console.log(new Date())
  return (
    <div className='msg-box'>
      <span>{`${day} ${hour}:${min}`}</span><p className='message'>{text}</p>
    </div>
  )
}

export default NewMessage