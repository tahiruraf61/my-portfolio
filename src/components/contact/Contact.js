import React, { useRef } from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import youtubeIcon from '../../assets/youtube.png'
import instagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k4m8cfu', 'template_hc4a2z8', form.current, '_CWaYDcJl4_AO3WGE')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent !');
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientsDesc'>I had the opportunity to work with a diverse group of companies. Some of the
            notable companies includes</p>
            <div className='clientsImgs'>
                <img src={walmart} alt='walmart' className='clientsImg' />
                <img src={adobe} alt='adobe' className='clientsImg' />
                <img src={microsoft} alt='microsoft' className='clientsImg' />
                <img src={facebook} alt='facebook' className='clientsImg' />
            </div>

        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out this form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form}  onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name="your_name" />
                <input type='email' name="your_email" className='email' placeholder='Your email' />
                <textarea name="message" className='msg' rows='5' placeholder='Your message' />
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={facebookIcon} alt='facebook' className='link' />
                    <img src={twitterIcon} alt='twitter' className='link' />
                    <img src={youtubeIcon} alt='youtube' className='link' />
                    <img src={instagramIcon} alt='instagram' className='link' />
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact;