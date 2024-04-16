import React from 'react';
import './skill.css';
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import Appdesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIdesign} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>RESTful APIs</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Webdesign} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Appdesign} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>SpringBoot Applications</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
