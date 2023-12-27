import { useState } from 'react'
import './App.css'
import NavBAr from './Component/Layout/NavBAr'
import HomeUser from './Component/User/HomeUSer.jsx/HomeUser'
import { Routes, Route } from 'react-router-dom'
import SignUpUser from './Component/User/Auth/SignUpUser.jsx/SignUpUser'
import Footer from './Component/Layout/Footer'
import Login from './Component/User/Auth/LogIn/Login'
import SignupStore from './Component/User/Auth/SignupStore'
import SignupServiceProvider from './Component/User/Auth/SignupServiceProvider'

function App() {
  
  return (
    <>
      <NavBAr />
      <Routes>
        <Route path='/Smart_Service' element={<HomeUser />} />
        <Route path='/Smart_Service/signup' element={<SignUpUser />} />
        <Route path='/Smart_Service/signupStore' element={<SignupStore />} />
        <Route path='/Smart_Service/signup-service-provider' element={<SignupServiceProvider />} />
        <Route path='/Smart_Service/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
