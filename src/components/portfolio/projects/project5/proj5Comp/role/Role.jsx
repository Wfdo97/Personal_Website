import React from 'react'
import './role.css'
import IMG3 from '../../assets/img6.png'

const Role = () => {
  return (
    <section id='role'>
      <h1 className='title'>Role</h1>

      <div className="role__container">
        <div className="role__media5">
          <div className="role_media-image">
            <img src={IMG3} alt="Role Image"/>
          </div>
        </div>

        <div className="role__content">
          <ul>
            <li>&#8226; Find a most effective method to reconstruct a three-dimensional scenery using RGB-D sensors,
                        Python and Open3D Library.</li>
            <li>&#8226; Identify and resolve existing errors in the Open 3D library and python interface.</li>
            <li>&#8226; Experiment different approaches and functionalities existing in the Open3D library to perfect a
                        object or scenery and reduce the processing time.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Role