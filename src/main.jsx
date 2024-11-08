import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Signin from './components/Signin.jsx'
import { AuthProvider } from './components/auth.jsx'
import Courses from './components/Courses.jsx'
import Signup from './components/Signup.jsx'
import About from './components/About.jsx'
import Purchases from './components/Purchases.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"signin",
        element:<Signin/>,
        
      },{
        path:"courses",
        element:<Courses/>
      },
      {
        path:"signup",
            element:<Signup/>
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"purchases",
        element:<Purchases/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={route} />
    </AuthProvider>
  </StrictMode>,
)
