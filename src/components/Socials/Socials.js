function Socials() {
    return (
        <div className="row social">
            <ul className="footer__social-links">
                <li className="footer__social-link-item">
                    <a href="https://github.com/alwrence9/" title="Link to Github Profile">
                        <img src="./images/github.svg" className="footer__social-image" alt="Github"/>
                    </a>
                </li>
                <li className="footer__social-link-item">
                    <a href="https://www.linkedin.com/in/hong-minh-vu-77a072250/">
                        <img src="./images/linkedin.svg" title="Link to Linkedin Profile"
                             className="footer__social-image" alt="Linkedin"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;