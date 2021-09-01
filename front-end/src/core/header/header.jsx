import React from 'react';
import Navbar from './../navbar/navbar';
import './../../assets/css/core/header.css';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.headerRef = React.createRef();
    }
  
    render() {
        
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            let header = document.getElementById('header');

            (scroll > 0 ? header.classList.add('active') : header.classList.remove('active'))
        });

        return ( 
            
            <header id="header" className="header active" ref={this.headerRef}>
                <Navbar />
            </header>
        );
    }
}

export default Header;