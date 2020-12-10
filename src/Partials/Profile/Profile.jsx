import React from 'react';
import Snc from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostscContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}
export default Profile;