import React from 'react';
import ContactInfo from './contact-info';
import ContactHeader from './contact-header';
import './../../assets/css/info/info.css';

class Contact extends React.Component {
    render () {
        
        return (
            <div className="container-info-bla">
                <ContactHeader />
                <ContactInfo />
            </div>
        );

    }
}

export default Contact;