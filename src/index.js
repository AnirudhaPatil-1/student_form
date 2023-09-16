import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

import {AppProvider} from './context.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
