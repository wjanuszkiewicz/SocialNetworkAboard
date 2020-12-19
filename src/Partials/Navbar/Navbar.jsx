import React from 'react';
import Snc from './Navbar.module.css';
import NewsSvg from './icons/news.svg';
import MessageSvg from './icons/email.svg';
import ProfileSvg from './icons/Profile.svg';
import SettingsSvg from './icons/settings.svg';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return(
        <nav className={Snc.app_nav}>
             <div className={Snc.app_nav__item}>
                 <NavLink to="/Profile" activeClassName={Snc.active} className={Snc.app_nav__button}>
                 <img src={ProfileSvg} className={Snc.nav_icons}></img>
                     Profile
                 </NavLink>
             </div>
            <div className={Snc.app_nav__item}>
                <NavLink to="/Users" activeClassName={Snc.active} className={Snc.app_nav__button}>
                    <img src={ProfileSvg} className={Snc.nav_icons}></img>
                    Users
                </NavLink>
            </div>
             <div className={Snc.app_nav__item}>
                 <NavLink to="/Dialogs" activeClassName={Snc.active} className={Snc.app_nav__button}>
                 <img src={MessageSvg} className={Snc.nav_icons}></img>
                     Messages
                 </NavLink>
             </div>
             <div className={Snc.app_nav__item}>
                 <NavLink to="/News" activeClassName={Snc.active} className={Snc.app_nav__button}>
                 <img src={NewsSvg} className={Snc.nav_icons}></img>
                     News
                 </NavLink>
             </div>
             <div className={Snc.app_nav__item}>
                 <NavLink to="/Settings" activeClassName={Snc.active} className={Snc.app_nav__button}>
                 <img src={SettingsSvg} className={Snc.nav_icons}></img>
                     Settings
                 </NavLink>
             </div>
        </nav>
    );
}
export default Navbar;