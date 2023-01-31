import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hey, I'm</h4>
        <h1>Shelley Timmins</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <CTA/>

        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down"><BsFillArrowDownCircleFill/></a>
      </div>
    </header>
  )
}

export default Header
