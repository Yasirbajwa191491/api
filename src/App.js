import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Footer from './components/Footer'
import Add from './components/Add'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App