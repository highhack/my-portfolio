import React from 'react'
import s from './Skills.module.css'
import Skill from "./Skill";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skillsItems}>
                    <Skill title={'JS'} description={'bla bla bla...................bla bla blabla bla bla blabla bla blabla bla blabla bla blabla blabla bla blabla bla bla'}/>
                    <Skill title={'React'} description={'bla bla bla..................bla bla blbla bla blabla bla blabla bla blabla bla blaabla bla blabla bla blabla bla bla.'}/>
                    <Skill title={'Redux'} description={'bla bla bla..................bla bla blabla bla bla blabla bla blabla bla blabla bla blabla blabla bla blabla bla bla.'}/>
                </div>
                </div>
        </div>
    );
}

export default Skills;