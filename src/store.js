import profileReducer from "./Redux/profileReducer";
import dialogReducer from "./Redux/dialogsReducer";
import friendReducer from "./Redux/friendReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?'},
                {id: 2, message: 'Its my first post'}
            ],
            newPostElement: ''
        },
        dialogPage: {
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
        },
        friends: {
            friendList: [
                {name: 'Liza'},
                {name: 'Dima'},
                {name: 'Vdim'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage , action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage , action);
        this._state.friends = friendReducer(this._state.friends , action);
        this.rerenderEntireTree(this._state);
    }
}


export  const addMessageActionCreator = () =>{
    return {type:ADD_MESSAGE}
}
export const updateMessageActionCreator = (messageText) =>{
    return{type:UPDATE_MESSAGE, newMessageText:messageText}
}
 export const addPostActionCreator = () => {
     return {type: ADD_POST }
}
 export const onPostChangeActionCreator = (postContent) => {
     return {type: UPDATE_POST, newPostContent: postContent}
}

export default store;