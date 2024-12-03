import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/webdesign.png';
import AppDesign from '../../assets/app-design.png';
import html5 from '../../assets/html5.png'
import css3 from '../../assets/css3.png'
import javaScript from '../../assets/javascript.png'
import reactjs from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import Python from '../../assets/python.png'
import PSQL from '../../assets/postgresql.png'
import mysql from '../../assets/mysql.png'
import gestion from '../../assets/gestion.png'
import think from '../../assets/think-do.png'
import data from '../../assets/data-analysis.png'
import soft from '../../assets/software.png'


const Skills = () => {
    return (
        <section id='skills'>
            <h2 className='skillTitle'>Habilidades</h2>
            <span className='skillDesc'>Como desarrolladora, poseo un conjunto sólido de habilidades que abarcan desde el desarrollo técnico hasta la gestión de proyectos y capacidades interpersonales.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Desarrollo Front-End</h2>
                        <p>Especialista en la creación de experiencias interactivas para páginas web y aplicaciones web. Manejo avanzado de tecnologías como HTML5, CSS3, JavaScript y React, fundamentales para diseñar interfaces responsivas, modernas y optimizadas para cualquier dispositivo.</p>
                        <div className='icons'>
                            <img src={html5} alt='HTML5' />
                            <img src={css3} alt='CSS3' />
                            <img src={javaScript} alt='JavaScript' />
                            <img src={reactjs} alt='reactjs' />
                        </div>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Desarrollo Back-End</h2>
                        <p>Diseño y construcción de funcionalidades esenciales para aplicaciones web y móviles. Experta en Node.js y Python, con experiencia en la gestión de bases de datos eficientes utilizando MySQL y PostgreSQL. Soluciones robustas y escalables para proyectos empresariales.</p>
                        <div className='icons'>
                            <img src={nodejs} alt='Node' />
                            <img src={Python} alt='Python' />
                            <img src={PSQL} alt='PSQL'/>
                            <img src={mysql} alt='MySQL'/>
                        </div>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Soluciones de Software Personalizadas</h2>
                        <p>Desarrollo de soluciones digitales a medida que combinan tecnología avanzada y diseño centrado en el usuario. Implementación de estrategias UI/UX, prototipado interactivo y funcionalidades intuitivas para optimizar procesos, mejorar la experiencia del usuario y alcanzar tus objetivos empresariales.</p>
                        <div className='icons'>
                            <img src={gestion} alt='Gestion' />
                            <img src={think} alt='Solucion' />
                            <img src={data} alt='Data' />
                            <img src={soft} alt='Software' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills