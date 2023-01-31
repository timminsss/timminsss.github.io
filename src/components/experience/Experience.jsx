import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill, BsBootstrapFill } from 'react-icons/bs'
import { ImHtmlFive } from 'react-icons/im'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiReact, SiRuby, SiRubyonrails, SiPostgresql, SiSqlite, SiHeroku } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experience I have</h5>
      <h2>My Tech Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <ImHtmlFive className='tech-icon'/>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <FaCss3Alt className='tech-icon'/>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <SiJavascript className='tech-icon'/>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <SiReact className='tech-icon'/>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <BsBootstrapFill className='tech-icon'/>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <div className='experience__details-tech-icons'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <FiFigma className='tech-icon'/>
                <h4>Figma</h4>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <div className='experience__details-tech-icons'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <SiRuby className='tech-icon'/>
              <h4>Ruby</h4>
            </div>
          </article>
          <article className='experience__details'>
            <div className='experience__details-tech-icons'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <SiRubyonrails className='tech-icon'/>
              <h4>Ruby on Rails</h4>
            </div>
          </article>
          <article className='experience__details'>
            <div className='experience__details-tech-icons'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <SiPostgresql className='tech-icon'/>
              <h4>Postgres</h4>
            </div>
          </article>
          <article className='experience__details'>
            <div className='experience__details-tech-icons'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <SiSqlite className='tech-icon'/>
              <h4>SQLite</h4>
            </div>
          </article>
          <article className='experience__details'>
            <div className='experience__details-tech-icons'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <SiHeroku className='tech-icon'/>
              <h4>Heroku</h4>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
