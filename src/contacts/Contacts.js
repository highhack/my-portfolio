import React from 'react'
import s from './Contacts.module.css'
import Footer from "../footer/Footer";

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h2 className={s.title}>Contact</h2>
                <form className={s.inputs}>
                    <input className={s.inputName} value={'Name'}/>
                    <input className={s.inputEmail} value={'Email'}/>
                    <textarea className={s.inputMassage} value={'Massage'}>
                    </textarea>
                </form>
                <div className={s.send}>Send</div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contacts;