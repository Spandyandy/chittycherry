import React, { Component } from 'react';
import './Chat.css';
import Messages from "../Components/Messages";
import Input from "../Components/Input";


function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Chat extends Component {
  state = {
    messages: [],
    member: {
      username: "Junghoo",
      color: randomColor(),
    }
  }

  render() {
    return (
      <div className="Chat">
        <div className="Chat-header">
          <h2>Chitty Cherry</h2>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    console.log("Sent");
  }

}

export default Chat;