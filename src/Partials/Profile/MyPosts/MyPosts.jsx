import React from 'react';
import Snc from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";


const MyPosts = (props) => {
    let postsElements = props.posts.postsAll
        .map((post) => <Post message={post.message}/>);

    let newPostText = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let postContent = newPostText.current.value;
        props.dispatch(onPostChangeActionCreator(postContent))
    }


    return (
        <div className={Snc.profile_posts}>
            My Posts
            <div>
                <textarea onChange={onPostChange} ref={newPostText} value={props.newPostElement.newPostTextElement}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={Snc.posts_already}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;