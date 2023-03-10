import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from 'https://github.com/Wfdo97/Personal_Website/blob/main/src/assets/profile1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3> Hello I'm</h3>
        <h1>Warnakulasuriya Fernando</h1>
        <h3 className="text-light"> A UCLA Electrical Engineering Student</h3>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="profile picture" className='pro'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header