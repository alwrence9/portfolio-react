import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ title, description, url }) => {
    return (
        <div className="project-box">
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={() => window.open(url, '_blank')}>Visit project</button>
        </div>
    );
};

export default ProjectBox;
