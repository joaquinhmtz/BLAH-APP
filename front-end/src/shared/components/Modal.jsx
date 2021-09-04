import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './../../assets/css/modal.css';

const Modal = ({ children, isOpen, closeModal }) => {
    console.log('isOpen:', isOpen, closeModal)
    const handleModalClick = (e) => e.stopPropagation();

    return (
        <div className={`modal ${isOpen && "open"}`} onClick={closeModal}>
            <div className="container-modal modal-sm" onClick={handleModalClick}>
                <div className="modal-header">
                    <h3>
                        {/* { (title !== '' ? title : '' ) } */}
                    </h3>
                    <span onClick={closeModal}>
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