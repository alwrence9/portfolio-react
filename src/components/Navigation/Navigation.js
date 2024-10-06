import React from 'react';
import './Navigation.css'

function Navigation() {
    return (
        <nav className="nav" role="navigation">
            <ul className="nav__items">
                <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                <li className="nav__item"><a href="#experiences" className="nav__link">Previous Experience</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
