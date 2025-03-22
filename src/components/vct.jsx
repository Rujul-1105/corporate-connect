import React from 'react'
import '../components/vct.css'
import { div } from 'framer-motion/client'

const vct = () => {
  return (

    <div className="card">
      <div className="company-photo">
        <img src="../../public/images/backdrop_c1.png" alt="" srcset="" />
      </div>
      <div className="details">
        <h2>Company Name</h2>
        <p>Designation</p>
        <p>Company Description</p>
      </div>
    </div>

  )
}

export default vct
