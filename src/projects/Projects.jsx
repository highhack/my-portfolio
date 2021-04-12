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
        <div className={s.projects}>
            <div className={s.container}>
                <Title title={'PROJECTS'}/>
                <div className={s.projectsItems}>
                    <Project title={'Todolist'}
                             style={todolist}
                             link={'https://highhack.github.io/TodoLIst/'}
                             description={'bla bla bla...................bla blabla bla blabla bla blabla bla blabla bla bla blabla bla blavvbla bla blabla bla bla'}/>
                    <Project title={'Social Network'}
                             style={socnet}
                             link={'https://highhack.github.io/Grain-TP/'}
                             description={'bla bla bla..............bla bla blabla bla blabla bla blabla bla bla.....bla bla blabla bla blabla bla blabla bla blabla bla bla'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;