import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import DetaIl from './pages/DetaIl'
import Notfound from './pages/Notfound'


const App = () => {
  return (
    <div><header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Detail' element={<DetaIl />} />
        <Route path='*' element={<Notfound />} />


      </Routes>
    </header>


    </div >
  )
}

export default App

