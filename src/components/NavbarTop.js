import React from 'react'
import { Link } from 'react-router-dom'

const NavbarTop = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 className='logo'>
          <Link style={{ textDecoration: 'none' }} to='/'>
            CleanBase
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/focus'>Focus</Link>
            </li>
            <li>
              <Link to='/map'>Map</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavbarTop
