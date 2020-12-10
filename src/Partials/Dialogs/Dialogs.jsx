import React from 'react';
import Snc from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../store";

const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogPage.messages
        .map((message) => <Message message={message.message}/>);

    let newMessageContent = React.createRef();

    let onUpdateNewMessage = () =>{
        let messageContent = newMessageContent.current.value;
        props.updateNewMessage(messageContent);
    }
    let onSendMessage = ()=>{
        props.sendMessage();
    }

    return (
        <div className={Snc.dialogs}>
            <div className={Snc.dialog_item}>
                {dialogElements}
            </div>
            <div className={Snc.messages}>
                <div>{messagesElements}</div>
                <textarea placeholder='Enter message' onChange={onUpdateNewMessage} ref={newMessageContent} value={props.dialogPage.newMessage}/>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;