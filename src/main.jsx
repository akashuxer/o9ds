import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// o9ds library styles must load BEFORE index.css so the website's overrides win.
// Web fonts must load first so @font-face is registered before any rule
// (including --o9-font-family in tokens) tries to resolve o9Sans / NotoSans.
import '@o9ds/assets/fonts/css'
import '@o9ds/styles/css'
import '@o9ds/assets/o9con/css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
