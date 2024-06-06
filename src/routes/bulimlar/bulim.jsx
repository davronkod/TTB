import React from 'react'
import './bulim.css'
import { Link } from "react-router-dom"

const bulim = () => {
  return (
    <div className='bulim'><Link to="/">
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

export default bulim