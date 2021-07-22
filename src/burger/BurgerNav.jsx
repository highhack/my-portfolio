import  React, {useState} from 'react'
import s from './BurgerNav.module.scss'
import { Link } from "react-scroll";


function BurgerNav() {

    const [openIsMenu, setOpenIsMenu] = useState(false)

    const onBurgerBtnClick = () => {
        setOpenIsMenu(!openIsMenu)
    }
    const onMenuBtnClick = () => {
        setOpenIsMenu(false)
    }

    return (
        <div className={s.burgerNav}>
            <div className={s.burger} onClick={onBurgerBtnClick}>
                <div className={s.first}></div>
                <div className={s.second}></div>
                <div className={s.third}></div>
            </div>
            <div className={openIsMenu ?  s.links : s.notShowMenu}>
            {/*<div className={openIsMenu ?  `${s.links} + ${s.notShowMenu} `: s.links}>*/}
                <Link onClick={onMenuBtnClick}
                      to="Main"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>Main</Link>
                <Link onClick={onMenuBtnClick}
                      to="Skills"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>Skills</Link>
                <Link onClick={onMenuBtnClick}
                      to="Projects"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>Projects</Link>
                <Link onClick={onMenuBtnClick}
                      to="Contacts"
                      className={s.link}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>Contacts</Link>
            </div>
        </div>

    )
}

export default BurgerNav;