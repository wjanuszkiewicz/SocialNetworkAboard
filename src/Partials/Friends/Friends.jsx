import React from 'react';
import Snc from './Friends.module.css';
import Friend from "./Friends/Friend";


const Friends = (props) => {
    let  friendsElementsName = props.friendsNames.yourFriends
        .map((friend)=><Friend friendsName={friend.name}/>);

    return (
        <div className={Snc.friends_wrapper}>
            Friends
            {friendsElementsName}
        </div>
    );

}

export default Friends;