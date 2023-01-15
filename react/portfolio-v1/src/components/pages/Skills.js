import React from 'react';
import SkillCard from '../Skill/SkillCard';
import './Skills.css';

function Skills() {
    return (
        <div>

            <div className="skills">
                <div className="skills-container">
                    <h1 className="skills-header">TECHINCALS SKILLS</h1>
                    <div className="skill-cards-container">
                        <SkillCard name="HTML" percent="90%" />
                        <SkillCard name="CSS" percent="70%" />
                        <SkillCard name="JavaScript" percent="60%" />
                        <SkillCard name="JavaScript OOP" percent="0%" />
                        <SkillCard name="AJAX" percent="0%" />
                        <SkillCard name="Sass" percent="70%" />
                        <SkillCard name="Bootstrap" percent="60%" />
                        <SkillCard name="jQuery" percent="80%" />
                        <SkillCard name="React.js" percent="80%" />
                        <SkillCard name="Git/GitHub" percent="80%" />
                        <SkillCard name="Chrome Developer Tools" percent="80%" />
                        <SkillCard name="Material-UI" percent="80%" />
                        <SkillCard name="Node.js" percent="60%" />
                        <SkillCard name="Express.js" percent="60%" />
                        <SkillCard name="EJS" percent="80%" />
                        <SkillCard name="python" percent="50%" />
                        <SkillCard name="GSAP" percent="40%" />
                        <SkillCard name="SEO" percent="50%" />
                        <SkillCard name="Redux" percent="0%" />
                        <SkillCard name="Gulp.js" percent="0%" />
                        <SkillCard name="php" percent="0%" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;