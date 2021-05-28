import React from 'react'
import s from './Skills.module.scss'
import Skill from "./Skill";
import Title from "../Title/Title";
import js from '../common/icons/icons8-javascript-100.png'
import reactjs from '../common/icons/icons8-react-native-100.png'
import reduxjs from '../common/icons/icons8-redux-100.png'
import restApi from '../common/icons/rest-api-icon.png'
import materialIcon from '../common/icons/material-ui-pngrepo-com.png'
import typescriptIcon from '../common/icons/typescript.png'
import sassIcon from '../common/icons/sass.png'
import gitIcon from '../common/icons/git-branch-skill.png'
import storyBookIcon from '../common/icons/storybook.png'
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div id={'Skills'} className={s.skills}>
            <div className={s.container}>
                <Title title={'SKILLS'}/>
                <Fade bottom>
                    <div className={s.skillsItems}>
                        <Skill title={'JS'}
                               img={js}
                               description={'I am working with  JS and CSS frameworks.' +
                               ' Debugging, testing, analyzing and removing errors'}/>
                        <Skill title={'React'}
                               img={reactjs}
                               description={
                                   'React helps me create an application quickly and easily.' +
                                   ' Working with higher order functions and callback functions. ' +
                                   'Replacing application code with hooks'}/>
                        <Skill title={'Redux'}
                               img={reduxjs}
                               description={'I have a confident understanding of Redux for creating large projects'}/>
                        <Skill title={'Rest API'}
                               img={restApi}
                               description={'I am using Rest API to request data from server and get response'}/>
                        <Skill title={'Typescript'}
                               img={typescriptIcon}
                               description={'I mostly use TS instead of JS. It allows me to avoid' +
                               ' a lot of programming errors and speed up the development process.'}/>
                        <Skill title={'Git'}
                               img={gitIcon}
                               description={'Joint projects where I was part of the team were written via Git'}/>
                        <Skill title={'StoryBook'}
                               img={storyBookIcon}
                               description={'Makes it easier for me to test and allows me to debug' +
                               ' a component with different data.'}/>
                        <Skill title={'Sass'}
                               img={sassIcon}
                               description={'On large projects, I use SASS instead of CSS ' +
                               'to reduce the number of lines of code and development time.'}/>
                        <Skill title={'Material UI'}
                               img={materialIcon}
                               description={'Thanks to  Material UI in the React , I can quickly create a simply' +
                               ' and beautiful design.'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;