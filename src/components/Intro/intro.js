import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from  '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Marina</span><br/>Data Analyst.</span>
            <p className='introPara'>A passionate data analyst with experience in <br/>turning information into strategic knowledge.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire'className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;