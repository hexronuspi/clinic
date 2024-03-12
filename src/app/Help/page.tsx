import React from 'react'
import Navbar from '../Components/landingPage/navbar'
import Footer from '../Components/landingPage/footer'

import Map from '../Components/landingPage/mapApi'
import {ContactUs} from '../Components/landingPage/form'
export default function Help() {
  return (
    <main>
      <Navbar/>
      <ContactUs/>
      <Map/>
        <Footer/>
    </main>
  )
}