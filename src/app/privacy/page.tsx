"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import NavBar from "../Components/landingPage/navbar";
import Footer from "../Components/landingPage/footer";
import PrivacyPolicy from "../Components/landingPage/privacy";

export default function App() {
 
    return (
        <main>
            <NavBar/>
            <PrivacyPolicy/>
            <Footer/>
        </main>
    );
}