import React from 'react';
import './hero.css';
import myimg from '../../assets/image2.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id='hero'>
        <div className='heroContent'>
            <span className='hello'>Hello,</span>
            <span className='heroText'>I'm <span className='heroName'>Nagendra Babu</span> <br/>Full Stack Java Developer</span>
            <p className='heroPara'>I am skilled Full Stack Java Developer proficient <br /> in creating RESTful API's, SpringBoot Applications with React.</p>
            <Link><button className='btn'><img src={btnimg} alt=" Hire logo" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={myimg} alt="" className='bg'/>
    </section>
  )
}

export default Hero;