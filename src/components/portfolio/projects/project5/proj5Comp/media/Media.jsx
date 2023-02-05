import React, { useState } from 'react'
import './media.css'
import {defaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import Image7 from "../../assets/img7.png"

const Media = () => {
  const [model, setModel] = useState(false);
  let data = [
    {
      id: 1,
      title: "Research Poster",
      videoUrl: "https://www.youtube.com/embed/hYQEG7fZWvM"
    }
  ]
  return (
    <section id='media'>
      <h1 className='title'>Media</h1>
      <div className="gallery5">
      {
          data.map(({ id, title, videoUrl}) => {
            return (
              <a href="https://www.linkedin.com/in/wfdo97/overlay/1600430308134/single-media-viewer/">
              <article key={id} className="project__item5">
                <div className="project__item-image5">
                  <img src={Image7} alt="" className="media__image5"/>
                </div>
                <h3 className='media__title'>{title}</h3>
              </article>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}
                                              


export default Media
