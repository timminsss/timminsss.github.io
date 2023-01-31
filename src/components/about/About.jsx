import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
// import { HiUsers } from 'react-icons/hi'
import { BsFillFolderFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>A little bit</h5>
      <h2>About Me</h2>
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
              <small>
              <ul>
                <li>Le Wagon Web Dev Bootcamp</li>
                <li>6 years as a Chartered Accountant</li>
              </ul>
              </small>
            </article>
            <article className='about__card'>
              <BsFillFolderFill className='about__icon'/>
              <h5>Top Projects</h5>
              <small>
              <ul>
                <li><a href="https://groupappo-app.herokuapp.com/" target='_blank'>Groupappo</a></li>
                <li><a href="https://groupappo-marketplace-app.herokuapp.com/" target='_blank'>Bookappo</a></li>
              </ul>
              </small>
            </article>
          </div>

          <p>
            I'm a driven junior software developer with a passion for problem solving and a huge appreciation for tech!
              I have a background in accounting and finance (I was a Chartered Accountant for 6 years in the retail industry).
              This allowed me to develop great attention to detail and have a real soft spot for logical problem solving and data analysis.<br/><br/>

            My previous experience is what triggered my passion for writing code. Part of my role was to analyse big data on MS Excel, I quickly realised the
              existing processes were super slow and inefficient, so I taught myself how to use VBA (MS Office Visual Basic for Applications
              - MS programming language) to speed up my tasks on Excel. I started off small, but before I knew it I was writing code
              for automation throughout the company (and I loved it!). <br/><br/>

            This was my first taste of programming and have thoroughly enjoyed learning more and more since. I recently took the plunge and
              completed the Le Wagon Web Development bootcamp in Melbourne. This gave me a great foundation for web development, where I used
              Ruby on Rails as my main framework.<br/><br/>
            I'm super excited to have made the transition into the tech industry and am motivated to continue learning and improving in my field! <br/><br/>
            If you want to know more, drop me a message! ☺️
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About
