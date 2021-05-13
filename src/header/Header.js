import React from 'react'
import s from './Header.module.css'
import Nav from './../nav/Nav'
import BurgerNav from "../burger/BurgerNav";

function Header() {
    return (
        <div className={s.header}>
            <BurgerNav/>
            <Nav/>
        </div>
    );
}

export default Header;