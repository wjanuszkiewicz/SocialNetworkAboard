import React from 'react';
import Snc from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostElement={props.state} posts ={props.state}/>
        </div>
    );
}
export default Profile;