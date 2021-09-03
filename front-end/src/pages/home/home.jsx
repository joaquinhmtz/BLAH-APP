import React from 'react';
import LatestNews from './components/news/latest-news';
import Video from './components/video';
import Animation from './components/animation';
import LatestArticles from './components/articles/latest-articles';
import Discounts from './components/redirections/discounts';
import SomethingInTheMind from './components/redirections/something-in-the-mind';
import Methodology from './components/methodology/methodology';
import Modal from './../../shared/components/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ImageNewsLetter from './../../assets/img/image-newsletter.svg';

class Home extends React.Component {
    render () {
        return (
            <div className="container-home">
                <Animation />
                <Video />
                <LatestNews />
                <SomethingInTheMind />
                <LatestArticles />
                <Methodology />
                <Discounts />
                <Modal>
                    <div className="modal-newsletter-init">
                        <h2>¿GUSTA UN CHISMESITO CON SUPER DESCUENTOS?</h2>

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
}

export default Home;