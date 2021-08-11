import React, { useState }  from 'react';
import Menu from './menu';
import styled from 'styled-components';
import './../../../assets/css/navbar.css';

const StyleIcon = styled.div `
    div {
        width: 25px;
        height: 3px;
        margin: 5px 0;
        transform-origin: 1px;
        transition: all 0.3s linear;

        background-color : ${({open}) => open ? '#ccc' : '#333' };

        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)' }
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${({open}) => open ? 0 : 1 };
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)' }
        }
    }
`;

const HamburguerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="hamburguer">
                <StyleIcon open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyleIcon>
            </div>
            <Menu open={open}/>
        </>
    );
}

export default HamburguerMenu;