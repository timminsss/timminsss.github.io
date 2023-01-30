import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/shelley-timmins-/" target='_blank'><FaLinkedin/></a>
      <a href="https://github.com/timminsss" target='_blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials
