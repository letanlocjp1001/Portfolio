import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => (
  <div className='app'>
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <About />
              <Work />
              <Skills />
              <Testimonial />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  </div>
)

export default App
