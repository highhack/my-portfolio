import React from 'react'
import s from './Contacts.module.scss'
import Footer from "../footer/Footer";
import Title from "../Title/Title";

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <Title title={'CONTACTS'}/>
                <form className={s.inputs}>
                    <input className={s.inputName} value={'Name'}/>
                    <input className={s.inputEmail} value={'Email'}/>
                    <textarea className={s.inputMassage} value={'Massage'}>
                    </textarea>
                </form>
                <button type={"submit"} className={s.send}>Send</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Contacts;