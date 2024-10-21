import React from 'react';
import SkillIcon from "../SkillIcon/SkillIcon";
import './SkillsShelf.css'

function SkillsShelf() {
    return (
        <section id="skills">
            <h1>My skills</h1>
            <div className="row">
                <div className="shelf">
                    <SkillIcon src="images/logos/python.svg" name="Python"/>
                    <SkillIcon src="images/logos/javascript.svg" name="JavaScript"/>
                    <SkillIcon src="images/logos/aws.svg" name="AWS"/>
                    <SkillIcon src="images/logos/java.svg" name="Java"/>
                </div>
            </div>
        </section>
    );
}

export default SkillsShelf;
