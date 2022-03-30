import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>はじめまして、</p>
            <h1 className='p-text'>
              私の長所はチームワークを大切にすることです。専門学校ではチームプロジェク
              トの活動に参加しました。その活動の中で、問題に直面した時、自分一人で解決
              しようとするのではなく、必ず仲間と相談し、一緒に解決してきました。そうす
              ることで、より良い判断ができましたし、仲間との絆も深めることができまし
              た。御社に入社した際も、チームワークを大切にし、より多くの問題を解決して
              いきたいです。
            </h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Front End Developer</p>
          <p className='p-text'>Designer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <img src={images.profile} alt='profile_bg' />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[
        images.react,
        images.sass,
        images.css,
        images.typescript,
        images.redux,
        images.vue,
      ].map((circle, index) => (
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='profile_bg' />
        </div>
      ))}
    </motion.div>
  </div>
)

export default AppWrap(Header, 'home')
