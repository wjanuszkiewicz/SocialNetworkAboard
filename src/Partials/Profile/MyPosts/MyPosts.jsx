import React from 'react';
import Snc from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.postsAll
        .map((post) => <Post message={post.message}/>);

    let newPostText = React.createRef();


    let onAddPost = () => {
        props.addNewPost();
    }

    let onNewPostChange = () => {
        let postContent = newPostText.current.value;
        props.updatePostChange(postContent);
    }


    return (
        <div className={Snc.profile_posts}>
            My Posts
            <div>
                <textarea onChange={onNewPostChange} ref={newPostText} value={props.newPostTextElement}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={Snc.posts_already}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;