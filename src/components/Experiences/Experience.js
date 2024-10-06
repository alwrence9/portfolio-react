import React from 'react';

function Experience({ company, description, url }) {
    return (
        <div className="info__box">
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
