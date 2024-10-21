import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ title, description, url }) => {
    return (
        <div className="project-box">
            <h1>{title}</h1>
            <p>{description}</p>
            <a className="link__text" href={url}>Visit project</a>
        </div>
    );
};

export default ProjectBox;
