import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*StrictMode двічі рендерить компонент, щоб перевірити чи ваш стейт не змінюється*/
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
