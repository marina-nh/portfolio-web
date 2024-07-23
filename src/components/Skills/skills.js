import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/webdesign.png'; 
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skillTitle'>Skills</h2>
        <span className='skillDesc'>As a software developer, I possess a robust set of skills that range from technical development to project management and interpersonal abilities.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Front-end Development</h2>
                    <p>Creating Interactive Front-end Experiences. Proficient in technologies such as HTML5, CSS3, JavaScript, and React.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Back-end Development</h2>
                    <p>Building essential functionality. Proficient in technologies such as Node.js and Python, along with efficient database management using MySQL and PostgreSQL.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Interface Design</h2>
                    <p>Creating intuitive and engaging experiences. UI/UX design, prototyping, and crafting memorable interactions for users.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills