import React from 'react';
import HamburguerMenu from './hamburguer';
import Logo from './../../../assets/img/BLÁLOGO.png'
import './../../../assets/css/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <img src={Logo}></img>
            </a>
            <HamburguerMenu />
        </nav>
    );
}

export default Navbar;