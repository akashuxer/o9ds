import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Arvo library styles must load BEFORE index.css so the website's overrides win.
// Web fonts must load first so @font-face is registered before any rule
// (including --o9-font-family in tokens) tries to resolve o9Sans / NotoSans.
import '@arvo/assets/fonts/css'
import '@arvo/styles/css'
import '@arvo/assets/o9con/css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
