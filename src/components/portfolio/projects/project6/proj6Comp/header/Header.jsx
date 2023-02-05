import React from 'react'
import './header.css'
import Slider from './Slider'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
/*import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'*/

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
        /*{
            url: IMG3,
            title: "title"
        },
        {
            url: IMG4,
            title: "title"
        }*/
    ]
  return (
    <>
      <h1 className="title">LED Cube: Work in Progress</h1> 
      <div className="container__styles">
        <Slider slides={slides} />
    </div>
    </>
  )
}

export default Header