import React from 'react'
import churchLogo from '../../../assets/images/theChurchLogo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar_title">
          <div className="sidebar_img">
            <img src={churchLogo} width="50" alt="logo"/>
            <h2>church name</h2>
          </div>
          <i class="fas fa-times" id="closeSidebar"></i>
        </div>

        <div className="sidebar_menu">
          <div className="sidebar_link active_link">
            <i class="fas fa-home"></i>
            <a href="/admin">Dashboard</a>
          </div>

          <h2>Management</h2>
          <div className="sidebar_link">
          <i class="far fa-calendar-alt"></i>
            <a href="/new_event">New Event</a>
          </div>

          <div className="sidebar_link">
            <i class="fas fa-file-alt"></i>
            <a href="/requests">Prayer Requests</a>
          </div>
        </div>

      </div>
  )
}

export default Sidebar