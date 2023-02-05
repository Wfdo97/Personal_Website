import React from 'react'
import './objective.css'
import IMG2 from '../../assets/img3.jpg'

const Objective = () => {
  return (
    <section id='objective'>
      <h1 className='title'>Objective</h1>

      <grid-container>
        <grid-item>
            <p>
            Use concepts and techniques in electrical circuit design and analysis, cardiac electrophysiology,
            biophysics, microcontrollers, and computer programming to design, construct, and test circuit
            boards capable of measuring human electrocardiograms. Capture electrocardiogram data with
            microcontroller, with computer analysis and display. 
            </p>
          </grid-item>
          <grid-item>
            <div className="objective_media-container3">
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