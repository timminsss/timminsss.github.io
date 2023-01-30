import React from 'react'
import { useState} from 'react'
import './nav.css'
import { BiHomeAlt, BiInfoCircle, BiBookOpen } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}
         className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}
         className={activeNav === '#about' ? 'active' : ''}><BiInfoCircle/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}
         className={activeNav === '#experience' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}
         className={activeNav === '#portfolio' ? 'active' : ''}><BiBookOpen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}
         className={activeNav === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar/></a>
    </nav>
  )
}

export default Nav
