const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Liza'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Vdim'},
        {id: 4, name: 'Vlad'},
    ],
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ],
    newMessage: ''
};


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage
            }
            let stateCopy= {...state};
            stateCopy.messages=[...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        case UPDATE_MESSAGE:
            let stateAnotherCopy= {...state};
            stateAnotherCopy.newMessage = action.newMessageText;
            return stateAnotherCopy;
        default:
            return state;

    }

}

export  const addMessageActionCreator = () =>{
    return {type:ADD_MESSAGE}
}
export const updateMessageActionCreator = (messageText) =>{
    return{type:UPDATE_MESSAGE, newMessageText:messageText}
}


export default dialogReducer;
