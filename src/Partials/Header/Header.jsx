import React from 'react';
import HeaderClasses from './Header.module.css';

const Header = () => {
    return(
        <header className={HeaderClasses.header}>
            <a href="#" className ={HeaderClasses.logo__button}>
                 Aboard
            </a>
        </header>
    );
}
export default Header;