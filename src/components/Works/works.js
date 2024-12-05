import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>Mi Portfolio</h2>
      <h3 className='worksSubTitle'>Full Stack</h3>
      <span className='worksDesc'>Proyectos que destacan por su diseño moderno, funcionalidad optimizada y enfoque en los detalles. Desde desarrollo web Full Stack hasta tiendas online y aplicaciones interactivas, cada trabajo está diseñado para impulsar negocios y crear una sólida presencia digital.</span>
      <div className='worksImgs'>
        <a href='https://hotel-sort.vercel.app/'>
          <img src={Portfolio1} alt='' className='worksImg' />
        </a>
        <a href='https://ay-n-velas.vercel.app/'>
          <img src={Portfolio2} alt='' className='worksImg' />
        </a>
        <a href='https://sierrasolcabanas.netlify.app'>
          <img src={Portfolio3} alt='' className='worksImg' />
        </a>
        <a href='https://deco-gamma.vercel.app/'>
          <img src={Portfolio4} alt='' className='worksImg' />
        </a>
        <a href='https://hotel-las-violetas.vercel.app/'>
          <img src={Portfolio5} alt='' className='worksImg' />
        </a>
        <a href='https://dino-pasteleria-artesanal.vercel.app/'>
          <img src={Portfolio6} alt='' className='worksImg' />
        </a>
      </div>
    </section>
  )
}

export default Works;