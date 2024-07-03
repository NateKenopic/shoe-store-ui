import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error/Error.jsx'
import Mens from './components/Mens/Mens.jsx'
import Login from './components/Login/Login.jsx'
// import CookieConsent from './components/Cookie-Consent/CookieConsent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/mens',
    element: <Mens />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <CookieConsent /> */}
  </React.StrictMode>
)
