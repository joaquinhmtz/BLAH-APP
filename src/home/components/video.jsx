import React from 'react';
import { Player } from 'video-react';
import BlahVideo from './../../assets/img/video.mp4';

const Video = () => {
    return (
        <div className="container-video">
            <Player
                src={BlahVideo}
                autoPlay
            />
            <div className="video-content">
                <h3>Title video</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat incidunt exercitationem voluptatem molestiae tempora dicta, facere natus quidem sunt ducimus in consectetur fugit cupiditate perspiciatis voluptatibus? Accusamus, quas repellat?</p>
            </div>
        </div>
    );
}

export default Video;