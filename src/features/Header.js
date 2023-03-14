import React from 'react'
import {Link} from 'react-router-dom'
import Routing from '../component/Routing'

const Header= () => {
  return (
    <div className='bodyBackground'>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Students</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Routing/>
    </div>
    
  )
}

export default Header