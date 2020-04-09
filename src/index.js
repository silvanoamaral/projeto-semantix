import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './view/App'
import Footer from './common/Footer'
import Header from './common/Header'
import History from './helpers/history'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
document.getElementById('root'))