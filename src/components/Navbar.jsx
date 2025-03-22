import React from 'react'
import logocc from '../assets/logocc.png'
import logoiit from '../assets/logoiit.png'

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <a href="/"><div><img className="logoccimg" src={logocc} alt="logocc" /></div></a>
        <div className='flex flex-row gap-10'>
          <div className="links flex flex-row gap-4">
            <div><a href="/vc">Visiting companies</a></div>
            <div><a href="#">Gallery</a></div>
            <div><a href="#">Contact Us</a></div>
          </div>
          <a href="#"><img className='logoiitimg' src={logoiit} alt="logoiit" /></a>
          {/* <div className="logoiit"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
