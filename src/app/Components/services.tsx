"use client"
import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";



export default function Services() {
 
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="col-span-2 text-4xl text-center mb-4"
      >
        Our Services
      </motion.h1>
      <p className="col-span-2 text-center text-xl text-gray-400 leading-relaxed">
        List of Services offered by our clinic.
      </p>
     
      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Cervical Cancer</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Causes:</h3>
            <p className="mb-4 text-gray-600 text-justify">
              99% of cervical cancer cases are caused by the Human Papillomavirus (HPV), specifically strains such as Mumam Rapilloma virus.
            </p>
            <h3 className="text-xl mb-2 font-semibold">Prevention:</h3>
            <p className="mb-4 text-gray-600 text-justify">
              HPV vaccination is highly effective in preventing cervical cancer.
            </p>
            <h2 className="text-2xl mb-3 font-bold">Services Offered</h2>
            <h3 className="text-xl mb-2 font-semibold">Screening for Cervical Cancer</h3>
            <p className="text-lg mb-2 font-semibold">Methods:</p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Pap smear/ Pap test</li>
              <li>HPV testing</li>
              <li>Cervical Cancer Treatment</li>
            </ul>
            <p className="text-gray-600 text-justify">
              Comprehensive treatment options for cervical cancer, tailored to individual needs.
            </p>
          </div>
        </CardBody>
      </Card>

      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Obstetrics Service</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Services Offered:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Normal Delivery</li>
              <li>Caesarean Delivery</li>
              <li>High Risk Delivery</li>
              <li>Termination of Pregnancy</li>
              <li>Medical Termination of Pregnancy</li>
              <li>Irregular Period</li>
              <li>PV Bleeding</li>
              <li>Vaginal Itching</li>
              <li>PCODS</li>
              <li>Ectopic Pregnancy</li>
            </ul>
          </div>
        </CardBody>
      </Card>

      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Gynaecology Service</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Services Offered:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Hysterectomy </li>
              <li>Hysteroscopy</li>
              <li>Oophorectomy</li>
              <li>Hystectomy</li>
              <li>Cystocele, Rectocele repair</li>
            </ul>
          </div>
        </CardBody>
      </Card>

      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Contraception Service</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Services Offered:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Tuballiqarion </li>
              <li>Vasectomy</li>
              <li>Inqueable contraception</li>
              <li>Oral Pills contraception</li>
              <li>Emergency Contraception</li>
              <li>Cu-T insertion and excision</li>
            </ul>
          </div>
        </CardBody>
      </Card>

      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Counseling Service</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Services Offered:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Premarital and Postmarital Counseling </li>
              <li>Prepuberty Counseling</li>
              <li>Contraceptive Counseling</li>
            </ul>
          </div>
        </CardBody>
      </Card>

      <Card className="shadow-lg border rounded-md">
        <CardBody className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-600 bg-blue-100 p-2 rounded-lg shadow-lg">Vaccination Service</h2>
          <div>
            <hr />
            <h3 className="text-xl mb-2 font-semibold">Services Offered:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>HPV </li>
              <li>Hepatitis-B</li>
              <li>T.T.</li>
              <li>MMR</li>
              <li>Influenza</li>
              <li>DT</li>
              <li>Typhoid</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
