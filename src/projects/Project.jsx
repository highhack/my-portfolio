import React from 'react'
import s from './Project.module.scss'

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.img} style={props.style}>
                <a href={props.link} className={s.watch} rel="noreferrer" target="_blank">Site</a>
                <a href={props.codeLink} className={s.watch} rel="noreferrer" target="_blank">Code</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;