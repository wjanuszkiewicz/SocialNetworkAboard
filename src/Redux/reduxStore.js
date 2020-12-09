import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendReducer from "./friendReducer";


let reducers = combineReducers({
   profilePage : profileReducer,
   dialogPage: dialogsReducer,
    friends: friendReducer
});

let store = createStore(reducers);


export default store;