import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

class SocialNetworks extends React.Component {
    render () {
        return (
            <div className="container-social">
                <h4>Síguenos</h4>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialNetworks;