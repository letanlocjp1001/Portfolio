import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Params,
} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => (
  <div className='app'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}></Route>
      </Routes>
      <Routes>
        <Route path='/:id/' element={<Params />}></Route>
      </Routes>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </Router>
  </div>
)

export default App
