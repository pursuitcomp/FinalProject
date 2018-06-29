import React, { Component } from 'react';

class Message extends Component {



    render() {
        let chatType="chat friend"
        if(this.props.sms.author){
            chatType="chat self"
        }
        return (
            <div className={chatType}>
            <div className="user-photo"></div>
            <p className="chat-message">{this.props.sms.body}</p>
        </div>
        );
    }
}

export default Message;

