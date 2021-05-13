import React from 'react'
import s from './Projects.module.scss'
import Project from "./Project";
import Title from "../Title/Title";
import todolistImage from '../common/images/todolist.png'
import socNetImage from '../common/images/social_network1.jpg'

function Projects() {

    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const socnet = {
        backgroundImage: `url(${socNetImage})`
    }
    return (
        <div id={'Projects'} className={s.projects}>
            <div className={s.container}>
                <Title title={'PROJECTS'}/>
                <div className={s.projectsItems}>
                    <Project title={'Todolist'}
                             style={todolist}
                             link={'https://highhack.github.io/TodoLIst/'}
                             description={'Todolist application will help you plan your day easley. ' +
                             'The app was created in react js and written using typescript.'}/>
                    <Project title={'Social Network'}
                             style={socnet}
                             link={'https://highhack.github.io/Grain-TP/'}
                             description={'Right now i am creating social networking app in React js using typescript.'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;