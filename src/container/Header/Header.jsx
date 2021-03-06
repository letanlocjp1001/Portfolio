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
          <span>đ</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>ăŻăăăžăăŚă</p>
            <h1 className='p-text'>
              ç§ăŽéˇćăŻăăźă ăŻăźăŻăĺ¤§ĺăŤăăăă¨ă§ăăĺ°éĺ­Ść Ąă§ăŻăăźă ăă­ă¸ă§ăŻ
              ăăŽć´ťĺăŤĺĺ ăăžăăăăăŽć´ťĺăŽä¸­ă§ăĺéĄăŤç´é˘ăăćăčŞĺä¸äşşă§č§Łćąş
              ăăăă¨ăăăŽă§ăŻăŞăăĺżăäť˛éă¨ç¸čŤăăä¸çˇăŤč§ŁćąşăăŚăăžăăăăăă
              ăăă¨ă§ăăăčŻăĺ¤ć­ăă§ăăžăăăăäť˛éă¨ăŽçľăćˇąăăăă¨ăă§ăăžă
              ăăĺžĄç¤žăŤĺĽç¤žăăéăăăăźă ăŻăźăŻăĺ¤§ĺăŤăăăăĺ¤ăăŽĺéĄăč§ŁćąşăăŚ
              ăăăăă§ăă
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
