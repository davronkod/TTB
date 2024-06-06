import React from 'react'
import './main.css'
import { Link } from "react-router-dom"

const bosh = () => {
  return (
    <div className='bosh'>

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
      </Link>

    </div>
  )
}

export default bosh