import React from 'react';
import styled from 'styled-components';
import './../../../assets/css/navbar.css';
import opt1 from './../../../assets/img/BLÁICON-07.png';
import opt2 from './../../../assets/img/BLÁICON2-14.png';
import opt3 from './../../../assets/img/BLÁICON6-06.png';

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
                        <div className="container-circle"><img src={opt3} alt="" /> <span>opcion uno</span></div>
                    </div>
                </div>
                <a href="#">opcion uno</a>
            </li>
            <li>
                <div className="menu-opt">
                    <div className="container-circle-main">
                        <div className="container-circle"><img src={opt2} alt="" /> <span>opcion dos</span></div>
                    </div>
                </div>
                <a href="#">opcion dos</a>
            </li>
            <li>
                <div className="menu-opt">
                    <div className="container-circle-main">
                        <div className="container-circle"><img src={opt1} alt="" /> <span>opcion tres</span></div>
                    </div>
                </div>
                <a href="#">opcion tres</a>
            </li>
        </Ul>
    );
};

export default Menu;