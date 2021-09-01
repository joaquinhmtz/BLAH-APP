import React from 'react';
import styled from 'styled-components';
import './../../assets/css/core/navbar.css';
import opt1 from './../../assets/img/BLÁICON-07.png';
import opt2 from './../../assets/img/BLÁICON2-14.png';
import opt3 from './../../assets/img/BLÁICON6-06.png';

const Ul = styled.ul`
    @media (max-width: 768px) {
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
`;

const Menu = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <div className="menu-opt">
                    <div className="container-circle-main">
                        <div className="container-circle"><img src={opt3} alt="" /> <span>BLÁ</span></div>
                    </div>
                </div>
                <a href="/home">BLÁH</a>
            </li>
            <li>
                <div className="menu-opt">
                    <div className="container-circle-main">
                        <div className="container-circle"><img src={opt2} alt="" /> <span>SERVICIOS</span></div>
                    </div>
                </div>
                <a href="/home">SERVICIOS</a>
            </li>
            <li>
                <div className="menu-opt">
                    <div className="container-circle-main">
                        <div className="container-circle"><img src={opt1} alt="" /> <span>CONTACTO</span></div>
                    </div>
                </div>
                <a href="/home">CONTACTO</a>
            </li>
        </Ul>
    );
};

export default Menu;