import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC());
        },
        unfollow:(userId)=>{
            dispatch(unFollowAC());
        },
        setUsers:(users)=>{
            dispatch(setUsersAC());
        }
    }
}


const UsersContaner = connect(mapStateToProps,mapDispatchToProps)(Users);


export default UsersContaner;