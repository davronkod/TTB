import './aloqa.css'
import { Link } from "react-router-dom"

const aloqa = () => {
  return (
    <div className='aloqalar'><Link to="/">
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

export default aloqa