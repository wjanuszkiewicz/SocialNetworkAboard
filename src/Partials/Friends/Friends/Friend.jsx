import React from 'react';
import Snc from './Friend.module.css';
import avatar1 from '../FriendImg/bg-mini-5.jpg';


const Friend = (props) => {

    return (
        <div className={Snc.friends}>
            <div className={Snc.friends_list}>
                <img src={avatar1} className={Snc.friends_avatar}></img>
                {props.friendsName}
            </div>
        </div>
    );

}

export default Friend;