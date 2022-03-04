import React, { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

import Modal from 'react-modal'
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
    imgMac: images.mac2,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/it19/',
    github: 'https://github.com/letanlocjp1001/IT_19',
    tags: ['Web App', 'All'],
    team: 'チーム制作',
    time: '20時間',
    language: 'CSS, React',
    year: '2年後期',
  },
  {
    id: 2,
    title: 'Moment × Memorie',
    description:
      'moment × memoryは パーティを行う人たち(主催者)と パーティを盛り上げる人たち(パフォーマー)を マッチングさせるサービスになっています。 主に結婚式、社内パーティを 予定されている方は是非ともご利用ください',
    imgUrl: images.work2,
    imgMac: images.mac2,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Portfolio/work/Project_01/MomentMemorie/',
    github: 'https://github.com/letanlocjp1001/MomentMemorie',
    tags: ['Web App', 'Mobile App', 'All'],
    team: 'チーム制作',
    time: '20時間',
    language: 'CSS, React',
    year: '2年後期',
  },
  {
    id: 3,
    title: 'エンジニアにポートフォリオ',
    description:
      '二代目のポートフォリオを作成して、フロントエンドエンジニアを志望のため、アニメーションよくやっています。言語も変更できます。',
    imgUrl: images.logo,
    imgMac: images.mac1,
    link: 'https://letanlocportfolio.netlify.app/',
    github: 'https://github.com/letanlocjp1001/React-Portfolio',
    tags: ['React JS', 'All'],
    team: '個人制作',
    time: '20時間',
    language: 'CSS, React',
    year: '2年後期',
  },
  {
    id: 4,
    title: 'Movie Mobile App',
    description: 'React Native',
    imgUrl: images.work4,
    imgMac: images.mac1,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['Mobile App', 'All'],
    team: '個人制作',
    time: '20時間',
    language: 'CSS, React',
    year: '2年後期',
  },
  {
    id: 5,
    title: 'Cool Mobile App',
    description: 'Tinder Colone in React Native',
    imgUrl: images.work4,
    imgMac: images.mac1,
    link: 'http://click.ecc.ac.jp/ecc/letanloc/Natours/',
    github: 'https://github.com/letanlocjp1001/Natours-SCSS',
    tags: ['Mobile App', 'All'],
    team: '個人制作',
    time: '20時間',
    language: 'CSS, React',
    year: '2年後期',
  },
]

const customStyles = {
  content: {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #313bac',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)',
    padding: '1.5rem',
    borderRadius: '10px',
  },
}
Modal.setAppElement('#root')

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [filterWork, setFilterWork] = useState(listWorks)
  const [filterWork2, setFilterWork2] = useState(listWorks)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = (workId) => {
    setModalIsOpen(true)
    const newItem = listWorks.filter((item) => item.id === workId)
    setFilterWork2(newItem)
  }
  const closeModal = () => setModalIsOpen(false)

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
            <div key={work.id}>
              <Tilt>
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

                    <button className='btn' onClick={() => openModal(work.id)}>
                      MORE
                    </button>
                  </div>
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel='More'
                  className='app__flex'
                >
                  {filterWork2.map((work) => (
                    <div key={work.id} className='app__flex'>
                      <div className='modal__left'>
                        <h1 className='head-text modal__left-title'>
                          {work.title}
                        </h1>
                        <div className='app__flex modal__left-text'>
                          <p className='bold-text modal-text'>{work.team}</p>
                          <p className='bold-text'>{work.year}</p>
                        </div>
                        <h5 className='bold-text modal__left-title'>
                          サービス
                        </h5>
                        <p className='p-text'>{work.description}</p>
                        <h5 className='bold-text modal__left-title'>
                          言語・ツール
                        </h5>
                        <p>{work.language}</p>
                      </div>

                      <div className='modal__right'>
                        <img src={work.imgMac} alt={work.title} />
                        <p>{work.time}</p>
                      </div>
                    </div>
                  ))}
                  <button className='btn' onClick={closeModal}>
                    X
                  </button>
                </Modal>
              </Tilt>
            </div>
          )
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')
