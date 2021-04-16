import React from 'react'
import s from './Main.module.css'
import webphotoeditor from '../common/images/ava1.jpg'

function Main() {

    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    <span className={s.hello}>Hello, My name is</span>
                    <h1 className={s.myName}>German Goldin</h1>
                    <span className={s.iam}>I am</span>
                    <p className={s.frontDeveloper}>React Frontend Developer</p>
                </div>
                <div className={s.photo}>
                <img  src={webphotoeditor} />
                </div>
            </div>
        </div>
    );
}

export default Main;