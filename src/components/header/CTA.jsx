import React from 'react'
import CV from '../../assets/Shelley Timmins - Junior Software Engineer.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">Download CV</a>
      <a href="#contact" className="btn">Let's Chat</a>
    </div>
  )
}

export default CTA
