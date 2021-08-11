import React from 'react';
import PrivacyCookies from './privacy-cookies';
import Subscribe from './subscribe';
import SocialNetworks from './social-networks';
import './../../../assets/css/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="title-footer">
                BLAH
            </div>
            <div className="container-content-footer p-20-v">
                <SocialNetworks />
                <Subscribe />
            </div>
            <PrivacyCookies />
        </div>
    );
}

export default Footer;