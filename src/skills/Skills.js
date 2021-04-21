import React from 'react'
import s from './Skills.module.css'
import Skill from "./Skill";
import Title from "../Title/Title";
import js from '../common/icons/icons8-javascript-100.png'
import reactjs from '../common/icons/icons8-react-native-100.png'
import reduxjs from '../common/icons/icons8-redux-100.png'

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <Title title={'SKILLS'} />
                <div className={s.skillsItems}>
                    <Skill title={'JS'}
                           img={js}
                           description={'I am working with css and javascript frameworks.' +
                           ' Debugging, testing, analyzing and removing errors'}/>
                    <Skill title={'React'}
                           img={reactjs}
                           description={
                               'React helps me create an application quickly and easily.' +
                           ' Working with higher order functions and callback functions. ' +
                           'Replacing application code with hooks'}/>
                    <Skill title={'Redux'}
                           img={reduxjs}
                           description={'I have a confident understanding of redux for creating large projects'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;