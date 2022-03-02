import React, { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { Link } from 'react-router-dom'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'

import './Work.scss'

const listWorks = [
  {
    id: 1,
    title: 'IT19',
    description:
      'IT19とは、ITインフラについて学んでいただくことでITインフラの技術者を増やし、IT業界を盛り上げていきたいという思いを実現した教育関連サービスです。IT19を通して学んだことを未来へ繋いでいき、より良い世の中を作るために、あなたも「ITインフラを支える1人 」になりませんか？',
    imgUrl: images.work1,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/it19/',
    github: 'https://github.com/letanlocjp1001/IT_19',
    tags: ['Web App', 'All'],
  },
  {
    id: 2,
    title: 'Moment × Memorie',
    description:
      'moment × memoryは パーティを行う人たち(主催者)と パーティを盛り上げる人たち(パフォーマー)を マッチングさせるサービスになっています。 主に結婚式、社内パーティを 予定されている方は是非ともご利用ください',
    imgUrl: images.work2,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Portfolio/work/Project_01/MomentMemorie/',
    github: 'https://github.com/letanlocjp1001/MomentMemorie',
    tags: ['Web App', 'Mobile App', 'All'],
  },
  {
    id: 3,
    title: 'エンジニアにポートフォリオ',
    description: '',
    imgUrl: images.logo,
    link: 'https://letanlocportfolio.netlify.app/',
    github: 'https://github.com/letanlocjp1001/React-Portfolio',
    tags: ['React JS', 'All'],
  },
  {
    id: 4,
    title: 'Cool Mobile App',
    description: 'Tinder Colone in React Native',
    imgUrl: images.work4,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['Mobile App', 'All'],
  },
  {
    id: 5,
    title: 'Cool Mobile App',
    description: 'Tinder Colone in React Native',
    imgUrl: images.work4,
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
        {filterWork.map((work) => {
          return (
            <Tilt key={work.id}>
              <div className='app__work-item app__flex'>
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
                    <a href={work.link} rel='noreferrer' target='_blank'>
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className='app__flex'
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
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
                  <p className='p-text' style={{ marginTop: 5 }}>
                    {work.description}
                  </p>
                  <div className='app__work-tag app__flex'>
                    <p className='p-text'>{work.tags[0]}</p>
                  </div>

                  <Link to={`/${work.id}`}>
                    <button className='btn'>More</button>
                  </Link>
                </div>
              </div>
            </Tilt>
          )
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')
