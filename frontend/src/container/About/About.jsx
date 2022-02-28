import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss'
import { images } from '../../constants'

const abouts = [
  {
    title: 'フロントエンド',
    description:
      '専門学校でWebプログラマーとしての基礎を学んでいます。言語は「HTML5, CSS, JavaScript, TypeScript, SCSS, React.js, Tailwindcss」、ツールはと「Visual StudioCode, Github」を主に用いて作品をしております。',
    imgUrl: images.about01,
  },
  {
    title: 'デザイナー',
    description:
      '私が「Illustrator, Figma, Photoshop, AfterEffects」などのアプリケーションを用いたデザインの制作です。Webデザインの仕事の中でデザインを扱えることは必要とされるシーンによって多彩な表現ができることを目指してスキルアップの勉強をしております。',
    imgUrl: images.about02,
  },
  {
    title: 'UI/UX',
    description:
      '私がいろいろな視点でWEBページを考察し、自ら組み立てていけるようなWEBデザイナーとしてスキルアップしていきたいと考えております。',
    imgUrl: images.about03,
  },
  {
    title: 'アニメーション',
    description:
      '重要な要素を動かすことで興味を引かせたり、飽きずに読み進めてもらうためのきっかけになったり、私が色々なアニメーションを勉強しております。',
    imgUrl: images.about04,
  },
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        できる <span>こと</span>
        <br />
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h5 className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </h5>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
