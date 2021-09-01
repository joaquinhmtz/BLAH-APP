import React from 'react';
import './../../assets/css/buttons.css';
import './../../assets/css/forms.css';

class Subscribe extends React.Component {
    render () {
        return (
            <div className="container-subscribe">
                <h4>Subscríbete</h4>
                <span>Mantente al día con nuestros boletínes y ofertas especiales.</span>
                <div className="container-form">
                    <input type="text" className="input-form input-subscribe" placeholder="Escribe tu email"/>
                    <button className="btn btn-primary btn-subscribe">
                        Enviar
                    </button>
                </div>
            </div>
        );
    }
}

export default Subscribe;