import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillsDesc'>I am a skilled and passionate web designer with experience in creating
        user friendly and visually appealing websites. I have a strong understanding of and  keen eye for details.
        I am proficient in HTML, CSS and javaScript.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='ui design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, write what you want here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='web design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is a demo text, write what you want here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='app design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text, write what you want here.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills