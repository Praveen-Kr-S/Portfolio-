import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1><span className='heading__span1'>Mr.</span>Praveen Kumar</h1>
            <p>
              Qualified Front End Developer excited at the prospect of collaborating with team members and improving on ui in a professional setting. Creative worker recognized by peers for my effective creative thinking and motivational skills. Looking to apply my understanding of JavaScript and Application Development at your company.
            </p>
                <button className='topContent__downloadButton'>
                  <a href="https://www.linkedin.com/in/praveen-kumar-s-2b6315244/">Download CV</a>
                </button>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent__workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent