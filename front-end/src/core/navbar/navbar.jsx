import React from 'react';
import HamburguerMenu from './hamburguer';
import Logo from './../../assets/img/BLÁLOGO.png'
import './../../assets/css/core/navbar.css';
//const logo = require('./../../assets/img/BLÁLOGO.png');

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#javascript" className="logo">
                <img src={Logo} alt="BLA LOGO"></img>
            </a>
            <HamburguerMenu />
        </nav>
    );
}

export default Navbar;