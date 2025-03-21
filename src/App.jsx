import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vc from './pages/vc'
import Contactus from './Contactus'

import Navbar from "./components/Navbar.jsx"
import "./components/Navbar.css"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/vc' element={<Vc />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
      </Routes>


      {/* Add footer here */}
    </>
  )
}

export default App


