import React from 'react'

import MenuLateral from '../../common/MenuLateral'
import Routes from '../../routes'
import Footer from '../../common/Footer'
import Header from '../../common/Header'

import '../../assets/css/index.scss'

const App = () => {
  return (<>
    <Header />
    <div className="container">
      <MenuLateral />
      <Routes />
    </div>
    <Footer />
  </>)
}

export default App
