import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from './components/ScrollToTop.jsx';

import ASScroll from "@ashthornton/asscroll";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
