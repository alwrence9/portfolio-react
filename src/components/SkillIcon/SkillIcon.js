import React from 'react';
import './SkillIcon.css'

function SkillIcon({ src, name }) {
    return (
        <div className="icon__container">
            <img className="skill__logo" src={src} alt={name} />
            <p className="skill__name">{name}</p>
        </div>
    );
}

export default SkillIcon;
