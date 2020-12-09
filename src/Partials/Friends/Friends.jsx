import React from 'react';
import Snc from './Friends.module.css';
import Friend from "./Friends/Friend";


const Friends = (props) => {
    let friendElements = props.friends.friendList
        .map((friend) => <Friend name={friend.name}/>);

    return (
        <div className={Snc.friends_wrapper}>
            Friends
            {friendElements}
        </div>
    );

}

export default Friends;