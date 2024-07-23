import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='introText'><span className='introName'>Marina</span><br />Software Developer </span>
        <p className='introPara'>Passionate about transforming ideas into innovative digital solutions. 
        <br />Specializing in intuitive applications and dynamic websites, 
        <br />I am committed to delivering technical excellence <br />and innovation in every project to exceed expectations.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;