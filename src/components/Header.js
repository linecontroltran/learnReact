import React from 'react'
import reactLogo from '../images/logo192.png'

export default function Header () {
    return (
    <header>
      <nav className="nav">
    
       <img src={reactLogo} alt="reactlogo" className="nav-logo" />
     
      <ul className="nav-items">
        <li>Prices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     
      </nav>
      </header>
  );
    }

//export default Header