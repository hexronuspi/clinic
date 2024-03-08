"use client"
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../app/Components/navbar';
import Footer from '../app/Components/footer';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main>
      <NavBar/>
<div className='text-center m-8'>
      <motion.div 
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mb-8"
>
  <motion.h1 
    className="text-6xl font-bold text-red-600"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    404
  </motion.h1>
  <motion.p 
    className="text-2xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Page Not Found
  </motion.p>
</motion.div>
<motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <p className="mb-4">The page you are looking for does not exist.</p>
  <motion.p
    className="text-blue-500 underline"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href="/">Go back home</Link>
    
  </motion.p>
</motion.div>
      </div>
      <Footer/>
    </main>
  );
}