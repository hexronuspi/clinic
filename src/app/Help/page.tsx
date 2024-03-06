import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'

import Map from '../Components/mapApi'
import {ContactUs} from '../Components/form'
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