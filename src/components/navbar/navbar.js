import React from 'react'
import './navbar.css'
import {BiHome} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {ImStack} from 'react-icons/im'
import {MdOutlineMedicalServices} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'
// import Popup from '../popup/popup'
import ReactTooltip from "react-tooltip";

const Navbar = () => {

  // const checkbox = document.getElementById('checkbox');

  // checkbox.addEventListener('change', () => {
  //   document.body.classList.toggle('dark');
  // });

  const [activeNav, setActiveNav] = useState('#');
  
  return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} data-tip data-for="homeTip"><BiHome/></a>
        <ReactTooltip id="homeTip" place="top" effect="solid">Home</ReactTooltip>

        <a href="#questions" onClick={() => setActiveNav('#questions')} className={activeNav === '#questions' ? 'active' : ''} data-tip data-for="aboutTip"><BiUserCircle/></a>
        <ReactTooltip id="questionsId" place="top" effect="solid">About</ReactTooltip>

        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} data-tip data-for="experienceTip"><ImStack/></a>
        <ReactTooltip id="experienceTip" place="top" effect="solid">Experience</ReactTooltip>

        {/* <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} data-tip data-for="portfolioTip"><MdOutlineMedicalServices/></a>
        <ReactTooltip id="portfolioTip" place="top" effect="solid">Portfolio</ReactTooltip>

        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} data-tip data-for="contactTip"><AiOutlineMessage/></a>
        <ReactTooltip id="contactTip" place="top" effect="solid">Contact</ReactTooltip>  */}
        
       
      </nav>
  )
}

export default Navbar
