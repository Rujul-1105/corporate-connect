import React from 'react'
import logocc from '../assets/logocc2.png'
import logoiit from '../assets/logoiit2.png'

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <a href="#"><div><img  className="logoccimg" src={logocc} alt="logocc"/></div></a>
        <div className="links">
          <div><a href="#">Visiting companies</a></div>
          <div><a href="#">Gallery</a></div>
          <div><a href="#">Contact Us</a></div>
          <a href="#"><img className='logoiitimg' src={logoiit} alt="logoiit" /></a>
        </div>
        {/* <div className="logoiit"></div> */}
      </div>
    </div>
  )
}

export default Navbar
