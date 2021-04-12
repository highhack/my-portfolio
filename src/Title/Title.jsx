import React from 'react'
import s from './Title.module.css'

const Title = (props) => {
    return <div className={s.titleContainer}>
        <div className={s.titles}>
            <h4 className={s.title}>{props.title}</h4>
            <h2 className={s.backTitle}>{props.title}</h2>
        </div>
        <div className={s.height}></div>
    </div>
}

export default Title