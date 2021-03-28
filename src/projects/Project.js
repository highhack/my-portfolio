import React from 'react'
import s from './Project.module.css'

function Project(props) {
    return (
        <div className={s.project}>
            <span className={s.img}>
                <span className={s.watch}>Watch</span>
            </span>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;