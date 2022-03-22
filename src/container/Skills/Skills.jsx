import React from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'

import './Skills.scss'
const skills = [
  { id: 1, name: 'React JS', icon: images.react },
  { id: 2, name: 'HTML', icon: images.html },
  { id: 3, name: 'CSS', icon: images.css },
  { id: 4, name: 'SASS', icon: images.sass },
  { id: 5, name: 'JavaScript', icon: images.javascript },
  { id: 6, name: 'Redux', icon: images.redux },
  { id: 7, name: 'NodeJs', icon: images.node },
]

const experience = [
  {
    id: 1,
    year: 2020,
    name: 'Frontend Developer',
    company: 'ECC コンピュータ専門学校',
    desc: '勉強しています',
  },
  {
    id: 2,
    year: 2021,
    name: 'Frontend Developer',
    company: 'ECC コンピュータ専門学校',
    desc: '勉強しています',
  },
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience.map((work) => (
            <motion.div className='app__skills-exp-item' key={work.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{work.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className='app__skills-exp-work'
                  data-tip
                  data-for={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.company}</p>
                </motion.div>
                <ReactTooltip
                  id={work.name}
                  effect='solid'
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                  {work.desc}
                </ReactTooltip>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
