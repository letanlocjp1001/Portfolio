import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app__flex'>
          <Component />

          <div className='copyright'>
            <h3 className='p-text'>2022 LE TAN LOC</h3>
            <h3 className='p-text'>ECC コンピュータ専門学校</h3>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }

export default AppWrap
