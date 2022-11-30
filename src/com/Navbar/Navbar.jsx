import React from 'react';
import '../Navbar/Navbar.css'
import Snauw from '../images/img/Sinauw.png';
import Globe from '../images/img/globus.png'


function Navbar() {
  return (
    <div className="container">
        <div className="navbar__content">
          <ul>
              <li  className='navbar__active'><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Webinar</a></li>
              <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="navbar__section">
           <img className='navbar__snauw' src={Snauw} alt="png" />
           <h2>Eng</h2>
           <img className='navbar__round' src={Globe} alt="png" />
           <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar;