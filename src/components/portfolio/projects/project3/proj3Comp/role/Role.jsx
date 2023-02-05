import React from 'react'
import './role.css'
import IMG3 from '../../assets/img4.jpg'

const Role = () => {
  return (
    <section id='role'>
      <h1 className='title'>Role</h1>

      <div className="role__container3">
        <div className="role__media3">
          <div className="role_media-image3">
            <img src={IMG3} alt="Role Image"/>
          </div>
        </div>

        <div className="role__content">
        <ul>
            <li>&#8226; Designed a single layer PCB using Eagle.</li>
            <li>&#8226; Soldered through hole connections to PCB to connect two LCDs, Wi-Fi module and power source to make a
                        compact self-sufficient ECG.</li>
            <li>&#8226; Utilized SolidWorks software to design casing for ECG and developed those designs using 3D
                        printing and laser cutting.</li>
            <li>&#8226; Programmed LCDs, to display heart signals, heartbeat, and battery percentage (custom
                        characters), and Wi-Fi module to transfer data to a database. </li>
            <li>&#8226; Presented the project to a panel of judges to review based on functionality and won the best 
                        overall project in the class.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Role