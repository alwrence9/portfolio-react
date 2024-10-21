import React from 'react';
import './Socials.css';

function Socials() {
    return (
        <div className="row social">
            <ul className="footer__social-links">
                <li className="footer__social-link-item">
                    <div className="hover-container">
                        <a href="https://github.com/alwrence9/" title="Link to Github Profile">
                            <img src="./images/github.svg" className="footer__social-image" alt="Github" />
                            <span className="hover-text">alwrence9</span>
                        </a>
                    </div>
                </li>
                <li className="footer__social-link-item">
                    <div className="hover-container">
                        <a href="https://www.linkedin.com/in/hong-minh-vu-77a072250/" title="Link to Linkedin Profile">
                            <img src="./images/linkedin.svg" className="footer__social-image" alt="Linkedin" />
                            <span className="hover-text">hong-minh-vu</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Socials;
