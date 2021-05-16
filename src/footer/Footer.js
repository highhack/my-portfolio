import React from 'react'
import s from './Footer.module.scss'
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
                    <a className={s.socialLogo} href={'https://www.linkedin.com/in/german-goldin/'}>
                        <img alt={''} className={s.imgLink} src={linkedin} />
                    </a>
                    <a className={s.socialLogo} href={'https://github.com/highhack'}>
                        <img alt={''} className={s.imgLink} src={github}/>
                    </a>
                    <a className={s.socialLogo} href={'https://www.codewars.com/users/gerichjs'}>
                        <img alt={''} className={s.imgLink} src={codewars}/>
                    </a>
                    <a className={s.socialLogo} href={'https://www.facebook.com/german.go.39'}>
                         <img alt={''} className={s.imgLink} src={facebook}/>
                    </a>
                </div>
                <p className={s.allRightsReserved}>© 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;