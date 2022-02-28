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
              私のモットーは「感謝気持ちを向上心に」です。このモットーは私が来日から続けている日本の学校とアルバイトで身に付きました。例えば、アルバイトを始めた頃、店長や先輩方から、丁寧に仕事を教えて頂き、また様々なフォローをして頂きました。私は感謝の気持ちと同時に「店長に近づこう！」という向上心も持つようになり、お客様はもちろん、社員の方やアルバイト仲間が何かを求めているかを考えて行動するようにしました。今までアルバイトの新人教育を任せていただけるようになりました。今後もこの精神を忘れずに仕事に取り組みたいと思います
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
