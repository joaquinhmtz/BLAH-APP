import React from 'react';
import './../../assets/css/animations.css';
import 'animate.css'

import happyEmoji from './../../assets/img/1F600.svg';
import smileEmoji from './../../assets/img/1F601.svg';
import laughEmoji from './../../assets/img/1F602.svg';

const Animation = () => {
    return (
        <div className="container-animation">
            {/* <div className="shape">
                <img className="emoji1" src={laughEmoji} alt="" />
                <img className="emoji2" src={smileEmoji} alt="" />
                <img className="emoji3" src={happyEmoji} alt="" />
            </div> */}
            <div className="shape-text">
                <p className="animate__animated animate__pulse animate__infinite">Cuéntanos tu idea</p>
                <p className="animate__animated animate__pulse animate__infinite">Y exagera...</p>
            </div>
        </div>
    );
}

export default Animation;