import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { BsFillFolderFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Bootcamp grad</small>
              <small>Previously a Chartered Accountant</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
            </article>

            <article className='about__card'>
              <BsFillFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>Bootcamp grad</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quisquam eum rem ratione tempora earum vero beatae tenetur. Sequi quidem, fuga maiores voluptatum doloribus porro doloremque nobis at iste quas.
          </p>

          <a href="#contact" className='btn btn-rpimary'>let's chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
