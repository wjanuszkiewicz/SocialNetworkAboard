import React from 'react';
import Snc from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../store";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages
        .map((message) => <Message message={message.message}/>);

    let newMessageContent = React.createRef();

    let updateNewMessage = () =>{
        let messageContent = newMessageContent.current.value;
        props.dispatch(updateMessageActionCreator(messageContent));
    }
    let sendMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div className={Snc.dialogs}>
            <div className={Snc.dialog_item}>
                {dialogElements}
            </div>
            <div className={Snc.messages}>
                <div>{messagesElements}</div>
                <textarea placeholder='Enter message' onChange={updateNewMessage} ref={newMessageContent} value={props.state.newMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;