import React  from 'react'
import s from './Main.module.scss'
import webphotoeditor from '../common/images/ava1.jpg'
// import webphotoeditor2 from '../common/images/ava2.jpg'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'



const  Main = React.memo(() => {

    // const [light, setLight] = useState(false)
    // const [theme, setTheme] = useState('white')

// setTimeout(() => {
//         setLight(!light)
//        console.log('did')
//     }, 1000)


    // const particlesOptWhite = {
    //     'particles': {
    //         'number': {
    //             'value': 80,
    //             'density': {
    //                 'enable': true,
    //                 'value_area': 800
    //             }
    //         }
    //     }
    // }
    //
    // const particlesOptYello = {
    //     'particles': {
    //         "color": {
    //             "value": "#fec544"
    //         },
    //         "line_linked": {
    //             "color": "#fec544"
    //         },
    //         'number': {
    //             'value': 80,
    //             'density': {
    //                 'enable': true,
    //                 'value_area': 800
    //             }
    //         }
    //     }
    // }

    // let themeColor
    // if (theme === 'dark' ) themeColor= particlesOptWhite
    // else if (theme === 'white') themeColor= particlesOptYello


    return (
        <div id={'Main'} className={s.main}>
            <Particles className={s.particles}
                       // params={themeColor }
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
})

export default Main;