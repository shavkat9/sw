import React from 'react'
import '../Header/Header.css'
import Lady from '../images/img/lady.png'
import Search from '../images/img/search.png'
import Lamp from '../images/img/lamp.png'
import Lamps from '../images/img/lamps.png'
import Ellip from '../images/img/Ellip.png'
import Book from '../images/img/books.png'
import Llady from '../images/img/llady.png'
import Elle from '../images/img/elle.png'
import Eller from '../images/img/eller.png'
import Ellers from '../images/img/ellers.png'
import Ellerss from '../images/img/ellerss.png'
import Text from '../images/img/text.png'


function Header() {
  return (
    <div className='header__main'>
      <div className="header__image">
       <img src={Lady} alt="png" />
       </div>
       <div className="header__texts">
        <h1>Grow Your Skills <br /> To Advance Your <br /> Career Path.</h1>
        <p>We have something big for you who want to level up!</p>
        <img className='header__search' src={Search} alt="png" />
        <input type="text" /> <br />
        <strong>What do you want to learn...</strong>
        <span>Suggestions</span> <br />
        <img className='header__lamp'  src={Lamp} alt="png" /> 
        <img className='header__lamps' src={Lamps} alt="png" />
        <img className='header__ellip' src={Ellip} alt="png" />
        <img className='header__line' src={Lamp} alt="icon" />
        <img className='header__book' src={Book} alt="icon" />
        <button className='header__design'>UI UX Design</button>
        <button className='header__fund'>CSS Fundamental</button>
        <button className='header__desi'>3D Design Illustration</button> <br />
        <button className='header__website'>Website Development</button>
        <button className='header__logo'>Logo Design</button>
        <button className='header__icon'>Icon Design</button>
         <div className="header__group">
             <img className='header__yellow' src={Llady} alt="img"/>
             <img className='header__green' src={Eller} alt="img"/>
             <img className='header__blue' src={Ellers} alt="img"/>
             <img className='header__pink' src={Ellerss} alt="img"/>
             <img className='header__black' src={Elle} alt="img" />
             <img className='header__black__white' src={Text} alt="img" />
       </div>
        
       </div>
    </div>
  )
}

export default Header;