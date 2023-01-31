import React from 'react'
import './footer.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a href=""></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shelley-timmins-/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/timminsss" target='_blank'><FaGithubSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>Ⓒ 2023 - created by Shelley Timmins, powered by </small>
        <FaReact className='react'/>
      </div>
    </footer>
  )
}

export default Footer
