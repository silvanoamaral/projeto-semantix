import React from 'react'
import { NavLink } from 'react-router-dom'

import './MenuLateral.scss'

import IconLeaf from '../../components/IconLeaf'
import IconGraphic from '../../components/IconGraphic'

const MenuLateral = () => {
  return <div className="menu">
    <ul>
      <li>
        <span>Semantix</span>
      </li>
      <li>
        <NavLink
          exact
          activeClassName="navbar__active"
          className="navbar"
          to="/"
        >
          <IconGraphic />
          Page 1
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="navbar__active"
          className="navbar"
          to="/time-data"
        >
          <IconLeaf />
          Page 2
        </NavLink>
      </li>
    </ul>
  </div>
}

export default MenuLateral