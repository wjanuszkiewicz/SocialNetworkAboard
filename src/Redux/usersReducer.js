let FOLLOW='FOLLOW';
let UNFOLLOW='UNFOLLOW';
let SET_USERS='SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: "Arya Stark",
            status: "Winter Is Coming",
            location: {city: "Winterfell", country: 'Westeros'}
        },
        {
            id: 2,
            followed: false,
            fullName: "Daenerys Targaryen",
            status: "Fire and Blood",
            location: {city: "Dragonstone", country: 'Westeros'}
        },
        {
            id: 3,
            followed: false,
            fullName: "Gendry Baratheon",
            status: "Ours is the fury",
            location: {city: "Storm's End", country: 'Westeros'}
        },
        {
            id: 4,
            followed: false,
            fullName: "Lyanna Mormont",
            status: "Here we stand",
            location: {city: "Bear Island", country: 'Westeros'}
        },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>{
                    if (user.id === action.userId){
                        return {...user,followed:true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user =>{
                    if (user.id === action.userId){
                        return {...user,followed:false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;

    }
}


export const followAC=(userId)=>{
    return {type:FOLLOW, userId}
}

export const unFollowAC=(userId)=>{
    return {type:UNFOLLOW, userId}
}
export const setUsersAC=(users)=>{
    return {type:SET_USERS, users}
}

export default usersReducer;