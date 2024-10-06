import React from 'react';

function AboutMe() {
    return (
        <div className="header__text-box row">
            <div className="header__text">
                <h1 className="heading-primary">
                    <span>Ashley Vu</span>
                </h1>
                <p>Software Developer based in Montreal</p>
                <div className="contact__info">
                    <h3>Get in touch</h3>
                    <a href="mailto: ashleyvu2209@gmail.com" className="btn">ashleyvu2209@gmail.com</a>
                </div>
            </div>
            <div className="row">
                <h2>About Me</h2>
                <div className="about__content">
                    <div className="about__text">
                        <p>
                            I am studying Software Development at Dawson College. I am interested in machine learning, web development, and cloud computing.
                        </p>
                        <a href="#" className="btn">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
