import React from 'react'
import Seprator from '../../common/seprator/index.js'
import { ProjectData } from '../../data/projects.js'
import ProjectCard from './project-card.js'
import './projects.css'

function Projects() {
  const data = ProjectData
  return (
    <div className='projects'>
      <Seprator />
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )
}

export default Projects
