import React, { useRef } from 'react';
import './contact.css';
import client1 from '../../assets/client-1.png';
import client2 from '../../assets/client-2.png';
import client3 from '../../assets/client-3.png';
import client4 from '../../assets/client-4.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GitHubIcon from '../../assets/github-icon.png';
import TwitterIcon from '../../assets/twitter-icon.png';
import YouTubeIcon from '../../assets/youtube-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9j5s19p', 'template_c40x71q', form.current, 'X6sgJjr4feSgpUmNr')
            //Se debe agregar la id cuando se registre en la pagina emailjs 
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
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
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill out form below to discuss any work opportunities </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Email' name='your_email'/>
                    <textarea className='msg' name='message' rows="5" placeholder='Message'></textarea>
                    <button type='submit' value="Send" className='submitBtn'>Submit </button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/marina-r-nunez/'><img src={LinkedInIcon} alt='LinkedIn' className='link' /></a>
                        <a href='https://github.com/marina-nh'><img src={GitHubIcon} alt='GitHub' className='link' /></a>
                        <a href='https://x.com/'><img src={TwitterIcon} alt='Twitter' className='link' /></a>
                        <img src={YouTubeIcon} alt='YouTube' className='link' />
                    </div>
                </form>
            </div>
        </section>

    );
}

export default Contact;