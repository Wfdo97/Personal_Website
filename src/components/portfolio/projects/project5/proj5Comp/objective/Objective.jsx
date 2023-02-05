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
            Create a cost-effective way to reconstruct three dimensional objects using Azure Kinetic RGB-D
            sensor data and Open3d library
            </p>
          </grid-item>
          <grid-item>
            <div className="objective_media-container5">
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