import React from 'react';
import './../../assets/css/cursor.css';

const Cursor = () => {
    const script = document.createElement("script");
    script.src = "./../../assets/js/cursor.js";
    script.async = true;
    document.body.appendChild(script);

    return (
        <div className="cursor"></div>
    );
}

export default Cursor;