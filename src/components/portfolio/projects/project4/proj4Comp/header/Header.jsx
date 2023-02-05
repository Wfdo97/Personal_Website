import React from 'react'
import './header.css'
import Slider from './Slider'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'

const Header = () => {
    const slides = [
        {
            url: IMG1,
            title: "title"
        },
        {
            url: IMG2,
            title: "title"
        }
    ]
  return (
    <>
      <h1 className="title">Programmable Robotic Car</h1> 
      <div className="container__styles">
        <Slider slides={slides} />
    </div>
    </>
  )
}

export default Header