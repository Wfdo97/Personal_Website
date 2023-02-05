import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='title'>
        <h3>My Recent Work</h3>
        <h1>Projects</h1>
      </div>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, projectlink}) => {
            return (
              <a href={projectlink}>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                </article>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}
                                              
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FORAY: Manual and Autonomous Blimp Robot',
    projectlink: '/project1'
  },
  {
    id: 2,
    image: IMG2,
    title: 'HAcK Competition: Manual and Autonomous Car',
    projectlink: '/project2'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Electrocardiogram',
    projectlink: '/project3'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Programmable Robotic Car',
    projectlink: '/project4'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cost Effective 3D Modeling using Point Cloud Data from Azure Kinect SDK RGB-D Sensors',
    projectlink: '/project5'
  },
  {
    id: 6,
    image: IMG6,
    title: 'LED Cube: Work in progress',
    projectlink: '/project6'
  }
]
export default Portfolio