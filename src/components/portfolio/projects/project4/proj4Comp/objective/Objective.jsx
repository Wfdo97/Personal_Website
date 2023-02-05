import React from 'react'
import './objective.css'
import IMG2 from '../../assets/img2.jpg'

const Objective = () => {
  return (
    <section id='objective'>
      <h1 className='title'>Objective</h1>

      <grid-container>
        <grid-item>
            <p>
            Use concepts like PID, unit testing and hardware debugging to program the car to navigate
            through a track following the black center line. 
            </p>
          </grid-item>
          <grid-item>
            <div className="objective_media-container4">
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