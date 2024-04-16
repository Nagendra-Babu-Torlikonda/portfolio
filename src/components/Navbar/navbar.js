import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import './navbar.css';
import contactimg from '../../assets/contact.png';
import Menu from '../../assets/menu.png';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='menu'>
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-50} duration={500} className='menuItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='menuItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='menuItem'>Projects</Link>
        </div>
        <button className='menuBtn' onClick={() => 
          document.getElementById('contact').scrollIntoView({behavior : 'smooth'})}>
            <img src={contactimg} alt="" className='menuBtnImg' />Contact Me</button>

            <img src={Menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='sMenu' style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-50} duration={500} className='sMenuItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='sMenuItem' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='sMenuItem' onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='sMenuItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  );
};

