import React from 'react'
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h2 className={s.footerName}>German Goldin</h2>
                <div className={s.logos}>
                    <span className={s.socialLogo}></span>
                    <span className={s.socialLogo}></span>
                    <span className={s.socialLogo}></span>
                    <span className={s.socialLogo}></span>
                </div>
                <p>© 2021 All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;