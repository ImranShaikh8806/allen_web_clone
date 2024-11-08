import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
