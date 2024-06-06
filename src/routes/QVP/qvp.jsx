import React from 'react'
import './qvp.css'
import { Link } from "react-router-dom"

const qvp = () => {
  return (
    <div className='qvp'>
      <Link to="/">
      Bosh
    </Link>
      <Link to="/medic">
        Shifokorlar
      </Link>
      <Link to="/departments">
        Bulimlar
      </Link>
      <Link to="/news">
        Yangiliklar
      </Link>
      <Link to="/vacansy">
        Bush
      </Link>
      <Link to="/QVP">
        Qvp
      </Link>
      <Link to="/contact">
        Aloqa
      </Link></div>
  )
}

export default qvp