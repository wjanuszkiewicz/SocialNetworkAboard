import React from 'react';
import Snc from './Header.module.css';
import Friends from "../Friends/Friends";

const Header = (props) => {
    return(
        <header className={Snc.header}>
            <a href="#" className ={Snc.logo__button}>
                 Aboard
            </a>

        </header>
    );
}
export default Header;