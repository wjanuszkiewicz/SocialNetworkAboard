import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        profilePage:state.profilePage,
        newPostTextElement: state.profilePage.newPostTextElement
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        addNewPost:()=>{
            dispatch(addPostActionCreator());
        },
        updatePostChange: (postContent)=>{
            dispatch(onPostChangeActionCreator(postContent));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;