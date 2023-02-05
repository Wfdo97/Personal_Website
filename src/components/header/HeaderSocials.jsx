import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Wfdo97" target="_blank"><FaGithub/></a>
        <a href="#contact"><BiMessageDetail/></a>
    </div>
  )
}

export default HeaderSocials