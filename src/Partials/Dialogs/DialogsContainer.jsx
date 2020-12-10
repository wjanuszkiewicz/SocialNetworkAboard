import React from 'react';
import Snc from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from "../../store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let updateNewMessage = (messageContent) =>{
        props.store.dispatch(updateMessageActionCreator(messageContent));
    }
    let sendMessage = ()=>{
        props.store.dispatch(addMessageActionCreator());
    }
    return (
        <Dialogs updateNewMessage={updateNewMessage} sendMessage={sendMessage} dialogPage={state.dialogPage}/>
    );
}

export default DialogsContainer;