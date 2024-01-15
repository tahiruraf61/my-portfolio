import React, { useState } from 'react'
import './navBar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
<img src={logo} alt='logo' className='logo' />
<div className='desktopMenu'>
   <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className= 'desktopMenuList'>Home</Link>
   <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className= 'desktopMenuList'>About</Link>
   <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className= 'desktopMenuList'>Portfolio</Link>
   <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className= 'desktopMenuList'>Clients</Link>
</div>
<button className='desktopMenuBtn'onClick={() => {
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}}>
  <img src={contactImg} alt='contactImg' className='desktopMenuImg' /> Contact me</button>

<img src={menu} alt='menu' className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
<div className='navMenu' style={{display: showMenu ? 'flex':'none'}}>
   <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-80} duration={500} className= 'mobMenuList' onClick={() => setShowMenu(false)}>Home</Link>
   <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className= 'mobMenuList' onClick={() => setShowMenu(false)}>About</Link>
   <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className=  'mobMenuList' onClick={() => setShowMenu(false)}>Portfolio</Link>
   <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className= 'mobMenuList' onClick={() => setShowMenu(false)}>Clients</Link>
   <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className= 'mobMenuList' onClick={() => setShowMenu(false)}>Clients</Link>
   <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className= 'mobMenuList' onClick={() => setShowMenu(false)}>Contact</Link>
</div>
    </nav>


  );
}

export default NavBar;