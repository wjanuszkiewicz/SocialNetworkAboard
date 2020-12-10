
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/reduxStore";


export let rerenderEntireTree = (state)=>{
 ReactDOM.render(
     <BrowserRouter>
      <App state = {state} store={store} />
     </BrowserRouter>,
     document.getElementById('root')
 );
}

 rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state =store.getState();
    rerenderEntireTree(state);
});
reportWebVitals();
