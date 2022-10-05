import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import simg1 from '../assets/splash/img1.png'
import simg2 from '../assets/splash/img2.png'
import simg3 from '../assets/splash/img3.png'
import simg4 from '../assets/splash/img4.png'
import simg5 from '../assets/splash/img5.jpg'

import './SplashPage.css'

function Splashpage() {

    return (
        <div id='splash-body'>
            {/* <img id='splash-image' src='https://www.brainscape.com/assets/cms/public-views/pages/landing/band-1/image-3.jpg' /> */}
            <Carousel
                width={"100%"}
                useKeyboardArrows={false}
                swipeable={false}
                stopOnHover={false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                // onChange="onChange"
                autoPlay={true}
                dynamicHeight={false}
                infiniteLoop={true}
                transitionTime={1000}
                interval={3000}

                // style={{ position: "absolute" }}
            >
                <div className='splash-image-container'>
                    <img src={simg1} />
                </div>
                <div className='splash-image-container'>
                    <img src={simg2} />
                </div>
                <div className='splash-image-container'>
                    <img src={simg3} />
                </div>
                <div className='splash-image-container'>
                    <img src={simg4} />
                </div>
                <div className='splash-image-container'>
                    <img src={simg5} />
                </div>
            </Carousel>

            <div id='splash-text'>
                <h1>Rise to your challenge.</h1>
                <h3>Flashcards for <span>serious learners</span></h3>
                {/* <p>The Leitner System employs the concept of spaced repetition, which is an approach to memorization that uses time intervals. Rather than cramming information into your brain all in one sitting, spaced repetition encourages learners to space out learning over periods of time. Under the Leitner System, learners dedicate different time periods to studying certain flashcards and concepts, based on the learner's own needs or preferences.</p> */}

                <footer id='splash-footer'>
                    <div id="splash-footer-header">DEV LINKS</div>
                    <div id="splash-dev-about-links">

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/efiii/">
                            <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/E-F-III/Brainscape-Clone">
                            <ion-icon size="large" name="logo-github"></ion-icon>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/edwardfelipeiii/">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>

                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Splashpage
