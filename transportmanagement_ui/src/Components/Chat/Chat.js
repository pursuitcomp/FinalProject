
import '../Css/chat.css';
import React, { Component } from 'react';
import Axios from 'axios';
import Message from '../Message/Message'

class Chat extends Component {

    render() {
  
    return (
        <div className="chatbox">
            <div className="contacts">
                <div className="contactsTitle">Contacts</div>
                <div className="table-responsiv">
                    <ul className="contactList">

                        {this.props.listOfDrivers.map((user, index) =>
    <button className="contactRow" name='smsDriverNum' onClick={this.props.typeChangeHandler} value={user.phone} key={index} >
                             
                                {user.fname} {user.lname} <br />{user.phone}
                                </button>          
                        )}
                    </ul>
                </div>
            </div>
            <div className="chatSpace">
                <div className="chatlogs">

{this.props.tempMesseges.map((message, index) =>
    <Message key={index} sms={message}/>
                    // <div className="chat friend">
                    //     <div className="user-photo"></div>
                    //     <p className="chat-message">What's up, Brother ..!!</p>
                    // </div>
                  )}

                    {/* <div className="chat self">
                        <div className="user-photo"></div>
                        <p className="chat-message">What's up ..!!</p>
                    </div> */}
                    
                </div>
                <div className="chat-form">
                    <form className="chatform" onSubmit={this.props.sendSmsHandler}>
                        <input name="message" value={this.props.message} onChange={this.props.typeChangeHandler}/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
    }
}
export default Chat;