"use client"
import React, { useState, useEffect } from 'react'
import NavBar from '../Components/landingPage/navbar'
import AboutUs from '../Components/landingPage/aboutus'
import Footer from '../Components/landingPage/footer'
import Gallery from '../Components/landingPage/gallery'
import Testimonial from '../Components/landingPage/testimonials'

export default function LandingPage() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTopButton(true);
      } else {
        setShowBackToTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <NavBar/>
      <AboutUs />
      <Gallery/>
      <Testimonial/>
      {showBackToTopButton && (
        <div className="fixed bottom-8 right-8">
          <button
            className="flex items-center justify-center bg-blue-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={scrollToTop}
          >
            <span className="animate-bounce mr-2">&#8679;</span>
            Back to Top
          </button>
        </div>
      )}
      <Footer/>
    </main>
  )
}