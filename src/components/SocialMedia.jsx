import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://github.com/letanlocjp1001'
        rel='noreferrer'
        target='_blank'
      >
        <AiFillGithub />
      </a>
      <a
        href='https://www.facebook.com/profile.php?id=100015611534207'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebookF />
      </a>
      <a
        href='https://www.instagram.com/?hl=en'
        target='_blank'
        rel='noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
  )
}

export default SocialMedia
