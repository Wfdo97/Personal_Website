import React from 'react'
import Resume from 'https://github.com/Wfdo97/Personal_Website/blob/main/src/assets/Fernando%2CWarnakulasuriya_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>    
    </div>
  )
}

export default CTA