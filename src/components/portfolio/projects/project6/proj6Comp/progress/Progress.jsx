import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progress.css'

const data = [
    {
      id: 1,
      title: "LED Rows",
      percentage: 20
    },
    {
      id: 2,
      title: "LED Panels",
      percentage: 0
    },
    {
        id: 3,
        title: "Packaging",
        percentage: 0
      }
  ]


const Progress = () => {
  return (
    <div className='progress'>
      <h1 className='title'>Progress</h1>
      <div className="progress__gallery">
      {
          data.map(({ id, title, percentage}) => {
            return (
              <article key={id} className="progress__item">
                <h3 className='progress__items'>{title}</h3>
                <div className="progress__item-bar">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Progress