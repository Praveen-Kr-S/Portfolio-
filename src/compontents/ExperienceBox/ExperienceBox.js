import React from 'react'
import './ExperienceBox.css';

const ExperienceBox = ({number, title, style}) => {
  return (
    <div style={{...style}} className='experienceBox'>
        {/* <h1>{number}</h1> */}
        <h3>{title}</h3>
    </div>
  )
}

export default ExperienceBox