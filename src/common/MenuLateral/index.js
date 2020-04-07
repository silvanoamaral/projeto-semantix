import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuLateral.scss'

const MenuLateral = () => {
  return <div className="menu">
    <ul>
      <li>
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        > Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/time-data"
        >
          time-data
        </NavLink>
      </li>
    </ul>
  </div>
}

export default MenuLateral