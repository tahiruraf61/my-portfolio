import React from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import youtubeIcon from '../../assets/youtube.png'
import instagramIcon from '../../assets/instagram.png'


const Contact = () => {
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
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your name' />
                <input type='email' name='email' className='email' placeholder='Your email' />
                <textarea name='msg' className='msg' rows='5' placeholder='Your message' />
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