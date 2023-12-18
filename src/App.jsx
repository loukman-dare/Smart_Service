import { useState } from 'react'
import './App.css'
import NavBAr from './Component/Layout/NavBAr'
import HomeUser from './Component/User/HomeUSer.jsx/HomeUser'
import { Routes, Route } from 'react-router-dom'
import SignUpUser from './Component/User/Auth/SignUpUser.jsx/SignUpUser'
import Footer from './Component/Layout/Footer'
import Login from './Component/User/Auth/LogIn/Login'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <NavBAr />
      <Routes>
        <Route path='/' element={<HomeUser />} />
        <Route path='/signup' element={<SignUpUser />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
