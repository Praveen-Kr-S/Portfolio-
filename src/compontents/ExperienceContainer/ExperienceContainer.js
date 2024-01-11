import React from 'react'
import './ExperienceContainer.css'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' name='exp'>
        <h1>Soft Skill</h1>
        <div className='experienceContainer__info'>
            <ExperienceBox 
                /* number="+10" */
                title="Continuous Learning"
            />
            <ExperienceBox 
                /* number="15+" */
                title="Communication"
            />
            <ExperienceBox 
                /* number="1+" */
                title="Teamwork"
            />
            <ExperienceBox 
                /* number="600+" */
                title="User Centric Mindset"    
            />
        </div>
    </Element>
  )
}

export default ExperienceContainer