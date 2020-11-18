import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import '../assets/styles/navbar.css'
import churchLogo from '../assets/images/jdaLogo.png'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <div className="navbar">
      <Link to="/home" className="navbar_title">
        church logo
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times':'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active':'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About JDA <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Live Stream
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-links" onClick={closeMobileMenu}>
            Give Online
          </Link>
        </li>
      </ul>
      {/* <Button /> */}
    </div>
  )
}

export default Navbar
