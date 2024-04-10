import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
=======
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
    <App />
    </NextUIProvider>
>>>>>>> 2d1207133c3571fe6ace406159b747164f756796
  </React.StrictMode>,
)
