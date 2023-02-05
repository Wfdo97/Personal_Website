import React from 'react'
import './role.css'
import IMG3 from '../../assets/img6.jpg'

const Role = () => {
  return (
    <section id='role'>
      <h1 className='title'>Role</h1>

      <div className="role__container">
        <div className="role__media1">
          <div className="role_media-image">
            <img src={IMG3} alt="Role Image"/>
          </div>
        </div>

        <div className="role__content">
          <ul>
            <li>&#8226; Researching effective ways and creating algorithms to make the LTA robot hover in front of a
                green ball with the use of vision processing and PID control.</li>
            <li>&#8226; Programming the LTA robots be controlled through manual and autonomous control with the
                help of PyGame.</li>
            <li>&#8226; Finding the best camera that enables the blimp to hover in front of the green ball efficiently
                (cameras used include OpenMV, ESP32 cam, and Nicla Vision).</li>
            <li>&#8226; Performing unit tests for the whole LTA robot system.</li>
            <li>&#8226; Creating the project’s modularized source code version for easy debugging.</li>
            <li>&#8226; Fast prototyping using Solid works to design, 3D prints to assemble mechanisms for an
                autonomous blimp.</li>
            <li>&#8226; In charge of wiring and soldering hardware components.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Role