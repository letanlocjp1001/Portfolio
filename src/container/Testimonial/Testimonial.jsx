import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import './Testmonial.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'

const testimonials = [
  {
    name: '金木',
    company: 'NetLixt',
    feedback: 'Awesome',
    imgURL: images.css,
  },
  {
    name: '田中',
    company: 'Amazon',
    feedback: 'Awesome',
    imgURL: images.html,
  },
  {
    name: 'BK',
    company: 'Apple',
    feedback: 'Awesome',
    imgURL: images.sass,
  },
]

const brands = [
  {
    id: 1,
    name: 'Spotify',
    ImgUrl: images.spotify,
  },
  {
    id: 2,
    name: 'Adidas',
    ImgUrl: images.adidas,
  },
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const test = testimonials[currentIndex]

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={test.imgURL} alt='feedback' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={brand.ImgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)
