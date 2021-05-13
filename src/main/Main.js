import React from 'react'
import s from './Main.module.scss'
import webphotoeditor from '../common/images/ava1.jpg'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


function Main() {

    const particlesOpt = {
        'particles': {
            'number': {
                'value': 80,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            }
        }
    }

    return (
        <div id={'Main'} className={s.main}>
            <Particles className={s.particles} params={particlesOpt}/>
            <div className={s.container}>
                <Fade bottom big cascade>
                <div className={s.text}>
                    <span className={s.hello}>Hello, My name is</span>
                    <h1 className={s.myName}>German Goldin</h1>
                    <span className={s.iam}>I am</span>
                    <p>
                        <ReactTypingEffect
                            className={s.frontDeveloper}
                            text={['React Frontend Developer']}
                        />
                    </p>
                    {/*<p className={s.frontDeveloper}>React Frontend Developer</p>*/}
                </div>
                </Fade>

                    <Tilt className="Tilt" options={{ max : 15 }}>
                    <div className={s.photo}>

                        <Fade right duration={5000}>
                    <img className={s.myImage} src={webphotoeditor}/>
                        </Fade>
                    </div>
                    </Tilt>

            </div>
        </div>
    );
}

export default Main;