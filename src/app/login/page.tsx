import React from 'react'
import NavBar from '../Components/landingPage/navbar'
import Footer from '../Components/landingPage/footer'
import { LoginForm } from '../Components/landingPage/login'

export default function loginPage() {
  return (
    <main>
      <NavBar/>
        <LoginForm/>
        <Footer/>
    </main>
  )
}