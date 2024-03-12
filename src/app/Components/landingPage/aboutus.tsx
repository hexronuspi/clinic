"use client"
import React, { useState, useEffect } from "react";
import {Card, CardHeader, CardBody, Image, Divider} from "@nextui-org/react";
import { TypewriterEffectSmooth } from "../../../components/ui/typewritter-effect";

export default function AboutUs() {
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    setOrientation(window.innerWidth > 768 ? "vertical" : "horizontal");
  }, []);

  const words1 = [
    {
      text: "Kumar's",
    },
    {
      text: "Polyclinic",
    },
    {
      text: "-",
    },
  ];

  const words2 = [
    {
      text: "Gynecological Care.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (  
    <div className="bg-white-100 min-h-screen pt-6 md:py-12 flex flex-col md:flex-row justify-center items-center">

    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row">
  
      <div className="md:mr-8">
        <h2 className="text-l font-bold text-center m-8">
          <div><TypewriterEffectSmooth words={words1} /></div>
          <div><TypewriterEffectSmooth words={words2} /></div>
        </h2>
        <div className="text-lg text-gray-800 mx-8 mb-4 text-justify">
        
        
        
          <p>
          Dr. Nanda R Kumar is a distinguished infertility specialist and gynecologist in Chembur,
           having <span className="text-blue-400">over 15 years of experience</span>. She serves as a gynecologist at Kumar's Polyclinic,
            a premier gynecological center in the area. Her <span className="text-blue-400">MBBS from Seth G.S. Medical College & K.E.M. Hospital</span>,
             coupled with her membership in the Federation of Obstetric and Gynecological Societies of India,
              underscores her expertise. With a proven track record of fulfilling numerous parenthood dreams,
               she is esteemed as a top gynecologist in Kurla. Renowned for her utilization of innovative techniques 
               and advanced technology, she is revered as the leading ladies' specialist doctor in Sion.
          </p>
        
        
        </div>
        
      </div>
     
      <div className="flex justify-end items-end">
        <Card className="py-2 w-full md:w-3/3">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h3 className="text-tiny uppercase font-bold text-center">Gynecologist</h3>
            <h6 className="font-bold text-large text-center">Dr. Nanda R. Kumar</h6>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-full"
              src="/images/nanda.jpg"
              width={120}
              height={100}
            />
          </CardBody>
        </Card>
      </div>
    </div>
    
  </div>
  );
}