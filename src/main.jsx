import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/styles/global.scss'
import Router from './Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
