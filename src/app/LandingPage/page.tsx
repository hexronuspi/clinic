import React from 'react'
import NavBar from '../Components/navbar'
import AboutUs from '../Components/aboutus'
import Footer from '../Components/footer'
import './index.css'
import Gallery from '../Components/gallery'

import Testimonial from '../Components/testimonials'
export default function LandingPage() {
  return (
    <main>
      <NavBar/>
        <AboutUs />
        <Gallery/>
        <Testimonial/>
        <Footer/>
    </main>
  )
}