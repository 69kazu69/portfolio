import React from 'react'
import Navbar from "./components/Navbar"
import ProjectHeading from './components/ProjectHeading'
import Projects from './components/Projects'

const projects = () => {
  return (
    <div id="pmain">
        <Navbar />
        <ProjectHeading/>
        <Projects/>
    </div>
  )
}

export default projects