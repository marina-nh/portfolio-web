import React from 'react';
import './contact.css'
import client1 from '../../assets/client-1.png';
import client2 from '../../assets/client-2.png';
import client3 from '../../assets/client-3.png';
import client4 from '../../assets/client-4.png';

const  Contact = () => {
  return (
    <section className='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className=''>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={client1} alt='' className='clientImg' />
                <img src={client2} alt='' className='clientImg' />
                <img src={client3} alt='' className='clientImg' />
                <img src={client4} alt='' className='clientImg' />
            </div>
        </div>
        <div id='contact'>

        </div>
    </section>

  );
}

export default Contact