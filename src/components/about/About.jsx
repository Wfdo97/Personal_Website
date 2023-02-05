import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='title'>
        <h3>Get To Know</h3>
        <h1>About Me</h1>
      </div>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <p>
          Hi, I am an 4th year undergraduate student majoring in Electrical Engineering at UCLA. 
          Currently I am collaborating with a MBA student to prototype an AR glasses. 
          I am also working on optimizing data processing for miniature mechanical systems in the LEMUR robotics research lab at UCLA. 
          Through the passage of reseach, I have developed deep passion for embedded systems, robotics and machine learning. 
          I love to conduct research on different electrical systems and figure out how they work and how it can be futher improved.
          This portfolio contains some projects that I have worked on as well as what I have learned from these projects. 

          </p>
        </div>
      </div>
    </section>
  )
}

export default About