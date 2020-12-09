import React from 'react';
import './App.css';
import Header from './Partials/Header/Header';
import Navbar from './Partials/Navbar/Navbar';
import Profile from './Partials/Profile/Profile';
import Dialogs from "./Partials/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Partials/News/News";
import Settings from "./Partials/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header state={props.state}/>
                <div className="app_content">
                    <Route path={'/Profile'}
                           render={() => <Profile dispatch={props.dispatch} state={props.state.profilePage}/>}/>
                    <Route path={'/Dialogs'}
                           render={() => <Dialogs dispatch={props.dispatch} state={props.state.dialogPage}/>}/>
                    <Route path={'/News'} render={News}/>
                    <Route path={'/Settings'} render={Settings}/>
                </div>
                <Navbar/>
            </div>
        </BrowserRouter>
    );
}


export default App;