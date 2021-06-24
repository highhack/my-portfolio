import React, {useState} from 'react'
import s from './Contacts.module.scss'
import Footer from "../footer/Footer";
import Title from "../Title/Title";
import axios from "axios";

function Contacts() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messageSend, setMessageSend] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState(false)

    const onChangeName = (e) => {
        setName(e.currentTarget.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessage = (e) => {
        setMessage(e.currentTarget.value)
    }
    const  hideError = () => {
        error === true && setError(false)
    }

    const sendMassage = () => {
        if (name === '' || email === '' || message === '') setError(true)
        else {
            setDisabled(true)
            // axios.post('http://localhost:3010/sendMassage', {name, email, message})
            axios.post('https://smtp-node-server-gg.herokuapp.com/sendMassage', {name, email, message})
                .then(res => {
                    setMessageSend(true)
                    setName('')
                    setEmail('')
                    setMessage('')
                    setDisabled(false)
                    setTimeout(() => setMessageSend(false), 4000)
                })
        }
    }

    return (
        <div id={'Contacts'} className={s.contacts} >
            <div className={s.container}>
                <Title title={'CONTACTS'}/>
                <form className={s.inputs}>
                    <input onChange={onChangeName} className={s.inputName} value={name} placeholder={'Name'}/>
                    <input onChange={onChangeEmail} className={s.inputEmail} value={email} placeholder={'Email'}/>
                    <textarea onChange={onChangeMessage} className={s.inputMassage} value={message}
                              placeholder={'Message'}>
                    </textarea>
                    {error
                    &&
                    <div className={s.error}>Please fill in the blank all fields</div>
                    }
                    {messageSend
                        ?
                        <div className={s.messageSend}>Message has been sent successfully</div>
                        : <div>{}</div>
                    }
                </form>
                <button type={"submit"} onClick={sendMassage} onBlur={hideError} disabled={disabled} className={s.send}>Send</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Contacts;