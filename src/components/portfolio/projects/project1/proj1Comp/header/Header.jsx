import React from 'react'
import './header.css'
import Slider from './Slider'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.JPEG'
import IMG4 from '../../assets/img4.jpg'

const Header = () => {
    const slides = [
        {
            url: IMG1,
            title: "title"
        },
        {
            url: IMG2,
            title: "title"
        },
        {
            url: IMG3,
            title: "title"
        },
        {
            url: IMG4,
            title: "title"
        }
    ]
  return (
    <>
      <h1 className="title">FORAY: Manual and Autonomous Blimp Robot</h1> 
      <div className="container__styles">
        <Slider slides={slides} />
    </div>
    </>
  )
}

export default Header