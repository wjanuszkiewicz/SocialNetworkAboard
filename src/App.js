import React from 'react';
import './App.css';
import Header from './Partials/Header/Header';
import Navbar from './Partials/Navbar/Navbar';
import Profile from './Partials/Profile/Profile';
import Dialogs from "./Partials/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Partials/News/News";
import Settings from "./Partials/Settings/Settings";
import DialogsContainer from "./Partials/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header state={props.state.friendsBar}/>
                <div className="app_content">
                    <Route path={'/Profile'}
                           render={() => <Profile store={props.store}/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <DialogsContainer store={props.store} />}/>
                    <Route path={'/News'} render={News}/>
                    <Route path={'/Settings'} render={Settings}/>
                </div>
                <Navbar/>
            </div>
        </BrowserRouter>
    );
}


export default App;