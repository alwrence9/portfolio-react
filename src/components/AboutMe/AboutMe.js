import React from 'react';
import './aboutMe.css'

function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-item">
                <h1>
                    <span>Ashley Vu</span>
                </h1>
                <p>Software Developer based in Montreal</p>
                <div>
                    <h3>Get in touch</h3>
                    <a href="mailto: ashleyvu2209@gmail.com" className="btn">ashleyvu2209@gmail.com</a>
                </div>
            </div>
            <div className="about-me-item">
                <h2>About Me</h2>
                <div>
                    <p>
                        I am studying Software Development at Dawson College. I am interested in machine learning, web development, and cloud computing.
                    </p>
                    <a href="#" className="btn">My Resume</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
