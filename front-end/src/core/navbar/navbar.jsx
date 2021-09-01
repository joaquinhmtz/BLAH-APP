import React from 'react';
import HamburguerMenu from './hamburguer';
// import Logo from './../../../assets/img/BLÁLOGO.png'
import './../../assets/css/core/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <a href="javascript:void" className="logo">
                <img src=""></img>
            </a> */}
            <HamburguerMenu />
        </nav>
    );
}

export default Navbar;