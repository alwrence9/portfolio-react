import React from 'react';
import './Experience.css'

function Experience({ company, description, url, logo }) {
    return (
        <div className="experience-box">
            {logo && <img className="logo" src={logo} /> }
            <div className="info__text">
                <h3>{company}</h3>
                <p>{description}</p>
            </div>
            <div className="info__links">
                <a href={url} target="_blank" className="link__text">View website</a>
            </div>
        </div>
    );
}

export default Experience;
