import React from 'react'
import Seprator from '../../common/seprator'
import { SkillsData } from '../../data/skills'
import SkillCard from './skill-card'
import './skills.css'

function Skills() {
  const data = SkillsData
  return (
    <div className='skills'>
      <Seprator />
      <label className='section-title'>Skills</label>
      <div className='skills-container'>
        {data.map((item) => {
          return (
            <div className='skills-section'>
              <label className='skills-section-title'>{item.type}</label>
              <div className='skill-list'>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
