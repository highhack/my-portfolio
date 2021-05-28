import React from 'react'
import s from './Skill.module.scss'

function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.imgWithTitle}>
                <div className={s.icon}>
                    <img alt={''} className={s.imgSkill} src={props.img}/>
                </div>
                <h3 className={s.skillTitle}>{props.title}</h3>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Skill;