import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import churchLogo from '../../../assets/images/theChurchLogo.png'

const Nav = () => {
  // active only on mobile view
  const [displayNav, setDisplayNav] = useState(true);

  function showMenu() {
    setDisplayNav(!displayNav);
  }

  return (
    <>
    <nav className="dashNavbar">
      <div className="nav_icon" onClick={showMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="logout">
        <button>Sign out</button>
      </div>
    </nav>
    {/* sidebar  */}
    <div className={displayNav ? "sidebar" : "sidebar sidebar_responsive"}>
        <div className="sidebar_title">
          <div className="sidebar_img">
            <img src={churchLogo} width="50" alt="logo"/>
            <h2>church name</h2>
          </div>
          <i className="fas fa-times" id="closeSidebar" onClick={showMenu}></i>
        </div>

        <div className="sidebar_menu">
          <div className="sidebar_link active_link">
            <i className="fas fa-home"></i>
            <Link to="/admin">Dashboard</Link>
          </div>

          <h2>Management</h2>
          <div className="sidebar_link">
          <i className="far fa-calendar-alt"></i>
            <Link to="/new_event">New Event</Link>
          </div>

          <div className="sidebar_link">
            <i className="fas fa-file-alt"></i>
            <Link to="/requests">Prayer Requests</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Nav
