import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path="/project" element={<Projects/>}/>
    </Routes>
{/* <Contact/> */}
    </>
  )
}

export default App
