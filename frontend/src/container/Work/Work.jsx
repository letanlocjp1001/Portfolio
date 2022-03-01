import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import { motion } from 'framer-motion'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'

import './Work.scss'

const listWorks = [
  {
    id: 1,
    title: 'IT19',
    description: 'A modern UI/UX Portfolio Website',
    imgUrl: images.work1,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['UI/UX', 'All'],
  },
  {
    id: 2,
    title: 'Gericht Restaurant Project',
    description: 'Modern UI/UX',
    imgUrl: images.about02,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['UI/UX', 'All'],
  },
  {
    id: 3,
    title: 'Cool Mobile App',
    description: 'Tinder Colone in React Native',
    imgUrl: images.about03,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['Mobile App', 'All'],
  },
]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [filterWork, setFilterWork] = useState(listWorks)

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (item === 'All') {
        setFilterWork(listWorks)
      } else {
        setFilterWork(listWorks.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <Link to={`/${work.id}`} rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
                <a href={work.github} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')
