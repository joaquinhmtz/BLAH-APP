import React from 'react';
import './../../../../assets/css/app.css';

const GridSeparator = ({ text1, text2 }) => {
    return (
        <div className="separator-grid-home">
            <div dangerouslySetInnerHTML={{__html: text1}}>
            </div>
            <div dangerouslySetInnerHTML={{__html: text2}}>
            </div>
        </div>
    );
}

export default GridSeparator;