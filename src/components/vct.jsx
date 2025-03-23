import React from 'react'
import '../components/vct.css'
import { div } from 'framer-motion/client'

const vct = (prop) => {
  return (

    <div className="card">
      <div className="company-photo">
        <img src={prop.pic} alt="" srcset="" />
      </div>
      <div className="details">
        <h2>{prop.c_name}</h2>
        <p>{prop.desig}</p>
        <p>{prop.desc}</p>
      </div>
    </div>

  )
}

export default vct
