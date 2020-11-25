import React from 'react';
import NavbarClasses from './Navbar.module.css';
import NewsSvg from './icons/news.svg';
import MessageSvg from './icons/email.svg';
import ProfileSvg from './icons/Profile.svg';
import SettingsSvg from './icons/settings.svg';
import Profile from '../Profile/Profile';


const Navbar = () => {
    return(
        <nav className={NavbarClasses.app_nav}>
             <div className={NavbarClasses.app_nav__item}>
                 <a href="#" className={NavbarClasses.app_nav__button}>
                 <img src={ProfileSvg} className={NavbarClasses.nav_icons}></img>
                     Profile
                 </a>
             </div>
             <div className={NavbarClasses.app_nav__item}>
                 <a href="#" className={NavbarClasses.app_nav__button}>
                 <img src={MessageSvg} className={NavbarClasses.nav_icons}></img>
                     Messages
                 </a>
             </div>
             <div className={NavbarClasses.app_nav__item}>
                 <a href="#" className={NavbarClasses.app_nav__button}>
                 <img src={NewsSvg} className={NavbarClasses.nav_icons}></img>
                     News
                 </a>
             </div>
             <div className={NavbarClasses.app_nav__item}>
                 <a href="#" className={NavbarClasses.app_nav__button}>
                 <img src={SettingsSvg} className={NavbarClasses.nav_icons}></img>
                     Settings
                 </a>
             </div>
        </nav>
    );
}
export default Navbar;