import React from 'react'
import NavBar from '../Components/landingPage/navbar'
import Footer from '../Components/landingPage/footer'
import { SignForm } from '../Components/landingPage/signup'

export default function Signpage() {
  return (
    <main>
      <NavBar/>
        <SignForm/>
        <Footer/>
    </main>
  )
}