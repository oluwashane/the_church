import React from 'react';
import DashboardSideBar from './DashboardSideBar';
import { Link } from 'react-router-dom';
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="landing">
      {/* <DashboardSideBar/> */}
      <h2>Admin Dashboard</h2>
      <div className="mainDashboard">
        <Link to="/dashboard/event" className="mainCard">
          <img src="" alt=""/>
          <span>Events</span>
        </Link>
        <Link to="/dashboard/prayer_request" className="mainCard">
          <img src="" alt=""/>
          <span>Prayer Requests</span>
        </Link>
      </div>
      <button>signout</button>
    </div>
  )
}

export default Dashboard
