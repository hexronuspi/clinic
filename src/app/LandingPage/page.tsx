import React from 'react'
import NavBar from '../Components/landingPage/navbar'
import AboutUs from '../Components/landingPage/aboutus'
import Footer from '../Components/landingPage/footer'
import Gallery from '../Components/landingPage/gallery'

import Testimonial from '../Components/landingPage/testimonials'
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