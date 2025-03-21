import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom' 

import Navbar from "./components/Navbar.jsx"
import "./components/Navbar.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
