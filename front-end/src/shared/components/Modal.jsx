import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './../../assets/css/modal.css';

const Modal = ({ children, title }) => {
    return (
        <div className="modal">
            <div className="container-modal modal-sm">
                <div className="modal-header">
                    <h3>{ (title !== '' ? title : '' ) }</h3>
                    <span>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </span>
                </div>
                <div className="modal-body">
                    { children }
                </div>
            </div>
        </div>
    );
}

export default Modal;