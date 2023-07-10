import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Login from './Components/loginWithLocalStorage/Login'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  </BrowserRouter>
)
