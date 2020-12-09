import React from 'react';
import Snc from './Post.module.css';

const Post = (props)=>{
return(
    <div className="s">
        {props.message}
    </div>
);
}


export default Post;