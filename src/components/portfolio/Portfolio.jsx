import React from 'react'
import './portfolio.css'
import Groupappo from '../../assets/portfolio1.png'
import Bookappo from '../../assets/portfolio2.png'
import RPS from '../../assets/portfolio3.png'
import Connect4 from '../../assets/portfolio4.png'
import Calc from '../../assets/portfolio5.png'
import Todo from '../../assets/portfolio6.png'
import Timer from '../../assets/portfolio7.png'

const portfolioData = [
  {
    id: 1,
    image: Groupappo,
    title: 'Groupappo',
    github: 'https://github.com/timminsss/groupappo',
    demo: 'https://groupappo-app.herokuapp.com/',
    tech: [
      'Ruby on Rails',
      'Javascript',
      'APIs',
      'Bootstrap',
      'Postgres'
    ]
  },
  {
    id: 2,
    image: Bookappo,
    title: 'Bookappo',
    github: 'https://github.com/timminsss/groupappo-marketplace',
    demo: 'https://groupappo-marketplace-app.herokuapp.com/',
    tech: [
      'Ruby on Rails',
      'Javascript',
      'Bootstrap'
    ]
  },
  {
    id: 3,
    image: RPS,
    title: 'Rock, Paper, Scissors',
    github: 'https://github.com/timminsss/rock-paper-scissors',
    demo: 'https://timminsss.github.io/rock-paper-scissors/',
    tech: [
      'React'
    ]
  },
  {
    id: 4,
    image: Connect4,
    title: 'Connect4',
    github: 'https://github.com/timminsss/connect-four',
    demo: 'https://timminsss.github.io/connect-four/',
    tech: [
      'React'
    ]
  },
  {
    id: 5,
    image: Calc,
    title: 'Calculator',
    github: 'https://github.com/timminsss/calculator-react-app',
    demo: 'https://timminsss.github.io/calculator-react-app/',
    tech: [
      'React'
    ]
  },
  {
    id: 6,
    image: Todo,
    title: 'To Do List',
    github: 'https://github.com/timminsss/to-do-list',
    demo: 'https://timminsss.github.io/to-do-list/',
    tech: [
      'Typescript'
    ]
  },
  {
    id: 7,
    image: Timer,
    title: 'iOS Timer and Stopwatch',
    github: 'https://github.com/timminsss/stopwatch-swift',
    tech: [
      'Swift'
    ]
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo, tech}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img className="portfolio__item-image" src={image} alt={title} />
                  <ul className="portfolio__tech-stack">
                      {tech.map(stack => (
                        <li key={stack}>{stack}</li>
                      ))}
                    </ul>
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    {demo && (
                      <a href={demo} className='btn btn-primary portfolio__item-cta' target='_blank'>Live Demo</a>
                    )
                    }
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
