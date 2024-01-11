import React from 'react'
import './navBar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <nav className='navbar'>
<img src={logo} alt='logo' className='logo' />
<div className='desktopMenu'>
   <Link className= 'desktopMenuList'>Home</Link>
   <Link className= 'desktopMenuList'>About</Link>
   <Link className= 'desktopMenuList'>Portfolio</Link>
   <Link className= 'desktopMenuList'>Clients</Link>
</div>
<button className='desktopMenuBtn'>
  <img src={contactImg} alt='contactImg' className='desktopMenuImg' /> Contact me
</button>
    </nav>


  );
}

export default NavBar;