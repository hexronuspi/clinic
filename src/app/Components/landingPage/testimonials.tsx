"use client"
import React, {useRef} from "react";
import { useViewport } from "react-viewport-hooks";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import dynamic from 'next/dynamic'

export default function Testimonial() {
  const { vw } = useViewport();
  const isMobile = vw < 640;
  
  const ReactStars = dynamic(() => import('react-stars'), { ssr: false })

  const props = useSpring({ opacity: 1, from: { opacity: 0.5} });

  const list = [
    {
      title: "Anu Bardhan",
      text: "She is polite and patiently listens. Friendly and genuinely cares for her patients. She made me feel that I am in safe hands and helped me recover well.",
      star: 5,
      link: "https://maps.app.goo.gl/EEq1PCaLZnBefKbL8"
    },
    {
      title: "Darshan Thadani",
      text: "Dr. Nanda Kumar is one of the best gynaecologist, she explained all the dos and donts and medical processes which eased our worries. I would highly recommend her for seeking treatments.",
      star: 5,
      link: "https://maps.app.goo.gl/eNpsj6ZfQgVHRPXB8"
    },
    {
      title: "Apurva Jadhav",
      text: "Kumar's Polyclinic is the best Gynecologist Center in Chembur Mumbai. Dr nanda kumar is the best ganyaclogist.",
      star: 5,
      link: "https://maps.app.goo.gl/8J4UDdigrUB8NYhq9"
    },
    {
      title: "Sashanka Nayak",
      text: "Best doctor, she handled all complications during my wife's journey of pregnancy very well. very patient to listen problems and gives proper medication for remedy. Dr. Nanda's service is very much affordable and she takes cares of every small thing for patients comfort. Thanks a lot doctor.",
      star: 5,
      link: "https://maps.app.goo.gl/bqaPFcMH9jjgN1wv6"
    
    },
    {
      title: "RAMASUBRAMANIAM R",
      text: "Dr. Mrs Nanda R Kumar Gives Best Medical Treatment To Her Patients. She Explains The Problems In A Very Understandable Way And Gives Courage To The Patients. The Medicines Recommended By Her Proved Very Effective Without Any Side Effects. I Wish To Recommend Her To My Friends. My Rating For Her Is Very Excellent.",
      star: 5,
      link: "https://maps.app.goo.gl/SvteCANoQYzYkoHG7"
    },
    {
      title: "Dr Arpita Thamba",
      text: "Dr Nanda  seems like a very experienced doctor, she explained everything in a very simplified manner. She was extremely patient with me . I would definitely recommend her.",
      star:5,
      link: "https://maps.app.goo.gl/ydhkW5HHdQ8h7oWt5"
    
    },
    {
      title: "Aarti Patel",
      text: "Dr. Nanda R Kumar is an exceptional gynecologist, providing personalized care and addressing all concerns with expertise and compassion. She is a highly skilled and compassionate gynecologist. I highly recommend her for anyone seeking top-notch gynecological care.",
      star: 5,
      link: "https://maps.app.goo.gl/NzNGnTomoDnk9WJT7"
   
    },
    {
      title: "Harshalee Lokhande",
      text: "Very good and friendly doctor. She made us comfortable. She is very concerning and assuring of taking care of patients health giving relief at very first visit. I definitely recommend this Doctor.",
      star: 5,
      link: "https://maps.app.goo.gl/93vyDrGG32YhqrnTA"
    
    },
  ];

  return (
    <div className="p-4 mt-10">
    <animated.h1 style={props} className="text-4xl text-center mb-4">Testimonials</animated.h1>
  
    <p className="m-4 text-justify text-lg leading-relaxed">At Kumar's Polyclinic, experience heartfelt testimonials from our patients. Dr. Nanda Kumar, a renowned gynecologist, is praised for her polite and attentive care, ensuring safety and support.</p> <div className={`grid gap-4 ${isMobile ? "grid-cols-2" : "sm:grid-cols-3 lg:grid-cols-4"}`}>
  
      {list.slice(0, isMobile ? 4 : list.length).map((item, index) => (
        <Link href={item.link || ""} key={index} target="blank">
        
            <Card shadow="sm" isPressable>
              <CardBody className="p-4" style={{ height: "250px" }}>
                <p className="text-justify">{item.text}</p>
              </CardBody>
              <CardFooter className="text-small text-center">
                <b>{item.title}</b>    
              </CardFooter>
              <div className="flex m-4">
                <b className="justify-right">
                  <ReactStars 
                    count={item.star} 
                    size={18} 
                    color1={'#ffd700'} 
                  />
                </b>
              </div>
            </Card>
        
        </Link>
      ))}
    </div>
  </div>

);
}