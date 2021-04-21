import React from 'react'
import s from './Footer.module.css'
import linkedin from './../common/icons/icons8-линкедин-100.png'
import github from './../common/icons/icons8-github-100.png'
import codewars from './../common/icons/codewars-512.png'
import facebook from './../common/icons/icons8-facebook-100.png'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h2 className={s.footerName}>German Goldin</h2>
                <div className={s.logos}>
                    <span className={s.socialLogo}>
                        <img src={linkedin}/>
                    </span>
                    <span className={s.socialLogo}>
                        <img src={github}/>
                    </span>
                    <span className={s.socialLogo}>
                        <img src={codewars}/>
                    </span>
                    <span className={s.socialLogo}>
                         <img src={facebook}/>
                    </span>
                </div>
                <p>© 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;