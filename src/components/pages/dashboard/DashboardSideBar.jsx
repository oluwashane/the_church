import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'

const DashboardSideBar = () => {
  return (
    <div className="sideBar">
      <div className="content">
        <p>Admin Dashboard</p>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/dashboard/event">Event</Link>
            </li>
            <li>
              <Link to="/dashboard/prayer_request">Prayer</Link>
            </li>
            <li>
              <Link to="/dashboard">Subscribers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default DashboardSideBar
