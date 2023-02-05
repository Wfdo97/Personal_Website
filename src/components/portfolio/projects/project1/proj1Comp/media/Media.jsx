import React, { useState } from 'react'
import './media.css'
import {defaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

const Media = () => {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      title: "Flying Test using Manual Control",
      videoUrl: "https://www.youtube.com/embed/hYQEG7fZWvM"
    },
    {
      id: 2,
      title: "Blimp Hovering Test using Nicla Vision Camera",
      videoUrl: "https://www.youtube.com/embed/0T440hIb_TY"
    },
    {
      id: 3,
      title: "Testing Green Ball Detection Algorithm and Control System using ESP32 Cam",
      videoUrl: "https://www.youtube.com/embed/lG5X5pIUnPE"
    },
    {
      id: 4,
      title: "Testing Goal Detection Algorithm using ESP32 Cam",
      videoUrl: "https://www.youtube.com/embed/CGRhT1U7Ahw"
    },
    {
      id: 5,
      title: "Testing Blimp's New Capturing Mechanism",
      videoUrl: "https://www.youtube.com/embed/PkY8R_U4FG4"
    },
    {
      id: 6,
      title: "Onboarding Process with Nicla Vision to PC via WIFI",
      videoUrl: "https://www.youtube.com/embed/MbEUKq2Ht7g"
    },
  ]
  return (
    <section id='media'>
      <h1 className='title'>Media</h1>
      <div className="gallery1">
      {
          data.map(({ id, title, videoUrl}) => {
            return (
              <article key={id} className="project__item1">
                <div className="project__item-image1">
                  <iframe 
                  className="media__video1"
                  src={videoUrl}
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen="" title="Embedded youtube">
                  </iframe>
                </div>
                <h3>{title}</h3>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
                                              


export default Media
