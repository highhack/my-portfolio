import React from 'react'
import s from './Projects.module.css'
import Project from "./Project";

function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projectsItems}>
                    <Project title={'Todolist'} description={'bla bla bla...................bla blabla bla blabla bla blabla bla blabla bla bla blabla bla blavvbla bla blabla bla bla'}/>
                    <Project title={'Social Network'} description={'bla bla bla..............bla bla blabla bla blabla bla blabla bla bla.....bla bla blabla bla blabla bla blabla bla blabla bla bla'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;