import React from 'react'

import MenuLateral from '../../common/MenuLateral'
import Routes from '../../routes'

import './App.scss'

const App = () => {
  return (
    <div className="container">
      <MenuLateral />
      <Routes />
    </div>
  )
}

export default App
