import React from 'react';
import Method from './method';
import ImageMethod from './image-method';
import './../../../assets/css/methodology.css';

const Methodology = () => {
    return (
        <div className="container-methodology">
            <div className="methodology">
                <ImageMethod />
                <Method />
            </div>
        </div>
    );
}

export default Methodology;