import  React from 'react'
import s from './Nav.module.scss'
import { Link } from "react-scroll";


function Nav() {

    return (
        <div className={s.nav}>
            <Link to="Main"
                  className={s.link}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Main</Link>
            <Link to="Skills"
                  className={s.link}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Skills</Link>
            <Link to="Projects"
                  className={s.link}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Projects</Link>
            <Link to="Contacts"
                  className={s.link}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>Contacts</Link>
        </div>

    )

    // return (
    //     <div className={s.nav}>
    //        <a className={s.link} href=''>Main</a>
    //        <a className={s.link} href=''>Skills</a>
    //        <a className={s.link} href=''>Projects</a>
    //        <a className={s.link} href=''>Contacts</a>
    //     </div>
    // );
}

export default Nav;