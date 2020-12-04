import React from 'react'

const Nav = () => {
  return (
    <nav className="dashNavbar">
      <div className="nav_icon">
        <i class="fas fa-bars"></i>
      </div>
      <div className="logout">
        <button>Sign out</button>
      </div>
    </nav>
  )
}

export default Nav
