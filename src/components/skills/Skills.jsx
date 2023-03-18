import React from 'react'
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Developer Fundementals</h2>
        <span className="section_subtitle">Skills for success</span>

        <div className="skills_container container grid">
        <Frontend />
        <Backend />

        </div>
    </section>
  )
}

export default Skills