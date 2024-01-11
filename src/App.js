import React from 'react'
import Header from './compontents/Header/Header'
import TopContainer from './compontents/TopContainer/TopContainer'
import SkillContainer from './compontents/SkillContainer/SkillContainer'
import ProjectContainer from './compontents/ProjectContainer/ProjectContainer'
import './App.css'
import ExperienceContainer from './compontents/ExperienceContainer/ExperienceContainer'
import Contact from './compontents/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  )
}

export default App