import React from 'react';
import './App.css';
import Header from './Partials/Header/Header';
import Navbar from './Partials/Navbar/Navbar';
import Profile from './Partials/Profile/Profile';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="user__wrapper">
      <Navbar />
      <Profile />
      </div>
      
    </div>
  );
}


export default App;