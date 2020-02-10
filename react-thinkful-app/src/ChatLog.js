import React, { Component } from "react";
import cuid from 'cuid'

function ChatLog(props) {
  let userChat = props.message.map(val => {
    const event = props.users.find(participants => participants.id === val.participantsId)
    const message = {...val, ...event}
    message.id = cuid();
    return message;
  })
  return (
    <div className="Chat-Log" key={message.id}>
      <img src={messgae.avatar}></img>
      <h2>{message.name}</h2>
      <p>{message.message}</p>
      <p>{message.name} gave a {message.type}</p>
    </div>
  );
}

export default ChatLog;
