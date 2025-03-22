import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home'

import Navbar from "./components/Navbar.jsx"
import "./components/Navbar.css"
import Contactus from "./Contactus.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Contactus/>
      <div className="faculty">
        <div className="fhead">Faculty</div>
        <div className="fimages">
          
        </div>
      </div>
    </>
  )
}

export default App


