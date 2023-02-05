import React from 'react'
import './objective.css'
import IMG2 from '../../assets/img5.png'

const Objective = () => {
  return (
    <section id='objective'>
      <h1 className='title'>Objective</h1>

      <grid-container>
        <grid-item>
            <p>
            FORAY is a project at UCLA LEMUR, a research lab, that involves the programming and
            manufacturing of Lighter-than-Air (LTA) robots like blimp. The goal of this project, in
            collaboration with the government, is to discover the most efficient way to control and to solve
            pragmatic problems involving these LTAs by placing LTA robots in a competition where they
            would catch green balls and shoot them to a goal.
            </p>
          </grid-item>
          <grid-item>
            <div className="objective_media-container1">
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