const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';


let initialState = {
        postsAll: [
            {id: 1, message: 'Hi, how are u?'},
            {id: 2, message: 'Its my first post'}
        ],
        newPostTextElement: '',
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostTextElement
            }
            let stateCopy={...state};
            stateCopy.postsAll=[...state.postsAll];
            stateCopy.postsAll.push(newPost);
            stateCopy.newPostTextElement = '';
            return stateCopy;
        case UPDATE_POST:
            let newState={...state};
            newState.newPostTextElement = action.newPostTextElement;
            return newState;

        default:
            return state;

    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST }
}
export const onPostChangeActionCreator = (postContent) => {
    return {type: UPDATE_POST, newPostTextElement: postContent}
}

export default profileReducer;