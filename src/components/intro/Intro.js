import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Tahiru</span> <br/> front-end designer</span>
            <p className='introPara'>I'm a skilled wed designer with experience in creating <br/>visual
            appealing and user friendly websites</p>
            <Link to=""><button className='btn'> <img src={btnImg} alt='hire me' className='btnImg'/> Hire Me</button></Link>

        </div>
        <img
        src={bg}
        alt='profile'
        className='bg'
        />
    </section>
  )
}

export default Intro;