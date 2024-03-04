import React from 'react'
import NavBar from '../Components/navbar'
import Footer from '../Components/footer'
import { LoginForm } from '../Components/login'

export default function loginPage() {
  return (
    <main>
      <NavBar/>
        <LoginForm/>
        <Footer/>
    </main>
  )
}