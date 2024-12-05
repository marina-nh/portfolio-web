import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <div>
          <p className='introPara'>¡Hola! Mi nombre es Marina</p>
          <div>
            <span className='introText'><span className='introName'>Desarroladora</span><br />Full Stack</span>
          </div>
          <div>
            <p className='introPara'>  Apasionada por crear soluciones tecnológicas que marcan la diferencia.
              <br />Comprometida con el desarrollo de software de alta calidad, <br/> utilizando las mejores prácticas y tecnologías actuales. 
              <br /> <br />Si buscas colaboración o estás interesado/a en contratarme, 
              <br />¡Contáctame y trabajemos juntos!</p>
          </div>
        <Link to='contact' smooth={true} duration={500}><button className='btn'><img src={btnImg} alt='Hire' className='btnImg' />Visita mi perfil</button></Link>
        </div>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;