"use client";
import React from 'react'
import './ContactUs.css'
import HowCanWeHelp from './HowCanWeHelp'
import Address from './Address'
import ContactHeader from './ContactHeader'
import Head from 'next/head';

const ContactUs = () => {
    return (
        <>
        <Head>
          <title>Connect with Realsta | Let’s Talk Gurgaon Commercial Real Estate</title> 
              <meta name="description" content="Have a question or need guidance? Contact Realsta to explore investment opportunities, leasing options, or advisory services in Gurugram’s top commercial micro-markets." />
              <link rel="canonical" href="https://realsta.com/contact-us" />
        </Head>
        <ContactHeader />
        <HowCanWeHelp />
        <Address />
        </>
    )
}

export default ContactUs
