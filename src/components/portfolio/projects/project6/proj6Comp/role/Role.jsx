import React from 'react'
import './role.css'
import IMG3 from '../../assets/img6.jpg'

const Role = () => {
  return (
    <section id='role'>
      <h1 className='title'>Role</h1>

      <div className="role__container">
        <div className="role__media">
          <div className="role_media-image">
            <img src={IMG3} alt="Role Image"/>
          </div>
        </div>

        <div className="role__content">
        <ul>
            <li>&#8226; Collaborated in a team of 3 to assemble an autonomous car with unloading mechanism.</li>
            <li>&#8226; Utilized Solid works to make replica parts and FEA analysis feature to analyze some parts of the
                        assembly of the robot car.</li>
            <li>&#8226; Programmed manual override, control car using Bluetooth module and Remote controller, using
                        Python and C based coding. </li>
            <li>&#8226; Utilize ultrasonic sensor and Reflective IR sensor to help the robot car drive through mazes
                        autonomously.</li>
            <li>&#8226; Built team website using CSS, Java Script, and Html, showcasing project overview and delivered
                        a design review to a panel of judges.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Role