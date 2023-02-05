import React from 'react'
import './role.css'
import IMG3 from '../../assets/img1.jpg'

const Role = () => {
  return (
    <section id='role'>
      <h1 className='title'>Role</h1>

      <div className="role__container">
        <div className="role__media4">
          <div className="role_media-image">
            <img src={IMG3} alt="Role Image"/>
          </div>
        </div>

        <div className="role__content">
        <ul>
            <li>&#8226; Calibrated eight sensors and processed those sensor data values to find optimal proportional
                        component (Kd), derivative component (Kp) and speed for better steering through the track.</li>
            <li>&#8226; Coded the car to follow a track using C based programming.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Role