import React from 'react'
import AboutMe from '../section/AboutMe'
import Projects from '../section/Projects'
import Skills from '../section/Skills'
import Contact from '../section/Contact'

const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Portfolio
