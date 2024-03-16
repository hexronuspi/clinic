"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calandar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [date, setDate] = React.useState<Date>()
  
  const isDesktop = useMediaQuery({ minWidth: 782 });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const firstName = form.current?.elements.namedItem("first_name") as HTMLInputElement;
    const lastName = form.current?.elements.namedItem("last_name") as HTMLInputElement;
    const email = form.current?.elements.namedItem("user_email") as HTMLInputElement;
    const phoneNumber = form.current?.elements.namedItem("phone_number") as HTMLInputElement;
    const message = form.current?.elements.namedItem("message") as HTMLTextAreaElement;
  
    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      email.value.trim() === "" ||
      phoneNumber.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      toast("Please fill in all the fields.");
      return;
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.value.trim())) {
      toast("Phone number must be a 10-digit number.");
      return;
    }
  
    if (form.current) {
      emailjs
        .sendForm('service_6btzsh9', 'template_kh0hdgc', form.current, {
          publicKey: 'Yt7sKFz0-AyrBsBmj',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            (form.current)?.reset();
            toast("Form successfully submitted! We will get back to you soon.");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };
  
  return (
    <main>
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full ${isDesktop ? 'max-w-2xl' : 'max-w-lg'} mx-auto mt-20`}
      >
        <p className="text-center mb-4">Fill up the form below to send us a message.</p>
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
      <motion.div 
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-4"
>
<div className="flex justify-between space-x-4">
  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
      First Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" name="first_name" />
 
  </div>

  <div className="flex-1">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
      Last Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" name="last_name" />
 
  </div>
  
</div>
<p className="text-gray-500 text-sm">Same as on government ID Card.</p>
</motion.div> </div>
    
        <div className="mb-4">
        <motion.div 
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-4"
>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
            Email Address
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" />
       </motion.div>
        </div>
        <div className="mb-4">
        <motion.div 
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-4"
>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
            Phone Number
          </label>
         
         
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone_number" type="tel" name="phone_number" />
          <p className="text-gray-500 text-sm">Indian Mobile Number (10 Digits)</p>
    
       </motion.div>
        </div>
        <div className="mb-6">
        <motion.div 
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-4"
>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Date
            </label>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <p className="text-gray-500 text-sm">Preferred clinic visit date.</p>
    <p className="text-gray-500 text-sm">(Same day clinic visit must be scheduled before 4pm)</p>
    
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="hidden" name="date" value={date ? format(date, "PPP") : ""} />
    </motion.div>
        </div>
        <div className="mb-6">
        <motion.div 
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-4"
> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Your Message    
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" />
          <p className="text-gray-500 text-sm">If this is a General Question, Please mention, "General" in the message.</p>
    
       </motion.div> </div>
        <div className="flex items-center justify-between">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit"
          >
            Send Message
          </motion.button>
        
        </div>
       
      </form>

    </motion.div>
    </main>
  );}