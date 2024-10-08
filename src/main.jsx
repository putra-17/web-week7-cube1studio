import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Products from './pages/Products'
import Portfolio from './pages/Portfolio'
import Detail from './pages/Detail'
import Location from './pages/Location'
import Contact from './pages/Contact'
import './index.css'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <Detail />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/location',
        element: <Location />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
