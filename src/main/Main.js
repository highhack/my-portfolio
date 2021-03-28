import React from 'react'
import s from './Main.module.css'

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1 className={s.myName}>German Goldin</h1>
                    <p>React Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    Foto
                </div>
            </div>
        </div>
    );
}

export default Main;