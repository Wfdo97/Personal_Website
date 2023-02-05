import React, { useState } from 'react'
import './media.css'
import {defaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'

const Media = () => {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      title: "Car's Best Performance on Test Track (1)",
      videoUrl: "https://www.youtube.com/embed/wRxNcp-DHFI"
    },
    {
      id: 2,
      title: "Car's Best Performance on Test Track (2)",
      videoUrl: "https://www.youtube.com/embed/hjfLRNsFA5w"
    }
  ]
  return (
    <section id='media'>
      <h1 className='title'>Media</h1>
      <div className="gallery">
      {
          data.map(({ id, title, videoUrl}) => {
            return (
              <article key={id} className="project__item">
                <div className="project__item-image">
                  <iframe 
                  className="media__video"
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
