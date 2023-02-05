import React from 'react'
import './objective.css'
import IMG2 from '../../assets/img5.jpg'

const Objective = () => {
  return (
    <section id='objective'>
      <h1 className='title'>Objective</h1>

      <grid-container>
        <grid-item>
            <p>
            HAcK was a competition, for UCLA transfer students, where we had to make a car with
            autonomous and manual control. There were three tiers in this challenge: Control the car using
            Bluetooth, IR controller and fully autonomously. 
            </p>
          </grid-item>
          <grid-item>
            <div className="objective_media-container2">
            <div className="objective_media-image">
              <img src={IMG2} alt="Objective Image"/>
            </div>
            </div>
          </grid-item>
      </grid-container>
    </section>
  )
}

export default Objective