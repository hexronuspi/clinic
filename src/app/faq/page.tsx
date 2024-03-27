"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaRegClock, FaRegQuestionCircle, FaRegCreditCard, FaRegIdBadge, FaRegHospital, FaUserShield } from 'react-icons/fa';
import NavBar from "../Components/landingPage/navbar";
import Footer from "../Components/landingPage/footer";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function App() {
  return (
    <main>
      <NavBar/>
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-900 my-8">
          Frequently Asked Questions
        </h2>
        <Accordion variant="shadow">
          <AccordionItem key="1" title={<div><FaRegClock className="mr-2" />What are your operating hours?</div>}>
            Our clinic is open from 9am to 5pm from Monday to Friday. We are closed on weekends and public holidays.
          </AccordionItem>
          <AccordionItem key="2" title={<div><FaRegQuestionCircle className="mr-2" />Do I need to make an appointment?</div>}>
            Yes, we encourage you to make an appointment to ensure that you can be seen promptly. Walk-ins are also welcome, but there may be a wait.
          </AccordionItem>
          <AccordionItem key="3" title={<div><FaRegCreditCard className="mr-2" />What insurance do you accept?</div>}>
            We accept most major insurance plans. Please contact us to confirm whether we accept your specific insurance.
          </AccordionItem>
          <AccordionItem key="4" title={<div><FaRegIdBadge className="mr-2" />What should I bring to my first appointment?</div>}>
            Please bring your identification, insurance card, and any relevant medical records or medications.
          </AccordionItem>
          <AccordionItem key="5" title={<div><FaUserShield className="mr-2" />What is your privacy policy?</div>}>
            We are committed to protecting the privacy of our patients. We collect, use, and safeguard your information in accordance with our  <Link href="/privacy"><span className="text-blue-400">privacy policy</span></Link>.
          </AccordionItem>
          <AccordionItem key="6" title={<div><FaRegHospital className="mr-2" />What services do you offer?</div>}>
            We offer a wide range of medical services, please visit <Link href="/Services"><span className="text-blue-400">services</span></Link> section for more details.
          </AccordionItem>
        </Accordion>
      </motion.div>
      <Footer/>
    </main>
  );
}