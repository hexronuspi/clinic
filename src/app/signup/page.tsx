import React from 'react'
import NavBar from '../Components/navbar'
import Footer from '../Components/footer'
import { SignForm } from '../Components/signup'

export default function Signpage() {
  return (
    <main>
      <NavBar/>
        <SignForm/>
        <Footer/>
    </main>
  )
}