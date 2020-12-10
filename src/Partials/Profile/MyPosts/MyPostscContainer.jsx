import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (postContent) => {
        props.store.dispatch(onPostChangeActionCreator(postContent))
    }


    return (
        <MyPosts newPostTextElement={state.profilePage.newPostTextElement} posts={state.profilePage} updatePostChange={onPostChange} addNewPost={addPost}/>
    );
}
export default MyPostsContainer;