import React, {useState} from 'react'
import s from './Contacts.module.scss'
import Footer from "../footer/Footer";
import Title from "../Title/Title";

function Contacts() {

    const [name, setName] = useState('Name')
    const [email, setEmail] = useState('Email')
    const [message, setMessage] = useState('Message')

    const onChangeName = (e) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessage = (e) => {
        setMessage(e.currentTarget.value)
    }

    return (
        <div id={'Contacts'} className={s.contacts}>
            <div className={s.container}>
                <Title title={'CONTACTS'}/>
                <form className={s.inputs}>
                    <input onChange={onChangeName}  className={s.inputName} value={name}/>
                    <input onChange={onChangeEmail} className={s.inputEmail} value={email}/>
                    <textarea onChange={onChangeMessage} className={s.inputMassage} value={message}>
                    </textarea>
                </form>
                <button href={''} type={"submit"}  className={s.send}>Send</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Contacts;