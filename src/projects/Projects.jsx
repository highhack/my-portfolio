import React from 'react'
import s from './Projects.module.scss'
import Project from "./Project";
import Title from "../Title/Title";
import todolistImage from '../common/images/todolist.png'
import cardsImage from '../common/images/tinycards.png'
import rickAndMortyImage from '../common/images/rick-and-morty.jpg'
import weather from './../common/images/weather.png'
import socNetImage from '../common/images/social_network1.jpg'
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
    const weather1 = {
        backgroundImage: `url(${weather})`
    }

    return (
        // <Bounce left cascade>
        <div id={'Projects'} className={s.projects}>
            <div className={s.container}>
                <Title title={'PROJECTS'}/>
                <Bounce left cascade className={s.projectsItems}>
                    <Project title={'Todolist'}
                             style={todolist}
                             codeLink={'https://github.com/highhack/Todolist'}
                             link={'https://highhack.github.io/Todolist/'}
                             description={'Todolist application will help you plan your day easley. ' +
                             'The app was created in react js and written using typescript.'}/>
                    <Project title={'Learning Cards'}
                             style={cards}
                             codeLink={'https://github.com/highhack/newCards'}
                             link={'https://highhack.github.io/newCards/'}
                             description={'The app makes it easy to learn any subject. You can fill in the questions ' +
                             'and answers and then repeat them every day.'}/>
                    <Project title={'Rick and Morty'}
                             style={rickAndMorty}
                             codeLink={'https://github.com/highhack/Rick-and-Morty'}
                             link={'https://highhack.github.io/Rick-and-Morty/'}
                             description={'Application with full information about episodes and characters ' +
                             'of the movie "Rick and Morty" '}/>
                    <Project title={'Weather'}
                             style={weather1}
                             codeLink={'https://github.com/highhack/Weather'}
                             link={'https://highhack.github.io/Weather'}
                             description={'All weather data. Search in all cities of the world.'}/>
                    <Project title={'Social Network'}
                             style={socnet}
                             codeLink={'https://github.com/highhack/Grain-TP'}
                             link={'https://highhack.github.io/Grain-TP/'}
                             description={'Right now i am creating social networking app in React js using typescript.'}/>

                </Bounce>
            </div>
        </div>
    );
}

export default Projects;