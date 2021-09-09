import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './../../assets/css/contact/contact.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h3>Contacto</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" /> <span>mail@bla.com</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> <span>+ 55 55 55 55 55</span> 
                </li>
                <li>
                    <FontAwesomeIcon icon={faClock} size="lg" /> <span>9:00AM - 9:00PM</span> 
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;