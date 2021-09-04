
import { React, useEffect } from 'react';

import Modal from './../../../shared/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ImageNewsLetter from './../../../assets/img/image-newsletter.svg';
import { ModalHook } from './../../../shared/components/ModalHook';



const ModalInit = () => {
    const [isOpenModal, modalNewsletterOpen, modalNewsletterClose] = ModalHook(false);

    useEffect( () => {
        const timeoutID = window.setTimeout(() => {

            modalNewsletterOpen();
        }, 6000);   
    });

    return (
        <div>
            {/* <button onClick={modalNewsletterOpen}>_Click</button> */}
            <Modal isOpen={isOpenModal} closeModal={modalNewsletterClose}>
                <div className="modal-newsletter-init">
                    <h2>¿GUSTAS UN CHISMECITO CON SÚPER DESCUENTOS?</h2>

                    <div className="newsletter-image">
                        <img src={ImageNewsLetter} alt="" />
                    </div>
                    <p>Escribe tu correo y nosotros hacemos el resto</p>
                    <div className="input-group-newsletter">
                        <i><FontAwesomeIcon icon={faEnvelope} size="lg" /></i>
                        <input type="text" placeholder="chismecito@xfavorcito.com"/>
                    </div>
                    <button className="btn-newsletter">Enviar</button>
                </div>
            </Modal>
        </div>
    );
}

export default ModalInit;