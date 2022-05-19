import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const handleLogout = () => {
    // navigate('/login', {
    //   replace: true
    // })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>
            {/* {user?.name} */}
            holis
          </span>
          <button 
            className='nav-item nav-link btn btn-logout'
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}