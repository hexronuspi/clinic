"use client"
import React, { useState, useEffect } from 'react';
import { FaRegUserCircle, FaRegHospital, FaRegCreditCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTopButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <motion.main
        className="m-4 max-w-4xl px-8 py-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Privacy Policy</h1>

        <section className="mb-8" id="introduction">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            At Kumar's PolyClinic, we are committed to protecting the privacy and confidentiality of our patients' personal information. This privacy policy outlines how we collect, use, disclose, and safeguard the information you provide to us.
          </p>
        </section>

        <section className="mb-8" id="information-collect">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We may collect the following types of personal information from you:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li><FaRegUserCircle className="inline-block mr-2" />Contact Information: Your name, address, email address, phone number, and other contact details.</li>
            <li><FaRegHospital className="inline-block mr-2" />Medical Information: Your medical history, current and past health conditions, medications, allergies, test results, and other health-related information.</li>
            <li><FaRegCreditCard className="inline-block mr-2" />Payment Information: Your billing and payment details, such as credit card or insurance information.</li>
            <li>Website Usage Data: We may collect information about your visits to our website, including your IP address, browser type, and browsing activity.</li>
          </ul>
        </section>

        <section className="mb-8" id="use-information">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Providing Medical Care: To provide you with high-quality medical care, diagnose and treat your conditions, and coordinate your treatment with other healthcare providers.</li>
            <li>Appointment Scheduling: To schedule appointments and communicate with you regarding your appointments and treatment.</li>
            <li>Billing and Payment Processing: To process your payments and submit claims to insurance companies or other third-party payers.</li>
            <li>Quality Improvement: To improve the quality of our services and enhance patient care.</li>
            <li>Research and Analytics: To conduct research and analysis for healthcare purposes, but only in an anonymized and aggregated manner.</li>
            <li>Legal Compliance: To comply with applicable laws, regulations, and legal processes.</li>
          </ul>
        </section>

        <section className="mb-8" id="disclosure-information">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Disclosure of Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We may disclose your personal information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Healthcare Providers: We may share your medical information with other healthcare providers involved in your care, such as specialists, laboratories, or pharmacies.</li>
            <li>Payment Processing: We may share your payment information with third-party payment processors and financial institutions to facilitate billing and payment.</li>
            <li>Legal Requirements: We may disclose your information if required by law, court order, or legal process.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
          </ul>
        </section>

        <section className="mb-8" id="data-security">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8" id="third-party-websites">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Third-Party Websites</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites or services that are not governed by this privacy policy. We are not responsible for the privacy practices or content of those websites or services.
          </p>
        </section>

        <section className="mb-8" id="childrens-privacy">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website and services are not directed towards children under the age of 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8" id="your-rights">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, correct, or request the deletion of your personal information held by us. You can exercise these rights by contacting us using the information provided below.
          </p>
        </section>

        <section className="mb-8" id="changes-policy">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Changes to This Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on our website and encourage you to review it periodically.
          </p>
        </section>

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
      </motion.main>
    </div>
  );
};

export default PrivacyPolicy;
