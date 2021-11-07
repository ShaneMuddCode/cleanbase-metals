// import { faBorderNone } from '@fortawesome/free-solid-svg-icons' TODO review/remove
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarTop = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1 className='logo'>
          <NavLink
            activeStyle={{ textDecoration: 'none' }}
            activeClassName='active'
            to='/'
          >
            CleanBase
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{ textDecoration: 'none' }}
                activeClassName='active'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/focus'>Focus</NavLink>
            </li>
            <li>
              <NavLink to='/map'>Map</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavbarTop
