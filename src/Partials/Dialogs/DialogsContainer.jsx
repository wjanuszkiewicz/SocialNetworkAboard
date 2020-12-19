import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessage: (messageContent)=>{
            dispatch(updateMessageActionCreator(messageContent));
        },
        sendMessage: ()=>{
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;