import React, {useEffect}  from 'react';
import s from './Main.module.scss';
import webphotoeditor from '../common/images/ava1.jpg';
import Particles from "react-tsparticles"
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';


const  Main = () => {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('tsparticles').childNodes[0].style.position = ''
        })
    })


    return (
        <div id={'Main'} className={s.main}>
            <Particles id="tsparticles"
                       className={s.particles}
                       options={{
                           fpsLimit: 50,
                           interactivity: {
                               events: {
                                   // onClick: {
                                   //     enable: true,
                                   //     mode: "push",
                                   // },
                                   onHover: {
                                       enable: true,
                                       mode: "repulse",
                                   },
                                   resize: false,
                               },
                               modes: {
                                   bubble: {
                                       distance: 500,
                                       duration: 5,
                                       opacity: 0.7,
                                       size: 10,
                                   },
                                   push: {
                                       quantity: 4,
                                   },
                                   repulse: {
                                       distance: 200,
                                       duration: 0.4,
                                   },
                               },
                           },
                           particles: {
                               color: {
                                   value: "#ffffff",
                               },
                               links: {
                                   color: "#ffffff",
                                   distance: 150,
                                   enable: true,
                                   opacity: 0.3,
                                   width: 1,
                               },
                               collisions: {
                                   enable: true,
                               },
                               move: {
                                   direction: "none",
                                   enable: true,
                                   outMode: "bounce",
                                   random: false,
                                   speed: 3,
                                   straight: false,
                               },
                               number: {
                                   density: {
                                       enable: true,
                                       area: 800,
                                   },
                                   value: 50,
                               },
                               opacity: {
                                   value: 0.5,
                               },
                               shape: {
                                   type: "circle",
                               },
                               size: {
                                   random: true,
                                   value: 2,
                               },
                           },
                           detectRetina: true,
                       }}
            />
            <div className={s.container}>
                <Fade bottom big cascade>
                <div className={s.text}>
                    <span className={s.hello}>Hello, My name is</span>
                    <h1 className={s.myName}>German Goldin</h1>
                    <span className={s.iam}>I am</span>
                    <div>
                        <ReactTypingEffect
                            className={s.frontDeveloper}
                            text={['React Frontend Developer']}
                        />
                    </div>
                </div>
                </Fade>

                    <Tilt options={{ max : 15 }}>
                    <div className={s.photo}>

                        <Fade right duration={5000}>
                            {/*{!light*/}
                            <img alt={''} className={s.myImage} src={webphotoeditor}/>
                            {/*:<img  alt={''} className={s.myImage} src={webphotoeditor2}/>}*/}
                        </Fade>
                    </div>
                    </Tilt>

            </div>
        </div>
    );
}

export default Main;