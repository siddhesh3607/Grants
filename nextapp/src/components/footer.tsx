import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        //     <footer className="border-top footer text-muted" style={{color:'white', backgroundColor:'black'}}>
        //     <div className="container">
        //         &copy; 2024 GrantBounty Connect- All rights reserved
        //     </div>
        // </footer>
        <footer className="footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* <div className="footer__connect">
                <p style={{ fontSize: 'xx-large' }}><strong>GrantBounty Connect</strong></p>
                <div className="footer__social" style={{ display: 'flex', marginTop: '12px', fontSize: '22px' }}>
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div> */}

            <div className="footer__copyright" style={{ alignSelf: 'flex-start' }}>
                <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
