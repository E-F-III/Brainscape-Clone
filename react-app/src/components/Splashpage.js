import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

                style={{position: "relative"}}
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
                <h3>Flaskcards for <span>serious learners</span></h3>
            </div>
        </div>
    )
}

export default Splashpage
