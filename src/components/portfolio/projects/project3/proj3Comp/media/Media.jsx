import React, { useState } from 'react'
import './media.css'
import {defaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

const Media = () => {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      title: "Demo of Electrocardiogram",
      videoUrl: "https://www.youtube.com/embed/Yv0Ds5p7LYg"
    },
    {
      id: 2,
      title: "Testing the LCD Screen by Replicating Heartbeat Pulses Using a Potentiometer",
      videoUrl: "https://www.youtube.com/embed/Zxc6ROLk2cM"
    },
    {
      id: 3,
      title: "Testing Custom Letters in LCD Screen",
      videoUrl: "https://www.youtube.com/embed/aHW3AusMeDM"
    }
  ]
  return (
    <section id='media'>
      <h1 className='title'>Media</h1>
      <div className="gallery3">
      {
          data.map(({ id, title, videoUrl}) => {
            return (
              <article key={id} className="project__item3">
                <div className="project__item-image3">
                  <iframe 
                  className="media__video3"
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
