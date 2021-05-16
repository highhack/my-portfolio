import React from 'react'
import s from './Projects.module.scss'
import Project from "./Project";
import Title from "../Title/Title";
import todolistImage from '../common/images/todolist.png'
import socNetImage from '../common/images/social_network1.jpg'
import cardsImage from '../common/images/tinycards.png'
import rickAndMortyImage from '../common/images/rick-and-morty.jpg'
import Bounce from 'react-reveal/Bounce';

function Projects() {

    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const socnet = {
        backgroundImage: `url(${socNetImage})`
    }
    const cards = {
        backgroundImage: `url(${cardsImage})`
    }
    const rickAndMorty = {
        backgroundImage: `url(${rickAndMortyImage})`
    }
    return (
        // <Bounce left cascade>
        <div id={'Projects'} className={s.projects}>
            <div className={s.container}>
                <Title title={'PROJECTS'}/>
                <Bounce left cascade className={s.projectsItems}>
                    <Project title={'Todolist'}
                             style={todolist}
                             link={'https://highhack.github.io/TodoLIst/'}
                             description={'Todolist application will help you plan your day easley. ' +
                             'The app was created in react js and written using typescript.'}/>
                    <Project title={'Social Network'}
                             style={socnet}
                             link={'https://highhack.github.io/Grain-TP/'}
                             description={'Right now i am creating social networking app in React js using typescript.'}/>
                    <Project title={'Learning Cards'}
                             style={cards}
                             link={'https://highhack.github.io/newCards/'}
                             description={'The app makes it easy to learn any subject. You can fill in the questions ' +
                             'and answers and then repeat them every day.'}/>
                    <Project title={'Rick and Morty'}
                             style={rickAndMorty}
                             link={'https://highhack.github.io/Rick-and-Morty/'}
                             description={'Application with full information about episodes and characters ' +
                             'of the movie "Rick and Morty" '}/>

                </Bounce>
            </div>
        </div>
    );
}

export default Projects;